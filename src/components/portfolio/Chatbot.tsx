import { useEffect, useRef, useState } from "react";
import { Send, Bot, User } from "lucide-react";
import {
  getAssistantReply,
  quickQuestions,
  type AssistantMessage,
} from "@/lib/portfolio-assistant";
import { Reveal, SectionHeading } from "./Reveal";

const greeting: AssistantMessage = {
  id: "greeting",
  role: "assistant",
  text: "Hi! I'm Sesona's portfolio assistant. Ask me about his ICT background, studies, software development skills, projects, certificates or GitHub.",
};

export function Chatbot() {
  const [messages, setMessages] = useState<AssistantMessage[]>([greeting]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const logRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  async function send(text: string) {
    const question = text.trim();
    if (!question || typing) return;
    setInput("");
    setMessages((m) => [...m, { id: `${Date.now()}-u`, role: "user", text: question }]);
    setTyping(true);
    const reply = await getAssistantReply(question);
    window.setTimeout(() => {
      setMessages((m) => [...m, { id: `${Date.now()}-a`, role: "assistant", text: reply }]);
      setTyping(false);
    }, 650);
  }

  return (
    <section id="assistant" className="relative overflow-hidden">
      <div
        className="orb left-[-6rem] top-20 size-[20rem]"
        style={{ background: "var(--cyan)", opacity: 0.18 }}
        aria-hidden="true"
      />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Week 1 Demo"
          title="Ask My Portfolio Assistant"
          lead="A live conversational demo from the Week 1 chatbot project. Responses are grounded in a verified knowledge base."
        />

        <Reveal delay={120} className="mt-10">
          <div className="glass-strong mx-auto max-w-3xl overflow-hidden rounded-2xl">
            <div className="flex items-center gap-3 border-b px-5 py-4">
              <span className="glass flex size-9 items-center justify-center rounded-full">
                <Bot className="size-4 text-cyan" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">Portfolio Assistant</p>
                <p className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span
                    className="pulse-dot size-2 rounded-full"
                    style={{ background: "var(--cyan)" }}
                    aria-hidden="true"
                  />
                  Online
                </p>
              </div>
            </div>

            <div
              ref={logRef}
              role="log"
              aria-live="polite"
              aria-label="Conversation with the portfolio assistant"
              className="h-[22rem] space-y-4 overflow-y-auto px-4 py-5 sm:px-6"
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`bubble-in flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <span className="glass mt-1 flex size-8 shrink-0 items-center justify-center rounded-full">
                    {m.role === "user" ? (
                      <User className="size-3.5 text-violet" aria-hidden="true" />
                    ) : (
                      <Bot className="size-3.5 text-cyan" aria-hidden="true" />
                    )}
                  </span>
                  <p
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-secondary text-secondary-foreground"
                        : "glass text-foreground"
                    }`}
                  >
                    {m.text}
                  </p>
                </div>
              ))}

              {typing ? (
                <div className="bubble-in flex gap-3">
                  <span className="glass mt-1 flex size-8 items-center justify-center rounded-full">
                    <Bot className="size-3.5 text-cyan" aria-hidden="true" />
                  </span>
                  <span className="glass flex items-center gap-1.5 rounded-2xl px-4 py-4">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="size-1.5 animate-bounce rounded-full"
                        style={{ background: "var(--cyan)", animationDelay: `${d * 120}ms` }}
                      />
                    ))}
                    <span className="sr-only">Assistant is typing</span>
                  </span>
                </div>
              ) : null}
            </div>

            <div className="border-t px-4 py-4 sm:px-6">
              <ul className="flex flex-wrap gap-2">
                {quickQuestions.map((q) => (
                  <li key={q}>
                    <button
                      type="button"
                      onClick={() => send(q)}
                      className="btn-ghost rounded-full px-3 py-1.5 text-xs"
                    >
                      {q}
                    </button>
                  </li>
                ))}
              </ul>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  void send(input);
                }}
                className="mt-4 flex items-center gap-2"
              >
                <label htmlFor="assistant-input" className="sr-only">
                  Ask a question about Sesona
                </label>
                <input
                  id="assistant-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question…"
                  autoComplete="off"
                  className="min-w-0 flex-1 rounded-full border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  className="btn-glow inline-flex size-11 shrink-0 items-center justify-center rounded-full"
                >
                  <Send className="size-4" aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
