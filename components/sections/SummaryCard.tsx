import { cn } from "@/lib/utils";

type Line = { label: string; value: string; emphasize?: boolean };

type SummaryCardProps = {
  title?: string;
  lines: Line[];
  footer?: React.ReactNode;
  className?: string;
};

export function SummaryCard({
  title,
  lines,
  footer,
  className,
}: SummaryCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-white p-6 shadow-sm",
        className,
      )}
    >
      {title ? (
        <h2 className="font-serif-display text-lg font-semibold text-foreground">
          {title}
        </h2>
      ) : null}
      <dl className={cn("space-y-3", title && "mt-4")}>
        {lines.map((line) => (
          <div
            key={line.label}
            className="flex items-center justify-between gap-4 text-sm"
          >
            <dt className="text-muted">{line.label}</dt>
            <dd
              className={cn(
                "font-medium tabular-nums text-foreground",
                line.emphasize && "text-lg font-bold",
              )}
            >
              {line.value}
            </dd>
          </div>
        ))}
      </dl>
      {footer ? <div className="mt-6">{footer}</div> : null}
    </div>
  );
}
