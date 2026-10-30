import { ImageResponse } from "next/og";

export const alt = "Web Wizards: automatización para tu negocio";
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
          background: "#0f0f0e",
          color: "#efebe2",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#8a8a82",
          }}
        >
          <div style={{ width: 16, height: 16, background: "#e8391d" }} />
          Web Wizards
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 124,
            lineHeight: 0.95,
            letterSpacing: -4,
          }}
        >
          <div>Tu negocio,</div>
          <div style={{ color: "#8a8a82" }}>en piloto automático</div>
        </div>

        <div style={{ display: "flex", fontSize: 28, color: "#8a8a82" }}>
          Automatización, software e IA para negocios
        </div>
      </div>
    ),
    size
  );
}