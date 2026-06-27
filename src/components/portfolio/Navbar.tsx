import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const items = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="fixed left-1/2 top-5 z-50 -translate-x-1/2"
      >
        <motion.nav
          animate={{
            paddingTop: scrolled ? 6 : 10,
            paddingBottom: scrolled ? 6 : 10,
            paddingLeft: scrolled ? 14 : 18,
            paddingRight: scrolled ? 6 : 8,
          }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="glass pill-nav-shadow flex items-center gap-2 rounded-full"
        >
          <a href="#home" className="hidden md:flex items-center gap-2 pl-2 pr-4 text-sm font-medium">
            <span className="inline-block h-2 w-2 rounded-full bg-ink" />
            <span>Priyansh</span>
          </a>
          <ul className="hidden md:flex items-center">
            {items.map((it) => (
              <li key={it.href}>
                <a
                  href={it.href}
                  className="relative inline-flex items-center rounded-full px-4 py-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="ml-1 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
          >
            Let's Talk
            <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-primary-foreground/80" />
          </a>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="md:hidden ml-1 grid h-10 w-10 place-items-center rounded-full text-foreground"
          >
            <Menu size={18} />
          </button>
        </motion.nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-luxe flex items-center justify-between pt-7">
              <span className="text-sm font-medium">Priyansh</span>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full">
                <X size={18} />
              </button>
            </div>
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
              className="container-luxe mt-16 space-y-6"
            >
              {items.map((it) => (
                <motion.li
                  key={it.href}
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                >
                  <a
                    onClick={() => setOpen(false)}
                    href={it.href}
                    className="display block text-[14vw] leading-none"
                  >
                    {it.label}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="pt-6">
                <a onClick={() => setOpen(false)} href="#contact" className="inline-flex rounded-full bg-ink px-6 py-3 text-sm text-primary-foreground">
                  Let's Talk
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
