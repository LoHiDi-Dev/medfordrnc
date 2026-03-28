import { InternalPage, internalMetadata } from "@/lib/internal-route";

export const metadata = internalMetadata("services-memory-care");

export default function Page() {
  return <InternalPage slug="services-memory-care" />;
}
