import { InternalPage, internalMetadata } from "@/lib/internal-route";

export const metadata = internalMetadata("services-physical-therapy");

export default function Page() {
  return <InternalPage slug="services-physical-therapy" />;
}
