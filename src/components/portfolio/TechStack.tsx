const techs = ["React", "Next.js", "Flutter", "Node.js", "MongoDB", "Firebase", "AWS", "Docker", "Tailwind CSS", "TypeScript", "Framer Motion"];

export const TechStack = () => {
  const loop = [...techs, ...techs];
  return (
    <section className="border-y border-border py-16">
      <div className="marquee-mask overflow-hidden">
        <div className="group flex w-max animate-marquee gap-16 px-6 [animation-play-state:running] hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <span key={i} className="display whitespace-nowrap text-5xl md:text-7xl text-foreground/15 transition-colors duration-500 hover:text-foreground">
              {t} <span className="mx-6 text-foreground/10">●</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
