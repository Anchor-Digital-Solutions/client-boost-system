interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({ eyebrow, title, description, align = "center" }: Props) => (
  <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-12`}>
    {eyebrow && (
      <p className="eyebrow mb-3">{eyebrow}</p>
    )}
    <h2 className="font-serif-display text-4xl leading-[1.08] text-foreground md:text-6xl">
      {title}
    </h2>
    {description && <p className="mt-4 text-muted-foreground text-lg">{description}</p>}
  </div>
);