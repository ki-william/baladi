"use client";
import { useState } from "react";

type Scenario = {
  id: string;
  sender: string;
  city: string;
  flag: string;
  amount: number;
  currency: string;
  sme: string;
  product: string;
  irr: string;
  months: number;
};

const SCENARIOS: Scenario[] = [
  {
    id: "ahmed",
    sender: "Ahmed",
    city: "Bergamo",
    flag: "🇮🇹",
    amount: 500,
    currency: "€",
    sme: "Al-Noor Textile",
    product: "Revenue-share",
    irr: "11%",
    months: 24,
  },
  {
    id: "sara",
    sender: "Sara",
    city: "Dubai",
    flag: "🇦🇪",
    amount: 1200,
    currency: "$",
    sme: "Siwa Guesthouse",
    product: "Sukuk equity",
    irr: "9%",
    months: 36,
  },
  {
    id: "mo",
    sender: "Mohammed",
    city: "Jeddah",
    flag: "🇸🇦",
    amount: 800,
    currency: "$",
    sme: "Minya Dairy Co-op",
    product: "Sukuk note",
    irr: "8%",
    months: 18,
  },
  {
    id: "mary",
    sender: "Mary",
    city: "Toronto",
    flag: "🇨🇦",
    amount: 900,
    currency: "$",
    sme: "Luxor Micro-Lodge",
    product: "Equity",
    irr: "13%",
    months: 48,
  },
];

export function FlowVisual() {
  const [sid, setSid] = useState(SCENARIOS[0].id);
  const [pct, setPct] = useState(30);
  const s = SCENARIOS.find((x) => x.id === sid)!;
  const invest = Math.round(s.amount * (pct / 100));
  const family = s.amount - invest;

  const fmt = (n: number) => `${s.currency}${n.toLocaleString()}`;
  const projectedReturn = Math.round(
    invest * (parseFloat(s.irr) / 100) * (s.months / 12),
  );

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-ink-200 bg-gradient-to-br from-[#0f0f14] via-[#141418] to-[#0a0a0c] p-5 sm:p-8 md:p-12">
      {/* Header */}
      <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8">
        <div>
          <div className="chip">Live scenario</div>
          <div className="text-xs sm:text-sm text-ink-500 mt-2">
            Try different senders. Adjust the split. See what changes.
          </div>
        </div>
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-ink-500">
          <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
          interactive
        </div>
      </div>

      {/* Scenario selector */}
      <div className="relative flex flex-wrap gap-2 mb-6 sm:mb-8">
        {SCENARIOS.map((sc) => (
          <button
            key={sc.id}
            onClick={() => setSid(sc.id)}
            className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
              sid === sc.id
                ? "bg-yellow-500 text-ink-900 shadow-[0_6px_18px_-6px_rgba(255,214,10,0.5)]"
                : "bg-ink-900/40 text-ink-700 border border-ink-200 hover:border-yellow-500/50 hover:text-ink-900"
            }`}
          >
            <span className="mr-1.5">{sc.flag}</span>
            {sc.sender} · {sc.city}
          </button>
        ))}
      </div>

      {/* Slider */}
      <div className="relative mb-8 sm:mb-10">
        <div className="flex items-center justify-between mb-3 text-xs">
          <span className="text-ink-500 uppercase tracking-widest">Investment portion</span>
          <span className="text-yellow-500 font-semibold tabular-nums text-sm">{pct}%</span>
        </div>
        <input
          type="range"
          min="0"
          max="80"
          step="5"
          value={pct}
          onChange={(e) => setPct(parseInt(e.target.value))}
          className="w-full flow-slider"
          aria-label="Investment portion"
        />
      </div>

      {/* Main layout */}
      <div className="relative grid md:grid-cols-[1fr_auto_1fr] gap-5 md:gap-8 items-center">
        {/* SENDER */}
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-yellow-500/5 blur-xl" />
          <div className="relative card p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-lg">
                {s.flag}
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-ink-500">Sender</div>
                <div className="font-bold text-ink-900">{s.sender} · {s.city}</div>
              </div>
            </div>
            <div className="text-4xl sm:text-5xl font-bold text-ink-900 tabular-nums leading-none">
              {fmt(s.amount)}
            </div>
            <div className="text-xs text-ink-500 mt-2">Monthly transfer</div>
          </div>
        </div>

        {/* SPLIT VISUAL */}
        <div className="relative flex md:flex-col items-center gap-2 py-2">
          <svg viewBox="0 0 120 180" className="w-20 md:w-28 h-auto rotate-90 md:rotate-0" aria-hidden="true">
            <defs>
              <linearGradient id="splitL" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffd60a" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#ffd60a" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path d="M 0 90 L 50 90" stroke="url(#splitL)" strokeWidth="3" strokeDasharray="6 6">
              <animate attributeName="stroke-dashoffset" values="24;0" dur="1s" repeatCount="indefinite" />
            </path>
            <circle cx="60" cy="90" r="10" fill="#ffd60a" />
            <circle cx="60" cy="90" r="18" fill="none" stroke="#ffd60a" strokeOpacity="0.4">
              <animate attributeName="r" values="10;28" dur="2s" repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" values="0.5;0" dur="2s" repeatCount="indefinite" />
            </circle>
            <path d="M 60 90 Q 90 90, 120 30" stroke="url(#splitL)" strokeWidth="3" fill="none" strokeDasharray="6 6">
              <animate attributeName="stroke-dashoffset" values="0;-24" dur="1s" repeatCount="indefinite" />
            </path>
            <path d="M 60 90 Q 90 90, 120 150" stroke="url(#splitL)" strokeWidth="3" fill="none" strokeDasharray="6 6">
              <animate attributeName="stroke-dashoffset" values="0;-24" dur="1s" repeatCount="indefinite" />
            </path>
            <circle r="4" fill="#ffd60a">
              <animateMotion dur="2.5s" repeatCount="indefinite" path="M 0 90 L 60 90 Q 90 90 120 30" />
            </circle>
            <circle r="4" fill="#ffd60a">
              <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.2s" path="M 0 90 L 60 90 Q 90 90 120 150" />
            </circle>
          </svg>
          <div className="text-[10px] uppercase tracking-[0.3em] text-yellow-500 font-semibold">split</div>
        </div>

        {/* DESTINATIONS */}
        <div className="space-y-3 sm:space-y-4">
          <div className="relative card p-4 sm:p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-full bg-ink-200/50 flex items-center justify-center shrink-0">🏡</div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-widest text-ink-500">Family · support</div>
                  <div className="font-bold text-ink-900 truncate">Mother · Egypt 🇪🇬</div>
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-ink-900 tabular-nums">{fmt(family)}</div>
            </div>
            <div className="mt-3 h-1.5 rounded-full bg-ink-200/40 overflow-hidden">
              <div
                className="h-full bg-yellow-500/50 rounded-full transition-all duration-500"
                style={{ width: `${100 - pct}%` }}
              />
            </div>
          </div>

          <div className="relative card p-4 sm:p-5 ring-yellow">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-full bg-yellow-500 text-ink-900 flex items-center justify-center shrink-0">🏪</div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-widest text-yellow-500 font-semibold">SME · invest</div>
                  <div className="font-bold text-ink-900 truncate">{s.sme}</div>
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-ink-900 tabular-nums">{fmt(invest)}</div>
            </div>
            <div className="mt-3 h-1.5 rounded-full bg-ink-200/40 overflow-hidden">
              <div
                className="h-full bg-yellow-500 rounded-full relative transition-all duration-500"
                style={{ width: `${pct}%` }}
              >
                <span
                  className="absolute inset-0 opacity-60"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 2s linear infinite",
                  }}
                />
              </div>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] uppercase tracking-widest text-ink-500">
              <span>{s.product}</span>
              <span className="text-yellow-500 font-semibold">{s.irr} IRR</span>
              <span className="opacity-60">·</span>
              <span>{s.months} months</span>
            </div>
          </div>
        </div>
      </div>

      {/* Projection */}
      <div className="relative mt-6 sm:mt-8 p-4 sm:p-5 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-yellow-500 font-semibold">
            Projected over {s.months} months
          </div>
          <div className="text-ink-700 text-sm mt-1">
            {fmt(invest)} deploys as {s.product.toLowerCase()} in {s.sme}
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-[10px] uppercase tracking-widest text-ink-500">Projected return</span>
          <span className="text-2xl sm:text-3xl font-bold text-yellow-500 tabular-nums">
            +{fmt(projectedReturn)}
          </span>
        </div>
      </div>

      {/* Footer tags */}
      <div className="relative mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.3em] text-ink-500">
        <span>Regulated</span>
        <span className="opacity-50">·</span>
        <span>Witnessed by family</span>
        <span className="opacity-50">·</span>
        <span>Returns: EGP or hard currency</span>
      </div>

      <style jsx>{`
        .flow-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 8px;
          border-radius: 999px;
          background: linear-gradient(
            90deg,
            #ffd60a 0%,
            #ffd60a ${(pct / 80) * 100}%,
            #2d2d36 ${(pct / 80) * 100}%,
            #2d2d36 100%
          );
          outline: none;
        }
        .flow-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 999px;
          background: #ffd60a;
          border: 3px solid #0a0a0c;
          cursor: grab;
          box-shadow: 0 4px 12px rgba(255, 214, 10, 0.45);
        }
        .flow-slider::-webkit-slider-thumb:active { cursor: grabbing; }
        .flow-slider::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 999px;
          background: #ffd60a;
          border: 3px solid #0a0a0c;
          cursor: grab;
        }
      `}</style>
    </div>
  );
}
