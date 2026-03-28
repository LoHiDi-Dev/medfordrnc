import { Footer } from "./Footer";
import { SiteHeader } from "./SiteHeader";
import { UtilityBar } from "./UtilityBar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-foreground focus:shadow-lg"
      >
        Skip to main content
      </a>
      <div className="sticky top-0 z-50">
        <UtilityBar />
        <SiteHeader />
      </div>
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
