import { InternalPage, internalMetadata } from "@/lib/internal-route";

export const metadata = internalMetadata("admissions");

export default function Page() {
  return <InternalPage slug="admissions" />;
}
