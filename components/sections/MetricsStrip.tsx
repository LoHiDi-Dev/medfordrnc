import { PageContainer } from "@/components/layout/PageContainer";
import { cn } from "@/lib/utils";

export type MetricItem = {
  key: string;
  title: string;
  description: string;
  icon: "award" | "star" | "people" | "heart";
};

function MetricIcon({ type }: { type: MetricItem["icon"] }) {
  const common = "size-7 text-primary";
  switch (type) {
    case "award":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden className={common}>
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
    case "star":
      return (
        <svg viewBox="0 0 24 24" aria-hidden className={common}>
          <path
            fill="currentColor"
            d="M12 3.5 14.2 8.7l5.8.5-4.4 3.8 1.3 5.7L12 15.9 6.3 18.7l1.3-5.7L3.2 9.2l5.8-.5L12 3.5Z"
          />
        </svg>
      );
    case "people":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden className={common}>
          <path
            d="M16 11a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM8 13a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM22 20v-1a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v1M2 20v-1a4 4 0 0 1 4-4h3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden className={common}>
          <path
            d="M12 21s-7-4.35-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.65-7 10-7 10Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

type MetricsStripProps = {
  items: readonly MetricItem[];
  className?: string;
};

export function MetricsStrip({ items, className }: MetricsStripProps) {
  return (
    <section className={cn("bg-warm-gray py-12 sm:py-16", className)}>
      <PageContainer>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((m) => (
            <div
              key={m.key}
              className="flex flex-col items-center text-center lg:items-center"
            >
              <div className="flex size-16 items-center justify-center rounded-full bg-mint">
                <MetricIcon type={m.icon} />
              </div>
              <h2 className="mt-4 font-serif-display text-xl font-semibold text-foreground">
                {m.title}
              </h2>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
