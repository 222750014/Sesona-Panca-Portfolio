import { Github, ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

type Project = {
  title: string;
  tag: string;
  problem: string;
  role: string;
  tech: string[];
  features: string[];
  url: string;
  /** Only set when a real repository exists. */
  github?: string;
};

/** Add new programme/bootcamp projects here — the cards render automatically. */
const projects: Project[] = [
  {
    title: "Creative Asset Orchestrator",
    tag: "AI-assisted web app",
    problem:
      "A web application built to explore how AI-assisted development can turn an idea into a working product quickly.",
    role: "Designed and built the application using AI-assisted development and prompt engineering.",
    tech: ["Lovable", "AI-assisted development", "Prompt engineering"],
    features: ["Live, working web application", "Built through structured prompting"],
    url: "https://preview--creative-asset-orchestrator.lovable.app/",
  },
  {
    title: "Sentiment Lab",
    tag: "Sentiment analysis & data insights",
    problem:
      "Turning written text into clear sentiment insights, so opinions and feedback are easier to understand at a glance.",
    role: "Built the project as practical work in sentiment analysis and data insights.",
    tech: ["Sentiment analysis", "Data insights"],
    features: ["Analyse text for sentiment", "Presents results as insights"],
    url: "https://celadon-sopapillas-f45568.netlify.app/analyze",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden">
      <div
        className="orb right-[-8rem] top-32 size-[22rem]"
        style={{ background: "var(--magenta)", opacity: 0.18 }}
        aria-hidden="true"
      />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          lead="Practical projects from my graduate programme and AI learning. More are added as they are completed."
        />

        <ul className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 80}>
              <article className="glass glow-border flex h-full flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-3xl font-bold text-gradient">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs text-cyan">{p.tag}</span>
                </div>

                <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>

                <dl className="mt-5 space-y-3 border-t pt-5 text-sm">
                  {[
                    ["Problem", p.problem],
                    ["My role", p.role],
                    ["Key features", p.features.join(" · ")],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-cyan">{k}</dt>
                      <dd className="mt-1 text-muted-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li key={t} className="rounded-full border px-3 py-1.5 text-xs text-muted-foreground">
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-3 pt-7">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm"
                  >
                    View Project
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                  {p.github ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="btn-ghost inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm"
                    >
                      <Github className="size-4" aria-hidden="true" />
                      GitHub
                    </a>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
