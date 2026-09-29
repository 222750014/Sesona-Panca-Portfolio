import { Reveal, SectionHeading } from "./Reveal";

const stages = [
  {
    week: "Week 1",
    title: "AI Foundations & Chatbot Development",
    topics: [
      "AI fundamentals",
      "Generative AI",
      "Large Language Models",
      "Prompt engineering",
      "Conversational AI",
      "Chatbot logic",
    ],
    project: "AI Chatbot",
  },
  {
    week: "Week 2",
    title: "Content Generation & AI Productivity",
    topics: ["Generative AI", "Content generation", "Prompt libraries", "Prompt optimisation"],
    project: "AI Content Generator",
  },
  {
    week: "Week 3",
    title: "Sentiment Analysis & Data Insights",
    topics: ["Python", "Data analysis", "Sentiment analysis", "AI-assisted insights"],
    project: "Sentiment Analysis Tool",
  },
  {
    week: "Week 4",
    title: "AI Solution Development & Industry Application",
    topics: [
      "End-to-end AI solution development",
      "Industry application",
      "AI solution architecture",
      "Portfolio development",
    ],
    project: "Industry AI Solution",
  },
];

export function Journey() {
  return (
    <section id="journey" className="relative overflow-hidden">
      <div
        className="orb left-1/2 top-24 size-[22rem] -translate-x-1/2"
        style={{ background: "var(--violet)", opacity: 0.22 }}
        aria-hidden="true"
      />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="AI Journey"
          title="September 2026 Artificial Intelligence Bootcamp"
          lead="Four stages taking me from AI foundations through to an end-to-end industry solution."
        />

        <ol className="relative mt-14 space-y-6 border-l pl-8 sm:pl-12">
          {stages.map((stage, i) => (
            <Reveal as="li" key={stage.week} delay={i * 80} className="relative">
              <span
                className="pulse-dot absolute -left-[2.1rem] top-7 size-3 rounded-full sm:-left-[3.1rem]"
                style={{ background: "var(--cyan)" }}
                aria-hidden="true"
              />
              <article className="glass glow-border rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan">
                    {stage.week}
                  </p>
                  <p className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                    Project · {stage.project}
                  </p>
                </div>
                <h3 className="mt-3 text-lg font-semibold sm:text-xl">{stage.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {stage.topics.map((topic) => (
                    <li
                      key={topic}
                      className="rounded-full bg-secondary px-3 py-1.5 text-xs text-secondary-foreground"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
