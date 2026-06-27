import { ArrowUp, Github, Linkedin, Mail, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="pb-10 pt-24">
      <div className="container-luxe">
        <h3 className="display text-[18vw] md:text-[15vw] leading-[0.85]">
          PRIYANSH<span className="display-outline">.</span>
        </h3>
        <div className="mt-10 h-px w-full bg-accent" />
        <div className="mt-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Priyansh Pratap. Designed & built with care.
          </p>
          <ul className="flex items-center gap-3">
            {[
            { Icon: Github, href: "https://github.com/priyanshpratapsingh0307-ui", label: "GitHub" },
            { Icon: Instagram, href: "https://www.instagram.com/priyanshpratap_03", label: "Instagram" },
            { Icon: Mail, href: "mailto:priyanshpratapsingh0307@gmail.com", label: "Email" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/priyanshpratap03/", label: "LinkedIn" }
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
          </ul>
          <a
            href="#home"
            className="group inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5 text-sm transition-colors hover:bg-ink hover:text-primary-foreground"
          >
            Back to top
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
