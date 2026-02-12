export default function TitleScene({ scene, isVisible, onStart }) {
  return (
    <>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "-5vh",
        }}
      >
      <div
        style={{
          textAlign: "center",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1)" : "scale(0.95)",
          transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <div style={{ fontSize: "clamp(64px, 8vw, 80px)", marginBottom: 24 }}>
          {scene.emoji}
        </div>
        <h1
          style={{
            fontSize: "clamp(36px, 8vw, 64px)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            lineHeight: 1.1,
            background:
              "linear-gradient(135deg, #ff6b6b, #ffd93d, #6c5ce7, #a29bfe)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: 16,
          }}
        >
          {scene.text}
        </h1>
        <p
          style={{
            fontSize: "clamp(18px, 2vw, 22px)",
            color: "rgba(255,255,255,0.4)",
            fontFamily: "'Space Mono', monospace",
            letterSpacing: 2,
          }}
        >
          {scene.subtitle}
        </p>
        <div
          style={{
            marginTop: 48,
            fontSize: "clamp(13px, 1.4vw, 16px)",
            color: "rgba(255,255,255,0.25)",
            fontFamily: "'Space Mono', monospace",
          }}
        >
          tap anywhere to begin →
        </div>
      </div>
      </div>
      <div
        onClick={onStart}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 50,
          cursor: "pointer",
        }}
      />
    </>
  );
}
