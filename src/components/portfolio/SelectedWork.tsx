import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import { Reveal } from "./Reveal";

const projects = [
  { title: "NeuroAdapt Ai", desc: "AI-powered accessibility platform that adapts digital experiences in real time using behavioral analysis, cognitive insights, and intelligent UI assistance.", tags: ["React", "Python", "OpenAI", "MongoDB"], img: p1, span: "md:col-span-7 md:row-span-2 h-[520px]" },
  { title: "Smart Hostel Management system", desc: "Full-stack hostel management platform featuring room allocation, complaint tracking, attendance, fee management, and student administration.", tags: ["React", "Node.js", "MongoDB", "Express"], img: p2, span: "md:col-span-5 h-[360px]" },
  { title: "Nimbus OS", desc: "Mobile operating layer for next-gen creators.", tags: ["Flutter", "Firebase"], img: p3, span: "md:col-span-5 h-[340px]" },
  // { title: "Orbit AI", desc: "Generative research workspace for scientists.", tags: ["Node.js", "OpenAI", "Postgres"], img: p4, span: "md:col-span-7 h-[420px]" },
];

export const SelectedWork = () => {
  return (
    <section id="work" className="relative py-32 md:py-44">
      {/* Oversized faded title */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-10 select-none overflow-hidden">
        <p className="display whitespace-nowrap text-center text-[26vw] leading-none text-foreground/[0.04]">
          PORTFOLIO
        </p>
      </div>

      <div className="container-luxe relative">
        <Reveal className="mb-16 flex items-end justify-between gap-8">
          <div>
            <span className="eyebrow">/SELECTED WORK</span>
            <h2 className="display mt-4 text-[44px] md:text-[54px] leading-[0.95]">
              A small collection<br />of considered work.
            </h2>
          </div>
          <p className="hidden max-w-sm text-muted-foreground md:block">
            Each project is approached as a single, unified composition — from
            strategy to typography to motion. Selected from 2024–2026.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-12 md:auto-rows-[300px]">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className={`group ${p.span}`}>
              <a
                href="#"
                className="card-luxe relative flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-hover"
              >
                <div className="relative flex-1 overflow-hidden">
                  <motion.img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                </div>
                <div className="flex items-end justify-between gap-6 p-8">
                  <div>
                    <h3 className="text-xl font-medium tracking-tight">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <li key={t} className="rounded-full border border-border px-3 py-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-border text-foreground transition-all duration-500 group-hover:bg-ink group-hover:text-primary-foreground group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
