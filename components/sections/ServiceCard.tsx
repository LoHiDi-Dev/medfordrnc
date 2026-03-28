import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
};

function ArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden {...props}>
      <path
        d="M4 10h12m0 0-4-4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ServiceCard({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
  className,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md",
        className,
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
        <div
          className="absolute bottom-3 left-3 flex size-11 items-center justify-center rounded-lg bg-primary text-white shadow-md"
          aria-hidden
        >
          <span className="text-lg font-bold">+</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif-display text-xl font-semibold text-foreground">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {description}
        </p>
        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Learn more
          <ArrowIcon className="size-4" />
        </Link>
      </div>
    </article>
  );
}
