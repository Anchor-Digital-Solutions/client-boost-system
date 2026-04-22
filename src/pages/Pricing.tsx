import { Link } from "react-router-dom";
import { Check, Star, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { WHATSAPP_URL } from "@/lib/site";

const websites = [
  { name: "Starter", price: "KSh 15,000–20,000", popular: false, features: ["1–3 page website", "Mobile responsive", "WhatsApp integration", "Contact form", "Hosting setup guidance"] },
  { name: "Growth", price: "KSh 25,000–35,000", popular: true, features: ["Up to 5 pages", "Lead generation landing page", "SEO improvements", "Branding improvements", "WhatsApp + form integration"] },
  { name: "Premium", price: "From KSh 45,000", popular: false, features: ["Advanced website / e-commerce", "Payment integration", "Custom features", "Performance optimisation", "Priority support"] },
];

const monthly = [
  { name: "Growth Plan", price: "KSh 25,000–35,000", per: "/month", popular: true, features: ["Social media management", "Content creation", "Ads management", "WhatsApp lead system", "Monthly reporting"] },
  { name: "Pro Growth Plan", price: "KSh 40,000–60,000", per: "/month", popular: false, features: ["Everything in Growth", "Advanced ad campaigns", "Funnel optimisation", "More content output", "Strategy & scaling support"] },
];

const PriceCard = ({ name, price, per, popular, features }: any) => (
  <Card className={`relative p-8 flex flex-col border-border ${popular ? "bg-primary text-primary-foreground border-primary shadow-soft scale-[1.02]" : "bg-card"}`}>
    {popular && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-background text-primary border border-border">
        <Star className="w-3 h-3 fill-current" /> Most Popular
      </span>
    )}
    <p className={`text-sm ${popular ? "opacity-80" : "text-muted-foreground"}`}>{name}</p>
    <p className="font-serif-display text-3xl md:text-4xl mt-2">
      {price}<span className={`text-base font-sans ${popular ? "opacity-70" : "text-muted-foreground"}`}>{per}</span>
    </p>
    <ul className="mt-6 space-y-3 flex-1">
      {features.map((f: string) => (
        <li key={f} className="flex items-start gap-2 text-sm">
          <Check className={`w-4 h-4 mt-0.5 shrink-0 ${popular ? "" : "text-primary"}`} /> {f}
        </li>
      ))}
    </ul>
    <Button asChild className={`mt-7 rounded-full ${popular ? "bg-background text-primary hover:bg-background/90" : ""}`} variant={popular ? "secondary" : "default"}>
      <Link to="/contact">Get started <ArrowRight className="w-4 h-4" /></Link>
    </Button>
  </Card>
);

const Pricing = () => (
  <>
    <PageHero
      eyebrow="Pricing"
      title={<>Simple pricing. <span className="text-accent-italic">Real results.</span></>}
      description="Transparent packages built for Nairobi businesses ready to grow."
    />

    <section className="container mx-auto py-20">
      <SectionHeader eyebrow="One-time" title={<>Website <span className="text-accent-italic">packages</span></>} description="Launch a website that works for your business from day one." />
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {websites.map((p) => <PriceCard key={p.name} {...p} per="" />)}
      </div>
    </section>

    <section className="bg-secondary/40 border-y border-border">
      <div className="container mx-auto py-20">
        <SectionHeader
          eyebrow="Monthly retainers"
          title={<>Monthly <span className="text-accent-italic">growth</span> plans</>}
          description="A website alone is not enough. Our monthly plans help you attract and convert customers consistently."
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {monthly.map((p) => <PriceCard key={p.name} {...p} />)}
        </div>
      </div>
    </section>

    <section className="container mx-auto py-20 text-center">
      <h3 className="font-serif-display text-3xl md:text-4xl">Need something <span className="text-accent-italic">custom?</span></h3>
      <p className="mt-3 text-muted-foreground max-w-lg mx-auto">Let's talk. We'll build a package that fits your business and your goals.</p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Button asChild size="lg" className="rounded-full"><Link to="/contact">Book a Free Call <ArrowRight className="w-4 h-4" /></Link></Button>
        <Button asChild size="lg" variant="outline" className="rounded-full"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle className="w-4 h-4" /> WhatsApp</a></Button>
      </div>
    </section>
  </>
);

export default Pricing;