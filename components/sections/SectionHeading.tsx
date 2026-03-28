import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  /** Figma: major sections use 48px Lora / 28px Inter sub. */
  titleSize?: "lg" | "xl";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  titleSize = "lg",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        titleSize === "xl" ? "max-w-[1152px]" : "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-4 inline-flex h-9 items-center justify-center rounded-full bg-[#e8f3eb] px-5 text-[14px] font-semibold leading-5 text-[#3d7c4a]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-serif-display font-bold text-[#48484a]",
          titleSize === "xl" && "text-[48px] leading-[48px]",
          titleSize === "lg" &&
            "text-[clamp(1.875rem,4vw,2.25rem)] leading-9 sm:text-4xl sm:leading-10",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 font-sans text-[20px] font-normal leading-7 text-[#4b5563]",
            titleSize === "xl" && "mx-auto max-w-[786px]",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
