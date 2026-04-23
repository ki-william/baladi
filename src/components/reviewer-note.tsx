"use client";

export function ReviewerNote() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-yellow-500/25 bg-gradient-to-br from-[#141418] via-[#0f0f14] to-[#0a0a0c]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-yellow-500/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative p-6 sm:p-10 md:p-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-10 bg-yellow-500" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-yellow-500 font-semibold">
            A direct note to the reviewer
          </span>
        </div>

        <div className="space-y-5 text-ink-900 text-lg sm:text-xl leading-relaxed max-w-4xl">
          <p>
            If you&apos;re reading this, you&apos;re deciding whether to let me into Bolzano.
            So let me be direct.
          </p>

          <p>
            I&apos;m not applying to <span className="text-yellow-500 font-semibold">figure out</span>{" "}
            if I want to be an entrepreneur. I&apos;ve already built two companies, I&apos;ve already
            hit my own ceiling, and I&apos;ve already designed the company I want to build next.
            Baladi is not a homework idea — it&apos;s the thing I&apos;m going to build whether
            I&apos;m admitted or not.
          </p>

          <p>
            What UniBZ offers — the <span className="text-yellow-500 font-semibold">trilingual cross-border DNA</span>,
            the <span className="text-yellow-500 font-semibold">EU regulatory ecosystem</span>,
            the <span className="text-yellow-500 font-semibold">rigorous venture training</span> —
            is the exact environment where a founder like me compounds fastest. Admitting me is
            low-risk: the work is already moving. It&apos;s high-upside: the next company I build
            will be materially larger than the ones I&apos;ve built so far. And it&apos;s aligned:
            Baladi is the kind of cross-border, regulated, Europe-anchored venture that your
            program was literally designed to produce.
          </p>

          <p className="font-semibold">
            I&apos;d like to build it with you. Let&apos;s start in September.
          </p>
        </div>

        <div className="mt-10 flex items-center gap-4 pt-8 border-t border-yellow-500/15">
          <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-ink-900 text-lg">
            KW
          </div>
          <div>
            <div className="font-semibold text-ink-900">Kirolos William</div>
            <div className="text-sm text-ink-500">
              Founder · Juzuuur &amp; Ya Egypt · Applicant · UniBZ MSc 2026
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
