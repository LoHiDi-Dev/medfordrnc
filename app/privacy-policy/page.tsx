import { InternalPage, internalMetadata } from "@/lib/internal-route";

export const metadata = internalMetadata("privacy-policy");

export default function Page() {
  return <InternalPage slug="privacy-policy" />;
}
