export default function FutureBadge() {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: "#2d5f4e",
        color: "#faf7f2",
        padding: "clamp(4px, 0.5vw, 6px) clamp(14px, 1.5vw, 18px)",
        borderRadius: 20,
        fontSize: "clamp(13px, 1.3vw, 15px)",
        fontWeight: 700,
        letterSpacing: 1.5,
        textTransform: "uppercase",
        fontFamily:
          "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace",
      }}
    >
      AI-Native Timeline
    </span>
  );
}
