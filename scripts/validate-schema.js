#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Phase 1B schema validator.
 *
 * Approach:
 *  1. Spawn `next start` on localhost:3000 (assumes `next build` already ran).
 *  2. Poll the root URL with backoff until it responds (max 30s).
 *  3. For each of the 16 known routes, fetch the HTML.
 *  4. Extract every <script type="application/ld+json"> block via regex.
 *  5. JSON.parse each block — any parse error is a hard failure.
 *  6. Validate required fields per @type.
 *  7. Print a summary; exit 1 on any failure.
 *
 * No external deps. Node 20+.
 */

const { spawn } = require("child_process");
const http = require("http");
const net = require("net");

const PORT = Number(process.env.PORT || 3000);
const HOST = "127.0.0.1";
const BASE = `http://${HOST}:${PORT}`;

const ROUTES = [
  "/",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/consulting",
  "/property",
  "/fashion",
  "/yachts",
  "/auto",
  "/coaching",
  "/consulting/business-process",
  "/consulting/strategy",
  "/consulting/project-management",
  "/consulting/supply-chain",
  "/consulting/commercial-services"
];

const REQUIRED_FIELDS = {
  Organization: ["name", "url", "logo"],
  WebSite: ["name", "url"],
  LocalBusiness: ["name", "address", "telephone"],
  Service: ["name", "serviceType", "provider"],
  BreadcrumbList: ["itemListElement"],
  WebPage: ["@context", "@type", "name"],
  AboutPage: ["@context", "@type", "name"],
  ContactPage: ["@context", "@type", "name"],
  CollectionPage: ["@context", "@type", "name"]
};

function fetchText(url) {
  return new Promise((resolve, reject) => {
    const req = http.get(url, (res) => {
      if (res.statusCode && res.statusCode >= 400) {
        reject(new Error(`${url} -> HTTP ${res.statusCode}`));
        return;
      }
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    });
    req.on("error", reject);
    req.setTimeout(10_000, () => {
      req.destroy(new Error(`timeout: ${url}`));
    });
  });
}

async function waitForServer(maxMs = 30_000) {
  const start = Date.now();
  let delay = 200;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    try {
      await fetchText(`${BASE}/`);
      return;
    } catch (err) {
      if (Date.now() - start > maxMs) {
        throw new Error(`Server did not become ready within ${maxMs}ms: ${err.message}`);
      }
      await new Promise((r) => setTimeout(r, delay));
      delay = Math.min(delay * 1.5, 1500);
    }
  }
}

function extractJsonLdBlocks(html) {
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  const blocks = [];
  let m;
  while ((m = re.exec(html)) !== null) {
    blocks.push(m[1].trim());
  }
  return blocks;
}

function missingFields(entity) {
  const type = Array.isArray(entity["@type"]) ? entity["@type"][0] : entity["@type"];
  const required = REQUIRED_FIELDS[type];
  if (!required) return [];
  const missing = [];
  for (const field of required) {
    if (entity[field] === undefined || entity[field] === null || entity[field] === "") {
      missing.push(field);
    } else if (field === "itemListElement" && !Array.isArray(entity[field])) {
      missing.push(`${field} (not array)`);
    } else if (field === "itemListElement" && entity[field].length < 1) {
      missing.push(`${field} (empty)`);
    }
  }
  return missing;
}

function validateEntity(entity, route, errors, counter) {
  if (entity && typeof entity === "object" && entity["@graph"] && Array.isArray(entity["@graph"])) {
    for (const sub of entity["@graph"]) validateEntity(sub, route, errors, counter);
    return;
  }
  if (!entity || typeof entity !== "object" || !entity["@type"]) return;
  counter.n++;
  const missing = missingFields(entity);
  if (missing.length > 0) {
    const type = Array.isArray(entity["@type"]) ? entity["@type"][0] : entity["@type"];
    errors.push(`${route} :: ${type} missing required field(s): ${missing.join(", ")}`);
  }
}

async function validateRoute(route) {
  const html = await fetchText(`${BASE}${route}`);
  const blocks = extractJsonLdBlocks(html);
  const errors = [];
  let schemaCount = 0;

  for (let i = 0; i < blocks.length; i++) {
    const raw = blocks[i];
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (err) {
      errors.push(`${route} :: JSON.parse failed on block #${i + 1}: ${err.message}`);
      continue;
    }
    const entities = Array.isArray(parsed) ? parsed : [parsed];
    const counter = { n: 0 };
    for (const entity of entities) {
      validateEntity(entity, route, errors, counter);
    }
    schemaCount += counter.n;
  }

  if (blocks.length === 0) {
    errors.push(`${route} :: no JSON-LD blocks found`);
  }

  return { route, schemaCount, errors };
}

function isPortInUse(port) {
  return new Promise((resolve) => {
    const tester = net.createServer();
    tester.once("error", (err) => {
      if (err && err.code === "EADDRINUSE") resolve(true);
      else resolve(false);
    });
    tester.once("listening", () => {
      tester.close(() => resolve(false));
    });
    tester.listen(port, HOST);
  });
}

async function main() {
  if (await isPortInUse(PORT)) {
    console.error(
      `[validate-schema] port ${PORT} is already in use on ${HOST}. Stop the other process (or set PORT=xxxx) and try again.`
    );
    process.exitCode = 1;
    return;
  }
  console.log(`[validate-schema] starting next on ${BASE}`);
  const child = spawn("npx", ["next", "start", "-p", String(PORT)], {
    cwd: process.cwd(),
    shell: true,
    stdio: ["ignore", "pipe", "pipe"],
    env: { ...process.env }
  });

  let childExited = false;
  child.on("exit", () => {
    childExited = true;
  });
  // Surface fatal server output for debugging; otherwise silence it.
  child.stderr.on("data", (buf) => {
    const text = buf.toString();
    if (/error/i.test(text)) process.stderr.write(`[next] ${text}`);
  });

  const cleanup = () => {
    if (childExited) return;
    try {
      if (process.platform === "win32") {
        spawn("taskkill", ["/pid", String(child.pid), "/f", "/t"], { shell: true });
      } else {
        child.kill("SIGTERM");
      }
    } catch {
      // ignore
    }
  };

  process.on("SIGINT", () => {
    cleanup();
    process.exit(130);
  });

  try {
    await waitForServer();
    console.log(`[validate-schema] server ready, validating ${ROUTES.length} routes`);

    const results = [];
    for (const route of ROUTES) {
      try {
        const r = await validateRoute(route);
        results.push(r);
        const status = r.errors.length === 0 ? "ok" : "FAIL";
        console.log(
          `  ${status.padEnd(4)} ${route.padEnd(40)} ${r.schemaCount} schema(s)`
        );
      } catch (err) {
        results.push({ route, schemaCount: 0, errors: [`${route} :: ${err.message}`] });
        console.log(`  FAIL ${route} — ${err.message}`);
      }
    }

    const allErrors = results.flatMap((r) => r.errors);
    const totalSchemas = results.reduce((a, r) => a + r.schemaCount, 0);

    if (allErrors.length > 0) {
      console.error("\n[validate-schema] FAILED");
      for (const e of allErrors) console.error(`  - ${e}`);
      process.exitCode = 1;
    } else {
      console.log(
        `\n[validate-schema] OK — ${totalSchemas} schemas validated across ${ROUTES.length} routes`
      );
    }
  } catch (err) {
    console.error(`[validate-schema] fatal: ${err.message}`);
    process.exitCode = 1;
  } finally {
    cleanup();
  }
}

main();
