export default function CreditsScene({ scene, isVisible }) {
  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "all 0.8s ease",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(24px, 5vw, 40px)",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 900,
          marginBottom: "clamp(28px, 3vw, 36px)",
          background: "linear-gradient(135deg, #ffd93d, #ff6b6b, #a29bfe)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {scene.title}
      </h2>

      <div
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 16,
          padding: "clamp(20px, 2.5vw, 32px) clamp(24px, 3vw, 36px)",
          maxWidth: 640,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(14px, 1.6vw, 20px)",
          }}
        >
          {scene.characters.map((char, i) => (
            <div
              key={i}
              style={{
                textAlign: "left",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(12px)",
                transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.08}s`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "clamp(10px, 1.2vw, 14px)",
                }}
              >
                <span
                  style={{
                    fontSize: "clamp(20px, 2.2vw, 28px)",
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  {char.emoji}
                </span>
                <div>
                  <div
                    style={{
                      fontSize: "clamp(13px, 1.4vw, 17px)",
                      fontWeight: 700,
                      fontFamily: "'Space Mono', monospace",
                      color: char.color,
                      marginBottom: 2,
                    }}
                  >
                    {char.name}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(12px, 1.2vw, 15px)",
                      color: "rgba(255,255,255,0.45)",
                      fontFamily: "'IBM Plex Sans', sans-serif",
                      fontStyle: "italic",
                      lineHeight: 1.4,
                    }}
                  >
                    {char.description}
                  </div>
                </div>
              </div>

              {char.arcEmoji && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "clamp(10px, 1.2vw, 14px)",
                    marginTop: 8,
                  }}
                >
                  <span
                    style={{
                      fontSize: "clamp(20px, 2.2vw, 28px)",
                      lineHeight: 1,
                      flexShrink: 0,
                    }}
                  >
                    {char.arcEmoji}
                  </span>
                  <div>
                    <div
                      style={{
                        fontSize: "clamp(13px, 1.4vw, 17px)",
                        fontWeight: 700,
                        fontFamily: "'Space Mono', monospace",
                        color: char.color,
                        marginBottom: 2,
                      }}
                    >
                      {char.arcName}
                    </div>
                    <div
                      style={{
                        fontSize: "clamp(12px, 1.2vw, 15px)",
                        color: "rgba(255,255,255,0.45)",
                        fontFamily: "'IBM Plex Sans', sans-serif",
                        fontStyle: "italic",
                        lineHeight: 1.4,
                      }}
                    >
                      {char.arcDescription}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
