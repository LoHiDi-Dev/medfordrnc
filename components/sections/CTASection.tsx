import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { utilityIcons } from "@/data/utility-icons";
import { PageContainer } from "@/components/layout/PageContainer";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  title: string;
  className?: string;
};

const cardClass =
  "flex h-[212px] w-full min-w-0 max-w-[282.67px] flex-col items-center rounded-2xl bg-white/10 px-8 pb-8 pt-8 text-center transition-colors hover:bg-white/[0.14] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const ctaIcons = {
  calendarWhite: "/icons/cta/calendar-white.png",
  information: "/icons/cta/information.png",
} as const;

const iconClass = "size-12 shrink-0 object-contain";

/** White on CTA: `brightness-0 invert` until `calendar-white.png` is a real white asset (green lives at `/icons/life-community/calendar.png`). */
const calendarWhiteVisualClass = `${iconClass} brightness-0 invert`;

export function CTASection({ title, className }: CTASectionProps) {
  return (
    <section
      className={cn(
        "min-h-[504px] bg-cta-section py-20 text-white",
        className,
      )}
    >
      <PageContainer>
        <div className="mx-auto max-w-[1120px] text-center">
          <h2 className="font-serif-display text-[36px] font-bold leading-10 tracking-[0.3691px] text-white">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-[672px] font-sans text-[20px] font-normal leading-7 tracking-[-0.4492px] text-white/90">
            We&apos;re here to help your family find the care and support you
            need.
          </p>
        </div>
        <div className="mx-auto mt-8 flex max-w-[896px] flex-col flex-wrap items-center justify-center gap-6 md:flex-row md:justify-center">
          <Link href="/admissions/schedule-a-tour" className={cardClass}>
            <Image
              src={ctaIcons.calendarWhite}
              alt=""
              width={48}
              height={48}
              className={calendarWhiteVisualClass}
            />
            <span className="mt-4 font-sans text-[20px] font-semibold leading-7 tracking-[-0.4492px]">
              Schedule a Tour
            </span>
            <span className="mt-2 max-w-[212px] text-pretty font-sans text-base font-normal leading-6 tracking-[-0.3125px] text-white/80">
              Visit our facility and meet our team
            </span>
          </Link>
          <Link
            href="/admissions/request-information"
            className={cardClass}
          >
            <Image
              src={ctaIcons.information}
              alt=""
              width={48}
              height={48}
              className={iconClass}
            />
            <span className="mt-4 font-sans text-[20px] font-semibold leading-7 tracking-[-0.4492px]">
              Request Information
            </span>
            <span className="mt-2 max-w-[194px] text-pretty font-sans text-base font-normal leading-6 tracking-[-0.3125px] text-white/80">
              Get detailed info about our services
            </span>
          </Link>
          <a href={`tel:${site.phoneTel}`} className={cardClass}>
            <Image
              src={utilityIcons.call}
              alt=""
              width={48}
              height={48}
              className={iconClass}
            />
            <span className="mt-4 font-sans text-[20px] font-semibold leading-7 tracking-[-0.4492px]">
              Call Now
            </span>
            <span className="mt-2 font-sans text-base font-normal leading-6 tracking-[-0.3125px] text-white/80">
              {site.phoneDisplay}
            </span>
          </a>
        </div>
      </PageContainer>
    </section>
  );
}
