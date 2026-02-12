export default function NowBadge() {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: "linear-gradient(135deg, #ff4757, #ff6b6b)",
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
      <span style={{ fontSize: 10 }}>🔥</span> JIRA TIMELINE
    </span>
  );
}
