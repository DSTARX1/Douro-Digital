import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Douro Digital — AI Agents & Custom Software";

export default async function Image() {
  const fontData = await fetch(
    "https://fonts.gstatic.com/s/spacegrotesk/v22/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj4PVksj.ttf"
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#000",
          padding: "80px",
          fontFamily: "Space Grotesk",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            width: 80,
            height: 6,
            backgroundColor: "#D42918",
            marginBottom: 40,
            borderRadius: 3,
          }}
        />
        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.15,
            marginBottom: 24,
            display: "flex",
          }}
        >
          Douro Digital
        </div>
        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "#999",
            lineHeight: 1.4,
            display: "flex",
          }}
        >
          AI Agents & Custom Software for Revenue Growth
        </div>
        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            backgroundColor: "#D42918",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Space Grotesk",
          data: fontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
