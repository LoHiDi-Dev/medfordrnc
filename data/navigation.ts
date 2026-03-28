export type NavChild = { label: string; href: string };

export type NavSection = {
  label: string;
  href: string;
  children: NavChild[];
};

export const mainNavigation: NavSection[] = [
  {
    label: "About Us",
    href: "/about-us",
    children: [
      { label: "Overview", href: "/about-us" },
      { label: "Mission & Values", href: "/about-us/mission-values" },
      { label: "Our Team", href: "/about-us/our-team" },
      { label: "Location & Community", href: "/about-us/location-community" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Overview", href: "/services" },
      { label: "Short-Term Rehabilitation", href: "/services/short-term-rehabilitation" },
      { label: "Long-Term Care", href: "/services/long-term-care" },
      { label: "Memory Care", href: "/services/memory-care" },
      { label: "Skilled Nursing", href: "/services/skilled-nursing" },
      { label: "Physical Therapy", href: "/services/physical-therapy" },
      { label: "Occupational Therapy", href: "/services/occupational-therapy" },
      { label: "Speech Therapy", href: "/services/speech-therapy" },
      { label: "Post-Acute Care", href: "/services/post-acute-care" },
    ],
  },
  {
    label: "Families",
    href: "/families",
    children: [
      { label: "Overview", href: "/families" },
      { label: "Contact a Resident", href: "/families/contact-a-resident" },
      { label: "Visiting Information", href: "/families/visiting-information" },
      { label: "FAQs", href: "/families/faqs" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Overview", href: "/admissions" },
      { label: "Request Information", href: "/admissions/request-information" },
      { label: "Schedule a Tour", href: "/admissions/schedule-a-tour" },
    ],
  },
];
