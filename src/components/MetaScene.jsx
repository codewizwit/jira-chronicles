export default function MetaScene({ scene, isVisible }) {
  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "all 0.8s ease",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "clamp(14px, 2vw, 22px)",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "linear-gradient(135deg, #ff6b6b, #a29bfe)",
            color: "#fff",
            padding: "clamp(4px, 0.5vw, 6px) clamp(14px, 1.5vw, 18px)",
            borderRadius: 20,
            fontSize: "clamp(13px, 1.3vw, 15px)",
            fontWeight: 700,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            fontFamily: "'Space Mono', monospace",
          }}
        >
          🔮 TRANSCENDING TO THE AI TIMELINE
        </span>
      </div>
      <h2
        style={{
          fontSize: "clamp(24px, 5vw, 40px)",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 900,
          marginBottom: "clamp(8px, 1.2vw, 14px)",
          textAlign: "center",
          background: "linear-gradient(135deg, #ffd93d, #ff6b6b, #a29bfe)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {scene.title}
      </h2>
      <p
        style={{
          textAlign: "center",
          fontSize: "clamp(15px, 1.5vw, 18px)",
          color: "rgba(255,255,255,0.4)",
          fontFamily: "'IBM Plex Sans', sans-serif",
          marginBottom: "clamp(20px, 3vw, 36px)",
          fontStyle: "italic",
        }}
      >
        {scene.subtitle}
      </p>

      {scene.steps.map((step, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: "clamp(12px, 1.4vw, 18px)",
            alignItems: "flex-start",
            marginBottom: "clamp(14px, 1.8vw, 22px)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-20px)",
            transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.18}s`,
          }}
        >
          <div
            style={{
              fontSize: "clamp(24px, 2.5vw, 30px)",
              minWidth: "clamp(38px, 4vw, 48px)",
              height: "clamp(38px, 4vw, 48px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.04)",
              borderRadius: 10,
              flexShrink: 0,
            }}
          >
            {step.emoji}
          </div>
          <div>
            <div
              style={{
                fontSize: "clamp(11px, 1.1vw, 13px)",
                fontWeight: 700,
                fontFamily: "'Space Mono', monospace",
                textTransform: "uppercase",
                letterSpacing: 1.2,
                color: "#ffd93d",
                marginBottom: 2,
              }}
            >
              {step.label}
            </div>
            <div
              style={{
                fontSize: "clamp(14px, 1.4vw, 17px)",
                lineHeight: 1.5,
                color: "rgba(255,255,255,0.6)",
                fontFamily: "'IBM Plex Sans', sans-serif",
              }}
            >
              {step.text}
            </div>
          </div>
        </div>
      ))}

      {scene.closing && (
        <p
          style={{
            marginTop: "clamp(20px, 2.5vw, 36px)",
            fontSize: "clamp(16px, 1.7vw, 20px)",
            color: "rgba(255,255,255,0.8)",
            fontFamily: "'IBM Plex Sans', sans-serif",
            lineHeight: 1.6,
            textAlign: "center",
            fontWeight: 600,
            opacity: isVisible ? 1 : 0,
            transition: "all 0.6s ease 1.2s",
          }}
        >
          {scene.closing}
        </p>
      )}
    </div>
  );
}
