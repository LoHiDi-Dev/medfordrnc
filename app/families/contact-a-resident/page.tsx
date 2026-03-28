import type { Metadata } from "next";
import { ContactResidentForm } from "@/components/families/ContactResidentForm";

export const metadata: Metadata = {
  title: "Contact a Resident",
  description:
    "Send a warm message to your loved one. We’ll print and hand-deliver your note directly to their room.",
};

export default function ContactAResidentPage() {
  return <ContactResidentForm />;
}
