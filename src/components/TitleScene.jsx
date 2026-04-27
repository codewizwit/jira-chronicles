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
          <div
            style={{
              fontSize: "clamp(11px, 1.1vw, 13px)",
              fontFamily:
                "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace",
              fontWeight: 600,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              color: "#ff5a36",
              marginBottom: 28,
            }}
          >
            A Wizwit Short · No. 3
          </div>
          <div style={{ fontSize: "clamp(64px, 8vw, 80px)", marginBottom: 24 }}>
            {scene.emoji}
          </div>
          <h1
            style={{
              fontSize: "clamp(42px, 9vw, 76px)",
              fontFamily: "'Fraunces', 'Iowan Old Style', Georgia, serif",
              fontWeight: 900,
              lineHeight: 1.05,
              color: "#1a1a1a",
              marginBottom: 18,
              letterSpacing: "-0.02em",
            }}
          >
            {scene.text}
          </h1>
          <p
            style={{
              fontSize: "clamp(18px, 2vw, 22px)",
              color: "rgba(26,26,26,0.55)",
              fontFamily: "'Fraunces', 'Iowan Old Style', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 500,
            }}
          >
            {scene.subtitle}
          </p>
          <div
            style={{
              marginTop: 56,
              fontSize: "clamp(13px, 1.4vw, 15px)",
              color: "rgba(26,26,26,0.4)",
              fontFamily:
                "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace",
              letterSpacing: 1,
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
