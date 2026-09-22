import { Bot, CalendarDays, Globe2, Megaphone, MessageSquareText, RefreshCw, Search, Sparkles } from "lucide-react";

export const services = [
  {
    slug: "web-development",
    icon: Globe2,
    title: "Website Design & Development",
    description: "Modern, responsive websites designed to establish credibility, showcase your business and turn visitors into enquiries.",
    items: ["Business websites", "Landing pages", "Service websites", "Responsive design", "Website optimization"],
    cta: "Explore Web Development",
  },
  {
    slug: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic digital marketing that helps businesses reach the right audience and turn attention into customers.",
    items: ["Social media management", "Content strategy", "Paid advertising", "Campaign management", "Brand growth"],
    cta: "Explore Digital Marketing",
  },
  {
    slug: "ai-automation",
    icon: Bot,
    title: "AI Automation",
    description: "Automate repetitive business tasks, capture leads, improve customer communication and save valuable time.",
    items: ["Lead capture", "Automated follow-ups", "AI customer support", "Appointment booking", "FAQ automation", "Business workflow automation"],
    cta: "Explore AI Automation",
  },
];

export const automationExamples = [
  { icon: Search, title: "Lead Capture", description: "Capture customer information automatically and organize leads." },
  { icon: RefreshCw, title: "Lead Follow-Up", description: "Automatically follow up with prospects who haven't responded." },
  { icon: CalendarDays, title: "Appointment Booking", description: "Let customers request and manage appointments without unnecessary back-and-forth." },
  { icon: MessageSquareText, title: "Customer Support", description: "Handle common questions automatically while routing complex requests to a human." },
  { icon: Sparkles, title: "Review Requests", description: "Automatically request customer feedback after a completed service." },
];

export const projects = [
  { title: "Riverside Real Estate", category: "Property website", description: "A polished property discovery concept with clear enquiry paths and mobile-first browsing.", services: ["Web design", "Lead capture"], url: "https://riverside-luxury-living.base44.app/" },
  { title: "Karibu Market", category: "E-commerce concept", description: "A streamlined retail experience designed around product discovery and confident checkout decisions.", services: ["UX design", "E-commerce"], url: "https://karibu-market-go.base44.app/" },
  { title: "Savannah Bistro", category: "Hospitality website", description: "An editorial restaurant concept that makes menus and reservation actions easy to find.", services: ["Web design", "Reservations"], url: "https://savannah-bistro-flow.base44.app/" },
  { title: "Oakline Consultancy", category: "Professional services", description: "A structured consultancy concept focused on authority, service clarity and qualified enquiries.", services: ["Strategy", "Web development"], url: "https://oakline-strategy-vault.base44.app/" },
  { title: "Glow Beauty Studio", category: "Booking concept", description: "A refined beauty studio experience with clear service choices and an efficient booking journey.", services: ["Web design", "Booking flow"], url: "https://practical-glow-ritual-studio.base44.app/" },
  { title: "Pulse Fitness Studio", category: "Campaign landing page", description: "A focused fitness concept built to turn campaign attention into trial enquiries.", services: ["Landing page", "Lead capture"], url: "https://pulse-kinetic-fit.base44.app/" },
];

export const processSteps = [
  { number: "01", title: "Discover", description: "We understand your business, customers and goals." },
  { number: "02", title: "Plan", description: "We design the right digital solution for your needs." },
  { number: "03", title: "Build", description: "We develop, integrate and test your solution." },
  { number: "04", title: "Launch & Grow", description: "We launch your system and can continue supporting and improving it." },
];