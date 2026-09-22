import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";

export function CTASection() {
  return (
    <section className="section-shell py-8 md:py-14">
      <div className="bg-foreground px-6 py-14 text-center text-background md:px-12 md:py-20">
        <p className="eyebrow text-primary">Start a conversation</p>
        <h2 className="mt-4 font-serif-display text-4xl leading-tight md:text-6xl">Ready to improve your digital presence?</h2>
        <p className="mx-auto mt-5 max-w-xl text-background/70">Tell us what you're trying to build, improve or automate.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/contact">Book a Free Consultation <ArrowUpRight /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-background/30 bg-transparent text-background hover:bg-background hover:text-foreground">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle /> Chat on WhatsApp</a>
          </Button>
        </div>
      </div>
    </section>
  );
}