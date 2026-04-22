import { Link } from "react-router-dom";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { EMAIL, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/site";

export const Footer = () => (
  <footer className="border-t border-border bg-secondary/40 mt-24">
    <div className="container mx-auto py-14 grid gap-10 md:grid-cols-4">
      <div className="md:col-span-2 space-y-3">
        <p className="font-serif-display text-2xl text-foreground">
          Anchor <span className="text-muted-foreground">Digital Solutions</span>
        </p>
        <p className="text-muted-foreground max-w-md">
          A Nairobi-based agency helping businesses grow through simple, effective digital systems.
        </p>
      </div>
      <div>
        <p className="font-medium mb-3">Pages</p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/services" className="hover:text-primary">Services</Link></li>
          <li><Link to="/pricing" className="hover:text-primary">Pricing</Link></li>
          <li><Link to="/portfolio" className="hover:text-primary">Portfolio</Link></li>
          <li><Link to="/about" className="hover:text-primary">About</Link></li>
          <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
        </ul>
      </div>
      <div>
        <p className="font-medium mb-3">Contact</p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> <a href={`mailto:${EMAIL}`} className="hover:text-primary break-all">{EMAIL}</a></li>
          <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-primary">{PHONE_DISPLAY}</a></li>
          <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Nairobi, Kenya</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container mx-auto py-5 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} Anchor Digital Solutions. All rights reserved.</span>
        <span>Built in Nairobi · Results in 30 days</span>
      </div>
    </div>
  </footer>
);