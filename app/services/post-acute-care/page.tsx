import { InternalPage, internalMetadata } from "@/lib/internal-route";

export const metadata = internalMetadata("services-post-acute-care");

export default function Page() {
  return <InternalPage slug="services-post-acute-care" />;
}
