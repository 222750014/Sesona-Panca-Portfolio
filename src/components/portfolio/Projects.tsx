import { Github, ArrowUpRight } from "lucide-react";
import { GITHUB_URL } from "@/lib/portfolio-assistant";
import { Reveal, SectionHeading } from "./Reveal";

const projects = [
  {
    n: "01",
    week: "Week 1",
    title: "AI Chatbot",
    description:
      "An AI chatbot prototype designed to demonstrate conversational AI, structured prompting and chatbot interaction.",
    problem:
      "Visitors and recruiters need quick, reliable answers about my background without reading a full portfolio.",
    solution:
      "A conversational assistant with structured prompt design and a controlled knowledge base, embedded directly in this site.",
    tech: ["Python", "JavaScript", "Prompt Engineering", "Conversational AI"],
    features: [
      "Structured prompt design",
      "Quick question shortcuts",
      "Typing and message animation",
      "Extensible response layer",
    ],
    status: "built" as const,
  },
  {
    n: "02",
    week: "Week 2",
    title: "AI Content Generator",
    description:
      "An AI-powered content generation project using structured prompts and prompt optimisation.",
    tech: ["Generative AI", "Prompt Libraries", "Prompt Optimisation"],
    status: "soon" as const,
  },
  {
    n: "03",
    week: "Week 3",
    title: "Sentiment Analysis Tool",
    description:
      "A Python-based AI project designed to analyse sentiment and generate meaningful insights from text data.",
    tech: ["Python", "Data Analysis", "Sentiment Analysis"],
    status: "soon" as const,
  },
  {
    n: "04",
    week: "Week 4",
    title: "Industry AI Solution",
    description:
      "An end-to-end AI solution demonstrating how AI can be applied to a real-world industry problem.",
    tech: ["AI Architecture", "End-to-end Development", "Industry Application"],
    status: "soon" as const,
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
          title="Work from the AI Bootcamp"
          lead="One project per bootcamp week. Completed work is documented in full; upcoming work is marked clearly."
        />

        <ul className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 80}>
              <article className="glass glow-border flex h-full flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-3xl font-bold text-gradient">{p.n}</span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs ${
                      p.status === "built"
                        ? "bg-secondary text-cyan"
                        : "border text-muted-foreground"
                    }`}
                  >
                    {p.status === "built" ? p.week : "Coming Soon"}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

                {p.problem ? (
                  <dl className="mt-5 space-y-3 border-t pt-5 text-sm">
                    <div>
                      <dt className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-cyan">
                        Problem
                      </dt>
                      <dd className="mt-1 text-muted-foreground">{p.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-cyan">
                        Solution
                      </dt>
                      <dd className="mt-1 text-muted-foreground">{p.solution}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-cyan">
                        Key features
                      </dt>
                      <dd className="mt-1 text-muted-foreground">{p.features?.join(" · ")}</dd>
                    </div>
                  </dl>
                ) : null}

                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li key={t} className="rounded-full border px-3 py-1.5 text-xs text-muted-foreground">
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-3 pt-1">
                  {p.status === "built" ? (
                    <>
                      <a
                        href="#assistant"
                        className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm"
                      >
                        View Project
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </a>
                      <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="btn-ghost inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm"
                      >
                        <Github className="size-4" aria-hidden="true" />
                        GitHub
                      </a>
                    </>
                  ) : (
                    <span className="rounded-full border px-5 py-2.5 text-sm text-muted-foreground">
                      In development
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
