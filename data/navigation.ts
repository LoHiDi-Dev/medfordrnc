export type NavLeaf = { label: string; href: string };

export type NavGroup = {
  label: string;
  children: NavLeaf[];
};

export type NavChild = NavLeaf | NavGroup;

export type NavSection = {
  label: string;
  href: string;
  children: NavChild[];
};

/** Parent labels link to section landing pages; no “Overview” in dropdowns. */
export const mainNavigation: NavSection[] = [
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Mission & Values", href: "/about/mission" },
      { label: "Our Team", href: "/about/team" },
      { label: "Location & Community", href: "/about/location" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Rehabilitation & Recovery",
        children: [
          {
            label: "Short-Term Rehabilitation",
            href: "/services/short-term-rehabilitation",
          },
          { label: "Post-Acute Care", href: "/services/post-acute-care" },
        ],
      },
      {
        label: "Therapy Services",
        children: [
          { label: "Physical Therapy", href: "/services/physical-therapy" },
          {
            label: "Occupational Therapy",
            href: "/services/occupational-therapy",
          },
          { label: "Speech Therapy", href: "/services/speech-therapy" },
        ],
      },
      {
        label: "Long-Term & Specialized Care",
        children: [
          { label: "Long-Term Care", href: "/services/long-term-care" },
          { label: "Skilled Nursing", href: "/services/skilled-nursing" },
          { label: "Memory Care", href: "/services/memory-care" },
        ],
      },
    ],
  },
  {
    label: "Families",
    href: "/families",
    children: [
      { label: "Contact a Resident", href: "/families/contact" },
      { label: "Visiting Information", href: "/families/visiting" },
      { label: "FAQs", href: "/families/faqs" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Request Information", href: "/admissions/request-information" },
      { label: "Schedule a Tour", href: "/admissions/schedule-a-tour" },
    ],
  },
];
