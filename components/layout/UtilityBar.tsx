import Link from "next/link";
import { site } from "@/data/site";
import { PageContainer } from "./PageContainer";

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M6.6 10.8c1.8 3.5 4.9 6.6 8.4 8.4l2.8-2.8c.4-.4 1-.5 1.5-.3 1 .4 2.1.6 3.2.6.8 0 1.5.7 1.5 1.5V21c0 .8-.7 1.5-1.5 1.5C9.9 22.5 1.5 14.1 1.5 3C1.5 2.2 2.2 1.5 3 1.5H6c.8 0 1.5.7 1.5 1.5 0 1.1.2 2.2.6 3.2.2.5.1 1.1-.3 1.5L6.6 10.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M9 6 3 4v14l6 2 6-2 6 2V4l-6-2-6 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 4v14M15 6v14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <rect
        x="2.5"
        y="5"
        width="19"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M2.5 10h19"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function UtilityBar() {
  return (
    <div className="bg-primary text-white">
      <PageContainer className="flex min-h-[60px] flex-wrap items-center justify-between gap-3 py-3 text-[15px] sm:text-[17px] font-semibold">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex items-center gap-2 rounded-sm hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <PhoneIcon className="size-[18px] shrink-0" />
            <span>Call Now: {site.phoneDisplay}</span>
          </a>
          <span className="hidden text-white/40 sm:inline" aria-hidden>
            |
          </span>
          <Link
            href={site.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm font-medium hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <MapIcon className="size-[18px] shrink-0" />
            Get Directions
          </Link>
        </div>
        <Link
          href="/pay-online"
          className="inline-flex items-center gap-2 rounded-sm font-medium hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <CardIcon className="size-[18px] shrink-0" />
          Pay Online
        </Link>
      </PageContainer>
    </div>
  );
}
