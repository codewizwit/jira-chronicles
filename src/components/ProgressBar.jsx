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
          background: "rgba(26,26,26,0.08)",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "linear-gradient(90deg, #ff5a36, #2d5f4e)",
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
          color: "rgba(26,26,26,0.45)",
          fontFamily:
            "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace",
        }}
      >
        {current + 1} / {total}
      </div>
    </>
  );
}
