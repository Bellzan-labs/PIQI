# Website Setup Blueprint

Step-by-step guide to create a new website using this architecture:
**Astro 6 + Tailwind CSS 4 + TypeScript + Decap CMS + Vercel** (tech stack is swappable — these are the defaults). This blueprint is designed to be followed by developers of all levels, with detailed explanations and rationale for each step. By the end, you'll have a fully functional website with a modern tech stack, ready for content creation and deployment.

---

## Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [Install GitHub Copilot](#2-install-github-copilot)
3. [Scaffold the Astro Project](#3-scaffold-the-astro-project)
4. [Create the Project Structure](#4-create-the-project-structure)
5. [Configure Tailwind CSS 4](#5-configure-tailwind-css-4)
6. [Configure the Content Layer](#6-configure-the-content-layer)
7. [Set Up Decap CMS](#7-set-up-decap-cms)
8. [Create & Connect a GitHub Repository](#8-create--connect-a-github-repository)
9. [Deploy to Vercel](#9-deploy-to-vercel)
10. [Post-Setup Checklist](#10-post-setup-checklist)

---

## 1. Prerequisites

> **Summary:** Before starting, you need three tools installed on your machine: Node.js (the JavaScript runtime that powers Astro), Git (version control — tracks changes and syncs with GitHub), and a code editor. These are industry-standard tools used by every web developer.

### Install Node.js 22

Node.js runs JavaScript outside the browser. Astro and all build tools depend on it.

1. Go to https://nodejs.org/ and download the **LTS** version (24.x)
2. Run the installer, accept defaults
3. Verify in a terminal:
   ```bash
   node --version    # Should show v24.x.x
   npm --version     # Should show 10.x.x or higher
   ```

### Install Git

Git tracks every change you make to your code and enables collaboration via GitHub.

1. Go to https://git-scm.com/downloads and download for your OS
2. Run the installer, accept defaults
3. Configure your identity (use the same email you'll use for GitHub):
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```
4. Verify:
   ```bash
   git --version    # Should show git version 2.x.x
   ```

### Install VS Code (recommended)

VS Code is a free code editor with excellent Astro and Tailwind support.

1. Download from https://code.visualstudio.com/
2. Install these extensions (click Extensions icon in sidebar, search by name):
   - **Astro** — syntax highlighting, IntelliSense for `.astro` files
   - **Tailwind CSS IntelliSense** — autocomplete for Tailwind classes
   - **Prettier** — auto-formatting
   - **GitHub Copilot** — AI-powered code completion and chat

---

## 2. Install GitHub Copilot

> **Summary:** GitHub Copilot is an AI coding assistant that helps you write code, debug issues, and manage your project. It integrates into VS Code and can access tools like file editing, terminal commands, and web search. Think of it as a senior developer sitting next to you, ready to help with coding questions and suggestions.

### Install Copilot

1. Install the **GitHub Copilot** extension in VS Code:
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
   - Search for "GitHub Copilot"
   - Install the official GitHub extension
2. Sign in with your GitHub account (Copilot requires an active GitHub account or subscription)
3. If you don't have a GitHub account, create one at https://github.com/

### First-Time Setup

Once Copilot is installed:

1. **Open your project folder**: Use `File > Open Folder` and navigate to your project directory
2. **Create a .AGENT.md or .instructions.md file** in the project root — this file provides context to Copilot about your project:
   ```markdown
   # Project Name — Copilot Instructions

   ## Project Overview
   Brief description of the site and its purpose.

   ## Key Tech
   Astro 6 + Tailwind CSS 4 + TypeScript strict. Deployed on Vercel.

   ## Conventions
   - Use .astro files, no React/Vue
   - Tailwind CSS exclusively for styling
   - Semantic HTML with ARIA labels
   - Test with `npm run dev` before `npm run build`
   ```
3. Copilot reads instruction files automatically and uses them as context in conversations

### Key Copilot Features

| Feature | What It Does |
|---------|-------------|
| **Chat** | Open Copilot Chat (Ctrl+Shift+I), ask questions, request code changes, debug errors |
| **Inline completion** | Start typing code and Copilot suggests completions (`Tab` to accept) |
| **File editing** | Request changes and Copilot will edit files directly (with your approval) |
| **Terminal** | Copilot can suggest terminal commands and explain them |
| **@symbols** | Reference files with `@filename`, get variable definitions, test suggestions |
| **Slash commands** | Use `/explain`, `/fix`, `/test`, `/optimize` for specific tasks |

### Copilot Settings & Customization

Copilot works best with:
- **VS Code Settings**: Search "Copilot" in settings to adjust suggestion frequency, chat behavior
- **Instruction files**: `.instructions.md`, `.agent.md` files in your project root provide project context
- **GitHub connection**: Copilot uses your GitHub account and can access your repos
- These settings are managed in VS Code's Settings UI and automatically applied

---

## 3. Scaffold the Astro Project

> **Summary:** Astro is a modern web framework optimized for content-heavy sites (blogs, marketing, docs). It generates static HTML by default (fast, SEO-friendly) but supports server-side rendering when needed. We use it because it's fast, simple, and doesn't force you to use React or Vue — you write `.astro` files that look like HTML with superpowers.

### Create the project

Open a terminal in the parent folder where you want the project (e.g., `C:\Projects\`):

```bash
npm create astro@latest my-site-name
```

When prompted:
- **Template**: Empty project
- **Install dependencies**: Yes
- **TypeScript**: Strict
- **Git**: Yes

### Install dependencies

Navigate into your project and install the full dependency set:

```bash
cd my-site-name

npm install astro@^6.0.4 @astrojs/vercel@^10.0.0 @astrojs/sitemap@^3.7.1 tailwindcss@^4.2.1 @tailwindcss/vite@^4.2.1 sharp@^0.34.5 dotenv@^17.3.1

npm install -D @tailwindcss/typography@^0.5.19
```

**What each package does:**

| Package | Purpose |
|---------|---------|
| `astro` | The framework itself — builds your site |
| `@astrojs/vercel` | Adapter that makes Astro work with Vercel's hosting |
| `@astrojs/sitemap` | Auto-generates sitemap.xml for SEO |
| `tailwindcss` + `@tailwindcss/vite` | Utility-first CSS framework, integrated via Vite |
| `@tailwindcss/typography` | Beautiful default styles for Markdown/prose content |
| `sharp` | Image optimization (WebP conversion, resizing) |
| `dotenv` | Loads environment variables from `.env` file |

### Configure Astro

Replace `astro.config.mjs` with:

```javascript
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://YOUR-PROJECT.vercel.app',  // ← Replace with your Vercel URL
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: [],
    quality: 75,
  },
  integrations: [sitemap()],
});
```

### Configure TypeScript

Replace `tsconfig.json` with:

```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"]
}
```

### Set Node version

Add to `package.json` (inside the top-level object):

```json
"engines": {
  "node": "22.x"
}
```

### Verify

```bash
npm run dev
```

Open http://localhost:4321 — you should see the Astro welcome page.

---

## 4. Create the Project Structure

> **Summary:** A consistent folder structure makes the project navigable for everyone. This layout separates concerns: pages (routes), components (reusable UI), layouts (page shells), content (Markdown articles), data (structured TypeScript objects), and assets (images that get optimized at build time). Public files are served as-is; src files are processed by the build system.

Create these folders:

```bash
mkdir -p src/assets/images
mkdir -p src/components
mkdir -p src/content/posts
mkdir -p src/data
mkdir -p src/layouts
mkdir -p src/pages/api
mkdir -p src/styles
mkdir -p public/fonts
mkdir -p public/uploads
mkdir -p public/admin
```

**What each folder is for:**

| Folder | Purpose |
|--------|---------|
| `src/assets/images/` | Images that Astro optimizes (auto WebP, resizing) |
| `src/components/` | Reusable `.astro` components (Header, Footer, Card, etc.) |
| `src/content/posts/` | Markdown articles — the CMS writes here |
| `src/data/` | TypeScript data files (categories, tags, navigation items) |
| `src/layouts/` | Page shells (Layout.astro wraps every page with head, nav, footer) |
| `src/pages/` | Each file = a route. `index.astro` → `/`, `about.astro` → `/about` |
| `src/pages/api/` | Server-side API endpoints (payments, webhooks) |
| `src/styles/` | Global CSS file with Tailwind imports and theme |
| `public/fonts/` | Self-hosted web fonts (WOFF2 format) |
| `public/uploads/` | CMS media uploads |
| `public/admin/` | Decap CMS admin interface config |

---

## 5. Configure Tailwind CSS 4

> **Summary:** Tailwind CSS is a utility-first CSS framework — instead of writing custom CSS classes, you compose styles directly in HTML using class names like `bg-green-600 text-white p-4`. Version 4 introduces a new approach: all configuration lives in your CSS file using `@theme` blocks, not in a separate `tailwind.config.js`. This means zero config files — just CSS.

Create `src/styles/global.css`:

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";

@theme {
  /* Brand colors — replace with your own */
  --color-brand: #006837;
  --color-brand-light: #74c600;
  --color-brand-dark: #004d29;

  /* Neutral palette */
  --color-surface: #fef4ec;
  --color-text: #423224;
  --color-text-dark: #2e2319;

  /* Typography — replace with your chosen fonts */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-display: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
```

**How to use these in your HTML:**
- `bg-brand` → applies your brand color as background
- `text-brand-light` → applies accent color to text
- `font-display` → uses the display font
- `bg-surface` → uses the surface/background color

---

## 6. Configure the Content Layer

> **Summary:** The Content Layer is Astro 6's system for loading and validating content. It uses "loaders" to read files (like Markdown posts from a folder) and "Zod schemas" to validate that every post has the required fields (title, date, slug, etc.). If someone adds a post missing a required field, the build fails with a clear error instead of silently breaking. This catches mistakes early.

Create `src/content.config.ts`:

```typescript
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.union([z.string(), z.date().transform((d) => d.toISOString())]),
    slug: z.string(),
    excerpt: z.string().optional().default(''),
    featuredImage: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { posts: postCollection };
```

### Create a test post

Create `src/content/posts/hello-world.md`:

```markdown
---
title: "Hello World"
date: "2026-01-01"
slug: "hello-world"
excerpt: "Our first post."
categories: ["news"]
tags: []
---

Welcome to our new website! This is a test post to verify the content layer works.
```

### Query posts in a page

In any `.astro` page, you can now fetch posts:

```astro
---
import { getCollection } from 'astro:content';
const posts = await getCollection('posts');
---

<ul>
  {posts.map(post => (
    <li>{post.data.title} — {post.data.date}</li>
  ))}
</ul>
```

---

## 7. Set Up Decap CMS

> **Summary:** Decap CMS (formerly Netlify CMS) is a Git-based content management system. It gives non-developers a visual editor to create and edit posts — like a simple WordPress. When they save, Decap commits the Markdown file directly to your GitHub repo. No database needed. It requires GitHub OAuth so editors can authenticate and push changes.

### Create the CMS config

Create `public/admin/config.yml`:

```yaml
backend:
  name: github
  repo: YOUR-GITHUB-USERNAME/YOUR-REPO-NAME    # ← Replace
  branch: main
  base_url: https://YOUR-PROJECT.vercel.app     # ← Replace (your deployed URL)
  auth_endpoint: /oauth/callback

media_folder: public/uploads
public_folder: /uploads

collections:
  - name: posts
    label: Posts
    folder: src/content/posts
    create: true
    slug: "{{slug}}"
    fields:
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Slug", name: "slug", widget: "string" }
      - { label: "Date", name: "date", widget: "datetime" }
      - { label: "Excerpt", name: "excerpt", widget: "text", required: false }
      - { label: "Featured Image", name: "featuredImage", widget: "image", required: false }
      - label: "Categories"
        name: "categories"
        widget: "select"
        multiple: true
        options:
          - { label: "News", value: "news" }
          - { label: "Blog", value: "blog" }
      - label: "Tags"
        name: "tags"
        widget: "select"
        multiple: true
        required: false
        options:
          - { label: "Featured", value: "featured" }
      - { label: "Body", name: "body", widget: "markdown" }
```

### Create the CMS admin page

Create `public/admin/index.html`:

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Content Manager</title>
  <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
</head>
<body></body>
</html>
```

### Set up GitHub OAuth (required for Decap)

You'll create the OAuth callback route after setting up GitHub (Step 8). The full OAuth setup involves:

1. Creating a GitHub OAuth App (in GitHub Settings > Developer settings > OAuth Apps)
2. Setting the callback URL to `https://YOUR-PROJECT.vercel.app/oauth/callback`
3. Adding the Client ID and Secret as environment variables
4. Creating an API route at `src/pages/oauth/callback.ts` that handles the OAuth flow

Detailed OAuth setup is in Step 8.

---

## 8. Create & Connect a GitHub Repository

> **Summary:** GitHub is where your code lives online. It enables collaboration (multiple people can work on the code), tracks every change (you can undo mistakes), and connects to services like Vercel (auto-deploys when you push) and Decap CMS (saves content as commits). You need a GitHub account and a repository (repo) for your project.

### Create a GitHub account

1. Go to https://github.com/ and sign up (free)
2. Verify your email address

### Create a new repository

**Option A — GitHub website:**
1. Click the **+** icon (top right) → **New repository**
2. Name: `my-site-name` (match your project folder)
3. Visibility: **Private** (you can change later)
4. Do NOT initialize with README (you already have code locally)
5. Click **Create repository**

**Option B — GitHub CLI (if installed):**
```bash
gh repo create my-site-name --private --source=. --push
```

### Connect your local project to GitHub

In your project folder:

```bash
git init
git add -A
git commit -m "Initial project setup: Astro 6 + Tailwind 4 + Decap CMS"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/my-site-name.git
git push -u origin main
```

### Create a GitHub OAuth App (for Decap CMS)

1. Go to https://github.com/settings/developers
2. Click **OAuth Apps** → **New OAuth App**
3. Fill in:
   - **Application name**: My Site CMS
   - **Homepage URL**: `https://YOUR-PROJECT.vercel.app`
   - **Authorization callback URL**: `https://YOUR-PROJECT.vercel.app/oauth/callback`
4. Click **Register application**
5. Copy the **Client ID**
6. Click **Generate a new client secret** → copy it immediately (shown only once)

### Create the OAuth callback route

Create `src/pages/oauth/callback.ts`:

```typescript
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ url }) => {
  const code = url.searchParams.get('code');

  if (!code) {
    return new Response('Missing code parameter', { status: 400 });
  }

  const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: import.meta.env.OAUTH_GITHUB_CLIENT_ID,
      client_secret: import.meta.env.OAUTH_GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const data = await tokenResponse.json();

  const html = `
    <script>
      const token = '${data.access_token}';
      const provider = 'github';
      if (window.opener) {
        window.opener.postMessage(
          'authorization:' + provider + ':success:' + JSON.stringify({ token, provider }),
          window.location.origin
        );
      }
    </script>
  `;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html' },
  });
};
```

### Create the `.env` file

Create `.env` in the project root:

```bash
# GitHub OAuth for Decap CMS
OAUTH_GITHUB_CLIENT_ID=your_client_id_here
OAUTH_GITHUB_CLIENT_SECRET=your_client_secret_here
```

Add `.env` to `.gitignore`:

```bash
echo ".env" >> .gitignore
```

---

## 9. Deploy to Vercel

> **Summary:** Vercel is a cloud hosting platform optimized for frontend frameworks like Astro. It gives you instant deployments, automatic HTTPS, a global CDN (your site loads fast worldwide), and preview deployments for every git branch. The free tier is generous for most projects. Once connected to GitHub, every push to `main` auto-deploys to production.

### Create a Vercel account

1. Go to https://vercel.com/ and sign up (use **Continue with GitHub** for seamless integration)
2. This links your GitHub repos to Vercel

### Deploy your project

**Option A — Vercel Dashboard (recommended for first deploy):**

1. Go to https://vercel.com/new
2. Click **Import Git Repository** → select your repo
3. Vercel auto-detects Astro — settings should show:
   - **Framework Preset**: Astro
   - **Build Command**: `astro build`
   - **Output Directory**: `dist`
4. Click **Environment Variables** and add:
   - `OAUTH_GITHUB_CLIENT_ID` = your GitHub OAuth client ID
   - `OAUTH_GITHUB_CLIENT_SECRET` = your GitHub OAuth client secret
5. Click **Deploy**
6. Wait 1–2 minutes — Vercel gives you a URL like `https://my-site-name.vercel.app`

**Option B — Vercel CLI:**

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Update your configs with the Vercel URL

After the first deploy, go back and update:

1. **`astro.config.mjs`** → change `site` to your Vercel URL
2. **`public/admin/config.yml`** → change `base_url` to your Vercel URL
3. **GitHub OAuth App** → update callback URL to `https://YOUR-PROJECT.vercel.app/oauth/callback`

Commit and push these changes:

```bash
git add -A
git commit -m "Configure production URL for Vercel deployment"
git push
```

Vercel will auto-deploy the update.

### Verify CMS access

1. Go to `https://YOUR-PROJECT.vercel.app/admin/`
2. Click **Login with GitHub**
3. Authorize the OAuth app
4. You should see the CMS dashboard with the Posts collection

---

## 10. Post-Setup Checklist

> **Summary:** This checklist ensures everything is working end-to-end before you start building features. Each item tests a different part of the stack — if something fails here, it's much easier to fix now than after building on top of it.

### Dev environment
- [ ] `npm run dev` starts without errors at http://localhost:4321
- [ ] Tailwind classes apply correctly (test with `<div class="bg-brand text-white p-4">Test</div>`)
- [ ] TypeScript catches errors (try a type mistake — VS Code should underline it)

### Content Layer
- [ ] Test post appears when queried with `getCollection('posts')`
- [ ] Adding a post with missing `title` field causes a build error (Zod validation works)

### Git & GitHub
- [ ] `git status` shows clean working tree
- [ ] Code is visible at `https://github.com/YOUR-USERNAME/YOUR-REPO`
- [ ] New commits pushed to `main` trigger Vercel auto-deploy

### Vercel deployment
- [ ] Site is live at `https://YOUR-PROJECT.vercel.app`
- [ ] `npm run build` succeeds locally (catches build issues before deploy)
- [ ] Environment variables are set in Vercel dashboard

### Decap CMS
- [ ] `/admin/` page loads and shows "Login with GitHub"
- [ ] After login, you can create a new post
- [ ] The new post appears as a commit in your GitHub repo

---

## Quick Reference: Common Commands

| Command | What It Does |
|---------|-------------|
| `npm run dev` | Start local dev server (http://localhost:4321) |
| `npm run build` | Build the production site to `dist/` |
| `npm run preview` | Preview the built site locally |
| `git add -A && git commit -m "message"` | Stage all changes and commit |
| `git push` | Push to GitHub (triggers Vercel deploy) |
| `npx vercel --prod` | Manual deploy to Vercel production |

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────┐
│                    YOUR SITE                         │
├─────────────────────────────────────────────────────┤
│                                                      │
│  src/pages/         → Routes (each file = a URL)     │
│  src/components/    → Reusable UI pieces             │
│  src/layouts/       → Page shells (header + footer)  │
│  src/content/posts/ → Markdown articles              │
│  src/data/          → Structured data (TS files)     │
│  src/styles/        → Tailwind theme + animations    │
│  src/assets/images/ → Optimized images               │
│                                                      │
├─────────────────────────────────────────────────────┤
│  TOOLS & SERVICES                                    │
├──────────────┬──────────────┬───────────────────────┤
│  Decap CMS   │  GitHub      │  Vercel               │
│  (content    │  (code       │  (hosting &            │
│   editing)   │   storage)   │   deployment)          │
│      │       │      │       │       │                │
│  Writes MD   │  Stores      │  Builds &              │
│  to repo     │  everything  │  serves site           │
└──────────────┴──────────────┴───────────────────────┘
```

---

## Need Help?

- **Astro docs**: https://docs.astro.build/
- **Tailwind CSS docs**: https://tailwindcss.com/docs
- **Decap CMS docs**: https://decapcms.org/docs
- **Vercel docs**: https://vercel.com/docs
- **GitHub Copilot help**: Open Copilot Chat in VS Code (Ctrl+Shift+I) and ask your question — provide context with @files
