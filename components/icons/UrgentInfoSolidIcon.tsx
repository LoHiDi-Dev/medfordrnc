import type { SVGProps } from "react";

/** Solid primary circle with bold white “i” (Urgent Matters sidebar). */
export function UrgentInfoSolidIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <circle cx="12" cy="12" r="12" className="fill-primary" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="14"
        fontWeight={700}
        className="select-none"
      >
        i
      </text>
    </svg>
  );
}
