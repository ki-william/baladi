export function Logo({ size = 44, showWord = true }: { size?: number; showWord?: boolean }) {
  return (
    <div className="flex items-center gap-3 group">
      <div
        className="relative rounded-2xl overflow-hidden flex items-center justify-center transition-transform group-hover:rotate-[-4deg]"
        style={{
          width: size,
          height: size,
          background: "linear-gradient(135deg, #ffd60a 0%, #ffe94d 100%)",
          boxShadow: "0 6px 18px -6px rgba(245, 196, 0, 0.6), inset 0 -2px 0 rgba(0,0,0,0.06)",
        }}
      >
        <LogoMark />
        <span
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background:
              "linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.55) 50%, transparent 80%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 2.5s linear infinite",
          }}
        />
      </div>
      {showWord && (
        <div className="leading-none">
          <div className="font-semibold tracking-tight text-ink-900">Baladi</div>
          <div className="font-arabic text-[11px] text-ink-500 mt-0.5">بلدي</div>
        </div>
      )}
    </div>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  // Stylized rendering of بلدي — simplified, geometric, modern
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      width="100%"
      height="100%"
      fill="none"
      aria-hidden="true"
    >
      {/* baseline dot motif (ب) */}
      <circle cx="12" cy="48" r="2.5" fill="#0b0b0f" />
      <circle cx="52" cy="22" r="2.5" fill="#0b0b0f" />

      {/* the curve = abstracted wordmark: a soft smile / valley of the hometown */}
      <path
        d="M8 36 C 16 48, 28 50, 32 42 C 36 34, 44 30, 56 36"
        stroke="#0b0b0f"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* vertical stroke for ل / د */}
      <path
        d="M32 14 L 32 36"
        stroke="#0b0b0f"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* tiny accent */}
      <circle cx="32" cy="10" r="2" fill="#0b0b0f" />
    </svg>
  );
}

export function LogoArabicWord({ className = "", size = 160 }: { className?: string; size?: number }) {
  // Full Arabic wordmark بلدي rendered large and elegant
  return (
    <div
      className={className}
      style={{
        fontFamily: '"Noto Naskh Arabic", "Amiri", Georgia, serif',
        fontSize: size,
        fontWeight: 700,
        lineHeight: 1,
        direction: "rtl",
        color: "#0b0b0f",
        letterSpacing: "-0.02em",
      }}
    >
      بلدي
    </div>
  );
}
