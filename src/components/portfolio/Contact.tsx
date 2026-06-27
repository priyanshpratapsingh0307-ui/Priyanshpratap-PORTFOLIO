import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { useState } from "react";

export const Contact = () => {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-28 md:py-40">
      <div className="container-luxe">
        <Reveal>
          <span className="eyebrow">/CONTACT</span>
          <h2 className="display mt-6 max-w-5xl text-[44px] md:text-[88px] leading-[0.92] text-balance">
            Let's build something <span className="display-outline">exceptional.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="text-lg text-foreground/80">
              I take on a small number of projects each year. Tell me a little
              about what you're building and I'll be in touch within two days.
            </p>
            <ul className="mt-10 space-y-4 text-sm">
              <li className="flex items-center justify-between border-b border-border py-3">
                <span className="text-muted-foreground">Email</span>
                <a href="mailto:hello@priyansh.studio" className="hover:underline">hello@priyansh.studio</a>
              </li>
              <li className="flex items-center justify-between border-b border-border py-3">
                <span className="text-muted-foreground">Based in</span>
                <span>Bengaluru, India</span>
              </li>
              <li className="flex items-center justify-between border-b border-border py-3">
                <span className="text-muted-foreground">Booking</span>
                <span>Q3 2026</span>
              </li>
            </ul>
          </Reveal>

          <Reveal className="md:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="card-luxe space-y-5 p-8 md:p-10"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Your name" id="name" />
                <Field label="Email" id="email" type="email" />
              </div>
              <Field label="Company (optional)" id="company" />
              <div className="space-y-2">
                <label htmlFor="message" className="eyebrow block">Project</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-2xl border border-border bg-background px-5 py-4 text-base outline-none transition-colors focus:border-foreground"
                  placeholder="Tell me a little about it…"
                />
              </div>
              <div className="flex items-center justify-between pt-2">
                <p className="text-xs text-muted-foreground">
                  {sent ? "Thank you — I'll be in touch." : "I reply within 48 hours."}
                </p>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-sm text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
                >
                  Send enquiry
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, id, type = "text" }: { label: string; id: string; type?: string }) => (
  <div className="space-y-2">
    <label htmlFor={id} className="eyebrow block">{label}</label>
    <input
      id={id}
      type={type}
      required={type !== "text" || id === "name"}
      className="w-full rounded-2xl border border-border bg-background px-5 py-4 text-base outline-none transition-colors focus:border-foreground"
    />
  </div>
);
