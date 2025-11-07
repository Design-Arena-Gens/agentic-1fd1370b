export function PricingCard() {
  return (
    <section className="section-container">
      <div className="card-surface relative overflow-hidden">
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-primary-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="relative grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">Pricing that grows with your momentum</h2>
            <p className="text-lg text-white/70">
              Start with a focused pilot, then expand confidently as Aurora proves value across your organization. Every engagement includes a dedicated intelligence partner.
            </p>
            <ul className="grid gap-3 text-sm text-white/80 sm:grid-cols-2">
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500/40 text-sm text-white">1</span>
                Strategic onboarding and playbook design
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500/40 text-sm text-white">2</span>
                Unlimited internal collaborators
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500/40 text-sm text-white">3</span>
                AI-assisted insight narratives and alerts
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500/40 text-sm text-white">4</span>
                Secure data residency with granular governance
              </li>
            </ul>
          </div>
          <div className="relative rounded-3xl border border-white/10 bg-slate-950/60 p-8 text-center shadow-inner">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-200">Most teams begin here</p>
            <h3 className="mt-6 text-5xl font-semibold text-white">$4.2k</h3>
            <p className="mt-2 text-sm text-white/70">per team, billed monthly</p>
            <ul className="mt-8 space-y-3 text-sm text-white/80">
              <li>12-week go-live program</li>
              <li>Integrations with 50+ data sources</li>
              <li>Advanced governance and audit trails</li>
              <li>24/5 intelligence partner coverage</li>
            </ul>
            <a
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-2xl shadow-primary-500/40 transition hover:bg-primary-400"
              href="#get-started"
            >
              Book a discovery call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
