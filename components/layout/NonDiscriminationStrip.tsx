import { footerNonDiscrimination } from "@/data/footer";
import { PageContainer } from "./PageContainer";

/**
 * Footer-adjacent compliance strip — same horizontal grid as the footer, docked
 * above `bg-footer-surface` with a stepped charcoal tone.
 */
export function NonDiscriminationStrip() {
  return (
    <section
      className="border-t border-white/10 border-b border-white/[0.08] bg-footer-secondary-cta text-white"
      aria-labelledby="nondisc-strip-title"
    >
      <PageContainer className="py-4 sm:py-5">
        <div className="flex flex-col gap-2.5 text-left sm:gap-3 lg:flex-row lg:items-start lg:gap-10 xl:gap-14">
          <h2
            id="nondisc-strip-title"
            className="max-w-full shrink-0 font-sans text-[11px] font-semibold uppercase leading-snug tracking-[0.12em] text-white/75 sm:text-xs sm:tracking-[0.1em] lg:max-w-[14rem] lg:pt-0.5"
          >
            Non-Discrimination Notice
          </h2>
          <p className="min-w-0 flex-1 text-pretty font-sans text-[13px] font-normal leading-relaxed tracking-[-0.04px] text-white/80 sm:text-sm sm:leading-[1.6] sm:tracking-[-0.06px]">
            {footerNonDiscrimination}
          </p>
        </div>
      </PageContainer>
    </section>
  );
}
