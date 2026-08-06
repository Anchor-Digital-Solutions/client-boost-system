import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/site/PageHero";

const projects = [
  {
    title: "Riverside Real Estate",
    category: "Real Estate · Property Listings",
    badge: "Agency Concept Build",
    desc: "Modern property listing platform with instant WhatsApp lead capture and single-tap agent inquiries.",
    demoUrl: "https://riverside-luxury-living.base44.app/",
    color: "from-emerald-900/80 to-emerald-700/60",
  },
  {
    title: "Karibu Market",
    category: "Retail · E-commerce Store",
    badge: "Agency Concept Build",
    desc: "Mobile-first online store featuring product search, live cart calculations, and M-Pesa express checkout.",
    demoUrl: "https://karibu-market-go.base44.app/",
    color: "from-amber-900/80 to-amber-700/60",
  },
  {
    title: "Savannah Bistro",
    category: "Hospitality · Restaurant & Menu",
    badge: "Agency Concept Build",
    desc: "Elegant dining showcase with tabbed digital menus and direct WhatsApp table reservation engine.",
    demoUrl: "https://savannah-bistro-flow.base44.app/",
    color: "from-rose-900/80 to-rose-700/60",
  },
  {
    title: "Oakline Consultancy",
    category: "Professional Services · Corporate Site",
    badge: "Agency Concept Build",
    desc: "High-authority corporate build designed for advisory firms with structured service grids and lead capture.",
    demoUrl: "https://oakline-strategy-vault.base44.app/",
    color: "from-slate-900/80 to-slate-700/60",
  },
  {
    title: "Glow Beauty Studio",
    category: "Beauty & Wellness · Booking System",
    badge: "Agency Concept Build",
    desc: "Chic mobile-first salon & spa site designed to eliminate missed DM inquiries with structured scheduling.",
    demoUrl: "https://practical-glow-ritual-studio.base44.app/",
    color: "from-fuchsia-900/80 to-fuchsia-700/60",
  },
  {
    title: "Pulse Fitness Studio",
    category: "Gym & Fitness · Ad Landing Page",
    badge: "Agency Concept Build",
    desc: "High-energy landing page built to convert social ad traffic into 3-day free trial gym memberships.",
    demoUrl: "https://pulse-kinetic-fit.base44.app/",
    color: "from-orange-900/80 to-orange-700/60",
  },
];

const Portfolio = () => (
  <>
    <PageHero
      eyebrow="Portfolio"
      title={<>
        Work that <span className="text-accent-italic">converts.</span>
      </>}
      description="Live agency builds that turn clicks into customers."
    />
    <section className="container mx-auto py-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Card
            key={p.title}
            className="overflow-hidden border-border group hover:shadow-soft transition-smooth flex flex-col"
          >
            <div
              className={`h-48 bg-gradient-to-br ${p.color} relative`}
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <span className="self-start text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                {p.badge}
              </span>
              <h3 className="mt-3 font-serif-display text-2xl text-foreground">
                {p.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.category}</p>
              <p className="mt-3 text-muted-foreground flex-1">{p.desc}</p>
              <a
                href={p.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-primary hover:underline"
              >
                View Demo <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="font-serif-display text-3xl md:text-4xl">
          Yours could be <span className="text-accent-italic">next.</span>
        </h3>
        <Button asChild size="lg" className="mt-6 rounded-full">
          <Link to="/contact">
            Start your project <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  </>
);

export default Portfolio;
