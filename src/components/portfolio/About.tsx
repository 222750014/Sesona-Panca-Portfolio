import { Cpu, MapPin, GraduationCap, CalendarDays } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const facts = [
  { icon: GraduationCap, label: "Qualification", value: "Diploma in ICT: Application Development, CPUT" },
  { icon: CalendarDays, label: "Currently", value: "Graduate Programme: Data Analytics (Sept 2026 – present)" },
  { icon: MapPin, label: "Location", value: "Cape Town, South Africa" },
  { icon: Cpu, label: "Interests", value: "Data, AI prompt engineering & practical AI" },
];

const foundation = ["Java", "Python", "SQL", "JavaScript", "React", "HTML", "CSS"];

export function About() {
  return (
    <section id="about" className="relative">
      <div className="section-shell grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="About Me"
            title="An ICT graduate turning data and technology into practical solutions."
            lead="I completed my Diploma in ICT: Application Development at Cape Peninsula University of Technology (CPUT) and I'm now on a graduate programme focused on Data Analytics, professional development and applied AI."
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
              I'm especially interested in AI prompt engineering and using data to improve business
              processes. I'm committed to learning, solving problems, working well in teams and
              growing into a trusted data and IT professional.
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
