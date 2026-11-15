import { ImageResponse } from "next/og";

export const alt = "Giriraaj Textiles — bag closing yarn, Beawar, Rajasthan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#ffffff",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: "0.24em",
          }}
        >
          GIRIRAAJ TEXTILES
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
          }}
        >
          Bag closing yarn
        </div>

        <div
          style={{
            display: "flex",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            paddingTop: 24,
            fontSize: 28,
            letterSpacing: "0.28em",
            color: "rgba(255, 255, 255, 0.7)",
          }}
        >
          BEAWAR, RAJASTHAN
        </div>
      </div>
    ),
    size,
  );
}
