import { Github, MapPin, ArrowUpRight } from "lucide-react";
import { GITHUB_URL } from "@/lib/portfolio-assistant";
import { Reveal, SectionHeading } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        className="orb left-1/2 bottom-0 size-[24rem] -translate-x-1/2"
        style={{ background: "var(--violet)", opacity: 0.2 }}
        aria-hidden="true"
      />
      <div className="section-shell relative">
        <Reveal>
          <div className="glass-strong glow-border rounded-3xl p-8 text-center sm:p-12">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan">GitHub</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
              Explore my <span className="text-gradient">code, projects</span> and learning journey.
            </h2>
            <div className="mt-8 flex justify-center">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-glow inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm"
              >
                <Github className="size-4" aria-hidden="true" />
                github.com/222750014
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something meaningful."
            lead="Open to AI and software development opportunities, collaboration and continued learning."
          />

          <Reveal delay={100}>
            <ul className="grid gap-4">
              <li className="glass rounded-2xl p-5">
                <div className="flex items-center gap-4">
                  <span className="glass flex size-10 items-center justify-center rounded-xl">
                    <Github className="size-4 text-cyan" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                      GitHub
                    </p>
                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-1 block truncate text-sm font-medium hover:text-cyan"
                    >
                      github.com/222750014
                    </a>
                  </div>
                </div>
              </li>
              <li className="glass rounded-2xl p-5">
                <div className="flex items-center gap-4">
                  <span className="glass flex size-10 items-center justify-center rounded-xl">
                    <MapPin className="size-4 text-violet" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                      Location
                    </p>
                    <p className="mt-1 text-sm font-medium">
                      Cape Town, South Africa
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-bold">Sesona Panca</p>
          <p className="mt-1 text-xs text-muted-foreground">
            AI • Software Development • Continuous Learning
          </p>
        </div>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="btn-ghost inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
        >
          <Github className="size-4" aria-hidden="true" />
          GitHub
        </a>
        <p className="text-xs text-muted-foreground">© 2026 Sesona Panca</p>
      </div>
    </footer>
  );
}
