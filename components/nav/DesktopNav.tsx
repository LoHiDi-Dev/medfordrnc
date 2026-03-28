"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

function DesktopNavInner() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="hidden items-center lg:flex">
      <ul className="flex items-center gap-8 xl:gap-[32px]">
        {mainNavigation.map((section) => {
          const isActive =
            pathname === section.href ||
            section.children.some((c) => c.href === pathname);

          return (
            <li key={section.label} className="group relative">
              <Link
                href={section.href}
                className={cn(
                  "inline-flex items-center rounded-md py-2 text-[16px] font-medium leading-6 tracking-[-0.3125px] text-[#1f2937] hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                  isActive && "text-primary",
                )}
              >
                {section.label}
              </Link>
              <ul
                className={cn(
                  "absolute left-0 top-full z-50 mt-0 min-w-[260px] rounded-lg border border-border bg-white py-2 shadow-lg",
                  "invisible opacity-0 transition-all duration-150",
                  "group-hover:visible group-hover:opacity-100",
                  "group-focus-within:visible group-focus-within:opacity-100",
                  "before:pointer-events-auto before:absolute before:left-0 before:top-[-10px] before:h-3 before:w-full before:content-['']",
                )}
              >
                {section.children.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-mint-soft hover:text-primary focus-visible:bg-mint-soft focus-visible:outline-none"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function DesktopNav() {
  return <DesktopNavInner />;
}
