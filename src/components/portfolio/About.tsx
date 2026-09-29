import { Cpu, MapPin, GraduationCap, CalendarDays } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const facts = [
  { icon: GraduationCap, label: "Qualification", value: "Diploma in ICT Applications Development" },
  { icon: MapPin, label: "Location", value: "Port Elizabeth (Gqeberha), South Africa" },
  { icon: CalendarDays, label: "Born", value: "June 2004" },
  { icon: Cpu, label: "Current focus", value: "AI, Generative AI & Machine Learning" },
];

const foundation = [
  "Application development",
  "Programming",
  "Software engineering",
  "Problem solving",
  "Technology",
];

export function About() {
  return (
    <section id="about" className="relative">
      <div className="section-shell grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="About"
            title="Turning a foundation in software development into practical AI solutions."
            lead="My ICT Applications Development diploma gave me the engineering fundamentals. I'm now extending that foundation into artificial intelligence, generative AI and machine learning."
          />

          <Reveal delay={120} className="mt-8">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Foundation</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {foundation.map((item) => (
                <li key={item} className="glass rounded-full px-4 py-2 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200} className="mt-8">
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              That grounding in building real applications is what shapes how I approach AI: not as
              a novelty, but as a set of tools for designing systems, structuring prompts and
              solving practical problems with code.
            </p>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {facts.map((fact) => (
              <li key={fact.label} className="glass glow-border rounded-2xl p-5">
                <div className="flex items-start gap-4">
                  <span className="glass flex size-10 shrink-0 items-center justify-center rounded-xl">
                    <fact.icon className="size-4 text-cyan" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                      {fact.label}
                    </p>
                    <p className="mt-1 text-sm font-medium">{fact.value}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
