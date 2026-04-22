interface Props {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}
export const PageHero = ({ eyebrow, title, description }: Props) => (
  <section className="border-b border-border" style={{ background: "var(--gradient-hero)" }}>
    <div className="container mx-auto pt-16 md:pt-24 pb-14 md:pb-20 text-center max-w-3xl">
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{eyebrow}</p>
      <h1 className="mt-4 font-serif-display text-5xl md:text-6xl leading-[1.05]">{title}</h1>
      {description && <p className="mt-5 text-lg text-muted-foreground">{description}</p>}
    </div>
  </section>
);