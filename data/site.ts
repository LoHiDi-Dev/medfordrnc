export const site = {
  name: "Medford Rehabilitation & Nursing Center",
  shortName: "Medford RNC",
  description:
    "Expert rehabilitation and skilled nursing in Medford, Massachusetts—delivered with warmth, dignity, and family-centered communication.",
  phoneDisplay: "781.396.4400",
  phoneTel: "+17813964400",
  /** General inquiries (matches approved Figma footer). */
  email: "info@medfordrehab.com",
  billingEmail: "billing@medfordrnc.com",
  address: {
    line1: "300 Winthrop Street",
    city: "Medford",
    state: "MA",
    zip: "02155",
  },
  /** Direct link to Google Maps for the street address. */
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=300%20Winthrop%20Street%2C%20Medford%2C%20MA%2002155",
  social: {
    facebook: "https://www.facebook.com/medfordrehab",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
} as const;
