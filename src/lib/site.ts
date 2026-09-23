export const SITE_URL = "https://anchordigitalsolutions.tech";
export const BUSINESS_NAME = "Anchor Digital Solutions";
export const BUSINESS_EMAIL = "anchordigitalsolutions59@gmail.com";
export const PHONE_DISPLAY = "+254 785 554 098";
export const WHATSAPP_NUMBER = "254785554098";
export const WHATSAPP_MESSAGE = "Hello Anchor Digital Solutions, I'd like to discuss a project.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Add verified URLs here when available. Empty values are intentionally not rendered.
export const BOOKING_URL = "";
export const INSTAGRAM_URL = "";
export const LINKEDIN_URL = "";
export const FACEBOOK_URL = "";
export const GOOGLE_BUSINESS_PROFILE_URL = "";
export const GA_MEASUREMENT_ID = "";

export const BUDGET_RANGES = [
  "Below KES 25,000",
  "KES 25,000–50,000",
  "KES 50,000–100,000",
  "KES 100,000–250,000",
  "KES 250,000+",
  "Not sure yet",
];

export const trackConversion = (event: string, details: Record<string, string> = {}) => {
  if (typeof window === "undefined") return;
  const analyticsWindow = window as Window & { dataLayer?: Array<Record<string, string>> };
  analyticsWindow.dataLayer?.push({ event, ...details });
};

export const buildWhatsAppEnquiryUrl = (fields: Record<string, FormDataEntryValue>) => {
  const lines = [
    "Hello Anchor Digital Solutions, I'd like to make an enquiry.",
    "",
    `Name: ${fields.name || ""}`,
    `Business: ${fields.business || ""}`,
    `Email: ${fields.email || ""}`,
    `Phone / WhatsApp: ${fields.phone || ""}`,
    `Business type: ${fields.businessType || ""}`,
    `Service: ${fields.service || ""}`,
    `Budget: ${fields.budget || ""}`,
    `About the business: ${fields.about || ""}`,
    `Help needed: ${fields.help || ""}`,
  ];
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
};