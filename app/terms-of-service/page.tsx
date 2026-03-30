import { InternalPageHero } from "@/components/sections/InternalPageHero";
import { PageContainer } from "@/components/layout/PageContainer";
import { internalPages } from "@/data/internal-pages";
import { internalMetadata } from "@/lib/internal-route";

export const metadata = internalMetadata("terms-of-service");

export default function Page() {
  const copy = internalPages["terms-of-service"];
  return (
    <>
      <InternalPageHero title={copy.heroTitle} subtitle={copy.heroSubtitle} />
      <section className="py-14 sm:py-16">
        <PageContainer className="max-w-3xl" />
      </section>
    </>
  );
}
