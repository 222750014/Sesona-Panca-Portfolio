import { useEffect, useState } from "react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { CV_URL } from "@/lib/portfolio-assistant";
import { Reveal } from "./Reveal";

const codeLines = [
  { text: "class Graduate:", tone: "key" },
  { text: "    name = \"Sesona Panca\"", tone: "str" },
  { text: "    diploma = \"ICT: Application Development\"", tone: "str" },
  { text: "    focus = [\"Data Analytics\", \"Prompt Engineering\"]", tone: "str" },
  { text: "    def solve(self, problem):", tone: "key" },
  { text: "        return insights(problem, with_=self.focus)", tone: "plain" },
];

const badges = ["Data Analytics", "SQL", "Python", "Prompt Engineering", "React"];

export function Hero() {
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setTyped(codeLines.length);
      return;
    }
    const timer = window.setInterval(() => {
      setTyped((n) => (n >= codeLines.length ? n : n + 1));
    }, 420);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden="true" />
      <div
        className="orb left-[-8rem] top-[-6rem] size-[26rem]"
        style={{ background: "var(--cyan)" }}
        aria-hidden="true"
      />
      <div
        className="orb right-[-10rem] top-[10rem] size-[24rem]"
        style={{ background: "var(--violet)", animationDelay: "-6s" }}
        aria-hidden="true"
      />

      <div className="section-shell relative grid items-center gap-14 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs text-muted-foreground">
              <span className="pulse-dot size-2 rounded-full" style={{ background: "var(--cyan)" }} aria-hidden="true" />
              Open to graduate opportunities and entry-level roles
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.07] sm:text-5xl lg:text-6xl">
              Hi, I&apos;m <span className="text-gradient">Sesona Panca.</span>
            </h1>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan sm:text-sm">
              Data Analytics | AI Prompt Engineering | ICT
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I build technology-driven solutions, explore insights through data, and use
              AI-assisted development to solve practical problems.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contact" className="btn-glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm">
                Hire Me
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a href="#projects" className="btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm">
                View My Projects
              </a>
              <a
                href={CV_URL}
                download="Sesona_Panca_CV.pdf"
                className="btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm"
              >
                <Download className="size-4" aria-hidden="true" />
                Download My CV
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-10 flex flex-wrap gap-2">
              {badges.map((b) => (
                <li
                  key={b}
                  className="glass rounded-full px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="glass-strong glow-border relative rounded-2xl p-1">
            <div className="flex items-center gap-2 px-4 py-3">
              <span className="size-2.5 rounded-full" style={{ background: "var(--magenta)" }} />
              <span className="size-2.5 rounded-full" style={{ background: "var(--violet)" }} />
              <span className="size-2.5 rounded-full" style={{ background: "var(--cyan)" }} />
              <span className="ml-2 font-mono text-xs text-muted-foreground">sesona_panca.py</span>
            </div>
            <div className="rounded-xl border bg-background/60 p-4 font-mono text-[0.78rem] leading-7 sm:text-sm">
              {codeLines.slice(0, typed).map((line) => (
                <div
                  key={line.text}
                  className={
                    line.tone === "key"
                      ? "text-cyan"
                      : line.tone === "str"
                        ? "text-violet"
                        : "text-muted-foreground"
                  }
                >
                  <span className="whitespace-pre">{line.text}</span>
                </div>
              ))}
              <div className="text-muted-foreground">
                <span className="caret">&nbsp;</span>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 text-xs text-muted-foreground">
              <Sparkles className="size-3.5 text-cyan" aria-hidden="true" />
              AI Bootcamp — September 2026 · in progress
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
