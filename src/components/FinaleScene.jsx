export default function FinaleScene({ scene, isVisible }) {
  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "all 1s ease",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(24px, 6vw, 36px)",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 900,
          marginBottom: 36,
          textAlign: "center",
          background: "linear-gradient(135deg, #ff6b6b, #a29bfe)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {scene.title}
      </h2>

      <div
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 16,
          padding: "28px 24px",
          marginBottom: 32,
        }}
      >
        {scene.sections[0].items.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: i < scene.sections[0].items.length - 1 ? 16 : 0,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-15px)",
              transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.12}s`,
            }}
          >
            <span
              style={{
                fontSize: 14,
                fontFamily: "'Space Mono', monospace",
                color: item.fromColor,
                textDecoration: "line-through",
                opacity: 0.6,
                minWidth: 0,
                flex: 1,
                textAlign: "right",
              }}
            >
              {item.from}
            </span>
            <span
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.2)",
                flexShrink: 0,
              }}
            >
              →
            </span>
            <span
              style={{
                fontSize: 14,
                fontFamily: "'Space Mono', monospace",
                fontWeight: 700,
                color: item.toColor,
                minWidth: 0,
                flex: 1,
              }}
            >
              {item.to}
            </span>
          </div>
        ))}
      </div>

      <p
        style={{
          fontSize: 16,
          fontFamily: "'Space Mono', monospace",
          fontWeight: 400,
          color: "rgba(255,255,255,0.75)",
          textAlign: "center",
          lineHeight: 1.7,
          maxWidth: 480,
          margin: "0 auto",
          marginBottom: 32,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(10px)",
          transition: "all 0.6s ease 0.8s",
        }}
      >
        {scene.sections[1].text}
      </p>

      <div
        style={{
          padding: "16px 20px",
          background: "rgba(255,255,255,0.03)",
          borderLeft: "3px solid rgba(255,255,255,0.15)",
          borderRadius: 8,
          fontSize: 14,
          color: "rgba(255,255,255,0.45)",
          fontFamily: "'IBM Plex Sans', sans-serif",
          lineHeight: 1.6,
          fontStyle: "italic",
          opacity: isVisible ? 1 : 0,
          transition: "all 0.6s ease 1.2s",
        }}
      >
        {scene.sections[2].text}
      </div>
    </div>
  );
}
