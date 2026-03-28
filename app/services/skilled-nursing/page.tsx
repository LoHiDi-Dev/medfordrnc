import { InternalPage, internalMetadata } from "@/lib/internal-route";

export const metadata = internalMetadata("services-skilled-nursing");

export default function Page() {
  return <InternalPage slug="services-skilled-nursing" />;
}
