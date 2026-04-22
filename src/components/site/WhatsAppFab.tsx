import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

export const WhatsAppFab = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with us on WhatsApp"
    className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 pl-4 pr-5 py-3 rounded-full bg-whatsapp text-whatsapp-foreground shadow-soft hover:scale-105 transition-smooth animate-float"
  >
    <MessageCircle className="w-5 h-5" />
    <span className="text-sm font-medium hidden sm:inline">Chat with us</span>
  </a>
);