import { cn } from "@/lib/utils";

export type ChecklistItem = { title: string; body: string };

type FeatureChecklistProps = {
  items: readonly ChecklistItem[];
  className?: string;
};

export function FeatureChecklist({ items, className }: FeatureChecklistProps) {
  return (
    <ul className={cn("space-y-6", className)}>
      {items.map((item) => (
        <li key={item.title} className="flex gap-4">
          <span
            className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
            aria-hidden
          >
            ✓
          </span>
          <div>
            <h3 className="font-serif-display text-lg font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
