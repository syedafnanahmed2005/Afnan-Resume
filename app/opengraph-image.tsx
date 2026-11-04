import { ImageResponse } from "next/og";

export const alt = "Syed Afnan Ahmed — Senior SEO Specialist & Social Media Manager";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg,#09090b 55%,#2a1206)",
          color: "#fff",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, color: "#ff6a1a", textTransform: "uppercase" }}>
          Portfolio
        </div>
        <div style={{ display: "flex", fontSize: 108, fontWeight: 800, marginTop: 24, lineHeight: 1 }}>
          Syed Afnan <span style={{ color: "#ff6a1a", marginLeft: 24 }}>Ahmed</span>
        </div>
        <div style={{ display: "flex", fontSize: 38, marginTop: 36, color: "#d4d4d8" }}>
          Senior SEO Specialist | Social Media Manager
        </div>
        <div style={{ display: "flex", fontSize: 26, marginTop: 28, color: "#a1a1aa" }}>
          Technical SEO · GEO · AEO · LLM Optimization
        </div>
        <div style={{ display: "flex", width: 160, height: 8, background: "#ff6a1a", marginTop: 48 }} />
      </div>
    ),
    size,
  );
}
