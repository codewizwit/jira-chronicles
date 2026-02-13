import { useState, useEffect, useCallback } from "react";
import { scenes } from "./data/scenes";
import TitleScene from "./components/TitleScene";
import VsScene from "./components/VsScene";
import MetaScene from "./components/MetaScene";
import CreditsScene from "./components/CreditsScene";
import FinaleScene from "./components/FinaleScene";
import Navigation from "./components/Navigation";
import ProgressBar from "./components/ProgressBar";

export default function JiraChronicles() {
  const [current, setCurrent] = useState(0);
  const [panelVisible, setPanelVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setPanelVisible(true), 100);
    return () => clearTimeout(t);
  }, [current]);

  const goBack = useCallback(() => {
    if (current > 0) {
      setPanelVisible(false);
      setCurrent(current - 1);
    }
  }, [current]);

  const goNext = useCallback(() => {
    if (current < scenes.length - 1) {
      setPanelVisible(false);
      setCurrent(current + 1);
    }
  }, [current]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") goBack();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goBack, goNext]);

  const scene = scenes[current];

  return (
    <div
      style={{
        minHeight: "100dvh",
        background: "#0a0a0f",
        color: "#fff",
        fontFamily: "'IBM Plex Sans', sans-serif",
        position: "relative",
        display: "flex",
        flexDirection: "column",
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
          flex: 1,
          maxWidth: 1060,
          width: "100%",
          margin: "0 auto",
          padding: "clamp(32px, 6vw, 72px) clamp(24px, 4vw, 48px) 56px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          boxSizing: "border-box",
        }}
      >
        {scene.type === "title" && (
          <TitleScene
            key={scene.id}
            scene={scene}
            isVisible={panelVisible}
            onStart={() => {
              setPanelVisible(false);
              setCurrent(1);
            }}
          />
        )}

        {scene.type === "vs" && (
          <VsScene key={scene.id} scene={scene} isVisible={panelVisible} />
        )}

        {scene.type === "meta" && (
          <MetaScene key={scene.id} scene={scene} isVisible={panelVisible} />
        )}

        {scene.type === "credits" && (
          <CreditsScene key={scene.id} scene={scene} isVisible={panelVisible} />
        )}

        {scene.type === "finale" && (
          <FinaleScene key={scene.id} scene={scene} isVisible={panelVisible} />
        )}
      </div>

      <Navigation
        current={current}
        total={scenes.length}
        onBack={goBack}
        onNext={goNext}
      />
    </div>
  );
}
