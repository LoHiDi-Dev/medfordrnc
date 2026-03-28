import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";
import {
  footerBlurb,
  footerLegal,
  footerQuickLinks,
  footerServiceLinks,
} from "@/data/footer";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { PageContainer } from "./PageContainer";

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 22s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10Z"
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

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M4 6h16v12H4V6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-footer text-white">
      <PageContainer className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="relative mb-4 h-14 w-[220px]">
              <Image
                src={assets.logoWhite}
                alt=""
                fill
                className="object-contain object-left"
                sizes="220px"
              />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/80">
              {footerBlurb}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full bg-primary text-white hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span className="sr-only">Facebook</span>
                <span aria-hidden className="text-sm font-bold">
                  f
                </span>
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full bg-primary text-white hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span className="sr-only">Instagram</span>
                <span aria-hidden className="text-sm font-bold">
                  in
                </span>
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full bg-primary text-white hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span className="sr-only">LinkedIn</span>
                <span aria-hidden className="text-sm font-bold">
                  Li
                </span>
              </a>
            </div>
          </div>
          <div>
            <h2 className="font-serif-display text-lg font-semibold">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {footerQuickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/85 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif-display text-lg font-semibold">
              Our Services
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {footerServiceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/85 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif-display text-lg font-semibold">
              Contact Us
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li className="flex gap-3">
                <MapPinIcon className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </span>
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 size-5 shrink-0 text-primary" />
                <a
                  href={`tel:${site.phoneTel}`}
                  className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <MailIcon className="mt-0.5 size-5 shrink-0 text-primary" />
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {site.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <Button href="/admissions/schedule-a-tour" variant="footerPrimary">
                Schedule a Tour
              </Button>
              <Button
                href="/admissions/request-information"
                variant="footerOutline"
              >
                Request Information
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-8 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLegal.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </PageContainer>
    </footer>
  );
}
