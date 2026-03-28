import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";
import { site } from "@/data/site";
import { DesktopNav } from "@/components/nav/DesktopNav";
import { MobileNav } from "@/components/nav/MobileNav";
import { PageContainer } from "./PageContainer";

const headerCtaShadow =
  "shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white">
      <PageContainer className="flex h-[96px] items-center justify-between gap-6">
        <Link
          href="/"
          className="relative h-[64px] w-[262px] max-w-[55vw] shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:max-w-none"
        >
          <Image
            src={assets.logoColor}
            alt={`${site.name} logo`}
            fill
            className="object-contain object-left"
            sizes="262px"
            priority
          />
        </Link>
        <DesktopNav />
        <div className="flex items-center gap-3">
          <Link
            href="/admissions/schedule-a-tour"
            className={`hidden h-[48px] min-w-[169px] items-center justify-center rounded-[10px] bg-primary px-6 text-[16px] font-semibold leading-6 tracking-[-0.3125px] text-white transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:inline-flex ${headerCtaShadow}`}
          >
            Schedule a Tour
          </Link>
          <MobileNav />
        </div>
      </PageContainer>
    </header>
  );
}
