"use client";

import { useState } from "react";

const personas = [
  {
    id: "ops",
    title: "Operations Leaders",
    description:
      "Orchestrate reliable execution while unlocking proactive visibility across every initiative."
  },
  {
    id: "revenue",
    title: "Revenue Teams",
    description:
      "Align marketing, sales, and success around a single source of truth that reacts in real time."
  },
  {
    id: "product",
    title: "Product Strategists",
    description:
      "Spot emerging adoption patterns and convert them into shippable momentum week over week."
  }
];

export function Hero() {
  const [activePersona, setActivePersona] = useState(personas[0]);

  return (
    <section className="section-container relative overflow-hidden">
      <div className="absolute -top-32 right-[-20%] hidden h-[600px] w-[600px] rounded-full bg-primary-400/30 blur-3xl lg:block" />
      <div className="relative flex flex-col gap-12 lg:flex-row lg:items-center">
        <div className="max-w-xl space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 shadow-lg">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Live intelligence for decisive teams
          </span>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Illuminate your next move with <span className="gradient-text">Aurora Insights</span>
          </h1>
          <p className="text-lg text-muted">
            Fuse data, decisions, and delivery in a single collaborative space. Aurora continuously learns from your workflows to surface the exact context your team needs to act.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-3 font-semibold text-white shadow-2xl shadow-primary-500/40 transition hover:bg-primary-400"
              href="#get-started"
            >
              Get started
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:border-white/40"
              href="#product"
            >
              See how it works
            </a>
          </div>
        </div>
        <div className="card-surface relative w-full max-w-lg">
          <div className="flex flex-wrap gap-3">
            {personas.map((persona) => (
              <button
                className={`flex-1 min-w-[140px] rounded-2xl border px-4 py-3 text-left transition ${
                  activePersona.id === persona.id
                    ? "border-primary-400 bg-primary-500/10 text-white"
                    : "border-white/10 bg-white/5 text-white/70 hover:border-white/30"
                }`}
                key={persona.id}
                type="button"
                onClick={() => setActivePersona(persona)}
              >
                <span className="block text-sm font-semibold">{persona.title}</span>
                <span className="mt-1 block text-xs text-white/70">Tap to explore</span>
              </button>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-inner">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">Adaptive narrative</p>
            <p className="mt-4 text-lg leading-relaxed text-white/90">{activePersona.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
