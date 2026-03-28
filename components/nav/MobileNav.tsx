"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
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

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const panelId = useId();
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (prevPath.current !== pathname) {
      prevPath.current = pathname;
      queueMicrotask(() => {
        setOpen(false);
        setExpanded(null);
      });
    }
  }, [pathname]);

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
                  const isActive =
                    pathname === section.href ||
                    section.children.some((c) => c.href === pathname);

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
                          onClick={() =>
                            setExpanded(isOpen ? null : section.label)
                          }
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
                          "space-y-0 border-t border-border bg-mint-soft/40",
                          !isOpen && "hidden",
                        )}
                      >
                        {section.children.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-mint-soft"
                              onClick={() => setOpen(false)}
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
