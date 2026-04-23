"use client";

/* Floating coins — animated SVG falling/rising continuously */
export function FloatingCoins({ count = 6 }: { count?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 hidden md:block">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="absolute animate-float-coin"
          style={{
            left: `${(i * 17 + 5) % 95}%`,
            top: `${(i * 23) % 80}%`,
            width: 32 + (i % 3) * 10,
            height: 32 + (i % 3) * 10,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${10 + (i % 4) * 2}s`,
            opacity: 0.5 + (i % 3) * 0.15,
          }}
          viewBox="0 0 40 40"
        >
          <circle cx="20" cy="20" r="18" fill="#ffd60a" stroke="#0a0a0c" strokeWidth="2" />
          <text
            x="20"
            y="26"
            textAnchor="middle"
            fontSize="16"
            fontWeight="700"
            fill="#0a0a0c"
          >
            ج
          </text>
        </svg>
      ))}
      <style jsx>{`
        @keyframes float-coin {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% {
            transform: translateY(-120vh) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-float-coin {
          animation-name: float-coin;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}

/* World-to-Egypt line with animated dot traveling along path */
export function RemittanceFlowSvg() {
  return (
    <svg viewBox="0 0 800 200" className="w-full h-auto" aria-hidden="true">
      <defs>
        <linearGradient id="flowLine" x1="0" x2="1">
          <stop offset="0%" stopColor="#ffd60a" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#ffd60a" stopOpacity="1" />
          <stop offset="100%" stopColor="#ffd60a" stopOpacity="0.1" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Curved path */}
      <path
        id="flow-path"
        d="M 40 100 Q 200 20, 400 100 T 760 100"
        stroke="url(#flowLine)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="4 8"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="24;0"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </path>

      {/* Origin (diaspora) */}
      <g transform="translate(40 100)">
        <circle r="18" fill="#ffd60a" opacity="0.25">
          <animate attributeName="r" values="18;26;18" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.25;0;0.25" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle r="10" fill="#ffd60a" />
        <text x="0" y="45" textAnchor="middle" fill="#8a8a85" fontSize="11" fontFamily="sans-serif">
          Milan
        </text>
      </g>

      {/* Destination (Egypt) */}
      <g transform="translate(760 100)">
        <circle r="18" fill="#ffd60a" opacity="0.25">
          <animate attributeName="r" values="18;26;18" dur="2s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.25;0;0.25" dur="2s" begin="1s" repeatCount="indefinite" />
        </circle>
        <circle r="10" fill="#ffd60a" />
        <text x="0" y="45" textAnchor="middle" fill="#8a8a85" fontSize="11" fontFamily="sans-serif">
          Asyut
        </text>
      </g>

      {/* Traveling packets */}
      {[0, 1, 2].map((i) => (
        <circle key={i} r="5" fill="#ffd60a" filter="url(#glow)">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            begin={`${i}s`}
            path="M 40 100 Q 200 20, 400 100 T 760 100"
          />
        </circle>
      ))}
    </svg>
  );
}

/* Animated growing bar chart */
export function GrowthSvg() {
  return (
    <svg viewBox="0 0 260 160" className="w-full h-auto" aria-hidden="true">
      {[
        { x: 20, h: 40, d: 0 },
        { x: 70, h: 70, d: 0.15 },
        { x: 120, h: 95, d: 0.3 },
        { x: 170, h: 120, d: 0.45 },
        { x: 220, h: 145, d: 0.6 },
      ].map((b, i) => (
        <g key={i}>
          <rect
            x={b.x}
            y={150 - b.h}
            width="30"
            height={b.h}
            rx="4"
            fill="#ffd60a"
            style={{
              transformOrigin: `${b.x + 15}px 150px`,
              animation: `bar-grow 1.2s cubic-bezier(0.16,1,0.3,1) ${b.d}s both`,
            }}
          />
        </g>
      ))}
      <line x1="0" y1="150" x2="260" y2="150" stroke="#2d2d36" strokeWidth="1" />
      <style>{`
        @keyframes bar-grow {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }
      `}</style>
    </svg>
  );
}

/* Three rings connected — "trust triangle" */
export function TrustTriangleSvg() {
  return (
    <svg viewBox="0 0 260 220" className="w-full h-auto" aria-hidden="true">
      <defs>
        <radialGradient id="nodeG">
          <stop offset="0%" stopColor="#ffd60a" />
          <stop offset="100%" stopColor="#caa000" />
        </radialGradient>
      </defs>

      {/* lines */}
      <g stroke="#ffd60a" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.5">
        <line x1="130" y1="30" x2="40" y2="180">
          <animate attributeName="stroke-dashoffset" values="0;-10" dur="1s" repeatCount="indefinite" />
        </line>
        <line x1="130" y1="30" x2="220" y2="180">
          <animate attributeName="stroke-dashoffset" values="0;-10" dur="1s" repeatCount="indefinite" />
        </line>
        <line x1="40" y1="180" x2="220" y2="180">
          <animate attributeName="stroke-dashoffset" values="0;-10" dur="1s" repeatCount="indefinite" />
        </line>
      </g>

      {/* nodes */}
      {[
        { cx: 130, cy: 30, label: "Diaspora", delay: 0 },
        { cx: 40, cy: 180, label: "Family", delay: 0.4 },
        { cx: 220, cy: 180, label: "SME", delay: 0.8 },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.cx} cy={n.cy} r="20" fill="url(#nodeG)">
            <animate
              attributeName="r"
              values="20;23;20"
              dur="2.5s"
              begin={`${n.delay}s`}
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={n.cx} cy={n.cy} r="30" fill="none" stroke="#ffd60a" strokeOpacity="0.3">
            <animate attributeName="r" values="20;40" dur="2.5s" begin={`${n.delay}s`} repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.5;0" dur="2.5s" begin={`${n.delay}s`} repeatCount="indefinite" />
          </circle>
          <text
            x={n.cx}
            y={n.cy + 48}
            textAnchor="middle"
            fill="#f5f5f0"
            fontSize="12"
            fontWeight="600"
            fontFamily="sans-serif"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* Geometric hero ornament that rotates gently */
export function HeroOrnamentSvg() {
  return (
    <svg
      viewBox="0 0 300 300"
      className="w-full h-full animate-spin-slow"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="ornG">
          <stop offset="0%" stopColor="#ffd60a" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffd60a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="150" cy="150" r="120" fill="url(#ornG)" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2;
        const x = +(150 + Math.cos(a) * 110).toFixed(2);
        const y = +(150 + Math.sin(a) * 110).toFixed(2);
        return (
          <circle key={i} cx={x} cy={y} r="3" fill="#ffd60a">
            <animate
              attributeName="r"
              values="3;6;3"
              dur="2s"
              begin={`${i * 0.15}s`}
              repeatCount="indefinite"
            />
          </circle>
        );
      })}
      {Array.from({ length: 6 }).map((_, i) => {
        const a = (i / 6) * Math.PI * 2;
        const x1 = +(150 + Math.cos(a) * 40).toFixed(2);
        const y1 = +(150 + Math.sin(a) * 40).toFixed(2);
        const x2 = +(150 + Math.cos(a) * 90).toFixed(2);
        const y2 = +(150 + Math.sin(a) * 90).toFixed(2);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#ffd60a"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
        );
      })}
      <circle cx="150" cy="150" r="4" fill="#ffd60a" />
    </svg>
  );
}
