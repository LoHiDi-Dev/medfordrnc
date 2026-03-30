import { PageContainer } from "@/components/layout/PageContainer";
import { cn } from "@/lib/utils";

type InternalPageHeroProps = {
  title: string;
  /** Omit or leave empty to show title only (e.g. payment success). */
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  /** Merged onto the inner content wrapper (default `max-w-3xl`). */
  contentClassName?: string;
  /** Merged onto the subtitle paragraph. */
  subtitleClassName?: string;
};

export function InternalPageHero({
  title,
  subtitle,
  align = "center",
  className,
  contentClassName,
  subtitleClassName,
}: InternalPageHeroProps) {
  return (
    <section
      className={cn("bg-mint py-12 sm:py-16", className)}
      aria-labelledby="internal-hero-title"
    >
      <PageContainer>
        <div
          className={cn(
            "max-w-3xl",
            align === "center" && "mx-auto text-center",
            contentClassName,
          )}
        >
          <h1
            id="internal-hero-title"
            className="font-serif-display text-4xl font-bold tracking-tight text-[#48484a] sm:text-5xl sm:leading-tight"
          >
            {title}
          </h1>
          {subtitle?.trim() ? (
            <p
              className={cn(
                "mt-4 text-lg text-muted sm:text-xl",
                subtitleClassName,
              )}
            >
              {subtitle}
            </p>
          ) : null}
        </div>
      </PageContainer>
    </section>
  );
}
