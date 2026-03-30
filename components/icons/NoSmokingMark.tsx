import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** High-contrast red for prohibition ring + slash on dark charcoal footers. */
const PROHIBITION_STROKE = "#ef4444";

export function NoSmokingMark({
  className,
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
      {...props}
    >
      <circle
        cx="32"
        cy="32"
        r="27"
        fill="none"
        stroke={PROHIBITION_STROKE}
        strokeWidth="3.25"
      />
      <rect
        x="16"
        y="36.5"
        width="26"
        height="5.5"
        rx="1.25"
        fill="#ffffff"
      />
      <rect
        x="40"
        y="36.5"
        width="7"
        height="5.5"
        fill="#ffffff"
        opacity={0.72}
      />
      <path
        d="M43.5 34.5c1.2-1.8 1-4 .2-5.8M46.5 33.5c1.4-2.4 1.2-5.2.3-7.5"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity={0.65}
      />
      <path
        d="M16.5 47.5 47.5 16.5"
        fill="none"
        stroke={PROHIBITION_STROKE}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
