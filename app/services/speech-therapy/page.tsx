import { InternalPage, internalMetadata } from "@/lib/internal-route";

export const metadata = internalMetadata("services-speech-therapy");

export default function Page() {
  return <InternalPage slug="services-speech-therapy" />;
}
