import { CreditCard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { utilityIcons } from "@/data/utility-icons";
import { PageContainer } from "./PageContainer";

const rasterIconClass = "size-[18px] shrink-0 object-contain";

export function UtilityBar() {
  return (
    <div className="bg-primary text-white">
      <PageContainer className="flex h-[60px] items-center justify-between gap-4 text-[18px] leading-7 lg:max-w-[1242px] lg:px-[58px]">
        <div className="flex min-w-0 flex-wrap items-center gap-x-6 gap-y-1">
          <a
            href={`tel:${site.phoneTel}`}
            className="group inline-flex items-center gap-2 font-semibold leading-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Image
              src={utilityIcons.call}
              alt=""
              width={18}
              height={18}
              className={rasterIconClass}
            />
            <span className="whitespace-nowrap">
              <span>Call Now: </span>
              <span className="group-hover:underline">{site.phoneDisplay}</span>
            </span>
          </a>
          <span
            className="hidden text-[16px] font-medium leading-6 text-white/40 sm:inline"
            aria-hidden
          >
            |
          </span>
          <Link
            href={site.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium leading-6 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Image
              src={utilityIcons.directions}
              alt=""
              width={18}
              height={18}
              className={rasterIconClass}
            />
            Get Directions
          </Link>
        </div>
        <Link
          href="/pay-online"
          className="inline-flex shrink-0 items-center gap-2 font-medium leading-6 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <CreditCard
            className="size-[18px] shrink-0"
            strokeWidth={2}
            aria-hidden
          />
          Pay Online
        </Link>
      </PageContainer>
    </div>
  );
}
