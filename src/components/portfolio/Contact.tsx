import { Github, MapPin, ArrowUpRight, Mail, Phone } from "lucide-react";
import { EMAIL, GITHUB_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/portfolio-assistant";
import { Reveal, SectionHeading } from "./Reveal";
import { ContactForm } from "./ContactForm";

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

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Hire Me"
              title="Let's work together."
              lead="Looking for a Software Developer with a broad ICT foundation? I’m interested in building practical solutions and contributing across software, web, database and information systems work."
            />
            <ul className="mt-8 grid gap-3">
              {[
                { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
                { icon: Phone, label: "Phone", value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
                { icon: MapPin, label: "Location", value: "Cape Town, South Africa" },
              ].map((c) => (
                <li key={c.label} className="glass rounded-2xl p-4">
                  <div className="flex items-center gap-4">
                    <span className="glass flex size-10 shrink-0 items-center justify-center rounded-xl">
                      <c.icon className="size-4 text-cyan" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                        {c.label}
                      </p>
                      {c.href ? (
                        <a href={c.href} className="mt-1 block truncate text-sm font-medium hover:text-cyan">
                          {c.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-medium">{c.value}</p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Reveal delay={100}>
            <ContactForm />
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
