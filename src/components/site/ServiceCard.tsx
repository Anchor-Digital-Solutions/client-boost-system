import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import type { services } from "@/lib/content";

type Service = (typeof services)[number];

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <article className="group flex h-full flex-col border border-border bg-card p-6 transition duration-200 hover:-translate-y-1 hover:shadow-card md:p-8">
      <div className="flex items-center justify-between">
        <span className="grid size-11 place-items-center bg-primary/10 text-primary"><Icon className="size-5" /></span>
        <span className="text-xs text-muted-foreground">0{index + 1}</span>
      </div>
      <h3 className="mt-8 font-serif-display text-3xl leading-tight">{service.title}</h3>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{service.description}</p>
      <ul className="mt-6 space-y-2 text-sm">
        {service.items.map((item) => <li key={item} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{item}</li>)}
      </ul>
      <Link to={`/services#${service.slug}`} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        {service.cta} <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </article>
  );
}