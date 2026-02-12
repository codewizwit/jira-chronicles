export default function NowBadge() {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: "linear-gradient(135deg, #ff4757, #ff6b6b)",
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
      <span style={{ fontSize: "clamp(10px, 1.1vw, 13px)" }}>🔥</span> JIRA TIMELINE
    </span>
  );
}
