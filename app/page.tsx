import { Calendar } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { assets } from "@/data/assets";
import {
  lifeCommunityPillars,
  serviceCards,
  testimonials,
  trustMetrics,
  whyFamiliesItems,
} from "@/data/homepage";
import { PageContainer } from "@/components/layout/PageContainer";
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

const heroBtnShadow =
  "shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]";

const lifeImageShadow =
  "shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]";

const pillarShadow =
  "shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]";

const whyImageShadow =
  "shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]";

export default function HomePage() {
  return (
    <>
      <HeroSection
        badge="30+ Years of Trusted Care"
        title="Compassionate care your family can trust"
        description={
          "Expert rehabilitation and nursing care delivered\nwith warmth, dignity, and peace of mind\nfor families in Medford."
        }
      />
      <MetricsStrip items={trustMetrics} />

      <section className="bg-gradient-to-b from-white to-warm-gray pb-20 pt-20">
        <div className="mx-auto w-full max-w-[1152px] px-5 sm:px-8 lg:px-0">
          <SectionHeading
            title="Our Services"
            description="Comprehensive care tailored to your loved one's unique needs"
            titleSize="xl"
          />
          <div className="mt-[64px] grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((s) => (
              <ServiceCard
                key={s.slug}
                title={s.title}
                description={s.description}
                href={`/services/${s.slug}`}
                imageSrc={s.image}
                imageAlt={s.imageAlt}
                icon={s.icon}
                learnMoreArrow={s.learnMoreArrow}
                titleTone={
                  s.learnMoreArrow === "primary" ? "muted" : "default"
                }
              />
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <Link
              href="/services"
              className={`inline-flex h-[60px] min-w-[259px] items-center justify-center gap-2 rounded-[10px] bg-primary px-10 text-[18px] font-semibold leading-7 tracking-[-0.4395px] text-white transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${heroBtnShadow}`}
            >
              <Calendar
                className="size-5 shrink-0"
                strokeWidth={1.85}
                aria-hidden
              />
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-mint py-20 sm:py-24">
        <PageContainer>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-[48px]">
            <div
              className={`relative h-[min(500px,70vw)] max-h-[500px] min-h-[280px] overflow-hidden rounded-2xl lg:h-[500px] ${whyImageShadow}`}
            >
              <Image
                src={assets.whyFamilies}
                alt="Residents enjoying activities together in a bright community room"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="max-w-[616px]">
              <h2 className="font-serif-display text-[48px] font-bold leading-[48px] text-[#48484a]">
                Why Families Choose Us
              </h2>
              <p className="mt-6 max-w-[616px] text-pretty font-sans text-[20px] font-normal leading-[32.5px] text-[#374151]">
                We understand that choosing care for your loved one is one of
                life&apos;s most important decisions. Here&apos;s what sets us
                apart.
              </p>
              <FeatureChecklist className="mt-10" items={whyFamiliesItems} />
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="bg-gradient-to-b from-white to-warm-gray py-20 sm:py-24">
        <div className="mx-auto w-full max-w-[1152px] px-5 sm:px-8 lg:px-0">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Families Are Saying"
            description="Short reflections on the care, dignity, and peace of mind families found at Medford."
            titleSize="xl"
          />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <PageContainer>
          <SectionHeading
            title="Life in Our Community"
            description="Every day is filled with connection, purpose, and joy"
            titleSize="xl"
          />
          <div className="mt-16 grid grid-cols-1 gap-8 md:mt-[64px] md:grid-cols-2">
            <div
              className={`relative aspect-[4/3] min-h-[240px] w-full overflow-hidden rounded-2xl sm:min-h-[280px] md:aspect-auto md:h-[320px] ${lifeImageShadow}`}
            >
              <Image
                src={assets.lifeActivities}
                alt="Residents participating in a creative art activity"
                fill
                className="object-cover object-[center_25%]"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div
              className={`relative aspect-[4/3] min-h-[240px] w-full overflow-hidden rounded-2xl sm:min-h-[280px] md:aspect-auto md:h-[320px] ${lifeImageShadow}`}
            >
              <Image
                src={assets.lifeGarden}
                alt="Residents enjoying time in an outdoor garden"
                fill
                className="object-cover object-[center_30%]"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
          <div className="mt-10 grid gap-8 sm:mt-12 md:grid-cols-3">
            {lifeCommunityPillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className={`flex min-h-0 flex-col rounded-2xl bg-white p-8 text-left md:min-h-[254px] ${pillarShadow}`}
                >
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-mint">
                    <Image
                      src={pillar.iconSrc}
                      alt=""
                      width={24}
                      height={24}
                      className="size-6 object-contain"
                      aria-hidden
                    />
                  </div>
                  <h3 className="mt-6 font-serif-display text-[20px] font-bold leading-7 text-[#48484a]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-pretty font-sans text-base font-normal leading-[26px] text-[#4b5563]">
                    {pillar.body}
                  </p>
                </article>
            ))}
          </div>
        </PageContainer>
      </section>

      <CTASection title="Ready to Take the Next Step?" />
    </>
  );
}
