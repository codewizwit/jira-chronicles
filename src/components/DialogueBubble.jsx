export default function DialogueBubble({
  speaker,
  text,
  color,
  index,
  isVisible,
}) {
  const isAside = text.startsWith("(");
  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.15}s`,
        marginBottom: "clamp(10px, 1.6vh, 20px)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "clamp(10px, 1.2vw, 14px)",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            minWidth: "clamp(8px, 0.9vw, 11px)",
            width: "clamp(8px, 0.9vw, 11px)",
            height: "clamp(8px, 0.9vw, 11px)",
            borderRadius: "50%",
            background: color,
            marginTop: "clamp(7px, 0.9vw, 10px)",
            flexShrink: 0,
          }}
        />
        <div>
          <div
            style={{
              fontSize: "clamp(12px, 1.3vw, 14px)",
              fontWeight: 600,
              color: color,
              fontFamily:
                "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace",
              textTransform: "uppercase",
              letterSpacing: 1.4,
              marginBottom: "clamp(4px, 0.5vh, 7px)",
            }}
          >
            {speaker}
          </div>
          <div
            style={{
              fontSize: "clamp(15px, 1.6vw, 19px)",
              lineHeight: 1.55,
              color: isAside ? "rgba(26,26,26,0.55)" : "#1a1a1a",
              fontFamily:
                "'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
              fontStyle: isAside ? "italic" : "normal",
              fontWeight: 400,
            }}
          >
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}
