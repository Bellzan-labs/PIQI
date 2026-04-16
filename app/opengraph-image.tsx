import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "PIQI Group — One group. Six arms.";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(circle at 20% 20%, rgba(187,24,29,0.35), transparent 40%), radial-gradient(circle at 85% 85%, rgba(187,24,29,0.22), transparent 45%), linear-gradient(180deg, #0d0b12 0%, #09070d 100%)",
          color: "#f7f2ec",
          fontFamily: "system-ui, sans-serif"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "linear-gradient(90deg, #bb181d 0%, #7e000a 100%)"
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.35em",
              color: "#bb181d",
              textTransform: "uppercase"
            }}
          >
            PIQI Group
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 124,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "#f7f2ec"
            }}
          >
            One group.
          </div>
          <div
            style={{
              fontSize: 124,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "#bb181d",
              marginTop: 4
            }}
          >
            Six arms.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24
          }}
        >
          <div
            style={{
              fontSize: 28,
              color: "#d8cec8",
              maxWidth: 820,
              lineHeight: 1.35
            }}
          >
            Consulting, property, fashion, yachts, auto, and coaching — South African, serving clients internationally since 2016.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 20,
              color: "#bbb1aa",
              letterSpacing: "0.1em",
              textTransform: "uppercase"
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 36,
                height: 2,
                background: "#bb181d"
              }}
            />
            piqigroup.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
