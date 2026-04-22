import { Link } from "react-router-dom";
import { ArrowRight, Check, MessageCircle, X, Globe, Megaphone, Target, MessageSquare, Calendar, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/site/SectionHeader";
import heroImg from "@/assets/hero-nairobi.jpg";
import { WHATSAPP_URL } from "@/lib/site";

const services = [
  { icon: Globe, title: "Website Design & Development", desc: "Fast, beautiful websites built to convert visitors into enquiries." },
  { icon: Megaphone, title: "Social Media Marketing", desc: "Consistent content and growth that builds trust and authority." },
  { icon: Target, title: "Paid Ads (Facebook & Instagram)", desc: "Targeted ad campaigns that bring qualified buyers to your door." },
  { icon: MessageSquare, title: "WhatsApp Lead Funnel", desc: "A direct lead system that turns clicks into real conversations." },
];

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto pt-12 md:pt-20 pb-16 md:pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-background border border-border text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-whatsapp" /> Now booking 3 new clients · 2026
            </span>
            <h1 className="mt-6 font-serif-display text-5xl md:text-7xl leading-[1.05] text-foreground">
              Get <span className="text-accent-italic">more clients</span> for your business every month.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              We help Nairobi businesses attract and convert customers through high-converting websites, targeted ads, and WhatsApp-based lead systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">Book a Free Call <ArrowRight className="w-4 h-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full bg-background">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["No long contracts", "Results in 30 days", "Built for Nairobi businesses"].map((t) => (
                <li key={t} className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> {t}</li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <img src={heroImg} alt="Modern Nairobi cityscape at sunset" width={1024} height={1280} className="w-full h-[420px] md:h-[560px] object-cover" />
            </div>
            <Card className="absolute -bottom-6 -left-4 md:left-8 p-5 w-60 shadow-soft border-border">
              <p className="text-xs text-muted-foreground">Avg. landing page conversion</p>
              <p className="font-serif-display text-3xl mt-1">5–15%</p>
              <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
                <div className="h-full w-2/3 bg-primary rounded-full" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-background">
        <div className="container mx-auto py-14">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">Framework-based results we build toward</p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { v: "8–15", l: "Buyer enquiries in 14 days" },
              { v: "5–15%", l: "Landing page conversion" },
              { v: "30 days", l: "From launch to first leads" },
              { v: "100%", l: "Owned by you — site, ads & data" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-serif-display text-4xl md:text-5xl text-foreground">{s.v}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="container mx-auto py-20 md:py-28">
        <SectionHeader
          eyebrow="The problem"
          title={<>You're great at what you do. You just need a <span className="text-accent-italic">system</span> that brings clients to you.</>}
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card className="p-8 border-border bg-secondary/40">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Without a system</p>
            <ul className="space-y-3">
              {["No consistent leads", "Website not converting", "Social media not bringing results", "Ads that don't pay back"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-foreground/80">
                  <X className="w-5 h-5 mt-0.5 text-destructive shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-8 border-primary/20 bg-primary text-primary-foreground shadow-soft">
            <p className="text-sm uppercase tracking-wider opacity-70 mb-4">With Anchor</p>
            <ul className="space-y-3">
              {["Consistent client enquiries", "A high-converting website", "WhatsApp lead funnel that closes", "An ongoing growth system"].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container mx-auto py-20 md:py-28">
          <SectionHeader
            eyebrow="What we do"
            title={<>Everything you need to <span className="text-accent-italic">grow.</span></>}
            description="Four core services, one cohesive system designed to bring clients to your business."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <Card key={s.title} className="p-6 border-border bg-card hover:shadow-soft hover:-translate-y-1 transition-smooth">
                <span className="grid place-items-center w-11 h-11 rounded-lg bg-primary/10 text-primary mb-5">
                  <s.icon className="w-5 h-5" />
                </span>
                <h3 className="font-medium text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/services">Explore all services <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container mx-auto py-20 md:py-28">
        <SectionHeader
          eyebrow="How it works"
          title={<>A simple <span className="text-accent-italic">4-step</span> growth system.</>}
        />
        <div className="grid md:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {[
            { i: Calendar, t: "Free Strategy Call", d: "We learn your business and set clear goals." },
            { i: Globe, t: "Website & Funnel", d: "We launch your conversion-ready system." },
            { i: Zap, t: "Launch Ads", d: "Targeted campaigns drive qualified traffic." },
            { i: MessageCircle, t: "Get Clients", d: "Leads land directly in your WhatsApp." },
          ].map((s, i) => (
            <div key={s.t} className="relative p-6 rounded-xl bg-card border border-border">
              <span className="absolute -top-3 left-6 text-xs px-2 py-0.5 rounded-full bg-primary text-primary-foreground">Step {i + 1}</span>
              <s.i className="w-6 h-6 text-primary mt-2" />
              <p className="mt-3 font-medium">{s.t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto pb-20">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 text-center shadow-soft">
          <p className="text-xs uppercase tracking-[0.25em] opacity-70">Limited spots</p>
          <h2 className="mt-4 font-serif-display text-4xl md:text-5xl">
            Ready to get <span className="italic opacity-90">more clients?</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto opacity-80">
            We only take on a limited number of clients each month — let's see if we're the right fit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <Link to="/contact">Book Free Consultation <ArrowRight className="w-4 h-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
