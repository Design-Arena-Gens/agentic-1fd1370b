import { momentumMilestones } from "@/data/insights";

export function MomentumTimeline() {
  return (
    <section className="section-container">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Reach operating altitude in weeks, not quarters
          </h2>
          <p className="text-lg text-muted">
            From kickoff to measurable outcomes, Aurora guides your teams through a curated journey that accelerates adoption and compounds value.
          </p>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">Enablement blueprint</p>
            <p className="mt-3 text-sm text-white/70">
              A dedicated strategist partners with you to co-create rituals, dashboards, and automation sequences tailored to your company rhythm.
            </p>
          </div>
        </div>
        <ol className="space-y-6">
          {momentumMilestones.map((milestone, index) => (
            <li className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6" key={milestone.label}>
              <span className="absolute -top-6 right-4 text-8xl font-black text-primary-500/5">
                {index + 1}
              </span>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">{milestone.label}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{milestone.headline}</h3>
              <p className="mt-2 text-sm text-white/70">{milestone.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
