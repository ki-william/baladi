"use client";
import { useEffect, useRef, useState } from "react";

export function SectionTransition({
  from,
  to,
  index,
}: {
  from: string;
  to: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative py-8 md:py-14 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center gap-3 sm:gap-6">
        <div className="flex-1 h-px relative overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-transparent via-yellow-500 to-yellow-500 origin-left"
            style={{
              transform: visible ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </div>

        <div
          className="relative shrink-0"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0) scale(1)" : "translateY(12px) scale(0.92)",
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
          }}
        >
          <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-ink-500">
            <span className="hidden sm:inline">{from}</span>
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-yellow-500 flex items-center justify-center text-ink-900 font-bold text-[10px] sm:text-[11px]">
              {String(index).padStart(2, "0")}
              <span className="absolute inset-0 rounded-full animate-pulse-glow bg-yellow-500/50 -z-10" />
            </div>
            <span className="text-yellow-500 font-semibold">{to}</span>
          </div>
        </div>

        <div className="flex-1 h-px relative overflow-hidden">
          <div
            className="h-full bg-gradient-to-l from-transparent via-yellow-500 to-yellow-500 origin-right"
            style={{
              transform: visible ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
            }}
          />
        </div>
      </div>
    </div>
  );
}
