import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

type TestimonialCardProps = {
  testimonial: Testimonial;
  className?: string;
};

const cardShadow =
  "shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]";

export function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "flex min-h-[394px] flex-col rounded-[24px] border-2 border-[#f3f4f6] bg-white p-10",
        cardShadow,
        className,
      )}
    >
      <div className="flex items-start gap-4">
        <div className="relative size-20 shrink-0 overflow-hidden rounded-full shadow-[0_0_0_4px_#e8f3eb]">
          <Image
            src={testimonial.image}
            alt=""
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>
        <figcaption className="min-w-0 pt-2">
          <p className="font-sans text-[18px] font-bold leading-7 text-[#48484a]">
            {testimonial.name}
          </p>
          <p className="mt-1 font-sans text-[14px] font-normal leading-5 text-[#6b7280]">
            {testimonial.role}
          </p>
        </figcaption>
      </div>
      <div className="mt-6 flex gap-1" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="size-[18px] shrink-0 text-star"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={1}
            aria-hidden
          />
        ))}
      </div>
      <blockquote className="mt-6 flex-1 font-sans text-base font-normal leading-[26px] text-[#374151]">
        <p className="whitespace-pre-line">
          <span aria-hidden className="select-none">
            &ldquo;
          </span>
          {testimonial.quote}
          <span aria-hidden className="select-none">
            &rdquo;
          </span>
        </p>
      </blockquote>
    </figure>
  );
}
