import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/icons/SocialBrandIcons";
import { assets } from "@/data/assets";
import {
  footerBlurb,
  footerLegal,
  footerQuickLinks,
  footerServiceLinks,
} from "@/data/footer";
import { site } from "@/data/site";
import { utilityIcons } from "@/data/utility-icons";
import { PageContainer } from "./PageContainer";

const headerCtaShadow =
  "shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]";

const colTitle =
  "font-sans text-[18px] font-bold leading-7 tracking-[-0.4395px] text-white";

const linkList =
  "space-y-6 font-sans text-[16px] font-normal leading-6 tracking-[-0.3125px]";

const linkMuted =
  "text-white/80 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const addressLine = `${site.address.line1} ${site.address.city}, ${site.address.state} ${site.address.zip}`;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-footer-surface text-white">
      <PageContainer className="py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10 xl:gap-x-16">
          <div className="max-w-[280px] sm:max-w-none">
            <div className="relative mb-6 h-[63px] w-[259px] max-w-full">
              <Image
                src={assets.logoWhite}
                alt={`${site.name} logo`}
                fill
                className="object-contain object-left"
                sizes="(max-width: 640px) 100vw, 259px"
              />
            </div>
            <p className="max-w-[244px] text-pretty font-sans text-[16px] font-normal leading-[26px] tracking-[-0.3125px] text-white/80">
              {footerBlurb}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span className="sr-only">Facebook</span>
                <FacebookIcon className="size-5 text-white" />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="size-5 text-white" />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span className="sr-only">LinkedIn</span>
                <LinkedinIcon className="size-5 text-white" />
              </a>
            </div>
          </div>
          <div>
            <h2 className={colTitle}>Quick Links</h2>
            <ul className={`mt-6 ${linkList}`}>
              {footerQuickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkMuted}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={colTitle}>Our Services</h2>
            <ul className={`mt-6 ${linkList}`}>
              {footerServiceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkMuted}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="max-w-[280px] lg:max-w-none">
            <h2 className={colTitle}>Contact Us</h2>
            <ul className="mt-6 space-y-4 font-sans text-[16px] font-normal leading-6 tracking-[-0.3125px] text-white/80">
              <li className="flex gap-3">
                <Image
                  src={utilityIcons.directions}
                  alt=""
                  width={20}
                  height={20}
                  className="mt-0.5 size-5 shrink-0 object-contain"
                />
                <span className="text-pretty">{addressLine}</span>
              </li>
              <li className="flex gap-3">
                <Image
                  src={utilityIcons.call}
                  alt=""
                  width={20}
                  height={20}
                  className="mt-0.5 size-5 shrink-0 object-contain"
                />
                <a
                  href={`tel:${site.phoneTel}`}
                  className="text-white/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail
                  className="mt-0.5 size-5 shrink-0 text-white"
                  strokeWidth={1.85}
                  aria-hidden
                />
                <a
                  href={`mailto:${site.email}`}
                  className="text-white/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {site.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex w-full max-w-[280px] flex-col gap-3 lg:max-w-none">
              <Link
                href="/admissions/schedule-a-tour"
                className={`flex h-12 w-full items-center justify-center rounded-[10px] bg-primary text-center text-[16px] font-semibold leading-6 tracking-[-0.3125px] text-white transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${headerCtaShadow}`}
              >
                Schedule a Tour
              </Link>
              <Link
                href="/admissions/request-information"
                className="flex h-12 w-full items-center justify-center rounded-[10px] bg-footer-secondary-cta text-center text-[16px] font-semibold leading-6 tracking-[-0.3125px] text-white transition-colors hover:bg-footer-secondary-cta-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Request Information
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 w-full border-t border-[#d9d9d9] pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-sans text-[16px] font-normal leading-5 tracking-[-0.1504px] text-white/60">
              © {year} {site.name}. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-8 gap-y-2 font-sans text-[16px] font-normal leading-5 tracking-[-0.1504px] text-white/60">
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
        </div>
      </PageContainer>
    </footer>
  );
}
