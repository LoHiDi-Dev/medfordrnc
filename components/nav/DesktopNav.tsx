"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { NavChild, NavGroup, NavLeaf, NavSection } from "@/data/navigation";
import { mainNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

const dropdownPanel =
  "absolute left-0 top-full z-50 mt-1.5 min-w-[280px] max-w-[min(320px,calc(100vw-2rem))] rounded-xl border border-[#e8e8ea] bg-white py-3 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.14),0_4px_12px_-4px_rgba(15,23,42,0.08)]";

const submenuPanel =
  "absolute left-full top-0 z-50 ml-1 min-w-[280px] max-w-[min(320px,calc(100vw-2rem))] rounded-xl border border-[#e8e8ea] bg-white py-3 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.14),0_4px_12px_-4px_rgba(15,23,42,0.08)]";

const dropdownBridge =
  "before:pointer-events-auto before:absolute before:left-0 before:top-[-14px] before:h-[14px] before:w-full before:content-['']";

const itemBase =
  "block px-5 py-2.5 text-[14px] font-medium leading-5 tracking-[-0.2px] text-[#4b5563] transition-colors duration-150";

const itemHover =
  "hover:bg-mint hover:text-primary";

const itemActive = "bg-mint-soft text-primary font-semibold";

const desktopTopLevelLabelWidths: Record<string, string> = {
  "About Us": "w-[68.78px]",
  Services: "w-[63.75px]",
  Families: "w-[60.09px]",
  Admissions: "w-[84.94px]",
};

function isNavGroup(child: NavChild): child is NavGroup {
  return "children" in child;
}

function flattenLeaves(children: readonly NavChild[]): NavLeaf[] {
  return children.flatMap((c) => (isNavGroup(c) ? c.children : [c]));
}

function ServicesDropdown({ section }: { section: NavSection }) {
  const pathname = usePathname();
  const servicesGroups = section.children.filter(isNavGroup);

  const [activeServicesGroup, setActiveServicesGroup] = useState<string | null>(
    null,
  );

  const routeMatchedGroup = servicesGroups.find((g) =>
    g.children.some((leaf) => leaf.href === pathname),
  );

  return (
    <ul
      className={cn(
        dropdownPanel,
        dropdownBridge,
        "invisible opacity-0 transition-all duration-200 ease-out",
        "group-hover:visible group-hover:opacity-100",
        "group-focus-within:visible group-focus-within:opacity-100",
      )}
      onMouseLeave={() => setActiveServicesGroup(null)}
    >
      {servicesGroups.map((group) => {
        const isGroupActive = group.label === activeServicesGroup;
        const isRouteGroup = group.label === routeMatchedGroup?.label;
        const submenuId = `services-submenu-${group.label
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")}`;

        return (
          <li
            key={group.label}
            className="group/service-item relative"
            onMouseEnter={() => setActiveServicesGroup(group.label)}
          >
            <button
              type="button"
              className={cn(
                itemBase,
                itemHover,
                "flex w-full items-center justify-between",
                "focus-visible:bg-mint-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25 focus-visible:ring-inset",
                isGroupActive && itemActive,
                !isGroupActive && isRouteGroup && "text-primary",
              )}
              onFocus={() => setActiveServicesGroup(group.label)}
              onClick={() =>
                setActiveServicesGroup((cur) =>
                  cur === group.label ? null : group.label,
                )
              }
              aria-expanded={isGroupActive}
              aria-controls={submenuId}
            >
              <span>{group.label}</span>
              <span
                aria-hidden
                className={cn(
                  "ml-3 text-base text-[#6b7280] transition-colors",
                  isGroupActive && "text-primary",
                )}
              >
                ›
              </span>
            </button>
            <ul
              id={submenuId}
              className={cn(
                submenuPanel,
                "invisible opacity-0 transition-all duration-200 ease-out",
                "group-hover/service-item:visible group-hover/service-item:opacity-100",
                "group-focus-within/service-item:visible group-focus-within/service-item:opacity-100",
                isGroupActive && "visible opacity-100",
              )}
            >
              {group.children.map((leaf) => {
                const childActive = pathname === leaf.href;
                return (
                  <li key={leaf.href}>
                    <Link
                      href={leaf.href}
                      className={cn(
                        itemBase,
                        itemHover,
                        "focus-visible:bg-mint-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25 focus-visible:ring-inset",
                        childActive && itemActive,
                      )}
                    >
                      {leaf.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

function StandardDropdown({ section }: { section: NavSection }) {
  const pathname = usePathname();
  const leaves = flattenLeaves(section.children);

  return (
    <ul
      className={cn(
        dropdownPanel,
        dropdownBridge,
        "invisible opacity-0 transition-all duration-200 ease-out",
        "group-hover:visible group-hover:opacity-100",
        "group-focus-within:visible group-focus-within:opacity-100",
      )}
    >
      {leaves.map((item) => {
        const childActive = pathname === item.href;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                itemBase,
                itemHover,
                "focus-visible:bg-mint-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25 focus-visible:ring-inset",
                childActive && itemActive,
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function DesktopNavInner() {
  const pathname = usePathname();

  return (
    <nav
      key={pathname}
      aria-label="Main"
      className="hidden items-center lg:flex"
    >
      <ul className="flex w-[373.56px] items-center gap-8">
        {mainNavigation.map((section) => {
          const leaves = flattenLeaves(section.children);
          const isActive =
            pathname === section.href ||
            leaves.some((c) => c.href === pathname);

          const isServices =
            section.label === "Services" && section.children.some(isNavGroup);

          return (
            <li key={section.label} className="group relative">
              <Link
                href={section.href}
                className={cn(
                  "inline-flex items-center rounded-md py-2 text-[16px] font-medium leading-6 tracking-[-0.3125px] text-[#1f2937] transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                  desktopTopLevelLabelWidths[section.label],
                  isActive && "text-primary",
                )}
              >
                {section.label}
              </Link>
              {isServices ? (
                <ServicesDropdown section={section} />
              ) : (
                <StandardDropdown section={section} />
              )}
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
