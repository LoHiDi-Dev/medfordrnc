import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NoSmokingMark } from "@/components/icons/NoSmokingMark";
import { NoVapingMark } from "@/components/icons/NoVapingMark";
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
  "font-sans text-[18px] font-bold leading-tight tracking-[-0.4395px] text-white";
/** Optical vertical alignment with the 63px-tall wordmark block (headings were sitting high). */
const colAlignToLogo = "pt-5 sm:pt-6 lg:pt-5";

/** Compact list + ~40px min row height (still comfortable tap/click). */
const linkList =
  "flex flex-col gap-0.5 font-sans text-[16px] font-normal leading-snug tracking-[-0.3125px]";

const linkMuted =
  "-mx-1 flex min-h-10 items-center rounded-sm px-1 py-1 text-white/90 transition-colors hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-footer-surface text-white">
      <PageContainer className="py-16 sm:py-20">
        <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-10 xl:gap-x-12">
          <div className="max-w-[320px] sm:max-w-none lg:max-w-[280px]">
            <div className="relative mb-6 h-[63px] w-[259px] max-w-full">
              <Image
                src={assets.logoWhite}
                alt={`${site.name} logo`}
                fill
                className="object-contain object-left object-top"
                sizes="(max-width: 640px) 100vw, 259px"
              />
            </div>
            <p className="max-w-[260px] text-pretty font-sans text-[16px] font-normal leading-[26px] tracking-[-0.3125px] text-white/80">
              {footerBlurb}
            </p>
            <div className="mt-8 flex gap-3">
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
          <div className={`min-w-0 ${colAlignToLogo} sm:pl-3 lg:pl-6 xl:pl-8`}>
            <h2 className={colTitle}>Quick Links</h2>
            <ul className={`mt-8 ${linkList}`}>
              {footerQuickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkMuted}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={`min-w-0 ${colAlignToLogo}`}>
            <h2 className={colTitle}>Our Services</h2>
            <ul className={`mt-8 ${linkList}`}>
              {footerServiceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkMuted}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={`max-w-[280px] min-w-0 ${colAlignToLogo} sm:max-w-none lg:max-w-none`}>
            <h2 className={colTitle}>Contact Us</h2>
            <ul className="mt-8 space-y-6 font-sans text-[16px] font-normal leading-[26px] tracking-[-0.3125px] text-white/80">
              <li className="flex gap-3">
                <Image
                  src={utilityIcons.directions}
                  alt=""
                  width={20}
                  height={20}
                  className="mt-0.5 size-5 shrink-0 object-contain"
                />
                <span className="text-pretty">
                  {site.address.line1}
                  <br />
                  {`${site.address.city}, ${site.address.state} ${site.address.zip}`}
                </span>
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
                  className="text-white/90 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
                  className="text-white/90 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {site.email}
                </a>
              </li>
            </ul>
            <div className="mt-8 flex w-full max-w-[280px] flex-col gap-3 sm:max-w-[320px] lg:max-w-none">
              <Link
                href="/admissions/schedule-a-tour"
                className={`flex min-h-[52px] w-full items-center justify-center rounded-[10px] bg-primary px-6 py-3 text-center text-[16px] font-semibold leading-6 tracking-[-0.3125px] text-white transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${headerCtaShadow}`}
              >
                Schedule a Tour
              </Link>
              <Link
                href="/admissions/request-information"
                className="flex min-h-[52px] w-full items-center justify-center rounded-[10px] bg-footer-secondary-cta px-6 py-3 text-center text-[16px] font-semibold leading-6 tracking-[-0.3125px] text-white transition-colors hover:bg-footer-secondary-cta-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Request Information
              </Link>
            </div>
          </div>

          <div
            className="col-span-full mt-2 border-t border-white/10 pt-9 lg:pt-10"
            role="note"
            aria-label="This is a smoke and vape-free facility. We appreciate your cooperation."
          >
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-start sm:gap-5 lg:gap-6">
              <div
                className="flex shrink-0 items-center justify-start gap-3 sm:gap-4"
                aria-hidden
              >
                <span className="flex size-[3.625rem] items-center justify-center rounded-full border-2 border-[#ef4444] bg-white/[0.04]">
                  <NoSmokingMark className="size-10" />
                </span>
                <span className="flex size-[3.625rem] items-center justify-center rounded-full border-2 border-[#ef4444] bg-white/[0.04]">
                  <NoVapingMark className="size-10" />
                </span>
              </div>
              <div className="max-w-lg space-y-2.5 text-left">
                <p className="font-sans text-[15px] font-normal leading-relaxed tracking-[-0.2px] text-white/80 sm:text-[16px] sm:leading-7">
                  <span className="text-white/55">This is a </span>
                  <span className="mt-2 inline-block rounded-md bg-[#E8F3EB] px-3 py-1.5 align-middle text-[11px] font-bold uppercase leading-tight tracking-[0.12em] text-black sm:mt-0 sm:ml-1 sm:text-[11px]">
                    Smoke & vape-free facility
                  </span>
                </p>
                <p className="font-sans text-[11px] font-semibold uppercase leading-snug tracking-[0.2em] text-primary">
                  We appreciate your cooperation
                </p>
                <p className="max-w-md font-sans text-[13px] leading-relaxed tracking-[-0.15px] text-white/50 sm:max-w-lg">
                  Please help us keep the air clear for residents, guests, and staff.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 w-full border-t border-white/15 pt-8 sm:mt-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-sans text-[16px] font-normal leading-5 tracking-[-0.1504px] text-white/55">
              © {year} {site.name}. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-10 gap-y-2 font-sans text-[16px] font-normal leading-5 tracking-[-0.1504px] text-white/55">
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
