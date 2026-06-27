import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Instagram } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { useEffect, useRef } from "react";

const easeLuxe = [0.22, 1, 0.36, 1] as const;

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  // Mouse-follow glow
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mx.set(e.clientX - r.left);
      my.set(e.clientY - r.top);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section id="home" ref={ref} className="relative isolate overflow-hidden pt-36 md:pt-44 pb-24">
      {/* Mouse glow */}
      <motion.div
        aria-hidden
        style={{
          x: smx,
          y: smy,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, hsl(0 0% 0% / 0.07) 0%, transparent 60%)",
        }}
        className="pointer-events-none absolute h-[600px] w-[600px] rounded-full blur-2xl"
      />

      <div className="container-luxe relative">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeLuxe, delay: 0.2 }}
          className="mx-auto mb-10 flex w-fit items-center gap-3 rounded-full border border-border bg-card px-4 py-2 text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/40 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
          </span>
          Available for internships and freelancing offers
        </motion.div>

        {/* Split typography + portrait */}
        <div className="relative">
          <div className="flex flex-col items-center text-center">
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeLuxe }}
            className="mb-8 text-xs md:text-sm uppercase tracking-[0.45em] text-muted-foreground font-medium"
          >
    SOFTWARE ENGINEER · AI DEVELOPER · FLUTTER ENTHUSIAST
  </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: easeLuxe, delay: 0.25 }}
              className="display text-[18vw] md:text-[12.5vw] leading-[0.85]"
            >
              PRIYANSH
            </motion.h1>

            {/* Portrait overlapping */}
            <motion.div
              style={{ y: portraitY, scale: portraitScale }}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: easeLuxe, delay: 0.45 }}
              className="relative -my-[6vw] md:-my-[5vw] z-10 h-[42vw] w-[34vw] max-h-[520px] max-w-[420px] min-h-[260px] min-w-[210px] overflow-hidden rounded-[2rem] shadow-elegant"
            >
              <img
                src={portrait}
                alt="Portrait of Priyansh Pratap"
                width={1024}
                height={1280}
                className="h-full w-full object-cover grayscale"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-foreground/10" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: easeLuxe, delay: 0.35 }}
              className="display display-outline text-[18vw] md:text-[12.5vw] leading-[0.85]"
            >
              PRATAP
            </motion.h1>
          </div>

          {/* Intro + CTAs */}
          <div className="relative mt-20 grid gap-10 md:grid-cols-12">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: easeLuxe, delay: 0.7 }}
              className="md:col-span-7 md:col-start-1 max-w-xl text-lg text-muted-foreground text-balance"
            >
            Software Engineer specializing in AI, Flutter enthusiast, and full-stack
            development. Passionate about solving real-world problems through modern
            technology, scalable systems, and intuitive user experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: easeLuxe, delay: 0.85 }}
              className="md:col-span-5 flex flex-wrap items-center gap-3 md:justify-end"
            >
              <a
                href="/Priyansh_Pratap_Resume.pdf"
                download="Priyansh_Pratap_Resume.pdf"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-sm text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
              >
                Download Resume
                <ArrowDown
                  size={16}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </a>
              <a
                href="#work"
                className="group inline-flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3.5 text-sm text-foreground transition-colors hover:bg-ink hover:text-primary-foreground"
              >
                View Projects
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Vertical socials */}
        <motion.ul
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: easeLuxe, delay: 1 }}
          className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-5 lg:flex"
        >
          {[
            { Icon: Linkedin, href: "https://www.linkedin.com/in/priyanshpratap03/", label: "LinkedIn" },
            { Icon: Github, href: "https://github.com/priyanshpratapsingh0307-ui", label: "GitHub" },
            { Icon: Instagram, href: "https://www.instagram.com/priyanshpratap_03", label: "Instagram" },
            { Icon: Mail, href: "mailto:priyanshpratapsingh0307@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground/70 transition-all hover:bg-ink hover:text-primary-foreground"
              >
                <Icon size={15} />
              </a>
            </li>
          ))}
          <li className="my-2 h-12 w-px bg-accent" />
          <li className="rotate-180 text-[10px] uppercase tracking-[0.3em] text-muted-foreground [writing-mode:vertical-rl]">
            Scroll
          </li>
        </motion.ul>
      </div>
    </section>
  );
};
