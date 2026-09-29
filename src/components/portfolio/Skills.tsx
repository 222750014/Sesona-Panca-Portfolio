import { Brain, MessageSquareCode, Code2, BarChart3, Boxes } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const groups = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    items: [
      "Artificial Intelligence",
      "Generative AI",
      "Machine Learning",
      "Large Language Models",
      "Conversational AI",
    ],
  },
  {
    icon: MessageSquareCode,
    title: "Prompt Engineering",
    items: [
      "Prompt Design",
      "Role / Context / Constraints / Output",
      "Few-shot prompting",
      "Prompt optimisation",
      "Prompt testing",
    ],
  },
  { icon: Code2, title: "Programming", items: ["Python", "JavaScript", "HTML", "CSS"] },
  {
    icon: BarChart3,
    title: "Data",
    items: ["Data Analysis", "Pandas", "NumPy", "Data Visualisation"],
  },
  {
    icon: Boxes,
    title: "Software Development",
    items: ["Application Development", "Web Development", "Problem Solving", "Software Engineering"],
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
