import { InternalPage, internalMetadata } from "@/lib/internal-route";

export const metadata = internalMetadata("about-us-mission-values");

export default function Page() {
  return <InternalPage slug="about-us-mission-values" />;
}
