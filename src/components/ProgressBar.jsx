export default function ProgressBar({ current, total }) {
  const progress = ((current + 1) / total) * 100;

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 3,
          background: "rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "linear-gradient(90deg, #ff6b6b, #a29bfe)",
            transition: "width 0.5s ease",
          }}
        />
      </div>
      <div
        style={{
          position: "fixed",
          top: 16,
          right: 20,
          zIndex: 100,
          fontSize: "clamp(12px, 1.2vw, 14px)",
          color: "rgba(255,255,255,0.3)",
          fontFamily: "'Space Mono', monospace",
        }}
      >
        {current + 1} / {total}
      </div>
    </>
  );
}
