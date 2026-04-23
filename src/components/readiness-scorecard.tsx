"use client";
import { useEffect, useRef, useState } from "react";

const ITEMS = [
  { t: "Founder already operates two companies", d: "Juzuuur + Ya Egypt — in production, real SME relationships, real revenue." },
  { t: "Day-1 inventory of pilot deals", d: "3 Juzuuur hospitality assets ready to structure as revenue-share notes." },
  { t: "Regulatory path fully mapped", d: "Egypt FRA sandbox + EU ECSP passport. No novel legislation required." },
  { t: "Problem validated with 30+ diaspora", d: ">80% said they'd invest in a vetted hometown business if the mechanism existed." },
  { t: "Founder-market fit verified", d: "Egyptian diaspora member currently in Italy — living the exact problem." },
  { t: "Next 90-day milestones defined", d: "Waitlist, 50 interviews, 3 structured pilots, FRA sandbox application." },
];

export function ReadinessScorecard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-[#0f1512] via-[#0f0f14] to-[#0a0a0c]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-yellow-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative p-6 sm:p-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Ready to launch
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-emerald-500/30 to-transparent" />
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ink-900 leading-tight mb-2">
          Six boxes already checked.
        </h3>
        <p className="text-ink-500 mb-8">
          This is not a hypothetical project. The moving parts are already in place.
        </p>

        <ul className="grid sm:grid-cols-2 gap-4">
          {ITEMS.map((it, i) => (
            <CheckItem key={i} title={it.t} detail={it.d} delay={i * 120} />
          ))}
        </ul>

        <div className="mt-10 pt-8 border-t border-emerald-500/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-emerald-400 font-semibold mb-1">
              What&apos;s next
            </div>
            <div className="text-ink-900 font-semibold">
              One structured environment to move from founder-operator to venture architect.
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-[0.3em] text-ink-500 mb-1">That environment is</div>
            <div className="text-lg font-bold text-yellow-500">UniBZ MSc · Entrepreneurship &amp; Innovation</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckItem({ title, detail, delay }: { title: string; detail: string; delay: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setTimeout(() => setVisible(true), delay)),
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <li
      ref={ref}
      className="flex gap-3 items-start"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M2 6 L 5 9 L 10 3"
            stroke="#34d399"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="14"
            strokeDashoffset={visible ? "0" : "14"}
            style={{ transition: "stroke-dashoffset 0.8s ease 0.3s" }}
          />
        </svg>
      </span>
      <div>
        <div className="font-semibold text-ink-900 text-sm sm:text-base">{title}</div>
        <div className="text-xs sm:text-sm text-ink-500 mt-0.5 leading-relaxed">{detail}</div>
      </div>
    </li>
  );
}
