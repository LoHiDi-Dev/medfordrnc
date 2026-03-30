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
  iconSrc: string;
  className?: string;
};

const cardShadow =
  "shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.08),0px_4px_6px_-4px_rgba(0,0,0,0.06)]";

export function ServiceCard({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
  iconSrc,
  className,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "flex min-h-0 flex-col overflow-hidden rounded-2xl bg-white",
        cardShadow,
        className,
      )}
    >
      <div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden rounded-t-2xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="(min-width: 1280px) 362px, (min-width: 768px) 45vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col px-8 pb-8 pt-8">
        <div
          className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary"
          aria-hidden
        >
          <Image
            src={iconSrc}
            alt=""
            width={24}
            height={24}
            className="size-6 object-contain"
            aria-hidden
          />
        </div>
        <h3 className="mt-6 whitespace-pre-line font-serif-display text-2xl font-bold leading-8 text-[#1f2937]">
          {title}
        </h3>
        <p className="mt-3 flex-1 whitespace-pre-line text-pretty font-sans text-base leading-[26px] text-[#4b5563]">
          {description}
        </p>
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 font-sans text-base font-semibold leading-6 text-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Learn More
          <ArrowRight className="size-3.5 shrink-0" strokeWidth={2} aria-hidden />
        </Link>
      </div>
    </article>
  );
}
