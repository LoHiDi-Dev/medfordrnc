import type { SVGProps } from "react";

/** Outlined circle + check for list bullets (Pay Online, Contact Resident sidebars). */
export function CheckBulletIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden {...props}>
      <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="m6.8 10.2 2.2 2.2 4.4-4.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
