import { Link } from "react-router-dom";
import { Globe, Megaphone, Target, MessageSquare, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/site/PageHero";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    pitch: "A website that actually brings you business — not a digital brochure.",
    items: ["Business websites", "High-converting landing pages", "E-commerce stores", "Mobile-first design", "WhatsApp + lead form integration"],
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    pitch: "Show up consistently and turn followers into paying customers.",
    items: ["Content creation & design", "Daily posting & scheduling", "Brand growth strategy", "Engagement & community building"],
  },
  {
    icon: Target,
    title: "Paid Ads (Facebook & Instagram)",
    pitch: "Get qualified leads on demand with profitable ad campaigns.",
    items: ["Ad strategy & creative", "Lead generation campaigns", "Audience targeting & retargeting", "Reporting & optimisation"],
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Lead System",
    pitch: "Connect with buyers where they actually reply — WhatsApp.",
    items: ["Direct lead delivery to WhatsApp", "Faster conversions", "Conversation templates", "CRM-ready lead capture"],
  },
];

const Services = () => (
  <>
    <PageHero
      eyebrow="Services"
      title={<>Built to bring you <span className="text-accent-italic">results.</span></>}
      description="Everything below is designed for one outcome — more qualified clients walking into your business."
    />
    <section className="container mx-auto py-20">
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <Card key={s.title} className="p-8 border-border bg-card hover:shadow-soft transition-smooth">
            <span className="grid place-items-center w-12 h-12 rounded-xl bg-primary text-primary-foreground mb-5">
              <s.icon className="w-5 h-5" />
            </span>
            <h2 className="font-serif-display text-2xl">{s.title}</h2>
            <p className="mt-2 text-muted-foreground">{s.pitch}</p>
            <ul className="mt-5 space-y-2">
              {s.items.map((it) => (
                <li key={it} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {it}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <div className="mt-16 rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 text-center">
        <h3 className="font-serif-display text-3xl md:text-4xl">Not sure which service you need?</h3>
        <p className="mt-3 opacity-80 max-w-xl mx-auto">Book a free strategy call — we'll recommend the right system for your business.</p>
        <Button asChild size="lg" variant="secondary" className="mt-7 rounded-full">
          <Link to="/contact">Book a Free Call <ArrowRight className="w-4 h-4" /></Link>
        </Button>
      </div>
    </section>
  </>
);

export default Services;