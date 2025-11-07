import { featureHighlights } from "@/data/insights";

export function FeatureGrid() {
  return (
    <section className="section-container" id="product">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Build operating clarity that scales</h2>
        <p className="mt-4 text-lg text-muted">
          Aurora stitches together your fragmented toolchain into one intuitive workspace that keeps teams aligned and decisive in any situation.
        </p>
      </div>
      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {featureHighlights.map((feature) => (
          <article className="card-surface relative overflow-hidden" key={feature.title}>
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary-400/20 blur-3xl" />
            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-4 text-sm text-white/80">{feature.description}</p>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-200">
              Learn more
              <span aria-hidden>→</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
