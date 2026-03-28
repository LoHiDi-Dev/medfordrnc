import { cn } from "@/lib/utils";

type SupportCardProps = {
  title: string;
  children: React.ReactNode;
  variant?: "default" | "muted" | "accent";
  icon?: React.ReactNode;
  className?: string;
};

export function SupportCard({
  title,
  children,
  variant = "default",
  icon,
  className,
}: SupportCardProps) {
  return (
    <section
      className={cn(
        "rounded-2xl border p-6 shadow-sm",
        variant === "default" && "border-border bg-white",
        variant === "muted" && "border-border bg-mint-soft/60",
        variant === "accent" &&
          "border-primary/30 bg-mint text-foreground shadow-none",
        className,
      )}
    >
      <div className="flex gap-3">
        {icon ? (
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
        ) : null}
        <div className="min-w-0">
          <h2 className="font-serif-display text-lg font-semibold text-foreground">
            {title}
          </h2>
          <div className="mt-2 text-sm leading-relaxed text-muted [&_strong]:text-foreground">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
