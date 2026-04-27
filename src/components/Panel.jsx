import DialogueBubble from "./DialogueBubble";

export default function Panel({ panel, isVisible, accent = "#ff5a36" }) {
  return (
    <div>
      <div
        style={{
          fontSize: "clamp(32px, 4vw, 42px)",
          textAlign: "center",
          marginBottom: "clamp(12px, 1.5vw, 18px)",
          letterSpacing: 8,
          lineHeight: 1.6,
        }}
      >
        {panel.scene}
      </div>
      {panel.dialogue.map((d, i) => (
        <DialogueBubble key={i} {...d} index={i} isVisible={isVisible} />
      ))}
      <div
        style={{
          marginTop: "clamp(20px, 2.5vw, 28px)",
          padding: "clamp(12px, 1.4vw, 16px) clamp(16px, 1.8vw, 22px)",
          background: "rgba(26,26,26,0.04)",
          borderRadius: 8,
          borderLeft: `3px solid ${accent}`,
          fontSize: "clamp(14px, 1.4vw, 16px)",
          color: "rgba(26,26,26,0.75)",
          fontFamily: "'Fraunces', 'Iowan Old Style', Georgia, serif",
          fontStyle: "italic",
          fontWeight: 500,
          lineHeight: 1.6,
        }}
      >
        {panel.footnote}
      </div>
    </div>
  );
}
