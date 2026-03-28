import { InternalPage, internalMetadata } from "@/lib/internal-route";

export const metadata = internalMetadata("careers");

export default function Page() {
  return <InternalPage slug="careers" />;
}
