import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Award,
  BedDouble,
  Brain,
  BriefcaseMedical,
  Check,
  Heart,
  MessageSquare,
  Star,
  Stethoscope,
  Users,
} from "lucide-react";
import { assets } from "./assets";

export type TrustMetric = {
  key: string;
  value: string;
  label: string;
  icon: LucideIcon;
};

export const trustMetrics: TrustMetric[] = [
  { key: "years", value: "30+", label: "Years of Excellence", icon: Award },
  { key: "cms", value: "4.5", label: "CMS Rating", icon: Star },
  {
    key: "staff",
    value: "200+",
    label: "Dedicated Staff Members",
    icon: Users,
  },
  {
    key: "satisfaction",
    value: "95%",
    label: "Family Satisfaction",
    icon: Heart,
  },
];

export type ServiceCardData = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  learnMoreArrow: "accent" | "primary";
};

export const serviceCards: ServiceCardData[] = [
  {
    slug: "short-term-rehabilitation",
    title: "Short-Term\nRehabilitation",
    description:
      "Short-term support focused on recovery, strength, and independence.",
    image: assets.services.shortTerm,
    imageAlt: "Physical therapist assisting a resident with rehabilitation exercises",
    icon: Activity,
    learnMoreArrow: "accent",
  },
  {
    slug: "long-term-care",
    title: "Long-Term Care",
    description:
      "Compassionate long-term care in a comfortable, supportive setting.",
    image: assets.services.longTerm,
    imageAlt: "Care team supporting a resident in a comfortable care setting",
    icon: BedDouble,
    learnMoreArrow: "accent",
  },
  {
    slug: "memory-care",
    title: "Memory Care",
    description:
      "Specialized support for residents living with Alzheimer’s or dementia.",
    image: assets.services.memory,
    imageAlt: "Calm memory care environment with caregiver and resident",
    icon: Brain,
    learnMoreArrow: "accent",
  },
  {
    slug: "post-acute-care",
    title: "Post-Acute\nCare",
    description:
      "Skilled care after surgery, illness, or hospitalization.",
    image: assets.services.postAcute,
    imageAlt: "Clinical team providing post-acute care in a modern facility",
    icon: Stethoscope,
    learnMoreArrow: "primary",
  },
  {
    slug: "occupational-therapy",
    title: "Occupational Therapy",
    description:
      "Therapy that helps residents regain strength and daily function.",
    image: assets.services.occupational,
    imageAlt: "Occupational therapy session supporting activities of daily living",
    icon: BriefcaseMedical,
    learnMoreArrow: "primary",
  },
  {
    slug: "speech-therapy",
    title: "Speech\nTherapy",
    description:
      "Speech support focused on communication and swallowing needs.",
    image: assets.services.speech,
    imageAlt: "Speech therapist working with a resident on communication exercises",
    icon: MessageSquare,
    learnMoreArrow: "primary",
  },
];

export type WhyFamiliesItem = {
  title: string;
  body: string;
  icon: LucideIcon;
};

export const whyFamiliesItems: WhyFamiliesItem[] = [
  {
    title: "Clinical Excellence",
    body: "Experienced rehabilitation and nursing teams focused on long-term health, comfort, and better outcomes.",
    icon: Check,
  },
  {
    title: "Family-Centered Approach",
    body: "We help families feel informed, supported, and involved at every step.",
    icon: Check,
  },
  {
    title: "Modern Facilities",
    body: "Comfortable spaces designed to support healing, daily living, and peace of mind.",
    icon: Check,
  },
  {
    title: "Convenient Location",
    body: "Easily accessible for local families, hospitals, and care partners in Medford.",
    icon: Check,
  },
];

export const testimonials = [
  {
    name: "Margaret Chen",
    role: "Family Member",
    quote:
      "My mother was treated \nwith warmth, dignity, and real \ncompassion every day..",
    image: assets.testimonials.a,
  },
  {
    name: "Robert Martinez",
    role: "Resident",
    quote:
      "The therapy team helped me \nregain my strength and confidence \nafter surgery..",
    image: assets.testimonials.b,
  },
  {
    name: "Linda Thompson",
    role: "Family Member",
    quote:
      "Medford gave our family peace \nof mind when we needed it most..",
    image: assets.testimonials.c,
  },
] as const;

export type LifeCommunityPillar = {
  title: string;
  body: string;
  /** Raster icons from design (public/). */
  iconSrc: string;
};

export const lifeCommunityPillars: LifeCommunityPillar[] = [
  {
    title: "Daily Activities",
    body: "Engaging programs including music therapy, art classes, gardening, and social events.",
    iconSrc: "/icons/life-community/calendar.png",
  },
  {
    title: "Delicious Dining",
    body: "Chef-prepared meals with nutritious options, and accommodating dietary needs.",
    iconSrc: "/icons/life-community/dining.png",
  },
  {
    title: "Community Events",
    body: "Regular family gatherings, holiday celebrations and entertainment.",
    iconSrc: "/icons/life-community/community.png",
  },
];
