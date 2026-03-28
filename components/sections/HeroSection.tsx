import { Award, Calendar, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";
import { PageContainer } from "@/components/layout/PageContainer";
import { cn } from "@/lib/utils";

const heroBtnShadow =
  "shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]";

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
  const titleParts = title.includes("your family")
    ? title.split(/(?=your family)/)
    : [title];

  const descLines = description
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  return (
    <section
      className={cn(
        "relative isolate min-h-[520px] overflow-hidden lg:h-[613px] lg:min-h-[613px]",
        className,
      )}
    >
      <div className="absolute inset-0">
        <Image
          src={assets.hero}
          alt="Care team member supporting a resident during recovery"
          fill
          priority
          className="scale-[1.02] object-cover"
          style={{ objectPosition: "4.91% 37%" }}
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[rgba(0,140,39,0.2)] from-[38.694%] via-[rgba(131,199,150,0.1)] via-[60.304%] to-[rgba(255,255,255,0.2)]"
          aria-hidden
        />
      </div>
      <PageContainer className="relative flex h-full min-h-[inherit] items-center py-10 sm:py-14 lg:py-0">
        <div className="max-w-[768px] text-white lg:pt-[124px]">
          <p className="inline-flex h-9 items-center gap-2 rounded-full bg-white pl-4 pr-4 text-[14px] font-semibold leading-5 tracking-[-0.1504px] text-primary shadow-sm">
            <Award
              className="size-4 shrink-0 text-primary"
              strokeWidth={2}
              aria-hidden
            />
            {badge}
          </p>
          <h1 className="mt-6 font-sans text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[1.25] tracking-[0.2637px] sm:text-[60px] sm:leading-[75px]">
            {titleParts.map((part) => (
              <span key={part} className="block">
                {part.trim()}
              </span>
            ))}
          </h1>
          <div className="mt-6 max-w-[672px] font-sans text-2xl font-normal leading-[39px] tracking-[0.0703px] text-white/90">
            {descLines.map((line) => (
              <p key={line} className="block">
                {line.trim()}
              </p>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/admissions/schedule-a-tour"
              className={cn(
                "inline-flex h-[60px] min-w-[240px] items-center justify-center gap-2 rounded-[10px] bg-primary px-8 text-[18px] font-semibold leading-7 tracking-[-0.4395px] text-white transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:min-w-[259px]",
                heroBtnShadow,
              )}
            >
              <Calendar
                className="size-5 shrink-0"
                strokeWidth={1.85}
                aria-hidden
              />
              Schedule a Tour
            </Link>
            <Link
              href="/admissions/request-information"
              className={cn(
                "inline-flex h-[60px] min-w-[240px] items-center justify-center gap-2 rounded-[10px] bg-white px-8 text-[18px] font-semibold leading-7 tracking-[-0.4395px] text-primary transition-colors hover:bg-mint-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:min-w-[267px]",
                heroBtnShadow,
              )}
            >
              <FileText
                className="size-5 shrink-0"
                strokeWidth={1.85}
                aria-hidden
              />
              Request Information
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
