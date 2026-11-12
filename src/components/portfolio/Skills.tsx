import { Code2, Globe, Database, Workflow, Users } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const groups = [
  {
    icon: Code2,
    title: "Programming & Application Development",
    items: ["Java", "Python", "JavaScript", "React"],
  },
  {
    icon: Globe,
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    icon: Database,
    title: "Database Management",
    items: ["SQL", "MySQL", "MongoDB", "Data management", "Documentation"],
  },
  {
    icon: Workflow,
    title: "Software Engineering & Systems",
    items: ["Software testing & debugging", "System analysis", "Information systems", "Business process improvement"],
  },
  {
    icon: Users,
    title: "Additional ICT Capabilities",
    items: ["Information security awareness", "Technical problem-solving", "Analytical thinking", "Teamwork", "Communication", "Time management", "Stakeholder communication", "Microsoft Office"],
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
