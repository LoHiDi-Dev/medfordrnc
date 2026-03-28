import { assets } from "./assets";

export const trustMetrics = [
  {
    key: "years",
    title: "30+ Years of Excellence",
    description: "A long-standing commitment to quality care in our community.",
    icon: "award" as const,
  },
  {
    key: "cms",
    title: "4.5 CMS Rating",
    description: "Recognized performance on measures families care about.",
    icon: "star" as const,
  },
  {
    key: "staff",
    title: "200+ Dedicated Staff Members",
    description: "Nurses, therapists, and support teams focused on every resident.",
    icon: "people" as const,
  },
  {
    key: "satisfaction",
    title: "95% Family Satisfaction",
    description: "Feedback that reflects trust, communication, and outcomes.",
    icon: "heart" as const,
  },
] as const;

export const serviceCards = [
  {
    slug: "short-term-rehabilitation",
    title: "Short-Term Rehabilitation",
    description:
      "Intensive therapy and nursing support to help you recover strength and independence after illness, injury, or surgery.",
    image: assets.services.shortTerm,
    imageAlt: "Physical therapist assisting a resident with rehabilitation exercises",
  },
  {
    slug: "long-term-care",
    title: "Long-Term Care",
    description:
      "24-hour skilled nursing and personalized care plans for residents who need ongoing clinical support.",
    image: assets.services.longTerm,
    imageAlt: "Care team supporting a resident in a comfortable care setting",
  },
  {
    slug: "memory-care",
    title: "Memory Care",
    description:
      "Structured routines, secure environments, and specialized programming for residents living with dementia.",
    image: assets.services.memory,
    imageAlt: "Calm memory care environment with caregiver and resident",
  },
  {
    slug: "post-acute-care",
    title: "Post-Acute Care",
    description:
      "A bridge between hospital and home with coordinated nursing, therapy, and discharge planning.",
    image: assets.services.postAcute,
    imageAlt: "Clinical team providing post-acute care in a modern facility",
  },
  {
    slug: "occupational-therapy",
    title: "Occupational Therapy",
    description:
      "Rebuild daily living skills—from dressing and bathing to safe mobility at home.",
    image: assets.services.occupational,
    imageAlt: "Occupational therapy session supporting activities of daily living",
  },
  {
    slug: "speech-therapy",
    title: "Speech Therapy",
    description:
      "Swallowing, communication, and cognitive strategies tailored to each resident’s goals.",
    image: assets.services.speech,
    imageAlt: "Speech therapist working with a resident on communication exercises",
  },
] as const;

export const whyFamiliesItems = [
  {
    title: "Clinical Excellence",
    body: "Physician oversight, experienced nurses, and therapy teams collaborate on clear, measurable goals.",
  },
  {
    title: "Family-Centered Approach",
    body: "We prioritize communication, care conferences, and respectful partnership with loved ones.",
  },
  {
    title: "Modern Facilities",
    body: "Bright therapy gyms, comfortable resident spaces, and amenities that support healing and dignity.",
  },
  {
    title: "Convenient Location",
    body: "Easily reachable for Medford-area families with parking and visitor-friendly hours.",
  },
] as const;

export const testimonials = [
  {
    name: "Margaret Chen",
    role: "Family Member",
    quote:
      "The nurses called us with updates before we even had to ask. Dad was treated like family, not a number.",
    image: assets.testimonials.a,
  },
  {
    name: "Robert Martinez",
    role: "Rehab Patient",
    quote:
      "Therapy pushed me just enough every day. I went home stronger than I expected—and with a plan I understood.",
    image: assets.testimonials.b,
  },
  {
    name: "Linda Thompson",
    role: "Family Member",
    quote:
      "We toured several centers. Medford felt calm, organized, and genuinely kind. That mattered more than anything.",
    image: assets.testimonials.c,
  },
] as const;

export const lifeCommunityPillars = [
  {
    title: "Daily Activities",
    body: "Meaningful programs—from music and art to gentle fitness—keep residents engaged and connected.",
  },
  {
    title: "Delicious Dining",
    body: "Chef-prepared meals with accommodations for preferences, textures, and clinical diets.",
  },
  {
    title: "Community Events",
    body: "Seasonal celebrations, guest performers, and intergenerational visits bring joy to everyday life.",
  },
] as const;
