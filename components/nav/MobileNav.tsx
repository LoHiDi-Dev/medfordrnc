"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import type { NavChild, NavGroup, NavLeaf } from "@/data/navigation";
import { mainNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden>
      {open ? (
        <path
          fill="currentColor"
          d="M6.4 6.4 12 12l5.6-5.6 1.4 1.4L13.4 12l5.6 5.6-1.4 1.4L12 13.4l-5.6 5.6-1.4-1.4L10.6 12 5 6.4l1.4-1.4Z"
        />
      ) : (
        <path
          fill="currentColor"
          d="M4 6h16v2H4V6Zm0 5h16v2H4v-2Zm0 5h16v2H4v-2Z"
        />
      )}
    </svg>
  );
}

function isNavGroup(child: NavChild): child is NavGroup {
  return "children" in child;
}

function flattenLeaves(children: readonly NavChild[]): NavLeaf[] {
  return children.flatMap((c) => (isNavGroup(c) ? c.children : [c]));
}

function MobileNavPanel({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const panelId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="flex items-center gap-3 lg:hidden">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="border border-border"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <MenuIcon open={open} />
      </Button>
      {open ? (
        <div
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-x-0 bottom-0 top-[156px] z-40 flex flex-col overflow-hidden bg-white"
        >
          <div className="flex-1 overflow-y-auto px-4 pb-8 pt-4">
            <nav aria-label="Mobile main">
              <ul className="space-y-1">
                {mainNavigation.map((section) => {
                  const isOpen = expanded === section.label;
                  const leaves = flattenLeaves(section.children);
                  const hasGroups = section.children.some(isNavGroup);
                  const isActive =
                    pathname === section.href ||
                    leaves.some((c) => c.href === pathname);

                  return (
                    <li
                      key={section.label}
                      className="rounded-lg border border-border bg-white"
                    >
                      <div className="flex items-stretch">
                        <Link
                          href={section.href}
                          className={cn(
                            "flex-1 px-4 py-3 text-base font-semibold",
                            isActive ? "text-primary" : "text-foreground",
                          )}
                          onClick={() => setOpen(false)}
                        >
                          {section.label}
                        </Link>
                        <button
                          type="button"
                          className="flex w-14 items-center justify-center border-l border-border text-foreground"
                          aria-expanded={isOpen}
                          aria-controls={`${section.label}-mobile-sub`}
                          onClick={() => {
                            setExpanded(isOpen ? null : section.label);
                            setExpandedGroup(null);
                          }}
                        >
                          <span className="sr-only">
                            {isOpen ? "Collapse" : "Expand"} {section.label}{" "}
                            submenu
                          </span>
                          <span
                            aria-hidden
                            className={cn(
                              "text-lg transition-transform",
                              isOpen && "rotate-180",
                            )}
                          >
                            ▾
                          </span>
                        </button>
                      </div>
                      <ul
                        id={`${section.label}-mobile-sub`}
                        hidden={!isOpen}
                        className={cn(
                          "space-y-0 border-t border-[#e8e8ea] bg-[#fafdfb]",
                          !isOpen && "hidden",
                        )}
                      >
                        {hasGroups
                          ? section.children
                              .filter(isNavGroup)
                              .map((group) => {
                                const groupKey = `${section.label}::${group.label}`;
                                const groupOpen = expandedGroup === groupKey;
                                return (
                                  <li key={group.label}>
                                    <button
                                      type="button"
                                      className={cn(
                                        "flex w-full items-center justify-between px-5 py-3 text-left text-[14px] font-semibold leading-5 tracking-[-0.2px] text-[#1f2937] transition-colors hover:bg-mint",
                                        groupOpen && "bg-mint-soft",
                                      )}
                                      aria-expanded={groupOpen}
                                      aria-controls={`${groupKey}-mobile-group`}
                                      onClick={() =>
                                        setExpandedGroup(
                                          groupOpen ? null : groupKey,
                                        )
                                      }
                                    >
                                      <span>{group.label}</span>
                                      <span
                                        aria-hidden
                                        className={cn(
                                          "text-base text-[#6b7280] transition-transform",
                                          groupOpen && "rotate-180",
                                        )}
                                      >
                                        ▾
                                      </span>
                                    </button>
                                    <ul
                                      id={`${groupKey}-mobile-group`}
                                      hidden={!groupOpen}
                                      className={cn(
                                        "space-y-0 border-t border-[#e8e8ea] bg-white",
                                        !groupOpen && "hidden",
                                      )}
                                    >
                                      {group.children.map((leaf) => {
                                        const childActive =
                                          pathname === leaf.href;
                                        return (
                                          <li key={leaf.href}>
                                            <Link
                                              href={leaf.href}
                                              className={cn(
                                                "block px-7 py-3 text-[14px] font-medium leading-5 tracking-[-0.2px] text-[#4b5563] transition-colors hover:bg-mint hover:text-primary active:bg-mint-soft",
                                                childActive &&
                                                  "bg-mint-soft font-semibold text-primary",
                                              )}
                                              onClick={() => setOpen(false)}
                                            >
                                              {leaf.label}
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </li>
                                );
                              })
                          : leaves.map((item) => {
                              const childActive = pathname === item.href;
                              return (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    className={cn(
                                      "block px-5 py-3 text-[14px] font-medium leading-5 tracking-[-0.2px] text-[#4b5563] transition-colors hover:bg-mint hover:text-primary active:bg-mint-soft",
                                      childActive &&
                                        "bg-mint-soft font-semibold text-primary",
                                    )}
                                    onClick={() => setOpen(false)}
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              );
                            })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="mt-6">
              <Button
                href="/admissions/schedule-a-tour"
                className="w-full"
                size="lg"
                onClick={() => setOpen(false)}
              >
                Schedule a Tour
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function MobileNav() {
  const pathname = usePathname();
  return <MobileNavPanel key={pathname} pathname={pathname} />;
}
