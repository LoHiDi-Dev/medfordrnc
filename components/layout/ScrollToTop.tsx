"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/** Resets window scroll on every navigation so each page starts at the top. */
export function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, searchParams]);

  return null;
}
