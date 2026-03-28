import Link from "next/link";
import { site } from "@/data/site";
import { PageContainer } from "@/components/layout/PageContainer";
import { cn } from "@/lib/utils";

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M8 3v3m8-3v3M5 9h14M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DocIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M7 3h7l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M14 3v5h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M6.6 10.8c1.8 3.5 4.9 6.6 8.4 8.4l2.8-2.8c.4-.4 1-.5 1.5-.3 1 .4 2.1.6 3.2.6.8 0 1.5.7 1.5 1.5V21c0 .8-.7 1.5-1.5 1.5C9.9 22.5 1.5 14.1 1.5 3 1.5 2.2 2.2 1.5 3 1.5H6c.8 0 1.5.7 1.5 1.5 0 1.1.2 2.2.6 3.2.2.5.1 1.1-.3 1.5L6.6 10.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type CTASectionProps = {
  title: string;
  className?: string;
};

export function CTASection({ title, className }: CTASectionProps) {
  return (
    <section className={cn("bg-primary py-16 text-white sm:py-20", className)}>
      <PageContainer>
        <h2 className="text-center font-serif-display text-3xl font-bold sm:text-4xl">
          {title}
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Link
            href="/admissions/schedule-a-tour"
            className="flex flex-col items-center rounded-2xl border border-white/40 bg-white/10 p-8 text-center shadow-sm backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <CalendarIcon className="size-10 text-white" />
            <span className="mt-4 text-lg font-semibold">Schedule a Tour</span>
            <span className="mt-2 text-sm text-white/85">
              Walk our campus with a member of leadership.
            </span>
          </Link>
          <Link
            href="/admissions/request-information"
            className="flex flex-col items-center rounded-2xl border border-white/40 bg-white/10 p-8 text-center shadow-sm backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <DocIcon className="size-10 text-white" />
            <span className="mt-4 text-lg font-semibold">Request Information</span>
            <span className="mt-2 text-sm text-white/85">
              Share your goals—we will follow up promptly.
            </span>
          </Link>
          <a
            href={`tel:${site.phoneTel}`}
            className="flex flex-col items-center rounded-2xl border border-white/40 bg-white/10 p-8 text-center shadow-sm backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <PhoneIcon className="size-10 text-white" />
            <span className="mt-4 text-lg font-semibold">Call Now</span>
            <span className="mt-2 text-sm text-white/85">
              {site.phoneDisplay} — admissions &amp; front desk
            </span>
          </a>
        </div>
      </PageContainer>
    </section>
  );
}
