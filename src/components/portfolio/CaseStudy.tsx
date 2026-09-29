import { Reveal, SectionHeading } from "./Reveal";

const blocks = [
  {
    title: "Problem",
    body: "Portfolio visitors want fast answers about my background, studies and projects, but static pages force them to read everything.",
  },
  {
    title: "Goal",
    body: "Build a conversational assistant that answers common questions accurately, without inventing facts about me.",
  },
  {
    title: "Approach",
    body: "Define a fixed knowledge base of verified facts, match intents against it, and keep the response layer separate from the interface so a model can be plugged in later.",
  },
  {
    title: "Conversation Flow",
    body: "Greeting → quick question shortcuts → intent match → grounded answer → follow-up suggestion, with a graceful fallback when a question is out of scope.",
  },
  {
    title: "Technologies",
    body: "Python, JavaScript, prompt engineering and conversational AI patterns.",
  },
  {
    title: "Outcome",
    body: "A working assistant embedded in this site that answers questions about my background, studies, bootcamp, skills and GitHub.",
  },
  {
    title: "Future Improvements",
    body: "Connect a hosted language model through a secure server endpoint, add conversation memory, and log unanswered questions to grow the knowledge base.",
  },
];

const prompt = [
  {
    label: "ROLE",
    body: "You are the portfolio assistant for Sesona Panca, an ICT Applications Development graduate learning AI.",
  },
  {
    label: "CONTEXT",
    body: "Verified facts: qualification, location, September 2026 AI Bootcamp, skills, projects, GitHub profile.",
  },
  {
    label: "CONSTRAINTS",
    body: "Only use supplied facts. Never invent an employer, grade, email or phone number. Stay concise and professional.",
  },
  {
    label: "OUTPUT",
    body: "Two to four sentences, plain language, first mention of a link written in full.",
  },
];

export function CaseStudy() {
  return (
    <section id="case-study" className="relative">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Case Study"
          title="AI Chatbot — how it was designed"
          lead="A look at the thinking behind the Week 1 project, from problem framing to prompt structure."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <ul className="grid gap-4 sm:grid-cols-2">
            {blocks.map((b, i) => (
              <Reveal as="li" key={b.title} delay={i * 60}>
                <div className="glass h-full rounded-2xl p-5">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-cyan">
                    {b.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={120}>
            <div className="glass-strong glow-border rounded-2xl p-6">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan">
                Prompt structure
              </p>
              <h3 className="mt-3 text-lg font-semibold">Role · Context · Constraints · Output</h3>
              <ol className="mt-6 space-y-4">
                {prompt.map((p, i) => (
                  <li key={p.label} className="relative rounded-xl border bg-background/50 p-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[0.65rem] text-muted-foreground">
                        0{i + 1}
                      </span>
                      <span className="font-mono text-xs font-semibold tracking-[0.18em] text-violet">
                        {p.label}
                      </span>
                    </div>
                    <p className="mt-2 font-mono text-xs leading-6 text-muted-foreground">
                      {p.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
