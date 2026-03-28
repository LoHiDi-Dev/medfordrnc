import { InternalPage, internalMetadata } from "@/lib/internal-route";

export const metadata = internalMetadata("terms-of-service");

export default function Page() {
  return <InternalPage slug="terms-of-service" />;
}
