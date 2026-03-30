import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** Max 1280px; large screens use ~109px horizontal inset (Figma 12-col grid, cols 2–11). */
export function PageContainer({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-[109px]",
        className,
      )}
      {...props}
    />
  );
}
