import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  icon: LucideIcon;
  learnMoreArrow: "accent" | "primary";
  titleTone?: "muted" | "default";
  className?: string;
};

const cardShadow =
  "shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]";

export function ServiceCard({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
  icon: ServiceIcon,
  learnMoreArrow,
  titleTone = "default",
  className,
}: ServiceCardProps) {
  const linkColor =
    learnMoreArrow === "primary" ? "text-primary" : "text-link-accent";

  return (
    <article
      className={cn(
        "flex min-h-[522px] flex-col overflow-hidden rounded-2xl bg-warm-gray",
        cardShadow,
        className,
      )}
    >
      <div className="relative h-[192px] w-full shrink-0 overflow-hidden rounded-t-2xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="(min-width: 1280px) 362px, (min-width: 768px) 45vw, 100vw"
        />
      </div>
      <div className="flex min-h-[298px] flex-1 flex-col px-8 pb-8 pt-8">
        <div
          className="flex size-14 shrink-0 items-center justify-center rounded-[12px] bg-primary"
          aria-hidden
        >
          <ServiceIcon
            className="size-6 text-white"
            strokeWidth={1.85}
            aria-hidden
          />
        </div>
        <h3
          className={cn(
            "mt-8 whitespace-pre-line font-serif-display text-2xl font-bold leading-8",
            titleTone === "muted" ? "text-[#1f2937]" : "text-[#48484a]",
          )}
        >
          {title}
        </h3>
        <p className="mt-3 flex-1 text-pretty font-sans text-base leading-[26px] text-[#4b5563]">
          {description}
        </p>
        <Link
          href={href}
          className={cn(
            "mt-6 inline-flex items-center gap-2 font-sans text-base font-semibold leading-6 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            linkColor,
          )}
        >
          Learn More
          <ArrowRight className="size-3.5 shrink-0" strokeWidth={2} aria-hidden />
        </Link>
      </div>
    </article>
  );
}
