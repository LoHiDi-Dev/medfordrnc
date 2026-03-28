export const site = {
  name: "Medford Rehabilitation & Nursing Center",
  shortName: "Medford RNC",
  phoneDisplay: "781.396.4400",
  phoneTel: "+17813964400",
  /** General inquiries (matches approved Figma footer). */
  email: "info@medfordrehab.com",
  billingEmail: "billing@medfordrnc.com",
  address: {
    line1: "101 Main Street",
    city: "Medford",
    state: "MA",
    zip: "02155",
  },
  /** Example directions link — replace with your preferred map URL. */
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Medford+MA+02155",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
} as const;
