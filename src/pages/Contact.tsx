import { useState } from "react";
import { Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PageHero } from "@/components/site/PageHero";
import { EMAIL, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/site";
import { toast } from "sonner";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success("Message ready — opening WhatsApp so we can reply faster.");
    const form = new FormData(e.currentTarget);
    const text = `Hi Anchor, I'd like to talk.%0A%0AName: ${form.get("name")}%0APhone: ${form.get("phone")}%0ABusiness: ${form.get("business")}%0AService: ${form.get("service")}%0AMessage: ${form.get("message")}`;
    window.open(`https://wa.me/254783032333?text=${text}`, "_blank");
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's talk about <span className="text-accent-italic">growing</span> your business.</>}
        description="Tell us a little about your business and we'll reply within one business day."
      />

      <section className="container mx-auto py-20 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-4">
          <Card className="p-6 border-border">
            <p className="text-sm text-muted-foreground">Email</p>
            <a href={`mailto:${EMAIL}`} className="mt-1 flex items-center gap-2 font-medium hover:text-primary break-all">
              <Mail className="w-4 h-4" /> {EMAIL}
            </a>
          </Card>
          <Card className="p-6 border-border">
            <p className="text-sm text-muted-foreground">WhatsApp</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-1 flex items-center gap-2 font-medium hover:text-primary">
              <MessageCircle className="w-4 h-4" /> {PHONE_DISPLAY}
            </a>
          </Card>
          <Card className="p-6 border-border">
            <p className="text-sm text-muted-foreground">Location</p>
            <p className="mt-1 flex items-center gap-2 font-medium"><MapPin className="w-4 h-4" /> Nairobi, Kenya</p>
          </Card>
          <Card className="p-6 bg-primary text-primary-foreground border-primary">
            <p className="font-serif-display text-2xl">Prefer to chat now?</p>
            <p className="mt-2 opacity-80 text-sm">Send us a quick WhatsApp and we'll reply right away.</p>
            <Button asChild className="mt-4 rounded-full bg-background text-primary hover:bg-background/90">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle className="w-4 h-4" /> Chat on WhatsApp</a>
            </Button>
          </Card>
        </div>

        <Card className="lg:col-span-3 p-8 border-border">
          <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required className="mt-1.5" placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" required className="mt-1.5" placeholder="+254 7..." />
            </div>
            <div>
              <Label htmlFor="business">Business type</Label>
              <Input id="business" name="business" className="mt-1.5" placeholder="Real estate, retail, services..." />
            </div>
            <div>
              <Label htmlFor="service">Service needed</Label>
              <Input id="service" name="service" className="mt-1.5" placeholder="Website, ads, WhatsApp funnel..." />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required rows={5} className="mt-1.5" placeholder="Tell us about your goals..." />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">{sent ? "Thanks — we'll be in touch soon." : "We reply within 1 business day."}</p>
              <Button type="submit" size="lg" className="rounded-full"><Send className="w-4 h-4" /> Send message</Button>
            </div>
          </form>
        </Card>
      </section>
    </>
  );
};

export default Contact;