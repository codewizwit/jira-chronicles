import DialogueBubble from "./DialogueBubble";

export default function Panel({ panel, isVisible }) {
  return (
    <div>
      <div
        style={{
          fontSize: 32,
          textAlign: "center",
          marginBottom: 20,
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
          marginTop: 20,
          padding: "12px 16px",
          background: "rgba(255,255,255,0.04)",
          borderRadius: 8,
          borderLeft: "3px solid rgba(255,255,255,0.15)",
          fontSize: 13,
          color: "rgba(255,255,255,0.5)",
          fontFamily: "'IBM Plex Sans', sans-serif",
          fontStyle: "italic",
        }}
      >
        {panel.footnote}
      </div>
    </div>
  );
}
