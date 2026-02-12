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
            boxShadow: `0 0 12px ${color}66`,
          }}
        />
        <div>
          <div
            style={{
              fontSize: "clamp(13px, 1.4vw, 16px)",
              fontWeight: 700,
              color: color,
              fontFamily: "'Space Mono', monospace",
              textTransform: "uppercase",
              letterSpacing: 1.2,
              marginBottom: "clamp(2px, 0.3vh, 5px)",
            }}
          >
            {speaker}
          </div>
          <div
            style={{
              fontSize: "clamp(15px, 1.6vw, 19px)",
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
