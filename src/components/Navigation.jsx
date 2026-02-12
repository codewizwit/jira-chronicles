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
        zIndex: 100,
      }}
    >
      <button
        onClick={onBack}
        disabled={isFirst}
        style={{
          flex: 1,
          padding: "20px",
          background: isFirst
            ? "rgba(255,255,255,0.02)"
            : "rgba(255,255,255,0.05)",
          border: "none",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          color: isFirst ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.5)",
          fontSize: 14,
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
          flex: 1,
          padding: "20px",
          background: isLast
            ? "rgba(255,255,255,0.02)"
            : "rgba(162, 155, 254, 0.1)",
          border: "none",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderLeft: "1px solid rgba(255,255,255,0.06)",
          color: isLast ? "rgba(255,255,255,0.15)" : "#a29bfe",
          fontSize: 14,
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
