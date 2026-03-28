import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** ~1280px content width with ~80px horizontal inset at large breakpoints (Figma 1440 frame). */
export function PageContainer({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-[80px]",
        className,
      )}
      {...props}
    />
  );
}
