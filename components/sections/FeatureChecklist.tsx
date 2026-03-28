import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type ChecklistItem = {
  title: string;
  body: string;
  icon: LucideIcon;
};

type FeatureChecklistProps = {
  items: readonly ChecklistItem[];
  className?: string;
};

export function FeatureChecklist({ items, className }: FeatureChecklistProps) {
  return (
    <ul className={cn("space-y-6", className)}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.title} className="flex gap-4">
            <span
              className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary"
              aria-hidden
            >
              <Icon
                className="size-[18px] text-white"
                strokeWidth={2.5}
                aria-hidden
              />
            </span>
            <div className="min-w-0">
              <h3 className="font-serif-display text-[20px] font-bold leading-7 text-[#48484a]">
                {item.title}
              </h3>
              <p className="mt-2 text-pretty font-sans text-base leading-[26px] text-[#4b5563]">
                {item.body}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
