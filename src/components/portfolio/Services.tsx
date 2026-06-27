import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const services = [
  { n: "01", title: "UI / UX Design", desc: "Editorial interfaces, design systems & brand language.", img: p1 },
  { n: "02", title: "Full Stack Development", desc: "React, Next.js and Node — production-grade engineering.", img: p2 },
  { n: "03", title: "AI Integration", desc: "Embedding LLMs and generative tools into real products.", img: p4 },
  { n: "04", title: "Mobile Apps", desc: "Flutter and React Native, designed end-to-end.", img: p3 },
  { n: "05", title: "Cloud Deployment", desc: "AWS, Vercel and Docker — quiet, reliable infrastructure.", img: p1 },
];

export const Services = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-28 md:py-40">
      <div className="container-luxe">
        <Reveal className="mb-14 flex items-end justify-between gap-6">
          <div>
            <span className="eyebrow">/SERVICES</span>
            <h2 className="display mt-4 text-[44px] md:text-[54px]">What I do.</h2>
          </div>
        </Reveal>

        <div className="flex h-[480px] gap-3 overflow-hidden rounded-[28px] border border-border">
          {services.map((s, i) => {
            const isActive = i === active;
            return (
              <motion.div
                key={s.title}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                animate={{ flex: isActive ? 4 : 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex cursor-pointer overflow-hidden transition-colors duration-500 ${
                  isActive ? "bg-ink text-primary-foreground" : "bg-card text-foreground"
                }`}
                data-cursor="hover"
              >
                {/* Collapsed label */}
                <div className={`flex flex-col items-center justify-between gap-6 px-5 py-7 ${isActive ? "border-r border-white/10" : "border-r border-border last:border-r-0"}`}>
                  <span className={`text-xs ${isActive ? "text-white/60" : "text-muted-foreground"}`}>{s.n}</span>
                  <span className="display text-base [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
                    {s.title}
                  </span>
                  <span className={`h-2 w-2 rounded-full ${isActive ? "bg-white" : "bg-foreground/30"}`} />
                </div>

                {/* Expanded content */}
                <motion.div
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.4, delay: isActive ? 0.15 : 0 }}
                  className="relative flex-1 overflow-hidden p-10"
                >
                  {isActive && (
                    <>
                      <div className="relative z-10 flex h-full flex-col justify-between">
                        <h3 className="display max-w-md text-[40px] leading-[0.95]">
                          {s.title}
                        </h3>
                        <p className="max-w-md text-white/70">{s.desc}</p>
                      </div>
                      <motion.img
                        src={s.img}
                        alt=""
                        aria-hidden
                        initial={{ rotate: -6, scale: 0.95, opacity: 0 }}
                        animate={{ rotate: 6, scale: 1, opacity: 0.55 }}
                        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        className="pointer-events-none absolute -right-10 -bottom-10 h-[360px] w-[360px] rounded-3xl object-cover grayscale"
                      />
                    </>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
