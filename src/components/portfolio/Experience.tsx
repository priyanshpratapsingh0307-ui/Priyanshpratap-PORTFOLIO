
// import { motion } from "framer-motion";
// import { Reveal } from "./Reveal";

// const items = [
//   { role: "Independent Designer-Engineer", org: "Self-employed", years: "2025 — Now", desc: "Partnering with founders and studios on flagship digital products." },
//   { role: "Senior Product Designer", org: "Studio Atelier", years: "2023 — 2025", desc: "Led design for fintech & fashion clients across three continents." },
//   { role: "Full-Stack Engineer", org: "Northwave Labs", years: "2022 — 2023", desc: "Built React/Node platforms for early-stage companies." },
//   { role: "Design Intern", org: "Crafted Co.", years: "2021 — 2022", desc: "Editorial websites and brand identity systems." },
// ];

// export const Experience = () => {
//   return (
//     <section id="experience" className="py-28 md:py-40">
//       <div className="container-luxe">
//         <Reveal className="mb-16">
//           <span className="eyebrow">/EXPERIENCE</span>
//           <h2 className="display mt-4 text-[44px] md:text-[54px]">A short history.</h2>
//         </Reveal>

//         <div className="relative">
//           <div aria-hidden className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-accent md:block" />
//           <ul className="space-y-12">
//             {items.map((it, i) => {
//               const left = i % 2 === 0;
//               return (
//                 <motion.li
//                   key={it.role}
//                   initial={{ opacity: 0, y: 40, x: left ? -20 : 20 }}
//                   whileInView={{ opacity: 1, y: 0, x: 0 }}
//                   viewport={{ once: true, margin: "-80px" }}
//                   transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
//                   className={`relative grid items-center gap-6 md:grid-cols-2 ${left ? "" : "md:[&>*:first-child]:order-2"}`}
//                 >
//                   <div className={`card-luxe p-7 ${left ? "md:mr-10" : "md:ml-10"}`}>
//                     <div className="flex items-baseline justify-between gap-4">
//                       <h3 className="text-xl font-medium">{it.role}</h3>
//                       <span className="text-xs text-muted-foreground">{it.years}</span>
//                     </div>
//                     <p className="mt-1 text-sm text-muted-foreground">{it.org}</p>
//                     <p className="mt-4 text-foreground/80">{it.desc}</p>
//                   </div>
//                   <div className="hidden md:block" />
//                   <span aria-hidden className="absolute left-1/2 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-foreground ring-4 ring-background md:block" />
//                 </motion.li>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };
