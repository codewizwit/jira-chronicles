export default function Navigation({ current, total, onBack, onNext }) {
  const isFirst = current === 0;
  const isLast = current === total - 1;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-between",
        zIndex: 100,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        background: "rgba(10, 10, 15, 0.85)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <button
        onClick={onBack}
        disabled={isFirst}
        style={{
          padding: "14px clamp(24px, 4vw, 48px)",
          background: "transparent",
          border: "none",
          outline: "none",
          textAlign: "left",
          color: isFirst ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.5)",
          fontSize: "clamp(13px, 1.3vw, 15px)",
          fontFamily: "'Space Mono', monospace",
          cursor: isFirst ? "default" : "pointer",
          transition: "all 0.2s ease",
        }}
      >
        ← back
      </button>
      <button
        onClick={onNext}
        disabled={isLast}
        style={{
          padding: "14px clamp(24px, 4vw, 48px)",
          background: "transparent",
          border: "none",
          outline: "none",
          textAlign: "right",
          color: isLast ? "rgba(255,255,255,0.15)" : "#a29bfe",
          fontSize: "clamp(13px, 1.3vw, 15px)",
          fontFamily: "'Space Mono', monospace",
          cursor: isLast ? "default" : "pointer",
          transition: "all 0.2s ease",
        }}
      >
        next →
      </button>
    </div>
  );
}
