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
          marginBottom: 12,
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "linear-gradient(135deg, #ff6b6b, #a29bfe)",
            color: "#fff",
            padding: "4px 14px",
            borderRadius: 20,
            fontSize: 13,
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
          fontSize: "clamp(24px, 6vw, 36px)",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 900,
          marginBottom: 12,
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
          fontSize: 15,
          color: "rgba(255,255,255,0.4)",
          fontFamily: "'IBM Plex Sans', sans-serif",
          marginBottom: 36,
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
            gap: 16,
            alignItems: "flex-start",
            marginBottom: 20,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-20px)",
            transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.18}s`,
          }}
        >
          <div
            style={{
              fontSize: 28,
              minWidth: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.04)",
              borderRadius: 12,
              flexShrink: 0,
            }}
          >
            {step.emoji}
          </div>
          <div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                fontFamily: "'Space Mono', monospace",
                textTransform: "uppercase",
                letterSpacing: 1.2,
                color: "#ffd93d",
                marginBottom: 4,
              }}
            >
              {step.label}
            </div>
            <div
              style={{
                fontSize: 14.5,
                lineHeight: 1.6,
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
            marginTop: 32,
            fontSize: 16,
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
