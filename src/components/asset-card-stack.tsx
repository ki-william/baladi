"use client";

const ASSETS = [
  {
    name: "Luxor Nile Guesthouse",
    rooms: 12,
    nightly: "$85",
    shares: "87%",
    emoji: "🏛️",
  },
  {
    name: "Siwa Oasis Lodge",
    rooms: 8,
    nightly: "$110",
    shares: "64%",
    emoji: "🌴",
  },
  {
    name: "Red Sea Boutique Stay",
    rooms: 14,
    nightly: "$120",
    shares: "42%",
    emoji: "🌊",
  },
];

export function AssetCardStack() {
  return (
    <div className="relative w-full max-w-sm mx-auto" style={{ perspective: "1200px" }}>
      {ASSETS.map((a, i) => (
        <div
          key={a.name}
          className="relative mb-4 last:mb-0"
          style={{
            transform: `rotate(${(i - 1) * 1.5}deg)`,
            zIndex: ASSETS.length - i,
          }}
        >
          <div
            className="rounded-2xl bg-gradient-to-br from-[#1a1a20] to-[#0f0f14] border border-yellow-500/20 p-5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] hover:border-yellow-500/60 hover:-translate-y-1 transition-all duration-500"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-2xl">
                  {a.emoji}
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-yellow-500 font-semibold">
                    Juzuuur asset
                  </div>
                  <div className="font-bold text-ink-900 text-sm">{a.name}</div>
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-ink-500 bg-ink-200/40 px-2 py-1 rounded-full">
                Live
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <div className="text-lg font-bold text-ink-900 tabular-nums">{a.rooms}</div>
                <div className="text-[9px] uppercase tracking-widest text-ink-500">rooms</div>
              </div>
              <div>
                <div className="text-lg font-bold text-ink-900 tabular-nums">{a.nightly}</div>
                <div className="text-[9px] uppercase tracking-widest text-ink-500">per night</div>
              </div>
              <div>
                <div className="text-lg font-bold text-yellow-500 tabular-nums">{a.shares}</div>
                <div className="text-[9px] uppercase tracking-widest text-ink-500">funded</div>
              </div>
            </div>

            {/* funding bar */}
            <div className="mt-3 h-1 rounded-full bg-ink-200/30 overflow-hidden">
              <div
                className="h-full bg-yellow-500 rounded-full"
                style={{ width: a.shares }}
              />
            </div>
          </div>
        </div>
      ))}

      {/* Floating accent */}
      <div className="absolute -top-6 -right-4 bg-yellow-500 text-ink-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-[0_8px_20px_-6px_rgba(255,214,10,0.55)] rotate-6">
        Day 1 inventory
      </div>
    </div>
  );
}
