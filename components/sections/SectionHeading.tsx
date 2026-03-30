import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  /** `lg` vs `xl` only affects width/description layout; titles are always 48px Lora. */
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
      <h2 className="font-serif-display text-[48px] font-bold leading-[48px] tracking-[-0.02em] text-[#48484A]">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "font-sans text-[20px] font-normal",
            titleSize === "xl" &&
              "mt-6 leading-[32.5px] text-[#374151] mx-auto max-w-[786px]",
            titleSize === "lg" && "mt-4 leading-7 text-[#4b5563]",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
