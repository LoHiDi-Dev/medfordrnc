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
    <ul className={cn("list-none space-y-6 p-0 text-left", className)}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.title} className="flex min-h-[88px] items-start gap-4">
            <span
              className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary"
              aria-hidden
            >
              <Icon
                className="size-[18px] text-white"
                strokeWidth={2.75}
                aria-hidden
              />
            </span>
            <div className="min-w-0">
              <h3 className="break-words font-serif-display text-[20px] font-bold leading-[28px] text-[#48484A]">
                {item.title}
              </h3>
              <p className="mt-2 w-full max-w-full break-words whitespace-pre-line font-sans text-base font-normal leading-[26px] text-[#4B5563]">
                {item.body}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
