import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { EMAIL } from "@/lib/portfolio-assistant";

type Fields = { name: string; email: string; subject: string; message: string; website: string };
const empty: Fields = { name: "", email: "", subject: "", message: "", website: "" };

function validate(f: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (f.subject.trim().length < 2) e.subject = "Please add a subject.";
  if (f.message.trim().length < 10) e.message = "Your message should be at least 10 characters.";
  if (f.message.length > 3000) e.message = "Please keep your message under 3000 characters.";
  return e;
}

/** Opens a prefilled email draft to Sesona in the visitor's own email app. */
export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "opened" | "error">("idle");

  const set = (k: keyof Fields) => (ev: { target: { value: string } }) =>
    setFields((f) => ({ ...f, [k]: ev.target.value }));

  function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (fields.website) return; // honeypot: bots fill hidden fields
    const e = validate(fields);
    setErrors(e);
    if (Object.keys(e).length) {
      setStatus("error");
      return;
    }
    const body = `Name: ${fields.name.trim()}\nReply to: ${fields.email.trim()}\n\n${fields.message.trim()}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(fields.subject.trim())}&body=${encodeURIComponent(body)}`;
    setStatus("opened");
  }

  const input =
    "mt-1.5 w-full rounded-xl border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-cyan";

  const field = (k: "name" | "email" | "subject", label: string, type = "text") => (
    <div>
      <label htmlFor={`cf-${k}`} className="text-xs font-medium text-muted-foreground">
        {label}
      </label>
      <input
        id={`cf-${k}`}
        type={type}
        value={fields[k]}
        onChange={set(k)}
        aria-invalid={Boolean(errors[k])}
        aria-describedby={errors[k] ? `cf-${k}-err` : undefined}
        maxLength={k === "subject" ? 150 : 120}
        className={input}
      />
      {errors[k] ? (
        <p id={`cf-${k}-err`} className="mt-1 text-xs text-destructive">
          {errors[k]}
        </p>
      ) : null}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="glass glow-border grid gap-4 rounded-2xl p-6 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        {field("name", "Name")}
        {field("email", "Email address", "email")}
      </div>
      {field("subject", "Subject")}
      <div>
        <label htmlFor="cf-message" className="text-xs font-medium text-muted-foreground">
          Message
        </label>
        <textarea
          id="cf-message"
          rows={5}
          value={fields.message}
          onChange={set("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "cf-message-err" : undefined}
          className={input}
        />
        {errors.message ? (
          <p id="cf-message-err" className="mt-1 text-xs text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={fields.website}
        onChange={set("website")}
        className="hidden"
        aria-hidden="true"
      />
      <button type="submit" className="btn-glow inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm">
        <Send className="size-4" aria-hidden="true" />
        Send Message
      </button>
      <p role="status" aria-live="polite" className="text-xs text-muted-foreground">
        {status === "opened"
          ? "Your email app should now open with your message ready to send. If it doesn't, email me directly at " + EMAIL + "."
          : status === "error"
            ? "Please fix the highlighted fields."
            : "Sending opens a ready-to-send email in your own email app."}
      </p>
    </form>
  );
}
