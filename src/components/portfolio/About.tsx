import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";
import { Reveal } from "./Reveal";

const stats = [
  { k: "5+", v: "Years Experience" },
  { k: "40+", v: "Projects Shipped" },
  { k: "12", v: "Hackathons" },
  { k: "6", v: "Internships" },
];

const experience = [
  {
    year: "Jun 2026 – Jul 2026",
    title: "Software Development Intern",
    company: "Thiranex Technologies",
    description:
      "Developing modern web applications, contributing to frontend features, and collaborating on real-world software solutions using modern development practices.",
  },
  {
    year: "2026",
    title: "AI Job Simulation",
    company: "Vista Equity Partners",
    description:
      "Completed an enterprise AI simulation focused on prompt engineering, workflow automation, AI-assisted business processes, and LLM-driven solutions.",
  },
  {
    year: "2026",
    title: "Hackathon Finalist",
    company: "National Hackathon",
    description:
      "Secured a Top 10 position by designing and developing an innovative software solution under competitive time constraints.",
  },
  {
    year: "2024 – 2028",
    title: "B.Tech in Information Technology",
    company: "Dr. B.R. Ambedkar National Institute of Technology,Jalandhar,Punjab",
    description:
      "Pursuing a Bachelor's degree with a focus on software engineering, artificial intelligence, Flutter development, data structures & algorithms, and full-stack development.",
  },
];

const skills = ["Design Systems", "Motion Design", "React", "Next.js", "TypeScript", "Framer Motion", "Node.js", "AI / LLM"];

export const About = () => {
  return (
    <section id="about" className="py-28 md:py-40">
      <div className="container-luxe">
        <Reveal className="mb-16">
          <span className="eyebrow">/ABOUT</span>
          <h2 className="display mt-4 max-w-3xl text-[44px] md:text-[54px] leading-[0.95]">
            Quiet craft, considered <span className="display-outline">obsessively</span>.
          </h2>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="relative overflow-hidden rounded-[28px] shadow-card">
              <img src={portrait} alt="" loading="lazy" className="h-[560px] w-full object-cover grayscale" />
            </div>
          </Reveal>

          <div className="md:col-span-7 flex flex-col gap-12">
            <Reveal>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm Priyansh — a designer-engineer based in India, focused on
                building unhurried, beautifully made software. I care about
                typography, motion and the small details most people will never
                consciously notice.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                I work with founders, studios and brands who treat their product
                as a piece of culture, not a deliverable.
              </p>
            </Reveal>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.v}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="card-luxe p-5"
                >
                  <div className="display text-4xl">{s.k}</div>
                  <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
                </motion.div>
              ))}
            </div>

            {/* Career / Experience Timeline */}
            <Reveal>
              <h3 className="eyebrow mb-6">Experience</h3>
              <ol className="space-y-8 border-l border-border pl-6">
                {experience.map((item, index) => (
                  <li key={index} className="relative">
                    <span className="absolute -left-[31px] top-2 h-2 w-2 rounded-full bg-foreground" />
                    <div className="flex flex-col gap-1">
                      {/* Date & Role */}
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                        <span className="text-sm font-semibold tracking-wider text-muted-foreground min-w-[120px]">
                          {item.year}
                        </span>
                        <h4 className="text-xl font-medium text-foreground">
                          {item.title} <span className="text-foreground/40 font-light">@</span> {item.company}
                        </h4>
                      </div>
                      {/* Description */}
                      <p className="mt-2 text-sm text-foreground/75 leading-relaxed sm:pl-[136px]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            {/* Skills */}
            <Reveal>
              <h3 className="eyebrow mb-4">Skills</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <li key={s} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/80 transition-colors hover:bg-ink hover:text-primary-foreground">
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
// import { motion } from "framer-motion";
// import portrait from "@/assets/portrait.jpg";
// import { Reveal } from "./Reveal";

// const stats = [
//   { k: "5+", v: "Years Experience" },
//   { k: "40+", v: "Projects Shipped" },
//   { k: "12", v: "Hackathons" },
//   { k: "6", v: "Internships" },
// ];

// const timeline = [
//   { y: "2021", t: "Began designing interfaces & teaching myself code." },
//   { y: "2023", t: "Joined an award-winning studio as a product designer." },
//   { y: "2024", t: "Shipped flagship products for fintech & fashion clients." },
//   { y: "2026", t: "Now: independent designer-engineer for select studios." },
// ];

// const skills = ["Design Systems", "Motion Design", "React", "Next.js", "TypeScript", "Framer Motion", "Node.js", "AI / LLM"];

// export const About = () => {
//   return (
//     <section id="about" className="py-28 md:py-40">
//       <div className="container-luxe">
//         <Reveal className="mb-16">
//           <span className="eyebrow">/ABOUT</span>
//           <h2 className="display mt-4 max-w-3xl text-[44px] md:text-[54px] leading-[0.95]">
//             Quiet craft, considered <span className="display-outline">obsessively</span>.
//           </h2>
//         </Reveal>

//         <div className="grid gap-10 md:grid-cols-12">
//           <Reveal className="md:col-span-5">
//             <div className="relative overflow-hidden rounded-[28px] shadow-card">
//               <img src={portrait} alt="" loading="lazy" className="h-[560px] w-full object-cover grayscale" />
//             </div>
//           </Reveal>

//           <div className="md:col-span-7 flex flex-col gap-12">
//             <Reveal>
//               <p className="text-lg text-foreground/80 leading-relaxed">
//                 I'm Priyansh — a designer-engineer based in India, focused on
//                 building unhurried, beautifully made software. I care about
//                 typography, motion and the small details most people will never
//                 consciously notice.
//               </p>
//               <p className="mt-4 text-muted-foreground leading-relaxed">
//                 I work with founders, studios and brands who treat their product
//                 as a piece of culture, not a deliverable.
//               </p>
//             </Reveal>

//             {/* Stats */}
//             <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
//               {stats.map((s, i) => (
//                 <motion.div
//                   key={s.v}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
//                   whileHover={{ y: -4 }}
//                   className="card-luxe p-5"
//                 >
//                   <div className="display text-4xl">{s.k}</div>
//                   <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Timeline */}
//             <Reveal>
//               <h3 className="eyebrow mb-6">Career</h3>
//               <ol className="space-y-5 border-l border-border pl-6">
//                 {timeline.map((e) => (
//                   <li key={e.y} className="relative">
//                     <span className="absolute -left-[31px] top-2 h-2 w-2 rounded-full bg-foreground" />
//                     <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
//                       <span className="display text-2xl">{e.y}</span>
//                       <span className="text-foreground/80">{e.t}</span>
//                     </div>
//                   </li>
//                 ))}
//               </ol>
//             </Reveal>

//             <Reveal>
//               <h3 className="eyebrow mb-4">Skills</h3>
//               <ul className="flex flex-wrap gap-2">
//                 {skills.map((s) => (
//                   <li key={s} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/80 transition-colors hover:bg-ink hover:text-primary-foreground">
//                     {s}
//                   </li>
//                 ))}
//               </ul>
//             </Reveal>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
