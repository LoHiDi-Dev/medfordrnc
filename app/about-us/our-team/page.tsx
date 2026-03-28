import { InternalPage, internalMetadata } from "@/lib/internal-route";

export const metadata = internalMetadata("about-us-our-team");

export default function Page() {
  return <InternalPage slug="about-us-our-team" />;
}
