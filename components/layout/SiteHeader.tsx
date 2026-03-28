import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";
import { site } from "@/data/site";
import { DesktopNav } from "@/components/nav/DesktopNav";
import { MobileNav } from "@/components/nav/MobileNav";
import { Button } from "@/components/ui/button";
import { PageContainer } from "./PageContainer";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white shadow-sm">
      <PageContainer className="flex h-[96px] items-center justify-between gap-4">
        <Link
          href="/"
          className="relative h-14 w-[200px] shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-[240px]"
        >
          <Image
            src={assets.logoColor}
            alt={`${site.name} logo`}
            fill
            className="object-contain object-left"
            sizes="240px"
            priority
          />
        </Link>
        <DesktopNav />
        <div className="flex items-center gap-3">
          <Button
            href="/admissions/schedule-a-tour"
            className="hidden shadow-md lg:inline-flex"
          >
            Schedule a Tour
          </Button>
          <MobileNav />
        </div>
      </PageContainer>
    </header>
  );
}
