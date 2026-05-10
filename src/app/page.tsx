import { Nav } from "@/components/nav";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { FlowVisual } from "@/components/flow-visual";
import { LogoArabicWord, LogoMark } from "@/components/logo";
import { SectionTransition } from "@/components/section-transition";
import { ImpactCalculator } from "@/components/impact-calculator";
import {
  FloatingCoins,
  RemittanceFlowSvg,
  GrowthSvg,
  TrustTriangleSvg,
  HeroOrnamentSvg,
} from "@/components/animated-svgs";
import { AssetCardStack } from "@/components/asset-card-stack";
import { ReadinessScorecard } from "@/components/readiness-scorecard";
import { ReviewerNote } from "@/components/reviewer-note";

export default function Home() {
  return (
    <main id="top" className="relative">
      <Nav />

      {/* ========== HERO ========== */}
      <section className="relative min-h-[100svh] flex items-center pt-28 sm:pt-36 pb-20 sm:pb-24 px-5 sm:px-6 overflow-hidden">
        {/* Floating yellow orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[10%] left-[-15%] w-80 h-80 bg-yellow-500/15 rounded-full blur-[100px] animate-float-1" />
          <div className="absolute bottom-[5%] right-[-15%] w-[26rem] h-[26rem] bg-yellow-500/12 rounded-full blur-[130px] animate-float-2" />
          <div className="absolute top-[35%] right-[35%] w-64 h-64 bg-yellow-400/10 rounded-full blur-[90px] animate-float-3 hidden md:block" />
        </div>

        {/* Massive Arabic watermark */}
        <div className="absolute right-[-80px] md:right-[-20px] top-[8%] pointer-events-none opacity-[0.05] md:opacity-[0.08] select-none hidden sm:block">
          <LogoArabicWord size={420} />
        </div>

        {/* Rotating geometric ornament */}
        <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-40 hidden lg:block">
          <HeroOrnamentSvg />
        </div>

        <FloatingCoins count={5} />

        <div className="relative max-w-7xl mx-auto w-full">
          <Reveal delay={120}>
            <h1 className="text-[2.5rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] xl:leading-[0.98] font-bold tracking-tight max-w-5xl text-ink-900">
              Turning <span className="text-highlight">$32 billion</span> of diaspora love into productive Egyptian capital.
            </h1>
          </Reveal>

          <Reveal delay={260}>
            <p className="mt-8 text-lg md:text-xl text-ink-500 max-w-2xl leading-relaxed">
              <span className="font-arabic text-ink-900 text-2xl align-middle">بلدي</span>
              {" — "}
              Baladi is the mobile-first infrastructure that turns every remittance into an optional investment in a verified
              small business in the sender&apos;s own hometown, with their family as the local due-diligence partner.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#approach" className="btn-primary">See how it works →</a>
              <a href="#founder" className="btn-ghost">About the founder</a>
            </div>
          </Reveal>

          <Reveal delay={540}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
              <Stat num={<><Counter prefix="$" to={32} suffix="B" /></>} label="Annual remittances to Egypt" />
              <Stat num={<><Counter to={9.5} decimals={1} suffix="M" /></>} label="Egyptians living abroad" />
              <Stat num={<><Counter to={40} suffix="M" /></>} label="Informal workers without capital" />
              <Stat num={<><Counter prefix="$" to={640} suffix="M" /></>} label="Redirected at just 2% capture" />
            </div>
          </Reveal>
        </div>

        <a
          href="#need"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-500 hover:text-ink-900 text-xs tracking-[0.3em] uppercase flex flex-col items-center gap-2"
        >
          scroll
          <span className="w-px h-8 bg-gradient-to-b from-ink-500 to-transparent" />
        </a>
      </section>

      <SectionTransition from="Hook" to="Play with the math" index={0} />

      {/* ========== INTERACTIVE HOOK ========== */}
      <section className="relative px-6 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <ImpactCalculator />
          </Reveal>
        </div>
      </section>

      <SectionTransition from="The numbers" to="Need" index={1} />

      {/* ========== NEED ========== */}
      <Section id="need" kicker="Need" title={<>Two unmet needs,<br/><span className="text-highlight">one broken connection.</span></>}>
        <Reveal>
          <p className="text-lg text-ink-500 leading-relaxed max-w-4xl">
            A construction foreman in Milan sends €600 every month to his mother in Minya. Three streets away, his cousin&apos;s
            bakery is dying for lack of €5,000 to buy a new oven. The cousin never asks. The foreman never knows. The capital
            never connects — even though the trust, the information, and the motivation are all already in place.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          <Reveal delay={100}>
            <div className="card p-8 h-full">
              <div className="chip mb-4">Need 1</div>
              <h3 className="text-2xl font-bold mb-4 text-ink-900">The diaspora wants to matter at home.</h3>
              <p className="text-ink-500 leading-relaxed">
                9.5M Egyptians abroad — 6M in the Gulf, 1M in Europe (Italy the largest hub), 500K in North America. Young,
                educated, earning in hard currency. IOM and CBE surveys repeatedly show they want to <em>invest</em> — not just
                support. Today they have no regulated way to do this unless they already own land.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-ink-700">
                <Bullet>Emotional capital sitting idle.</Bullet>
                <Bullet>Diaspora bonds: modest, macro-level, no line of sight.</Bullet>
                <Bullet>&gt;80% of 30 interviewees said they&apos;d invest if a mechanism existed.</Bullet>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="card p-8 h-full">
              <div className="chip mb-4">Need 2</div>
              <h3 className="text-2xl font-bold mb-4 text-ink-900">Egyptian SMEs are starving while cash rains.</h3>
              <p className="text-ink-500 leading-relaxed">
                IFC MSME Finance Gap: <strong className="text-ink-900">$30–40B</strong> unmet demand — almost exactly the size
                of the annual remittance flow. 85% of SME owners name financing as their top barrier. Microfinance is punishing
                (25–35%). Banks lend to Cairo corporates only.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-ink-700">
                <Bullet>No path to €3,000 for a workshop in Sohag.</Bullet>
                <Bullet>Trust exists. A legal rail does not.</Bullet>
                <Bullet>Sender and receiver are relatives — the data is already there.</Bullet>
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <SectionTransition from="Need" to="Approach" index={2} />

      {/* ========== APPROACH ========== */}
      <Section id="approach" kicker="Approach" title={<>Send money as usual — <span className="text-highlight">and build a business three streets away.</span></>}>
        <Reveal>
          <p className="text-lg text-ink-500 max-w-4xl leading-relaxed">
            A new financial primitive: hyperlocal, family-mediated, diaspora-to-SME investment, <em>embedded inside</em> the
            remittance flow. We don&apos;t compete with Wise or InstaPay — we ride on them.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 mb-4">
            <RemittanceFlowSvg />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-6">
            <FlowVisual />
          </div>
        </Reveal>

        <div className="mt-20">
          <Reveal>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-ink-900">How one transfer becomes two destinations</h3>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Open Baladi", d: "Ahmed, a nurse in Bergamo, sets up a €500 transfer to his mother in Asyut — same flow he already uses." },
              { t: "See three verified opportunities", d: "A textile workshop (revenue-share, 11% IRR), a dairy farm (sukuk, 9%), a Juzuuur guesthouse partnership." },
              { t: "Allocate with one tap", d: "€150 as investment; €350 continues as family transfer." },
              { t: "The family witness loop", d: "WhatsApp to Mom: 'Ahmed is investing in Al-Noor Workshop. You're the local witness — confirm or flag.'" },
              { t: "Disbursement in EGP", d: "Funds move via a CBE-licensed PSP. The SME gets growth capital in weeks, not quarters." },
              { t: "Returns, your choice of currency", d: "Monthly one-line update in EUR or EGP, with optional photo/video from the SME." },
            ].map((s, i) => (
              <Reveal key={i} delay={70 * i}>
                <div className="card p-6 h-full">
                  <div className="w-10 h-10 rounded-xl bg-yellow-400 flex items-center justify-center font-bold text-ink-900 mb-4">
                    {i + 1}
                  </div>
                  <h4 className="font-bold mb-2 text-ink-900">{s.t}</h4>
                  <p className="text-sm text-ink-500 leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-[260px_1fr] gap-8 items-center mb-10">
          <Reveal>
            <TrustTriangleSvg />
          </Reveal>
          <Reveal delay={150}>
            <div>
              <div className="chip mb-3">Design innovations</div>
              <h3 className="text-2xl md:text-3xl font-bold text-ink-900">
                Three people. One loop. <span className="text-highlight">An advantage no competitor can buy.</span>
              </h3>
              <p className="text-ink-500 mt-3 leading-relaxed">
                Diaspora investor, local family witness, vetted SME — connected on one rail, in
                real time, with real accountability.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: "👁", t: "The family-witness trust loop", d: "Traditional crowdfunding loses billions to fraud because investors and entrepreneurs are strangers. Baladi's insight: the diaspora already has a verified human — their mother, brother, cousin — physically next to the SME. Families are paid €2–€5 per verification." },
            { icon: "⚖️", t: "Instrument flexibility", d: "Revenue-share notes, sukuk-compliant quasi-equity (critical for the 50% of diaspora in the Gulf), and true micro-equity in select verticals — avoiding the EU MiFID II / Egyptian FRA minefield." },
            { icon: "💱", t: "Currency duality", d: "Returns in EGP to reinvest, or in EUR/USD to withdraw to a diaspora bank. A meaningful FX hedge that pure remittance offers zero of." },
            { icon: "🧩", t: "Embedded, not standalone", d: "We partner with InstaPay, Wise, or a CBE-licensed PSP so Baladi appears inside existing flows. We never ask the diaspora to change where they send money." },
          ].map((f, i) => (
            <Reveal key={i} delay={70 * i}>
              <div className="card card-accent p-7 h-full">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h4 className="font-bold text-lg mb-2 text-ink-900">{f.t}</h4>
                <p className="text-ink-700 leading-relaxed text-sm">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Juzuuur vertical */}
        <Reveal>
          <div className="mt-20 relative overflow-hidden rounded-3xl border border-ink-200 bg-gradient-to-br from-[#141418] via-[#0f0f14] to-[#0a0a0c]">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-yellow-500/15 rounded-full blur-[100px]" />
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-yellow-500/8 rounded-full blur-[120px]" />
            </div>

            <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 p-6 sm:p-10 md:p-14">
              {/* LEFT — narrative */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-yellow-500 font-semibold">
                    Phase 1 vertical
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-yellow-500/40 to-transparent" />
                </div>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] text-ink-900 mb-6">
                  Juzuuur solves the{" "}
                  <span className="text-yellow-500">cold-start problem</span>{" "}
                  on day one.
                </h3>

                <p className="text-ink-700 leading-relaxed mb-5">
                  I already founded{" "}
                  <a
                    href="https://juzuuur.com"
                    target="_blank"
                    className="text-yellow-500 font-semibold hover:underline decoration-yellow-500/60 underline-offset-4"
                  >
                    juzuuur.com
                  </a>
                  {" "}— an Egyptian tourism real estate company with a curated inventory of guesthouses and boutique
                  lodges. Today most of these assets get sold to Gulf and European buyers, accelerating foreign capture of
                  Egyptian tourism real estate.
                </p>

                <div className="relative pl-5 border-l-2 border-yellow-500 my-7">
                  <p className="text-lg sm:text-xl font-semibold leading-snug text-ink-900">
                    Baladi flips that. An Egyptian in Milan can own a share of a 12-room guesthouse in Luxor, earn yield from
                    nightly rentals, and stay in the property they co-own.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { v: "10+", l: "Pilot assets" },
                    { v: "Day 1", l: "Deal inventory" },
                    { v: "100%", l: "Diaspora-owned" },
                  ].map((m, i) => (
                    <div key={i} className="rounded-xl border border-ink-200 p-4">
                      <div className="text-2xl sm:text-3xl font-bold text-yellow-500 tabular-nums">{m.v}</div>
                      <div className="text-[10px] uppercase tracking-widest text-ink-500 mt-1">{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — asset card stack */}
              <div className="relative flex items-center justify-center">
                <AssetCardStack />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Business model */}
        <div className="mt-20">
          <Reveal>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-ink-900">Business model</h3>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { v: "3%", l: "Origination fee", s: "paid by SME on capital deployed" },
              { v: "1%", l: "Structuring fee", s: "paid by investor at deal close" },
              { v: "1%/yr", l: "AUM fee", s: "on active portfolio" },
              { v: "4–6%", l: "Juzuuur vertical", s: "asset-management margin" },
            ].map((m, i) => (
              <Reveal key={i} delay={60 * i}>
                <div className="card p-6 h-full">
                  <div className="text-5xl font-bold text-ink-900">{m.v}</div>
                  <div className="mt-3 font-semibold text-ink-900">{m.l}</div>
                  <div className="text-xs text-ink-500 mt-1">{m.s}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Roadmap */}
        <div className="mt-20">
          <Reveal>
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-ink-900">Roadmap</h3>
          </Reveal>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-500 via-yellow-300 to-ink-200 md:-translate-x-px" />
            {[
              { p: "Months 0–6", t: "Build trust, build waitlist", d: "Landing page, 500-person waitlist in Italy and UAE, 10 pilot SMEs (3 Juzuuur). Apply to the Egyptian FRA sandbox." },
              { p: "Months 6–18", t: "MVP in 3×3", d: "Launch in Italy, UAE, Saudi × Minya, Sohag, Aswan. €2M capital deployed. Target €250K revenue." },
              { p: "Months 18–36", t: "Scale to all of Egypt", d: "27 governorates, all GCC and EU-27 origin countries, full sukuk product line-up." },
              { p: "Years 3–5", t: "Regional expansion", d: "Replicate in Morocco, Lebanon, Philippines — each a $25B+ remittance corridor with the same structural gap." },
            ].map((r, i) => (
              <Reveal key={i} delay={60 * i}>
                <div className={`relative flex gap-6 pb-10 md:pb-14 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className="md:w-1/2 md:pr-10 md:pl-10 pl-12">
                    <div className={`card p-6 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                      <div className="text-xs uppercase tracking-widest text-yellow-700 font-semibold">{r.p}</div>
                      <h4 className="text-lg font-bold mt-1 text-ink-900">{r.t}</h4>
                      <p className="text-sm text-ink-500 mt-2 leading-relaxed">{r.d}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 top-4 -translate-x-1/2 w-4 h-4 rounded-full bg-yellow-400 border-2 border-ink-900 animate-pulse-glow" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <SectionTransition from="Approach" to="Benefits" index={3} />

      {/* ========== BENEFITS ========== */}
      <Section id="benefits" kicker="Benefits" title={<>Quantitative — <span className="text-highlight">and substantially better.</span></>}>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { aud: "For the diaspora sender", icon: "🌍", bullets: [
              "8–15% IRR (EGP), EUR/USD withdrawal option — vs 0% on a plain remittance.",
              "Tangible, visible impact in the exact village they come from. Photos, updates, return-visit in a co-owned property.",
              "FX optionality: hedge against EGP devaluation — a feature no remittance channel offers.",
              "Regulated, documented, tax-trackable vs today's 'God willing he pays me back'.",
            ]},
            { aud: "For the Egyptian SME", icon: "🏪", bullets: [
              "Cost of capital 6–12% all-in vs 25–35% microfinance or 40%+ informal.",
              "Weeks to fund vs 6–12 months of bank bureaucracy with frequent rejection.",
              "Non-financial capital: mentorship, export channels, cross-border market access.",
            ]},
            { aud: "For the receiving family", icon: "🏡", bullets: [
              "Paid micro-role as local due-diligence witness (€2–€5 per verification).",
              "Elevated from passive recipient to active economic partner.",
            ]},
            { aud: "For Egypt", icon: "🇪🇬", bullets: [
              "Productive capital formation in governorates left behind by Cairo-centric finance.",
              "Currency stability: EGP-denominated productive assets vs consumption imports.",
              "Rural jobs, less rural-urban migration, less pressure on Cairo.",
            ]},
          ].map((b, i) => (
            <Reveal key={i} delay={70 * i}>
              <div className="card p-7 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="text-3xl">{b.icon}</div>
                  <h3 className="font-bold text-lg text-ink-900">{b.aud}</h3>
                </div>
                <ul className="space-y-3">
                  {b.bullets.map((x, j) => (
                    <li key={j} className="flex gap-3 text-ink-700 text-sm leading-relaxed">
                      <span className="mt-0.5 text-yellow-700">✓</span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-14 relative rounded-3xl overflow-hidden border border-ink-200 bg-gradient-to-br from-[#141418] to-[#0a0a0c]">
            <div className="absolute inset-0 pointer-events-none opacity-60">
              <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/20 rounded-full blur-[100px]" />
            </div>
            <div className="relative grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 p-8 md:p-14 items-center">
              <div className="flex md:flex-col items-baseline md:items-start gap-4 md:gap-2 border-b md:border-b-0 md:border-r border-yellow-500/20 pb-6 md:pb-0 md:pr-12">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-yellow-500 font-semibold mb-1">Capture rate</div>
                  <div className="text-7xl md:text-9xl font-bold text-yellow-500 leading-none tabular-nums">2%</div>
                </div>
                <div className="md:mt-6">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-yellow-500 font-semibold mb-1">Redirected / year</div>
                  <div className="text-4xl md:text-5xl font-bold text-ink-900 leading-none tabular-nums">$640M</div>
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-ink-500 font-semibold mb-3">The headline claim</div>
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-ink-900">
                  A single percentage point shift takes $640M/year out of consumption and puts it
                  into productive SME capital — a deployment larger than the entire annual lending
                  portfolio of Egypt&apos;s largest microfinance institution.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <SectionTransition from="Benefits" to="Competition" index={4} />

      {/* ========== COMPETITION ========== */}
      <Section id="competition" kicker="Competition" title={<>Every competitor is missing at least one <span className="text-highlight">essential ingredient.</span></>}>
        <Reveal>
          <p className="text-lg text-ink-500 max-w-4xl leading-relaxed">
            (a) remittance-moment integration, (b) hyperlocal match to the sender&apos;s own village, (c) the family-witness
            trust loop. Baladi is the only platform to combine all three.
          </p>
        </Reveal>

        <div className="mt-12 space-y-3">
          {[
            { name: "Wise / Remitly / InstaPay", does: "Moves money cheaply.", why: "Zero investment layer. We partner with these rails, not replace them." },
            { name: "Thndr / Bokra", does: "Let locals buy listed equities or sukuk.", why: "Built for affluent Cairenes. No remittance integration, no hometown tie, no diaspora onboarding." },
            { name: "Egyptian diaspora bonds", does: "Sovereign debt for diaspora.", why: "Macro-level, invisible use of funds, no SME impact, no returns flexibility." },
            { name: "Kiva / charity microloans", does: "0% loans worldwide.", why: "Charity, not investment. No return for sender. Not scalable to SME growth capital." },
            { name: "Direct informal family lending", does: "Cousin sends cousin money on trust.", why: "Opaque, illiquid, no legal recourse, family disputes, unscalable." },
            { name: "Gulf / EU real-estate buyers", does: "Wealthy diaspora buy apartments.", why: "Top 2% only. Capital locked. Accelerates foreign ownership of Egyptian assets — what Juzuuur+Baladi fight against." },
          ].map((c, i) => (
            <Reveal key={i} delay={40 * i}>
              <div className="card p-5 grid md:grid-cols-[1.2fr_1.5fr_2fr] gap-4 items-start">
                <div className="font-bold text-ink-900">{c.name}</div>
                <div className="text-sm text-ink-500">{c.does}</div>
                <div className="text-sm text-ink-700"><span className="text-yellow-700 font-bold">→</span> {c.why}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-14 relative overflow-hidden rounded-3xl border border-yellow-500/25 bg-gradient-to-br from-[#141418] via-[#0f0f14] to-[#0a0a0c]">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/15 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]" />
            </div>
            <div className="relative p-8 md:p-14">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-yellow-500" />
                <span className="text-xs uppercase tracking-[0.3em] text-yellow-500 font-semibold">
                  The reason we win
                </span>
              </div>
              <p className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] text-ink-900 max-w-5xl">
                We are the only platform that turns the diaspora&apos;s own{" "}
                <span className="text-yellow-500">mother</span>{" "}
                into the world&apos;s most reliable{" "}
                <span className="text-yellow-500">due-diligence officer</span>
                {" "}— an advantage no global crowdfunding competitor can ever buy.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <SectionTransition from="Competition" to="Impact" index={5} />

      {/* ========== IMPACT ========== */}
      <Section id="impact" kicker="Impact" title={<>What changes if this <span className="text-highlight">works.</span></>}>
        <div className="grid md:grid-cols-[1fr_260px] gap-10 items-center mb-16">
          <Reveal>
            <p className="text-lg text-ink-500 leading-relaxed">
              Baladi is not an incremental app. It is a new financial primitive. Here is what
              compounds when it works — across Egypt, and then across every $20B+ remittance
              corridor on earth.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <GrowthSvg />
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { n: "40M", l: "informal Egyptian workers", d: "gain a new, legitimate, affordable source of growth capital." },
            { n: "9.5M", l: "diaspora members", d: "can build in Egypt without returning — nostalgia converted into outcomes." },
            { n: "$600B+", l: "global corridors", d: "Morocco $11B, Lebanon $7B, Philippines $38B, Mexico $63B, Bangladesh $22B, Nigeria $20B." },
            { n: "↺", l: "brain drain, inverted", d: "the diaspora's economic contribution compounds at home without them physically returning." },
            { n: "↓", l: "foreign capture", d: "Egyptian tourism real estate stops being a Gulf acquisition target — it becomes diaspora-owned." },
            { n: "↑", l: "rural job creation", d: "less rural-urban migration; pressure eases on Cairo's overburdened infrastructure." },
          ].map((x, i) => (
            <Reveal key={i} delay={60 * i}>
              <div className="card p-7 h-full">
                <div className="text-6xl font-bold text-ink-900 mb-2">{x.n}</div>
                <div className="font-bold mb-2 text-ink-900">{x.l}</div>
                <div className="text-sm text-ink-500 leading-relaxed">{x.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <SectionTransition from="Impact" to="Ready" index={6} />

      {/* ========== READINESS ========== */}
      <section className="relative px-5 sm:px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <ReadinessScorecard />
          </Reveal>
        </div>
      </section>

      {/* ========== FOUNDER ========== */}
      <Section id="founder" kicker="Development &amp; Founder" title={<>What&apos;s already in place — <span className="text-highlight">and why me.</span></>}>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <div className="space-y-4">
              {[
                { t: "Founder–market fit", d: "Egyptian diaspora member studying in Italy. I've sent and received remittances, and watched this dynamic inside my own family." },
                { t: "Operating experience", d: "Founded juzuuur.com (tourism real estate) and Ya Egypt (travel), both in production. Real SME relationships, hospitality asset inventory, cross-border payment experience." },
                { t: "Problem validation", d: "30+ informal interviews with diaspora in Italy and UAE; >80% said they'd invest in a vetted hometown business if the mechanism existed." },
                { t: "Regulatory path mapped", d: "Egypt's FRA crowdfunding regulations (2022) and the EU ECSP regulation (2021) together provide a clear legal corridor. No novel legislation required." },
                { t: "Next 90 days", d: "Waitlist landing page, 50 diaspora interviews, 3 pilot Juzuuur deals structured as revenue-share notes, FRA sandbox application." },
              ].map((x, i) => (
                <div key={i} className="card p-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-yellow-400 flex-shrink-0 flex items-center justify-center text-sm font-bold text-ink-900">{i + 1}</div>
                    <div>
                      <h4 className="font-bold mb-1 text-ink-900">{x.t}</h4>
                      <p className="text-sm text-ink-500 leading-relaxed">{x.d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="card card-accent p-8 md:sticky md:top-28">
              <div className="chip mb-5">Why a Master&apos;s</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-5 text-ink-900">I&apos;m a founder — not yet a finished one.</h3>
              <p className="text-ink-700 leading-relaxed mb-5">
                I&apos;ve built two companies from nothing, but I&apos;ve also hit the ceiling of what pattern-matching and
                instinct can do. Baladi sits at the intersection of regulated finance, cross-border entrepreneurship, and
                venture-scale business design.
              </p>
              <ul className="space-y-3 text-sm text-ink-700">
                <li className="flex gap-3"><span className="text-yellow-700 font-bold">1.</span><span><strong>Cross-border, multilingual environment</strong> — the best cultural setting to design a product whose users span European and Arabic markets.</span></li>
                <li className="flex gap-3"><span className="text-yellow-700 font-bold">2.</span><span><strong>EU regulatory ecosystem</strong> (ECSP, MiCA, PSD3) governs Baladi&apos;s European side — I need structured access to it.</span></li>
                <li className="flex gap-3"><span className="text-yellow-700 font-bold">3.</span><span><strong>Rigorous entrepreneurial training</strong> — to move from founder-operator to venture architect.</span></li>
              </ul>
              <p className="text-ink-500 text-sm mt-6 italic leading-relaxed">
                I am not applying to learn whether I want to be an entrepreneur. I am applying because I already am one, and
                because the next company I build will be materially larger than the ones I&apos;ve built so far — and I want to
                build it correctly.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ========== CLOSING ========== */}
      <section id="closing" className="relative py-20 sm:py-28 px-5 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <ReviewerNote />
          </Reveal>
        </div>

        <div className="relative max-w-4xl mx-auto text-center mt-24">
          <Reveal>
            <div className="inline-block animate-bounce-soft">
              <LogoArabicWord size={120} className="mb-4" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-ink-900">
              Build your hometown <span className="text-highlight">from anywhere.</span>
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-5 text-base text-ink-500 max-w-2xl mx-auto">
              A venture pitch for an Entrepreneurship &amp; Innovation Master&apos;s application.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
              <a href="https://juzuuur.com" target="_blank" className="card p-5 hover:-translate-y-1 transition">
                <div className="text-xs uppercase tracking-widest text-yellow-700 font-semibold">Existing company</div>
                <div className="font-bold mt-1 text-ink-900">juzuuur.com →</div>
                <div className="text-xs text-ink-500 mt-1">Tourism real estate · Phase 1 vertical</div>
              </a>
              <a href="https://instagram.com/yaegypt" target="_blank" className="card p-5 hover:-translate-y-1 transition">
                <div className="text-xs uppercase tracking-widest text-yellow-700 font-semibold">Existing brand</div>
                <div className="font-bold mt-1 text-ink-900">@yaegypt →</div>
                <div className="text-xs text-ink-500 mt-1">Travel · founder operating experience</div>
              </a>
              <div className="card p-5">
                <div className="text-xs uppercase tracking-widest text-yellow-700 font-semibold">Founder</div>
                <div className="font-bold mt-1 text-ink-900">Kirolos William</div>
                <div className="text-xs text-ink-500 mt-1">Egyptian diaspora · Italy</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={480}>
            <div className="mt-10 text-xs text-ink-500 flex flex-wrap justify-center gap-x-6 gap-y-2">
              <span>Regulated path: Egypt FRA + EU ECSP</span>
              <span>·</span>
              <span>Built on existing remittance rails</span>
              <span>·</span>
              <span>Phase 1 seeded via Juzuuur</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="border-t border-ink-200 px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink-500">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7">
              <div className="w-7 h-7 rounded-lg bg-yellow-400 flex items-center justify-center">
                <LogoMark />
              </div>
            </div>
            <span>Baladi · Kirolos William</span>
          </div>
          <div className="flex gap-6">
            <a href="https://juzuuur.com" target="_blank" className="hover:text-ink-900">Juzuuur</a>
            <a href="https://instagram.com/yaegypt" target="_blank" className="hover:text-ink-900">@yaegypt</a>
            <a href="#top" className="hover:text-ink-900">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ---------- helpers ---------- */

function Section({
  id,
  kicker,
  title,
  children,
}: {
  id?: string;
  kicker: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative py-20 sm:py-28 md:py-36 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="chip mb-5 sm:mb-6">{kicker}</div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight sm:leading-[1.05] max-w-5xl mb-8 sm:mb-10 text-ink-900">
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function Stat({ num, label }: { num: React.ReactNode; label: string }) {
  return (
    <div>
      <div className="text-4xl md:text-5xl font-bold text-ink-900">{num}</div>
      <div className="text-xs md:text-sm text-ink-500 mt-1">{label}</div>
    </div>
  );
}

function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="divider-glow" />
    </div>
  );
}

function Dot() {
  return <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />;
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2.5"><span className="text-yellow-700 font-bold">✓</span><span>{children}</span></li>
  );
}
