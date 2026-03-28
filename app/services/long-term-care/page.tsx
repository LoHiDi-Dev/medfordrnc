import { InternalPage, internalMetadata } from "@/lib/internal-route";

export const metadata = internalMetadata("services-long-term-care");

export default function Page() {
  return <InternalPage slug="services-long-term-care" />;
}
