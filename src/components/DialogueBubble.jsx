export default function DialogueBubble({
  speaker,
  text,
  color,
  index,
  isVisible,
}) {
  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.15}s`,
        marginBottom: 14,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 10,
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            minWidth: 8,
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: color,
            marginTop: 8,
            flexShrink: 0,
            boxShadow: `0 0 12px ${color}66`,
          }}
        />
        <div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: color,
              fontFamily: "'Space Mono', monospace",
              textTransform: "uppercase",
              letterSpacing: 1.2,
              marginBottom: 3,
            }}
          >
            {speaker}
          </div>
          <div
            style={{
              fontSize: 15,
              lineHeight: 1.5,
              color: "#e0e0e0",
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontStyle: text.startsWith("(") ? "italic" : "normal",
              opacity: text.startsWith("(") ? 0.6 : 1,
            }}
          >
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}
