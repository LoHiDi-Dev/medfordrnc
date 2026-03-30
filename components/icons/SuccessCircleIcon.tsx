import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

export function SuccessCircleIcon({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
      className={cn("text-primary", className)}
      {...props}
    >
      <circle cx="32" cy="32" r="30" className="fill-primary/12" />
      <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M20 33.5 28.5 42 44 26"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
