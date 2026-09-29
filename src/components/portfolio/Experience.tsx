import { Award, ExternalLink, GraduationCap, Rocket, School } from "lucide-react";
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

const certificates = [
  {
    title: "Google AI Essentials",
    issuer: "Google",
    date: "21 Sep 2026",
    detail: "5-course Specialization",
    url: "https://coursera.org/verify/specialization/35NV9NVB4I25",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    date: "22 Sep 2026",
    url: "https://coursera.org/verify/A3KKPGZ5EAKD",
  },
  {
    title: "AI For Everyone",
    issuer: "DeepLearning.AI",
    date: "21 Sep 2026",
    url: "https://coursera.org/verify/J2Z3W9X74WGR",
  },
  {
    title: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM",
    date: "21 Sep 2026",
    url: "https://coursera.org/verify/J3QTGUCA9NQJ",
  },
  {
    title: "Discover the Art of Prompting",
    issuer: "Google",
    date: "21 Sep 2026",
    url: "https://coursera.org/verify/O64WDMD5EDD3",
  },
  {
    title: "Use AI Responsibly",
    issuer: "Google",
    date: "21 Sep 2026",
    url: "https://coursera.org/verify/OQ43CKJM9400",
  },
  {
    title: "Stay Ahead of the AI Curve",
    issuer: "Google",
    date: "21 Sep 2026",
    url: "https://coursera.org/verify/QDLVHDVK819V",
  },
  {
    title: "Introduction to AI",
    issuer: "Google",
    date: "18 Sep 2026",
    url: "https://coursera.org/verify/254SE7CX7ZRS",
  },
  {
    title: "Maximize Productivity With AI Tools",
    issuer: "Google",
    date: "18 Sep 2026",
    url: "https://coursera.org/verify/SQW99YJ2HITB",
  },
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
              <h3 className="mt-5 text-lg font-semibold">Diploma in ICT: Application Development</h3>
              <p className="mt-1 text-sm font-medium text-cyan">Cape Peninsula University of Technology</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Completed. A foundation in application development, programming, information systems,
                databases, software testing and problem-solving.
              </p>
            </article>
          </Reveal>

          <Reveal delay={90}>
            <article className="glass glow-border h-full rounded-2xl p-6 sm:p-7">
              <span className="glass flex size-11 items-center justify-center rounded-xl">
                <School className="size-5 text-violet" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">National Senior Certificate</h3>
              <p className="mt-1 text-sm font-medium text-violet">Cowan High School</p>
              <p className="mt-3 text-sm text-muted-foreground">2017–2021</p>
            </article>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-2">
            <article className="glass glow-border rounded-2xl p-6 sm:p-7">
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

        <Reveal delay={180} className="mt-6">
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

        <div className="mt-16 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-cyan">Verified learning</p>
            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">Certificates</h3>
          </div>
          <Award className="hidden size-8 text-violet sm:block" aria-hidden="true" />
        </div>

        <ul className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate, index) => (
            <Reveal key={certificate.title} delay={(index % 3) * 60}>
              <li className="glass glow-border flex h-full min-h-44 flex-col rounded-2xl p-5">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-cyan">
                    {certificate.issuer}
                  </span>
                  <span className="shrink-0 text-xs text-muted-foreground">{certificate.date}</span>
                </div>
                <h4 className="mt-4 text-base font-semibold leading-snug">{certificate.title}</h4>
                {certificate.detail ? (
                  <p className="mt-2 text-xs text-muted-foreground">{certificate.detail}</p>
                ) : null}
                <a
                  href={certificate.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-cyan hover:text-foreground"
                >
                  Verify credential
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
