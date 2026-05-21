type Props = { className?: string; variant?: "leaf" | "branch" | "bloom" };

export function BotanicalSVG({ className, variant = "leaf" }: Props) {
  if (variant === "branch") {
    return (
      <svg
        className={className}
        viewBox="0 0 200 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M100 290 C 100 200, 100 120, 100 20"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.5"
        />
        {[40, 80, 120, 160, 220].map((y, i) => (
          <g key={i} opacity={0.55}>
            <ellipse
              cx={i % 2 === 0 ? 70 : 130}
              cy={y}
              rx="22"
              ry="9"
              transform={`rotate(${i % 2 === 0 ? -30 : 30} ${i % 2 === 0 ? 70 : 130} ${y})`}
              fill="currentColor"
              opacity="0.35"
            />
            <ellipse
              cx={i % 2 === 0 ? 70 : 130}
              cy={y}
              rx="22"
              ry="9"
              transform={`rotate(${i % 2 === 0 ? -30 : 30} ${i % 2 === 0 ? 70 : 130} ${y})`}
              stroke="currentColor"
              strokeWidth="0.8"
              fill="none"
            />
          </g>
        ))}
      </svg>
    );
  }
  if (variant === "bloom") {
    return (
      <svg
        className={className}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {[0, 60, 120, 180, 240, 300].map((r) => (
          <ellipse
            key={r}
            cx="60"
            cy="38"
            rx="10"
            ry="22"
            fill="currentColor"
            opacity="0.5"
            transform={`rotate(${r} 60 60)`}
          />
        ))}
        <circle cx="60" cy="60" r="6" fill="currentColor" opacity="0.7" />
      </svg>
    );
  }
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M100 180 C 60 140, 40 100, 60 50 C 90 70, 130 110, 100 180 Z"
        fill="currentColor"
        opacity="0.35"
      />
      <path
        d="M100 180 C 60 140, 40 100, 60 50"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
    </svg>
  );
}
