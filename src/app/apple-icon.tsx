import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#3a342f",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#c45e3a",
            fontSize: 110,
            fontWeight: 700,
            fontFamily: "system-ui, sans-serif",
            lineHeight: 1,
            letterSpacing: -4,
          }}
        >
          G
        </div>
      </div>
    ),
    { ...size },
  );
}
