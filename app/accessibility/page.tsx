import { InternalPage, internalMetadata } from "@/lib/internal-route";

export const metadata = internalMetadata("accessibility");

export default function Page() {
  return <InternalPage slug="accessibility" />;
}
