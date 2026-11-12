import { Cpu, MapPin, GraduationCap, CalendarDays } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const facts = [
  { icon: GraduationCap, label: "Qualification", value: "Diploma in ICT: Application Development, CPUT" },
  { icon: CalendarDays, label: "Currently", value: "Graduate Programme: Data Analytics (Sept 2026 – present)" },
  { icon: MapPin, label: "Location", value: "Cape Town, South Africa" },
  { icon: Cpu, label: "Interests", value: "Software development & practical technology solutions" },
];

const foundation = ["Java", "Python", "SQL", "JavaScript", "React", "HTML", "CSS"];

export function About() {
  return (
    <section id="about" className="relative">
      <div className="section-shell grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="About Me"
            title="Software Developer | ICT Professional | Application Development"
            lead="I completed my Diploma in ICT: Application Development at Cape Peninsula University of Technology (CPUT). My background spans software development, programming, databases, web technologies and information systems."
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
              I enjoy building practical applications, learning new technologies and using
              problem-solving to address real-world needs. My projects also include work in data
              analytics and AI as part of a broader ICT journey.
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
