import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, Handshake, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/site/PageHero";

const values = [
  { i: Target, t: "Results-driven", d: "Every decision tied to leads, sales, and growth." },
  { i: Users, t: "Small focused team", d: "We move fast and stay close to every client." },
  { i: Handshake, t: "Long-term partnerships", d: "We grow as your business grows." },
  { i: Zap, t: "Built for speed", d: "Launch in days, not months." },
];

const About = () => (
  <>
    <PageHero
      eyebrow="About"
      title={<>A Nairobi agency <span className="text-accent-italic">obsessed</span> with results.</>}
      description="Anchor Digital Solutions is a Nairobi-based agency helping businesses grow through simple, effective digital systems."
    />
    <section className="container mx-auto py-20">
      <div className="max-w-3xl mx-auto text-lg text-muted-foreground space-y-5 text-center">
        <p>We're a small team, but we move fast and focus on results. We don't sell vanity metrics or jargon — we build the systems that bring real customers to your business.</p>
        <p>Whether you need a new website, ads that pay back, or a steady flow of WhatsApp leads, we'll build it for you and stay in your corner long after launch.</p>
      </div>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {values.map((v) => (
          <Card key={v.t} className="p-6 border-border bg-card hover:-translate-y-1 transition-smooth">
            <span className="grid place-items-center w-11 h-11 rounded-lg bg-primary/10 text-primary mb-4"><v.i className="w-5 h-5" /></span>
            <p className="font-medium">{v.t}</p>
            <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
          </Card>
        ))}
      </div>

      <div className="mt-20 rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 text-center">
        <h3 className="font-serif-display text-3xl md:text-4xl">Let's grow your business <span className="italic">together.</span></h3>
        <Button asChild size="lg" variant="secondary" className="mt-6 rounded-full">
          <Link to="/contact">Book a Free Call <ArrowRight className="w-4 h-4" /></Link>
        </Button>
      </div>
    </section>
  </>
);

export default About;