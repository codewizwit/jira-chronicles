import { useState, useEffect } from "react";
import { scenes } from "./data/scenes";
import TitleScene from "./components/TitleScene";
import VsScene from "./components/VsScene";
import MetaScene from "./components/MetaScene";
import FinaleScene from "./components/FinaleScene";
import Navigation from "./components/Navigation";
import ProgressBar from "./components/ProgressBar";

export default function JiraChronicles() {
  const [current, setCurrent] = useState(0);
  const [panelVisible, setPanelVisible] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional animation reset
    setPanelVisible(false);
    const t = setTimeout(() => setPanelVisible(true), 100);
    return () => clearTimeout(t);
  }, [current]);

  const scene = scenes[current];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0f",
        color: "#fff",
        fontFamily: "'IBM Plex Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          opacity: 0.03,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <ProgressBar current={current} total={scenes.length} />

      {/* Content */}
      <div
        style={{
          maxWidth: 640,
          margin: "0 auto",
          padding: "60px 24px 120px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {scene.type === "title" && (
          <TitleScene
            scene={scene}
            isVisible={panelVisible}
            onStart={() => setCurrent(1)}
          />
        )}

        {scene.type === "vs" && (
          <VsScene scene={scene} isVisible={panelVisible} />
        )}

        {scene.type === "meta" && (
          <MetaScene scene={scene} isVisible={panelVisible} />
        )}

        {scene.type === "finale" && (
          <FinaleScene scene={scene} isVisible={panelVisible} />
        )}
      </div>

      <Navigation
        current={current}
        total={scenes.length}
        onBack={() => current > 0 && setCurrent(current - 1)}
        onNext={() => current < scenes.length - 1 && setCurrent(current + 1)}
      />
    </div>
  );
}
