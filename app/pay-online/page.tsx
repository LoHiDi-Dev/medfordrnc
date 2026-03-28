import type { Metadata } from "next";
import { PayOnlineForm } from "@/components/pay/PayOnlineForm";

export const metadata: Metadata = {
  title: "Online Bill Pay",
  description:
    "Securely pay your bill online with our encrypted payment system (demo — no real charges).",
};

export default function PayOnlinePage() {
  return <PayOnlineForm />;
}
