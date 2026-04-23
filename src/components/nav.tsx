"use client";
import { useEffect, useState } from "react";
import { Logo } from "./logo";

const LINKS = [
  { href: "#need", label: "Need" },
  { href: "#approach", label: "Approach" },
  { href: "#benefits", label: "Benefits" },
  { href: "#competition", label: "Competition" },
  { href: "#impact", label: "Impact" },
  { href: "#founder", label: "Founder" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-xl bg-white/70 border-b border-ink-200" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="contents"><Logo /></a>

        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm text-ink-500 hover:text-ink-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-ink-900 p-2"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pt-4 pb-2 space-y-1 bg-white/95 backdrop-blur-xl border-t border-ink-200 mt-3">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-ink-700"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
