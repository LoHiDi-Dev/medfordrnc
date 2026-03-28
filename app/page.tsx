import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { assets } from "@/data/assets";
import {
  lifeCommunityPillars,
  serviceCards,
  testimonials,
  trustMetrics,
  whyFamiliesItems,
} from "@/data/homepage";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { FeatureChecklist } from "@/components/sections/FeatureChecklist";
import { HeroSection } from "@/components/sections/HeroSection";
import { MetricsStrip } from "@/components/sections/MetricsStrip";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { TestimonialCard } from "@/components/sections/TestimonialCard";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Compassionate rehabilitation and skilled nursing in Medford—trusted by families for 30+ years.",
};

function ActivitiesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M7 3v4M17 3v4M5 9h14M5 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UtensilsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M8 3v9a3 3 0 0 0 6 0V3M11 3v18M16 8v13M18 5v3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PartyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="m4 20 4-8 6 2 2 6M9 12l8-8 2 2-8 8M14 7l3 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HomePage() {
  const metricsForStrip = trustMetrics.map((m) => ({
    key: m.key,
    title: m.title,
    description: m.description,
    icon: m.icon,
  }));

  return (
    <>
      <HeroSection
        badge="30+ Years of Trusted Care"
        title="Compassionate care your family can trust"
        description="Expert rehabilitation and nursing care delivered with warmth, dignity, and peace of mind for families in Medford."
      />
      <MetricsStrip items={metricsForStrip} />

      <section className="bg-warm-gray/40 py-16 sm:py-20">
        <PageContainer>
          <SectionHeading
            title="Our Services"
            description="From short-term rehabilitation to long-term support, our clinical teams coordinate around the outcomes that matter to your family."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((s) => (
              <ServiceCard
                key={s.slug}
                title={s.title}
                description={s.description}
                href={`/services/${s.slug}`}
                imageSrc={s.image}
                imageAlt={s.imageAlt}
              />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button href="/services" size="lg">
              View All Services
            </Button>
          </div>
        </PageContainer>
      </section>

      <section className="bg-mint py-16 sm:py-20">
        <PageContainer>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-md">
              <Image
                src={assets.whyFamilies}
                alt="Residents enjoying activities together in a bright community room"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div>
              <SectionHeading
                align="left"
                title="Why Families Choose Us"
                description="We combine clinical depth with the kind of communication families deserve during stressful transitions."
              />
              <FeatureChecklist className="mt-8" items={whyFamiliesItems} />
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="py-16 sm:py-20">
        <PageContainer>
          <SectionHeading
            eyebrow="Testimonials"
            title="What Families Are Saying"
            description="Short reflections on the care, dignity, and peace of mind families found at Medford."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="py-16 sm:py-20">
        <PageContainer>
          <SectionHeading
            title="Life in Our Community"
            description="Purposeful programming, nourishing meals, and neighbors who quickly feel like friends."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-md">
              <Image
                src={assets.lifeActivities}
                alt="Residents participating in a creative art activity"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-md">
              <Image
                src={assets.lifeGarden}
                alt="Residents enjoying time in an outdoor garden"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-mint text-primary">
                <ActivitiesIcon className="size-6" />
              </div>
              <h3 className="mt-4 font-serif-display text-lg font-semibold">
                {lifeCommunityPillars[0].title}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {lifeCommunityPillars[0].body}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-mint text-primary">
                <UtensilsIcon className="size-6" />
              </div>
              <h3 className="mt-4 font-serif-display text-lg font-semibold">
                {lifeCommunityPillars[1].title}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {lifeCommunityPillars[1].body}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6 text-center shadow-sm md:col-span-1">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-mint text-primary">
                <PartyIcon className="size-6" />
              </div>
              <h3 className="mt-4 font-serif-display text-lg font-semibold">
                {lifeCommunityPillars[2].title}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {lifeCommunityPillars[2].body}
              </p>
            </div>
          </div>
        </PageContainer>
      </section>

      <CTASection title="Ready to Take the Next Step?" />

      <section className="border-t border-border bg-mint-soft/30 py-10">
        <PageContainer className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted sm:flex-row sm:text-left">
          <p>
            Need to speak with someone now? Call{" "}
            <Link
              href="tel:+17813964400"
              className="font-semibold text-primary hover:underline"
            >
              781.396.4400
            </Link>
            .
          </p>
          <Link
            href="/pay-online"
            className="font-semibold text-primary hover:underline"
          >
            Pay a bill online
          </Link>
        </PageContainer>
      </section>
    </>
  );
}
