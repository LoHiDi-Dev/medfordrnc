import { PageContainer } from "@/components/layout/PageContainer";
import { cn } from "@/lib/utils";

type InternalPageHeroProps = {
  title: string;
  subtitle: string;
  align?: "center" | "left";
  className?: string;
};

export function InternalPageHero({
  title,
  subtitle,
  align = "center",
  className,
}: InternalPageHeroProps) {
  return (
    <section
      className={cn("bg-mint py-16 sm:py-20", className)}
      aria-labelledby="internal-hero-title"
    >
      <PageContainer>
        <div
          className={cn(
            "max-w-3xl",
            align === "center" && "mx-auto text-center",
          )}
        >
          <h1
            id="internal-hero-title"
            className="font-serif-display text-4xl font-bold tracking-tight text-[#48484a] sm:text-5xl sm:leading-tight"
          >
            {title}
          </h1>
          <p className="mt-4 text-lg text-muted sm:text-xl">{subtitle}</p>
        </div>
      </PageContainer>
    </section>
  );
}
