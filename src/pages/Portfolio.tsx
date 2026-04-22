import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/site/PageHero";

const projects = [
  { title: "Real Estate Website", tag: "Demo Project", desc: "Property listings with WhatsApp enquiry funnel.", color: "from-emerald-900/80 to-emerald-700/60" },
  { title: "E-commerce Store", tag: "Sample Work", desc: "Mobile-first store with M-Pesa-ready checkout flow.", color: "from-amber-900/80 to-amber-700/60" },
  { title: "Restaurant Website", tag: "Demo Project", desc: "Menu, reservations, and direct WhatsApp ordering.", color: "from-rose-900/80 to-rose-700/60" },
  { title: "Business Website", tag: "Sample Work", desc: "Service business with lead capture and booking.", color: "from-slate-900/80 to-slate-700/60" },
];

const Portfolio = () => (
  <>
    <PageHero
      eyebrow="Portfolio"
      title={<>Work that <span className="text-accent-italic">converts.</span></>}
      description="A look at the kind of projects we build for Nairobi businesses."
    />
    <section className="container mx-auto py-20">
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Card key={p.title} className="overflow-hidden border-border group hover:shadow-soft transition-smooth">
            <div className={`h-56 bg-gradient-to-br ${p.color} relative flex items-end p-6`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
              <p className="relative font-serif-display text-2xl text-primary-foreground">{p.title}</p>
            </div>
            <div className="p-6">
              <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">{p.tag}</span>
              <p className="mt-3 text-muted-foreground">{p.desc}</p>
              <a className="inline-flex items-center gap-1 mt-4 text-sm text-primary hover:underline" href="#">
                View concept <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="font-serif-display text-3xl md:text-4xl">Yours could be <span className="text-accent-italic">next.</span></h3>
        <Button asChild size="lg" className="mt-6 rounded-full">
          <Link to="/contact">Start your project <ArrowRight className="w-4 h-4" /></Link>
        </Button>
      </div>
    </section>
  </>
);

export default Portfolio;