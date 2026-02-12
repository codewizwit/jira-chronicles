import NowBadge from "./NowBadge";
import FutureBadge from "./FutureBadge";
import Panel from "./Panel";

export default function VsScene({ scene, isVisible }) {
  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.6s ease",
      }}
    >
      <div style={{ marginBottom: 20 }}>
        {scene.era === "now" ? <NowBadge /> : <FutureBadge />}
      </div>
      <h2
        style={{
          fontSize: "clamp(22px, 5vw, 30px)",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          marginBottom: 28,
          color: scene.era === "now" ? "#ff6b6b" : "#a29bfe",
        }}
      >
        {scene.title}
      </h2>
      <div
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 16,
          padding: "28px 24px",
        }}
      >
        <Panel panel={scene.panel} isVisible={isVisible} />
      </div>
    </div>
  );
}
