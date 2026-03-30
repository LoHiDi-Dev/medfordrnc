import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import { cn } from "@/lib/utils";

const trustCircleBg = "/icons/trust/circle-bg.png";

export type MetricItem = {
  key: string;
  value: string;
  label: string;
  iconSrc: string;
};

type MetricsStripProps = {
  items: readonly MetricItem[];
  className?: string;
};

export function MetricsStrip({ items, className }: MetricsStripProps) {
  return (
    <section className={cn("bg-[#E8F3EB]", className)}>
      <PageContainer className="flex min-h-[288px] items-center py-16">
        <div className="grid w-full grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4 lg:gap-8">
          {items.map((m) => {
            return (
              <div
                key={m.key}
                className="flex flex-col items-center text-center"
              >
                <div className="relative flex size-16 shrink-0 items-center justify-center">
                  <Image
                    src={trustCircleBg}
                    alt=""
                    width={64}
                    height={64}
                    className="absolute size-16 object-contain"
                    aria-hidden
                  />
                  <Image
                    src={m.iconSrc}
                    alt=""
                    width={30}
                    height={30}
                    className="relative z-10 size-[30px] object-contain"
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
