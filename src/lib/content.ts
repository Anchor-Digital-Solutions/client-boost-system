import { Bot, CalendarDays, ChartNoAxesCombined, CircleHelp, Code2, Globe2, Megaphone, MessageSquareText, RefreshCw, Search, Workflow } from "lucide-react";

export const services = [
  {
    slug: "website-design-development",
    path: "/services/website-design-development",
    icon: Globe2,
    title: "Website Design & Development",
    description: "Professional websites designed to give businesses credibility, communicate their services clearly, and convert visitors into enquiries.",
    items: ["Business websites", "Landing pages", "E-commerce", "Portfolio websites", "Responsive design", "Custom functionality", "WhatsApp integration", "Forms", "Basic SEO", "Analytics"],
    cta: "Explore Website Services",
  },
  {
    slug: "digital-marketing",
    path: "/services/digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Practical digital marketing strategies designed to help businesses become more visible and generate qualified enquiries.",
    items: ["Social media strategy", "Content strategy", "Social media management", "Local SEO", "Google Business Profile optimization", "Lead generation", "Campaign strategy", "Performance tracking"],
    cta: "Explore Marketing Services",
  },
  {
    slug: "ai-automation",
    path: "/services/ai-automation",
    icon: Bot,
    title: "AI Automation",
    description: "Practical AI and workflow automation that reduces repetitive work and helps businesses respond faster.",
    items: ["Lead capture", "Lead qualification", "Automated follow-ups", "Appointment booking", "FAQ automation", "Customer support", "Review requests", "Lead reactivation", "CRM workflows", "Business process automation"],
    cta: "Explore AI Automation",
  },
] as const;

export const problems = [
  { problem: "Enquiries are getting lost", detail: "Customers are messaging, but follow-up is inconsistent.", solution: "Automated lead capture and follow-up.", icon: Search },
  { problem: "The same questions repeat", detail: "Your team spends time answering common customer questions.", solution: "AI-powered FAQ and support automation.", icon: CircleHelp },
  { problem: "Bookings are managed manually", detail: "Scheduling and reminders create unnecessary back-and-forth.", solution: "Automated appointment workflows and reminders.", icon: CalendarDays },
  { problem: "Your online presence feels outdated", detail: "The business looks professional offline, but not online.", solution: "A modern website and stronger digital presence.", icon: Code2 },
  { problem: "Old leads are forgotten", detail: "Interested prospects disappear without a structured next step.", solution: "Automated follow-up and lead reactivation.", icon: RefreshCw },
] as const;

export const automationWorkflows = [
  { title: "Lead Capture", icon: Search, steps: ["Website / WhatsApp enquiry", "Customer information collected", "Lead saved", "Business notified", "Automatic response", "Follow-up scheduled"] },
  { title: "Appointment Booking", icon: CalendarDays, steps: ["Customer requests appointment", "Availability checked", "Appointment booked", "Confirmation sent", "Reminder sent", "Business notified"] },
  { title: "AI Customer Support", icon: MessageSquareText, steps: ["Customer asks question", "AI understands request", "Relevant answer provided", "Complex issue escalated", "Lead captured when appropriate"] },
  { title: "Review Request", icon: RefreshCw, steps: ["Customer completes service", "Review request prepared", "Feedback collected", "Appropriate review workflow continues"] },
] as const;

export const processSteps = [
  { number: "01", title: "Discover", description: "Understand the business, goals, audience, and challenges." },
  { number: "02", title: "Plan", description: "Define the website, marketing, or automation solution." },
  { number: "03", title: "Build", description: "Design, develop, integrate, test, and refine." },
  { number: "04", title: "Launch & Grow", description: "Launch the solution and provide ongoing support where needed." },
] as const;

export const whyAnchor = [
  { title: "Business-Focused Solutions", description: "We focus on actual business needs rather than adding technology simply because it is trendy.", icon: ChartNoAxesCombined },
  { title: "Modern Technology", description: "We use modern web technologies and AI tools to build practical digital solutions.", icon: Code2 },
  { title: "Practical Automation", description: "We identify repetitive tasks that can genuinely be improved through automation.", icon: Workflow },
  { title: "One Digital Partner", description: "Businesses can work with Anchor for websites, marketing, and automation.", icon: Globe2 },
  { title: "Built Around Your Business", description: "Solutions are adapted to the client's goals and workflow.", icon: Bot },
] as const;

export interface Project {
  slug: string;
  title: string;
  industry: string;
  category: string;
  description: string;
  services: string[];
  features: string[];
  technologies: string[];
  image?: string;
  projectUrl?: string;
  isDemo: boolean;
  featured: boolean;
}

export const projects: Project[] = [
  { slug: "beauty-salon", title: "Beauty & Salon", industry: "Beauty & Wellness", category: "Website + Booking Workflow", description: "A refined salon website concept that makes services, location, enquiries, and booking actions easy to find.", services: ["Website design", "Booking workflow"], features: ["Services", "Gallery", "Booking", "WhatsApp", "Location", "Customer enquiries"], technologies: ["Responsive web", "WhatsApp", "Booking UX"], projectUrl: "https://practical-glow-ritual-studio.base44.app/", isDemo: true, featured: true },
  { slug: "real-estate", title: "Real Estate", industry: "Property", category: "Website + Lead Qualification", description: "A property discovery concept with clear listing details, viewing requests, and structured lead qualification.", services: ["Website design", "Lead capture"], features: ["Property listings", "Search", "Property details", "Enquiry", "WhatsApp", "Lead qualification", "Viewing booking"], technologies: ["Responsive web", "Search UX", "Lead forms"], projectUrl: "https://riverside-luxury-living.base44.app/", isDemo: true, featured: true },
  { slug: "restaurant-cafe", title: "Restaurant / Café", industry: "Hospitality", category: "Website + Enquiry System", description: "An editorial hospitality concept designed to make menus, directions, reservations, and customer enquiries straightforward.", services: ["Website design", "Reservation flow"], features: ["Menu", "Location", "Reservations", "WhatsApp", "Enquiries"], technologies: ["Responsive web", "Menu UX", "Maps-ready"], projectUrl: "https://savannah-bistro-flow.base44.app/", isDemo: true, featured: true },
  { slug: "professional-services", title: "Professional Services", industry: "Consulting", category: "Website + Lead Capture", description: "A structured professional services concept focused on authority, service clarity, consultation booking, and qualified enquiries.", services: ["Website strategy", "Lead capture"], features: ["Services", "About", "Consultation booking", "Contact", "FAQ", "Lead capture"], technologies: ["Responsive web", "Form UX", "SEO structure"], projectUrl: "https://oakline-strategy-vault.base44.app/", isDemo: true, featured: true },
  { slug: "car-dealership", title: "Car Dealership", industry: "Automotive", category: "Website + Vehicle Leads", description: "An automotive concept for presenting vehicle inventory and turning buyer interest into structured enquiries and test-drive requests.", services: ["Website design", "Lead generation"], features: ["Vehicle listings", "Vehicle details", "Enquiry", "WhatsApp", "Test-drive request", "Lead capture"], technologies: ["Responsive web", "Inventory UX", "Lead forms"], isDemo: true, featured: true },
  { slug: "clinic-healthcare", title: "Clinic / Healthcare", industry: "Healthcare", category: "Website + Appointment Workflow", description: "A clear, accessible clinic concept for explaining services and guiding patients toward appointment requests and practical information.", services: ["Website design", "Appointment workflow"], features: ["Services", "Team", "Appointment request", "FAQ", "Location", "WhatsApp"], technologies: ["Responsive web", "Accessible UX", "Appointment flow"], isDemo: true, featured: true },
];

export type PricePackage = { name: string; price: number; cadence?: string; description: string; features: string[]; cta: string; featured?: boolean };
export const formatKes = (value: number) => `From KES ${value.toLocaleString("en-KE")}`;

export const pricing = {
  websites: [
    { name: "Starter Website", price: 25000, description: "For small businesses that need a professional online presence.", features: ["1–5 pages", "Responsive design", "Contact form", "WhatsApp integration", "Google Maps ready", "Basic SEO", "Social links", "SSL & deployment"], cta: "Choose Starter" },
    { name: "Business Website", price: 55000, description: "For businesses that need a stronger online presence and additional functionality.", features: ["5–10 pages", "Custom design", "Advanced forms", "WhatsApp integration", "SEO setup", "Analytics ready", "Blog/news section", "Additional integrations"], cta: "Choose Business", featured: true },
    { name: "Custom Website", price: 100000, description: "For businesses requiring tailored functionality and integrations.", features: ["E-commerce", "Booking systems", "Dashboards", "Membership systems", "Custom integrations", "Advanced functionality"], cta: "Request Custom Quote" },
  ],
  marketing: [
    { name: "Starter Marketing", price: 20000, cadence: "/month", description: "A practical foundation for consistent online visibility.", features: ["Social media strategy", "Basic content planning", "Basic account management", "Local visibility support", "Monthly reporting"], cta: "Choose Starter" },
    { name: "Growth Marketing", price: 40000, cadence: "/month", description: "For businesses building a more active customer acquisition system.", features: ["Social media management", "Content strategy", "Local SEO", "Google Business Profile support", "Lead generation", "Performance tracking"], cta: "Choose Growth", featured: true },
    { name: "Full-Service Marketing", price: 70000, cadence: "/month", description: "A coordinated marketing programme across core growth channels.", features: ["Full social media management", "Content", "SEO", "Campaign strategy", "Lead generation", "Analytics", "Optimization"], cta: "Discuss Full Service" },
  ],
  automation: [
    { name: "Simple Automation", price: 25000, description: "For one clear repetitive process that needs a reliable workflow.", features: ["Lead capture", "Notifications", "Basic FAQ workflow", "Simple follow-up"], cta: "Start Simple" },
    { name: "Business Automation", price: 60000, description: "For connected lead, booking, and customer workflows.", features: ["Lead qualification", "CRM integration", "Appointment workflows", "Follow-ups", "WhatsApp workflows"], cta: "Automate My Business", featured: true },
    { name: "Custom AI Automation", price: 120000, description: "For multi-step workflows and tailored AI-enabled systems.", features: ["Multiple integrations", "Custom AI agents", "Complex workflows", "API integrations", "Advanced business processes"], cta: "Request Custom Quote" },
  ],
  automationSupport: { name: "Automation Support", price: 15000, cadence: "/month" },
} satisfies Record<string, PricePackage[] | { name: string; price: number; cadence: string }>;

export const faqs = [
  { q: "How much does a website cost?", a: "Pricing starts from the published package prices, but final pricing depends on scope, functionality, integrations, and requirements." },
  { q: "How long does a website take?", a: "Timelines depend on project scope, content availability, revisions, and functionality." },
  { q: "Can you connect my website to WhatsApp?", a: "Yes, where appropriate." },
  { q: "Do you provide website maintenance?", a: "Maintenance and support can be provided depending on the selected arrangement." },
  { q: "What can AI automation do?", a: "It can automate repetitive processes such as lead capture, customer FAQs, follow-ups, appointment workflows, notifications, and other business processes." },
  { q: "Do I need technical knowledge?", a: "No. Anchor handles the technical implementation and explains the decisions in clear business language." },
  { q: "Can you redesign an existing website?", a: "Yes. The starting point is a review of the current website, business goals, content, and required functionality." },
  { q: "Do you work with businesses outside Nairobi?", a: "Yes, provided the required communication and project requirements can be handled remotely." },
] as const;