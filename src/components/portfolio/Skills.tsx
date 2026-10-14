import { Brain, Code2, BarChart3, Database, Users } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const groups = [
  {
    icon: BarChart3,
    title: "Data Analytics",
    items: ["Data analysis & interpretation", "Data cleaning & preparation", "Reporting", "Data visualisation", "Excel", "SQL"],
  },
  {
    icon: Brain,
    title: "AI & Prompt Engineering",
    items: ["Prompt engineering", "Generative AI tools", "AI-assisted development", "AI for productivity"],
  },
  {
    icon: Code2,
    title: "Software Development",
    items: ["Java", "Python", "JavaScript", "React", "HTML", "CSS", "SQL", "Testing & debugging"],
  },
  {
    icon: Database,
    title: "Databases & Systems",
    items: ["MySQL", "MongoDB", "Data management", "Documentation", "System analysis"],
  },
  {
    icon: Users,
    title: "Professional Skills",
    items: ["Analytical thinking", "Problem-solving", "Teamwork", "Communication", "Time management", "Stakeholder communication"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit behind the work"
          lead="Grouped by discipline — the areas I actively practise and keep developing."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, i) => (
            <Reveal as="li" key={group.title} delay={i * 70}>
              <div className="glass glow-border h-full rounded-2xl p-6">
                <span className="glass flex size-11 items-center justify-center rounded-xl">
                  <group.icon className="size-5 text-cyan" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base font-semibold">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
