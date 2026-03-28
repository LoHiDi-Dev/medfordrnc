import { InternalPage, internalMetadata } from "@/lib/internal-route";

export const metadata = internalMetadata("admissions-request-information");

export default function Page() {
  return <InternalPage slug="admissions-request-information" />;
}
