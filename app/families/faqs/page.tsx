import { InternalPage, internalMetadata } from "@/lib/internal-route";

export const metadata = internalMetadata("families-faqs");

export default function Page() {
  return <InternalPage slug="families-faqs" />;
}
