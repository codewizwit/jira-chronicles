export default function FutureBadge() {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: "linear-gradient(135deg, #a29bfe, #6c5ce7)",
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
      <span style={{ fontSize: 10 }}>✨</span> AI-NATIVE TIMELINE
    </span>
  );
}
