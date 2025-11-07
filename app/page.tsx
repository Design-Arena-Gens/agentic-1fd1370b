import { FAQ } from "@/components/FAQ";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Hero } from "@/components/Hero";
import { MomentumTimeline } from "@/components/MomentumTimeline";
import { PricingCard } from "@/components/PricingCard";
import { ContactForm } from "@/components/ContactForm";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <FeatureGrid />
      <MomentumTimeline />
      <PricingCard />
      <FAQ />
      <section className="section-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Roll out Aurora with a dedicated intelligence partner
            </h2>
            <p className="text-lg text-white/70">
              Share a few details about your team and we&apos;ll orchestrate a hands-on workshop tailored to your operating cadence.
            </p>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold text-primary-100">Trusted by high-velocity teams</p>
              <p className="mt-3 text-sm text-white/70">
                Aurora powers modern operating rhythms for product-led growth companies, enterprise innovation labs, and mission-critical operating centers.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <footer className="section-container pb-16 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Aurora Insights. Crafted for decisive teams.
      </footer>
    </main>
  );
}
