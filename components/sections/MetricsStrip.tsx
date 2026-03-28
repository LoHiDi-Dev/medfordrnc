import type { LucideIcon } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { cn } from "@/lib/utils";

export type MetricItem = {
  key: string;
  value: string;
  label: string;
  icon: LucideIcon;
};

type MetricsStripProps = {
  items: readonly MetricItem[];
  className?: string;
};

export function MetricsStrip({ items, className }: MetricsStripProps) {
  return (
    <section className={cn("bg-warm-gray", className)}>
      <PageContainer className="flex min-h-[288px] items-center py-16">
        <div className="grid w-full grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4 lg:gap-8">
          {items.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.key}
                className="flex flex-col items-center text-center"
              >
                <div className="flex size-16 items-center justify-center rounded-full bg-mint">
                  <Icon
                    className="size-[30px] text-primary"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </div>
                <p className="mt-4 font-sans text-[30px] font-bold leading-9 text-primary">
                  {m.value}
                </p>
                <p className="mt-2 max-w-[200px] text-pretty font-sans text-[14px] font-medium leading-5 text-[#4b5563]">
                  {m.label}
                </p>
              </div>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
