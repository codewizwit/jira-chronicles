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
          fontSize: "clamp(28px, 6vw, 48px)",
          fontFamily: "'Fraunces', 'Iowan Old Style', Georgia, serif",
          fontWeight: 900,
          marginBottom: "clamp(36px, 4vw, 48px)",
          textAlign: "center",
          color: "#1a1a1a",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
        }}
      >
        {scene.title}
      </h2>

      <div
        style={{
          background: "rgba(26,26,26,0.03)",
          border: "1px solid rgba(26,26,26,0.08)",
          borderRadius: 16,
          padding: "clamp(20px, 2.4vw, 28px) clamp(24px, 3vw, 36px)",
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
              marginBottom:
                i < scene.sections[0].items.length - 1
                  ? "clamp(16px, 1.8vw, 22px)"
                  : 0,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-15px)",
              transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.12}s`,
            }}
          >
            <span
              style={{
                fontSize: "clamp(14px, 1.5vw, 17px)",
                fontFamily:
                  "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace",
                color: item.fromColor,
                textDecoration: "line-through",
                opacity: 0.7,
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
                color: "rgba(26,26,26,0.4)",
                flexShrink: 0,
              }}
            >
              →
            </span>
            <span
              style={{
                fontSize: "clamp(14px, 1.5vw, 17px)",
                fontFamily:
                  "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace",
                fontWeight: 600,
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
          fontSize: "clamp(18px, 1.9vw, 24px)",
          fontFamily: "'Fraunces', 'Iowan Old Style', Georgia, serif",
          fontStyle: "italic",
          fontWeight: 500,
          color: "#1a1a1a",
          textAlign: "center",
          lineHeight: 1.5,
          maxWidth: 640,
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
          background: "rgba(26,26,26,0.04)",
          borderLeft: "3px solid #ff5a36",
          borderRadius: 8,
          fontSize: "clamp(15px, 1.5vw, 18px)",
          color: "rgba(26,26,26,0.78)",
          fontFamily:
            "'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
          lineHeight: 1.55,
          opacity: isVisible ? 1 : 0,
          transition: "all 0.6s ease 1.2s",
        }}
      >
        {scene.sections[2].text}
      </div>
    </div>
  );
}
