"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

const initialState = {
  name: "",
  email: "",
  company: "",
  goal: ""
};

type FormState = typeof initialState;

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState((previous) => ({ ...previous, [field]: event.target.value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card-surface text-center">
        <h3 className="text-2xl font-semibold text-white">We&apos;ll reach out shortly</h3>
        <p className="mt-3 text-sm text-white/70">
          A strategist from our team will contact you within one business day to schedule a live walkthrough of Aurora.
        </p>
        <button
          className="mt-6 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white/80 transition hover:border-white/40"
          type="button"
          onClick={() => {
            setFormState(initialState);
            setSubmitted(false);
          }}
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form className="card-surface space-y-6" id="get-started" onSubmit={handleSubmit}>
      <div>
        <h3 className="text-2xl font-semibold text-white">Partner with Aurora</h3>
        <p className="mt-2 text-sm text-white/70">
          Share a bit about your team and we&apos;ll tailor a launch plan that meets you where you are today.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="space-y-2 text-sm">
          <span className="text-white">Name</span>
          <input
            className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white placeholder:text-white/40 focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-400/60"
            required={true}
            type="text"
            value={formState.name}
            onChange={handleChange("name")}
          />
        </label>
        <label className="space-y-2 text-sm">
          <span className="text-white">Work email</span>
          <input
            className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white placeholder:text-white/40 focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-400/60"
            required={true}
            type="email"
            value={formState.email}
            onChange={handleChange("email")}
          />
        </label>
        <label className="space-y-2 text-sm sm:col-span-2">
          <span className="text-white">Company</span>
          <input
            className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white placeholder:text-white/40 focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-400/60"
            placeholder="e.g. Northwind Labs"
            required={true}
            type="text"
            value={formState.company}
            onChange={handleChange("company")}
          />
        </label>
        <label className="space-y-2 text-sm sm:col-span-2">
          <span className="text-white">What outcome are you targeting?</span>
          <textarea
            className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white placeholder:text-white/40 focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-400/60"
            placeholder="Tell us about the operating motion you want to transform."
            required={true}
            value={formState.goal}
            onChange={handleChange("goal")}
          />
        </label>
      </div>
      <button
        className="w-full rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-2xl shadow-primary-500/40 transition hover:bg-primary-400"
        type="submit"
      >
        Request a strategy session
      </button>
    </form>
  );
}
