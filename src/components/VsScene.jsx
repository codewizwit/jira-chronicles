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
      <div style={{ marginBottom: "clamp(20px, 2.5vw, 28px)" }}>
        {scene.era === "now" ? <NowBadge /> : <FutureBadge />}
      </div>
      <h2
        style={{
          fontSize: "clamp(22px, 5vw, 38px)",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          marginBottom: "clamp(28px, 3vw, 36px)",
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
          padding: "clamp(10px, 1.4vw, 16px) clamp(24px, 3vw, 36px) clamp(28px, 3.5vw, 40px)",
        }}
      >
        <Panel panel={scene.panel} isVisible={isVisible} />
      </div>
    </div>
  );
}
