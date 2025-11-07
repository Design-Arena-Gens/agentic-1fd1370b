import { faqs } from "@/data/insights";

export function FAQ() {
  return (
    <section className="section-container">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Answers when you need them</h2>
        <p className="mt-4 text-lg text-muted">
          Your team deserves clarity. Aurora keeps everyone informed with transparent onboarding, observability, and ROI tracking baked in.
        </p>
      </div>
      <div className="mt-12 space-y-4">
        {faqs.map((faq) => (
          <details
            className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30"
            key={faq.question}
          >
            <summary className="flex cursor-pointer items-center justify-between gap-6 text-left text-lg font-medium text-white">
              <span>{faq.question}</span>
              <span className="text-sm text-primary-200 transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 text-sm text-white/70">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
