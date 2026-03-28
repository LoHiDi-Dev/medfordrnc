import { site } from "./site";

export const footerQuickLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Mission & Values", href: "/about-us/mission-values" },
  { label: "Our Team", href: "/about-us/our-team" },
  { label: "For Families", href: "/families" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerServiceLinks = [
  { label: "Short-Term Rehabilitation", href: "/services/short-term-rehabilitation" },
  { label: "Long-Term Care", href: "/services/long-term-care" },
  { label: "Memory Care", href: "/services/memory-care" },
  { label: "Skilled Nursing", href: "/services/skilled-nursing" },
  { label: "Physical Therapy", href: "/services/physical-therapy" },
] as const;

export const footerLegal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Accessibility", href: "/accessibility" },
] as const;

export const footerBlurb = `Providing compassionate care and trusted expertise to families in ${site.address.city}, ${site.address.state} for over 30 years.`;
