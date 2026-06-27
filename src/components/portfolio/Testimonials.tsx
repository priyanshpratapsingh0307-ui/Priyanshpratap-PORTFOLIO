import { Reveal } from "./Reveal";

const quotes = [
  { q: "Priyansh has a rare obsession with detail. Every screen feels considered, every interaction earns its place.", a: "Anaya Sharma", r: "Co-founder, Halcyon" },
  { q: "The single best collaborator we've worked with. Calm, fast, and quietly brilliant.", a: "Marcus Lee", r: "Creative Director, Aether" },
  { q: "He doesn't ship features — he ships finished products. Our team learned a lot from him.", a: "Sara Okafor", r: "Head of Product, Nimbus" },
  { q: "Cinematic motion design and elegant systems. A real craftsman.", a: "Tomás Vidal", r: "Founder, Orbit AI" },
];

export const Testimonials = () => {
  const loop = [...quotes, ...quotes];
  return (
    <section className="py-28 md:py-40">
      <div className="container-luxe">
        <Reveal className="mb-12">
          <span className="eyebrow">/KIND WORDS</span>
          <h2 className="display mt-4 text-[44px] md:text-[54px]">What people say.</h2>
        </Reveal>
      </div>

      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee gap-6 px-6 [animation-duration:60s] hover:[animation-play-state:paused]">
          {loop.map((q, i) => (
            <figure
              key={i}
              className="glass w-[420px] shrink-0 rounded-[24px] p-7 shadow-card"
            >
              <blockquote className="text-[17px] leading-relaxed text-foreground/85">
                "{q.q}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-xs text-primary-foreground">
                  {q.a.split(" ").map((n) => n[0]).join("")}
                </span>
                <div>
                  <div className="text-sm font-medium">{q.a}</div>
                  <div className="text-xs text-muted-foreground">{q.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
