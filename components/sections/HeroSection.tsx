import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";
import { PageContainer } from "@/components/layout/PageContainer";
import { cn } from "@/lib/utils";

function AwardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M8.5 3h7L17 8l-4.5 3L8 8l1.5-5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8 8v10l4-2 4 2V8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M8 3v3m8-3v3M5 9h14M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DocIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M7 3h7l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M14 3v5h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type HeroSectionProps = {
  badge: string;
  title: string;
  description: string;
  className?: string;
};

export function HeroSection({
  badge,
  title,
  description,
  className,
}: HeroSectionProps) {
  return (
    <section className={cn("relative isolate min-h-[560px] overflow-hidden", className)}>
      <div className="absolute inset-0">
        <Image
          src={assets.hero}
          alt="Care team member supporting a resident during recovery"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary/55 via-primary/25 to-white/25"
          aria-hidden
        />
      </div>
      <PageContainer className="relative flex min-h-[560px] items-center py-16 sm:py-24">
        <div className="max-w-3xl text-white">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary shadow-md">
            <AwardIcon className="size-4" />
            {badge}
          </p>
          <h1 className="mt-6 font-serif-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[3.75rem] lg:leading-[1.1]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl sm:leading-8">
            {description}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/admissions/schedule-a-tour"
              className="inline-flex min-h-[60px] items-center justify-center gap-2 rounded-[10px] bg-primary px-8 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <CalendarIcon className="size-5" />
              Schedule a Tour
            </Link>
            <Link
              href="/admissions/request-information"
              className="inline-flex min-h-[60px] items-center justify-center gap-2 rounded-[10px] bg-white px-8 text-lg font-semibold text-primary shadow-lg transition-colors hover:bg-mint-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <DocIcon className="size-5" />
              Request Information
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
