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
          fontSize: "clamp(24px, 6vw, 44px)",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 900,
          marginBottom: "clamp(36px, 4vw, 48px)",
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
          padding: "clamp(10px, 1.4vw, 16px) clamp(24px, 3vw, 36px) clamp(28px, 3.5vw, 40px)",
          marginBottom: "clamp(32px, 3.5vw, 44px)",
        }}
      >
        {scene.sections[0].items.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(12px, 1.4vw, 16px)",
              marginBottom: i < scene.sections[0].items.length - 1 ? "clamp(16px, 1.8vw, 22px)" : 0,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-15px)",
              transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.12}s`,
            }}
          >
            <span
              style={{
                fontSize: "clamp(14px, 1.5vw, 17px)",
                fontFamily: "'Space Mono', monospace",
                color: item.fromColor,
                textDecoration: "line-through",
                opacity: 0.75,
                minWidth: 0,
                flex: 1,
                textAlign: "right",
              }}
            >
              {item.from}
            </span>
            <span
              style={{
                fontSize: "clamp(14px, 1.5vw, 17px)",
                color: "rgba(255,255,255,0.4)",
                flexShrink: 0,
              }}
            >
              →
            </span>
            <span
              style={{
                fontSize: "clamp(14px, 1.5vw, 17px)",
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
          fontSize: "clamp(16px, 1.7vw, 20px)",
          fontFamily: "'Space Mono', monospace",
          fontWeight: 400,
          color: "rgba(255,255,255,0.7)",
          textAlign: "center",
          lineHeight: 1.7,
          maxWidth: 600,
          margin: "0 auto",
          marginBottom: "clamp(32px, 3.5vw, 44px)",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(10px)",
          transition: "all 0.6s ease 0.8s",
        }}
      >
        {scene.sections[1].text}
      </p>

      <div
        style={{
          padding: "clamp(16px, 1.8vw, 22px) clamp(20px, 2.2vw, 28px)",
          background: "rgba(255,255,255,0.03)",
          borderLeft: "3px solid rgba(255,255,255,0.15)",
          borderRadius: 8,
          fontSize: "clamp(14px, 1.5vw, 17px)",
          color: "rgba(255,255,255,0.7)",
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
