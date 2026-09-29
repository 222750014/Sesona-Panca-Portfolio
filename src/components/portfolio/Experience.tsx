import { GraduationCap, Rocket } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const focus = [
  "AI Foundations",
  "Prompt Engineering",
  "Applied AI",
  "Python",
  "Machine Learning",
  "Portfolio Development",
];

const learning = [
  "Generative AI",
  "Large Language Models",
  "Data Science",
  "Conversational AI",
  "Web Development",
];

export function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Education & Learning"
          title="Learning & Development"
          lead="A formal foundation in ICT, extended through focused, project-based AI learning."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="glass glow-border h-full rounded-2xl p-6 sm:p-7">
              <span className="glass flex size-11 items-center justify-center rounded-xl">
                <GraduationCap className="size-5 text-cyan" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">Diploma in ICT Applications Development</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                This qualification provided a foundation in application development, programming and
                software development — the engineering grounding behind everything I build today.
              </p>
            </article>
          </Reveal>

          <Reveal delay={90}>
            <article className="glass glow-border h-full rounded-2xl p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <span className="glass flex size-11 items-center justify-center rounded-xl">
                  <Rocket className="size-5 text-violet" aria-hidden="true" />
                </span>
                <span className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                  September 2026
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">Artificial Intelligence Bootcamp</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {focus.map((f) => (
                  <li key={f} className="rounded-full bg-secondary px-3 py-1.5 text-xs text-secondary-foreground">
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        <Reveal delay={140} className="mt-6">
          <div className="glass rounded-2xl p-6">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-cyan">
              Currently learning
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {learning.map((l) => (
                <li key={l} className="rounded-full border px-3 py-1.5 text-xs text-muted-foreground">
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
