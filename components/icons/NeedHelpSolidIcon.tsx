import type { SVGProps } from "react";

/** Solid primary circle with bold white question mark (Need Help? sidebar). */
export function NeedHelpSolidIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <circle cx="12" cy="12" r="12" className="fill-primary" />
      <text
        x="12"
        y="16.4"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="13"
        fontWeight={700}
        className="select-none"
      >
        ?
      </text>
    </svg>
  );
}
