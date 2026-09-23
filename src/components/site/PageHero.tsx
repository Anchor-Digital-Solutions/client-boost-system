interface Props {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}
export const PageHero = ({ eyebrow, title, description }: Props) => (
  <section className="border-b border-border bg-secondary/40">
    <div className="section-shell py-16 text-center md:py-24">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mx-auto mt-4 max-w-4xl font-serif-display text-5xl leading-[1.04] md:text-7xl">{title}</h1>
      {description && <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p>}
    </div>
  </section>
);