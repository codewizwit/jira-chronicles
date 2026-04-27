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
          fontSize: "clamp(28px, 5.5vw, 44px)",
          fontFamily: "'Fraunces', 'Iowan Old Style', Georgia, serif",
          fontWeight: 900,
          marginBottom: "clamp(28px, 3vw, 36px)",
          color: "#1a1a1a",
          letterSpacing: "-0.02em",
        }}
      >
        {scene.title}
      </h2>

      <div
        style={{
          background: "rgba(26,26,26,0.03)",
          border: "1px solid rgba(26,26,26,0.08)",
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
                      fontSize: "clamp(13px, 1.4vw, 16px)",
                      fontWeight: 600,
                      fontFamily:
                        "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace",
                      color: char.color,
                      textTransform: "uppercase",
                      letterSpacing: 1.2,
                      marginBottom: 4,
                    }}
                  >
                    {char.name}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(14px, 1.4vw, 16px)",
                      color: "rgba(26,26,26,0.7)",
                      fontFamily:
                        "'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                      lineHeight: 1.5,
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
                    marginTop: 10,
                    marginLeft: "clamp(28px, 3vw, 38px)",
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
                        fontSize: "clamp(13px, 1.4vw, 16px)",
                        fontWeight: 600,
                        fontFamily:
                          "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace",
                        color: char.color,
                        textTransform: "uppercase",
                        letterSpacing: 1.2,
                        marginBottom: 4,
                      }}
                    >
                      {char.arcName}
                    </div>
                    <div
                      style={{
                        fontSize: "clamp(14px, 1.4vw, 16px)",
                        color: "rgba(26,26,26,0.7)",
                        fontFamily:
                          "'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                        lineHeight: 1.5,
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
