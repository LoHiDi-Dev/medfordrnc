import Link from "next/link";
import { InternalPageHero } from "@/components/sections/InternalPageHero";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import type { InternalPageCopy } from "@/data/internal-pages";

type InternalPageTemplateProps = {
  copy: InternalPageCopy;
};

export function InternalPageTemplate({ copy }: InternalPageTemplateProps) {
  return (
    <>
      <InternalPageHero title={copy.heroTitle} subtitle={copy.heroSubtitle} />
      <section className="py-14 sm:py-16">
        <PageContainer className="max-w-3xl">
          <p className="text-lg font-medium text-foreground">{copy.intro}</p>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
            {copy.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {!copy.hideCta ? (
            <div className="mt-12 rounded-2xl border border-border bg-mint-soft/50 p-8">
              <h2 className="font-serif-display text-2xl font-semibold text-foreground">
                {copy.ctaTitle}
              </h2>
              <p className="mt-2 text-muted">{copy.ctaBody}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href="/admissions/schedule-a-tour" size="lg">
                  Schedule a Tour
                </Button>
                <Button
                  href="/admissions/request-information"
                  variant="secondary"
                  size="lg"
                >
                  Request Information
                </Button>
                <Button
                  href="/contact"
                  variant="ghost"
                  size="lg"
                  className="border border-border"
                >
                  Contact
                </Button>
              </div>
            </div>
          ) : null}
          {!copy.hideReturnLink ? (
            <p className="mt-10 text-sm text-muted">
              Looking for something specific?{" "}
              <Link
                href="/"
                className="font-semibold text-primary underline-offset-2 hover:underline"
              >
                Return to the homepage
              </Link>
              .
            </p>
          ) : null}
        </PageContainer>
      </section>
    </>
  );
}
