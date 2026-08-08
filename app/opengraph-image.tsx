import { ImageResponse } from "next/og";

export const alt =
  "Taksu Healing — Authentic Balinese Melukat water purification ceremony near Ubud";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded, self-contained OG image (no external assets required).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #3E5C4B 0%, #2B4638 55%, #24382C 100%)",
          color: "#F7F3EC",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              border: "2px solid #B99552",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
            }}
          >
            🌿
          </div>
          <div
            style={{
              fontSize: 30,
              letterSpacing: 2,
              color: "#F7F3EC",
            }}
          >
            TAKSU HEALING
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#C67B5C",
            }}
          >
            Sacred Balinese Purification Ritual
          </div>
          <div
            style={{
              fontSize: 68,
              lineHeight: 1.1,
              maxWidth: 900,
              color: "#F7F3EC",
            }}
          >
            Melukat — wash away the weight you&apos;ve been carrying
          </div>
        </div>

        <div style={{ fontSize: 26, color: "#8AA891" }}>
          Guided by a traditional priest · Sacred springs near Ubud, Bali
        </div>
      </div>
    ),
    { ...size },
  );
}
