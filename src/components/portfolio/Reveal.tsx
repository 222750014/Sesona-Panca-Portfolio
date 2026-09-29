import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "article" | "section";
};

/** Fades + slides content in once it scrolls into view. */
export function Reveal({ children, className = "", delay = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as as "div";

  return (
    <Tag
      ref={ref as never}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  );
}

type HeadingProps = { eyebrow: string; title: ReactNode; lead?: string; className?: string };

export function SectionHeading({ eyebrow, title, lead, className = "" }: HeadingProps) {
  return (
    <Reveal className={`max-w-2xl ${className}`}>
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
      {lead ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{lead}</p> : null}
    </Reveal>
  );
}
