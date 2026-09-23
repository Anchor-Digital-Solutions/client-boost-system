import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { formatKes, type PricePackage } from "@/lib/content";

export function PricingCard({ item }: { item: PricePackage }) {
  return (
    <article className={`flex h-full flex-col border p-6 md:p-8 ${item.featured ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`}>
      {item.featured && <span className="mb-5 self-start bg-background px-2.5 py-1 text-[11px] font-semibold uppercase text-foreground">Most requested</span>}
      <h3 className="font-serif-display text-3xl">{item.name}</h3>
      <p className={`mt-3 text-sm leading-6 ${item.featured ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{item.description}</p>
      <p className="mt-7 text-2xl font-semibold">{formatKes(item.price)}<span className="text-sm font-normal opacity-70">{item.cadence}</span></p>
      <ul className="mt-6 flex-1 space-y-3 text-sm">
        {item.features.map((feature) => <li key={feature} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0" />{feature}</li>)}
      </ul>
      <Button asChild variant={item.featured ? "secondary" : "default"} className="mt-8 w-full">
        <Link to="/contact">{item.cta}<ArrowUpRight className="size-4" /></Link>
      </Button>
    </article>
  );
}