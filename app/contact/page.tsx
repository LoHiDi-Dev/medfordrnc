import { InternalPage, internalMetadata } from "@/lib/internal-route";

export const metadata = internalMetadata("contact");

export default function Page() {
  return <InternalPage slug="contact" />;
}
