"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { assets } from "@/data/assets";
import { site } from "@/data/site";

type HomeLogoLinkProps = {
  className?: string;
};

export function HomeLogoLink({ className }: HomeLogoLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      prefetch={false}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        if (pathname === "/") {
          window.location.reload();
        } else {
          window.location.assign("/");
        }
      }}
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
  );
}
