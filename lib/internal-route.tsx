import type { Metadata } from "next";
import { internalPages } from "@/data/internal-pages";
import { InternalPageTemplate } from "@/components/templates/InternalPageTemplate";

export type InternalPageSlug = keyof typeof internalPages;

export function internalMetadata(slug: InternalPageSlug): Metadata {
  const copy = internalPages[slug];
  return {
    title: copy.title,
    description: copy.description,
  };
}

export function InternalPage({ slug }: { slug: InternalPageSlug }) {
  return <InternalPageTemplate copy={internalPages[slug]} />;
}
