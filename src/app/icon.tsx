import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 6,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#c45e3a",
            fontSize: 22,
            fontWeight: 700,
            fontFamily: "system-ui, sans-serif",
            lineHeight: 1,
            letterSpacing: -1,
          }}
        >
          G
        </div>
      </div>
    ),
    { ...size },
  );
}
