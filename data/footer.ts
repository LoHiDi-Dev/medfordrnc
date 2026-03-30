export const footerQuickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Mission & Values", href: "/about/mission" },
  { label: "Our Team", href: "/about/team" },
  { label: "For Families", href: "/families" },
  { label: "Careers", href: "/careers" },
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

/** Matches Figma homepage footer copy (node 36:2839). */
export const footerBlurb = `Providing compassionate care and trusted expertise to families in Medford, Mass for over 30 years.`;

/** Equal opportunity / admissions & care — pre-footer compliance copy. */
export const footerNonDiscrimination =
  "This facility does not discriminate in admission or retention or care of its residents because of race, creed, color, national origin, sex, disability, age, source of payment, marital status or sexual preference.";
