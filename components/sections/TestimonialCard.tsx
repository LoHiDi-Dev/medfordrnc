import Image from "next/image";
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

export function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm",
        className,
      )}
    >
      <div className="flex items-center gap-4">
        <div className="relative size-14 overflow-hidden rounded-full ring-2 ring-mint">
          <Image
            src={testimonial.image}
            alt=""
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>
        <figcaption>
          <p className="font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted">{testimonial.role}</p>
        </figcaption>
      </div>
      <div className="mt-4 flex gap-0.5" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-star" aria-hidden>
            ★
          </span>
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
        <p className="italic">&ldquo;{testimonial.quote}&rdquo;</p>
      </blockquote>
    </figure>
  );
}
