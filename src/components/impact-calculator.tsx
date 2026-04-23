"use client";
import { useState } from "react";

export function ImpactCalculator() {
  const [pct, setPct] = useState(2);
  const totalRemit = 32_000; // in millions (32B)
  const capital = totalRemit * (pct / 100); // in M
  const smes = Math.round((capital * 1_000_000) / 15_000); // avg €15k per SME deal
  const families = Math.round(smes * 1.3); // ~1.3 family witnesses per deal
  const years = 5;

  const fmtM = (m: number) =>
    m >= 1000 ? `$${(m / 1000).toFixed(2)}B` : `$${Math.round(m)}M`;

  return (
    <div className="card card-accent p-5 sm:p-8 md:p-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-7">
        <div>
          <div className="chip mb-2">Interactive</div>
          <h3 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight">
            Drag the slider. See what&apos;s possible.
          </h3>
          <p className="text-sm text-ink-500 mt-2 max-w-xl">
            Egypt&apos;s diaspora sends $32B home every year. What happens when Baladi captures
            <span className="font-arabic"> </span>
            <span className="font-bold text-yellow-700 text-base tabular-nums">{pct.toFixed(1)}%</span>
            {" "}of it?
          </p>
        </div>
        <div className="text-right shrink-0">
          <div className="text-5xl md:text-7xl font-bold text-yellow-700 tabular-nums leading-none">
            {pct.toFixed(1)}%
          </div>
          <div className="text-xs uppercase tracking-widest text-ink-500 mt-1">capture rate</div>
        </div>
      </div>

      {/* Slider */}
      <div className="relative mb-10">
        <input
          type="range"
          min="0"
          max="5"
          step="0.1"
          value={pct}
          onChange={(e) => setPct(parseFloat(e.target.value))}
          className="w-full baladi-slider"
          aria-label="Capture percentage"
        />
        <div className="flex justify-between text-[10px] uppercase tracking-widest text-ink-500 mt-2">
          <span>0%</span>
          <span>1%</span>
          <span>2%</span>
          <span>3%</span>
          <span>4%</span>
          <span>5%</span>
        </div>
      </div>

      {/* Outputs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Metric label="Redirected / year" value={fmtM(capital)} />
        <Metric label="SMEs funded / year" value={smes.toLocaleString()} />
        <Metric label="Families earning" value={families.toLocaleString()} />
        <Metric label={`5-yr cumulative`} value={fmtM(capital * years)} />
      </div>

      {/* Bar fill */}
      <div className="mt-10">
        <div className="flex items-center justify-between text-xs text-ink-500 mb-2">
          <span>Consumption (remittance as-is)</span>
          <span>Productive capital</span>
        </div>
        <div className="h-5 rounded-full bg-ink-200 overflow-hidden relative">
          <div
            className="h-full bg-yellow-500 transition-[width] duration-300 ease-out relative"
            style={{ width: `${(pct / 5) * 100}%` }}
          >
            <div className="absolute inset-0 opacity-50"
              style={{
                background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 2s linear infinite",
              }}
            />
          </div>
        </div>
      </div>

      {pct >= 2 && pct < 3 && (
        <Callout>
          At <b>2%</b>, Baladi deploys more per year than Egypt&apos;s largest microfinance
          institution&apos;s entire lending portfolio.
        </Callout>
      )}
      {pct >= 3 && pct < 4 && (
        <Callout>
          At <b>3%</b>, this exceeds Egypt&apos;s total FDI inflow in multiple recent years.
        </Callout>
      )}
      {pct >= 4 && (
        <Callout>
          At <b>{pct.toFixed(1)}%</b>, Baladi would be the largest single source of growth
          capital for Egyptian SMEs — privately-funded, diaspora-owned.
        </Callout>
      )}
      {pct < 2 && pct > 0 && (
        <Callout>
          Even at under 2%, the capital redirected exceeds every existing diaspora-bond
          issuance Egypt has ever done.
        </Callout>
      )}
      {pct === 0 && (
        <Callout>
          Right now, all $32B flows to consumption. Zero reaches SME growth capital.
        </Callout>
      )}

      <style jsx>{`
        .baladi-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 10px;
          border-radius: 999px;
          background: linear-gradient(
            90deg,
            #ffd60a 0%,
            #ffd60a ${(pct / 5) * 100}%,
            #2d2d36 ${(pct / 5) * 100}%,
            #2d2d36 100%
          );
          outline: none;
        }
        .baladi-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 28px;
          height: 28px;
          border-radius: 999px;
          background: #ffd60a;
          border: 3px solid #0a0a0c;
          cursor: grab;
          box-shadow: 0 4px 14px rgba(255, 214, 10, 0.45), 0 0 0 6px rgba(255, 214, 10, 0.15);
          transition: transform 0.15s ease;
        }
        .baladi-slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }
        .baladi-slider::-webkit-slider-thumb:active {
          cursor: grabbing;
          transform: scale(1.15);
        }
        .baladi-slider::-moz-range-thumb {
          width: 28px;
          height: 28px;
          border-radius: 999px;
          background: #ffd60a;
          border: 3px solid #0a0a0c;
          cursor: grab;
          box-shadow: 0 4px 14px rgba(255, 214, 10, 0.45);
        }
      `}</style>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center md:text-left">
      <div className="text-3xl md:text-4xl font-bold text-ink-900 tabular-nums leading-tight">
        {value}
      </div>
      <div className="text-xs uppercase tracking-widest text-ink-500 mt-1">{label}</div>
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 flex gap-3 items-start text-sm leading-relaxed text-ink-700 border-l-2 border-yellow-500 pl-4 py-1">
      <span className="text-yellow-500 font-semibold shrink-0 mt-0.5">Insight</span>
      <span className="opacity-80">{children}</span>
    </div>
  );
}
