import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const PROHIBITION_STROKE = "#ef4444";

export function NoVapingMark({
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
        x="28.5"
        y="17"
        width="7"
        height="8"
        rx="1.5"
        fill="#ffffff"
        opacity={0.9}
      />
      <rect
        x="26"
        y="24"
        width="12"
        height="20"
        rx="2.5"
        fill="#ffffff"
      />
      <rect
        x="28"
        y="40"
        width="8"
        height="2.5"
        rx="0.5"
        fill="#ffffff"
        opacity={0.5}
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
