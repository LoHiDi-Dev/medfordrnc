"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { CheckBulletIcon } from "@/components/icons/CheckBulletIcon";
import { SuccessCircleIcon } from "@/components/icons/SuccessCircleIcon";
import { NeedHelpSolidIcon } from "@/components/icons/NeedHelpSolidIcon";
import { PageContainer } from "@/components/layout/PageContainer";
import { InternalPageHero } from "@/components/sections/InternalPageHero";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { SelectField } from "@/components/ui/select-field";
import { site } from "@/data/site";
import { US_STATES } from "@/data/us-states";
import { cn } from "@/lib/utils";

const paymentMethodSchema = z.enum(["card", "apple_pay", "google_pay"]);

const paySchema = z
  .object({
    residentName: z.string().min(1, "Enter the resident’s name"),
    accountNumber: z.string().min(1, "Enter an account or invoice number"),
    amount: z
      .string()
      .min(1, "Enter an amount")
      .refine((v) => {
        const n = Number.parseFloat(v.replace(/[^0-9.]/g, ""));
        return !Number.isNaN(n) && n > 0;
      }, "Enter a valid payment amount"),
    firstName: z.string().min(1, "Enter your first name"),
    lastName: z.string().min(1, "Enter your last name"),
    email: z.string().email("Enter a valid email"),
    phone: z.string().optional(),
    address: z.string().min(1, "Enter the billing street address"),
    city: z.string().min(1, "Enter the city"),
    state: z.string().min(2, "Select a state"),
    zip: z.string().min(3, "Enter a ZIP code"),
    method: paymentMethodSchema,
    cardNumber: z.string().optional(),
    cardExp: z.string().optional(),
    cardCvv: z.string().optional(),
    simulateDecline: z.boolean().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.method !== "card") return;
    const digits = (data.cardNumber ?? "").replace(/\D/g, "");
    if (digits.length < 4) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Enter a card number",
        path: ["cardNumber"],
      });
    }
    if (!(data.cardExp ?? "").trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Enter expiration",
        path: ["cardExp"],
      });
    }
    if (!(data.cardCvv ?? "").trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Enter CVV",
        path: ["cardCvv"],
      });
    }
  });

type PayFormValues = z.infer<typeof paySchema>;

type PaySuccessSnapshot = {
  values: PayFormValues;
  confirmationId: string;
  paidAt: string;
};

function parsePayAmount(amountRaw: string) {
  const n = Number.parseFloat(String(amountRaw ?? "").replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

function formatUsdFromRaw(amountRaw: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(parsePayAmount(amountRaw));
}

function paymentMethodLabel(method: PayFormValues["method"]) {
  switch (method) {
    case "card":
      return "Credit card";
    case "apple_pay":
      return "Apple Pay";
    case "google_pay":
      return "Google Pay";
    default:
      return method;
  }
}

function cardLastFour(cardNumber: string | undefined) {
  const d = (cardNumber ?? "").replace(/\D/g, "");
  return d.length >= 4 ? d.slice(-4) : "••••";
}

function buildReceiptText(snapshot: PaySuccessSnapshot) {
  const { values: v, confirmationId, paidAt } = snapshot;
  const last4 = cardLastFour(v.cardNumber);
  const methodLine =
    v.method === "card"
      ? `Card ending in ${last4}`
      : paymentMethodLabel(v.method);

  return [
    site.name,
    "PAYMENT RECEIPT",
    "────────────────────────────────────────",
    `Confirmation Number: ${confirmationId}`,
    `Date: ${new Date(paidAt).toLocaleString(undefined, {
      dateStyle: "long",
      timeStyle: "short",
    })}`,
    "",
    `Bill to: ${v.firstName} ${v.lastName}`,
    `Email: ${v.email}`,
    v.phone?.trim() ? `Phone: ${v.phone}` : null,
    "",
    `Resident: ${v.residentName}`,
    `Account or Invoice Number: ${v.accountNumber}`,
    "",
    `Amount Paid: ${formatUsdFromRaw(v.amount)}`,
    `Payment Method: ${methodLine}`,
    "",
    "Billing address:",
    `${v.address}`,
    `${v.city}, ${v.state} ${v.zip}`,
    "",
    "A receipt has been sent to the email address above.",
    "",
    `Questions? ${site.billingEmail} · ${site.phoneDisplay}`,
  ]
    .filter((line) => line != null)
    .join("\n");
}

function downloadTextFile(filename: string, text: string) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function createPaymentConfirmationId() {
  return `MED-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 3 5 6v6c0 4.55 3.05 8.8 7 10 3.95-1.2 7-5.45 7-10V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M7 11V8a5 5 0 0 1 10 0v3M6 11h12v10H6V11Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Filled padlock for the primary Pay CTA (white on green). */
function LockSolidIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 10h-1V8c0-3.31-2.69-6-6-6S5 4.69 5 8v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V12c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3-9H9V8c0-1.66 1.34-3 3-3s3 1.34 3 3v2z"
      />
    </svg>
  );
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M6.9 4.8h2.5l1.25 3.8-1.57 1.57a14.1 14.1 0 0 0 4.77 4.77l1.57-1.57 3.8 1.25v2.5a1.5 1.5 0 0 1-1.5 1.5A13.77 13.77 0 0 1 5.4 6.3a1.5 1.5 0 0 1 1.5-1.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M4 6h16v12H4V6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CreditCardMethodIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <rect x="3.5" y="6" width="17" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 10h17" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 14.4h3.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function AppleMethodIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M15.06 6.2c.55-.67.95-1.6.85-2.53-.8.05-1.77.53-2.34 1.2-.52.6-.97 1.55-.85 2.46.9.07 1.78-.4 2.34-1.13Z"
        fill="currentColor"
      />
      <path
        d="M16.95 12.3c.02-2.18 1.78-3.22 1.86-3.27-1.02-1.5-2.59-1.7-3.14-1.72-1.33-.14-2.61.8-3.3.8-.7 0-1.75-.78-2.88-.76-1.48.02-2.85.86-3.6 2.18-1.53 2.64-.39 6.55 1.08 8.67.72 1.04 1.58 2.2 2.72 2.16 1.1-.04 1.52-.7 2.86-.7 1.33 0 1.72.7 2.88.68 1.18-.02 1.94-1.08 2.66-2.12.83-1.2 1.17-2.36 1.19-2.42-.03 0-2.27-.87-2.29-3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function GooglePayMethodIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M9.15 12.2h5.85c.08.44.12.88.12 1.44 0 3.36-2.25 5.76-5.62 5.76A6.2 6.2 0 0 1 3.3 13.2 6.2 6.2 0 0 1 9.5 7c1.72 0 3.15.63 4.26 1.66l-1.73 1.67C11.4 9.76 10.57 9.4 9.5 9.4c-2.25 0-3.97 1.84-3.97 3.8 0 1.96 1.72 3.8 3.97 3.8 1.47 0 2.32-.59 2.86-1.13.44-.44.72-1.06.84-1.92H9.15V12.2Z"
        fill="currentColor"
      />
      <path d="M17.1 10.1h1.36v2.02h2.03v1.3h-2.03v2.01H17.1v-2.02h-2v-1.29h2V10.1Z" fill="currentColor" />
    </svg>
  );
}

function SectionCard({
  step,
  title,
  children,
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-border bg-white px-6 py-6 shadow-sm sm:px-[33px] sm:py-[33px]">
      <div className="mb-6 flex items-center gap-3 border-b border-border pb-[17px]">
        <span
          className="flex size-8 items-center justify-center rounded-full bg-[#E8F3EB] text-[14px] font-semibold text-primary"
          aria-hidden
        >
          {step}
        </span>
        <h2 className="font-sans text-[22px] font-semibold tracking-[-0.4395px] text-[#48484a] sm:text-2xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

export function PayOnlineForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [successSnapshot, setSuccessSnapshot] = useState<PaySuccessSnapshot | null>(
    null,
  );

  useEffect(() => {
    if (status !== "success" || !successSnapshot) return;
    window.scrollTo(0, 0);
  }, [status, successSnapshot]);

  const form = useForm<PayFormValues>({
    resolver: zodResolver(paySchema),
    defaultValues: {
      residentName: "",
      accountNumber: "",
      amount: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "MA",
      zip: "",
      method: "card",
      cardNumber: "",
      cardExp: "",
      cardCvv: "",
      simulateDecline: false,
    },
    mode: "onTouched",
  });

  const method = useWatch({ control: form.control, name: "method" });
  const amountRaw = useWatch({ control: form.control, name: "amount" });

  const parsedAmount = useMemo(() => {
    const n = Number.parseFloat(String(amountRaw ?? "").replace(/[^0-9.]/g, ""));
    return Number.isFinite(n) ? n : 0;
  }, [amountRaw]);

  const processingFee = 0;
  const total = parsedAmount + processingFee;
  const fieldClassName =
    "min-h-[50px] rounded-lg border-[#d1d5db] bg-[#f9fafb] px-4 py-[15px] text-[16px] text-foreground shadow-none placeholder:text-[#9ca3af] focus:border-primary focus:ring-2 focus:ring-primary/20";

  const paymentMethodOptions = [
    {
      id: "card" as const,
      label: "Credit Card",
      icon: <CreditCardMethodIcon className="size-[18px]" />,
    },
    {
      id: "apple_pay" as const,
      label: "Apple Pay",
      icon: <AppleMethodIcon className="size-[18px]" />,
    },
    {
      id: "google_pay" as const,
      label: "Google Pay",
      icon: <GooglePayMethodIcon className="size-[18px]" />,
    },
  ] as const;

  async function onSubmit(values: PayFormValues) {
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 900));
    if (values.simulateDecline) {
      setStatus("error");
      return;
    }
    const paidAt = new Date().toISOString();
    const confirmationId = createPaymentConfirmationId();
    setSuccessSnapshot({ values: { ...values }, confirmationId, paidAt });
    setStatus("success");
  }

  return (
    <>
      {status === "success" && successSnapshot ? (
        <InternalPageHero
          title="Payment Received"
          subtitle={`A receipt has been sent to ${successSnapshot.values.email}.`}
        />
      ) : (
        <InternalPageHero
          title="Online Bill Pay"
          subtitle="Securely pay your bill online with our encrypted payment system"
        />
      )}

      <section className="bg-white py-12 sm:py-16">
        <PageContainer>
          <div className="mx-auto max-w-[1216px]">
            {status !== "success" ? (
              <div className="mb-12 flex items-center justify-center gap-2.5 text-center">
                <div className="flex items-center gap-1.5 text-primary">
                  <ShieldIcon className="size-[15px]" />
                  <LockIcon className="size-[13px]" />
                </div>
                <p className="font-sans text-sm font-medium tracking-[-0.1504px] text-[#48484a]">
                  256-bit SSL Encrypted Payment
                </p>
              </div>
            ) : null}

            {status === "success" && successSnapshot ? (
              <div
                className="mx-auto max-w-2xl space-y-8"
                role="status"
                aria-live="polite"
              >
                <div className="rounded-xl border border-border bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
                  <div className="flex flex-col items-center text-center">
                    <SuccessCircleIcon className="size-20 sm:size-24" />
                    <h2 className="mt-6 font-serif-display text-3xl font-bold tracking-tight text-[#48484a] sm:text-4xl">
                      Thank you, {successSnapshot.values.firstName}
                    </h2>
                    <p className="mt-4 text-pretty text-lg text-muted sm:text-xl">
                      Your payment of{" "}
                      <span className="font-semibold text-[#48484a]">
                        {formatUsdFromRaw(successSnapshot.values.amount)}
                      </span>{" "}
                      was submitted successfully.
                    </p>
                  </div>

                  <dl className="mt-10 space-y-3 rounded-2xl bg-mint-soft px-5 py-6 text-left text-sm sm:px-6">
                    <div className="flex flex-col gap-0.5 border-b border-primary/10 pb-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <dt className="text-muted">Confirmation Number</dt>
                      <dd className="break-all font-mono font-medium text-[#48484a]">
                        {successSnapshot.confirmationId}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                      <dt className="text-muted">Date</dt>
                      <dd className="font-medium text-[#48484a]">
                        {new Date(successSnapshot.paidAt).toLocaleString(undefined, {
                          dateStyle: "long",
                          timeStyle: "short",
                        })}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                      <dt className="text-muted">Amount Paid</dt>
                      <dd className="font-semibold tabular-nums text-primary">
                        {formatUsdFromRaw(successSnapshot.values.amount)}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                      <dt className="text-muted">Resident</dt>
                      <dd className="font-medium text-[#48484a]">
                        {successSnapshot.values.residentName}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                      <dt className="text-muted">Account or Invoice Number</dt>
                      <dd className="font-medium text-[#48484a]">
                        {successSnapshot.values.accountNumber}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                      <dt className="text-muted">Payment Method</dt>
                      <dd className="font-medium text-[#48484a]">
                        {successSnapshot.values.method === "card"
                          ? `Card ending in ${cardLastFour(successSnapshot.values.cardNumber)}`
                          : paymentMethodLabel(successSnapshot.values.method)}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
                  <Button
                    type="button"
                    variant="primary"
                    className="min-h-[52px] w-full rounded-2xl font-bold shadow-md sm:min-w-[220px] sm:w-auto"
                    onClick={() =>
                      downloadTextFile(
                        `medford-payment-receipt-${successSnapshot.confirmationId}.txt`,
                        buildReceiptText(successSnapshot),
                      )
                    }
                  >
                    Download Receipt
                  </Button>
                  <Button
                    href="/"
                    variant="secondary"
                    className="min-h-[52px] w-full rounded-2xl font-bold shadow-md sm:min-w-[220px] sm:w-auto"
                  >
                    Return to Homepage
                  </Button>
                </div>
              </div>
            ) : null}

            {status === "error" ? (
              <div
                role="alert"
                className="mx-auto mb-8 max-w-2xl rounded-xl border border-red-200 bg-red-50 p-8 text-center shadow-sm"
              >
                <h2 className="font-sans text-[28px] font-semibold tracking-[-0.4395px] text-red-900">
                  Payment could not be completed (demo)
                </h2>
                <p className="mt-3 text-base leading-relaxed text-red-800">
                  This simulated decline helps you preview error handling. Please try
                  again.
                </p>
                <Button
                  type="button"
                  className="mt-6"
                  variant="secondary"
                  onClick={() => {
                    setSuccessSnapshot(null);
                    setStatus("idle");
                  }}
                >
                  Return to form
                </Button>
              </div>
            ) : null}

            {status === "idle" || status === "submitting" ? (
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(340px,1fr)] xl:grid-cols-[minmax(0,789px)_minmax(0,395px)]"
                noValidate
              >
                <div className="space-y-6">
                  <SectionCard step={1} title="Payment Details">
                    <div className="grid gap-6">
                      <FormField
                        id="residentName"
                        label="Resident Full Name"
                        required
                        autoComplete="name"
                        placeholder="Enter resident's name"
                        className={fieldClassName}
                        {...form.register("residentName")}
                        error={form.formState.errors.residentName?.message}
                      />
                      <div className="grid gap-6 sm:grid-cols-2">
                        <FormField
                          id="accountNumber"
                          label="Account / Invoice Number"
                          required
                          placeholder="e.g. INV-123456"
                          className={fieldClassName}
                          {...form.register("accountNumber")}
                          error={form.formState.errors.accountNumber?.message}
                        />
                        <FormField
                          id="amount"
                          label="Payment Amount ($)"
                          required
                          inputMode="decimal"
                          placeholder="$ 0.00"
                          className={fieldClassName}
                          {...form.register("amount")}
                          error={form.formState.errors.amount?.message}
                        />
                      </div>
                    </div>
                  </SectionCard>

                  <SectionCard step={2} title="Billing Information">
                    <div className="grid gap-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <FormField
                          id="firstName"
                          label="First Name"
                          required
                          autoComplete="given-name"
                          placeholder="First Name"
                          className={fieldClassName}
                          {...form.register("firstName")}
                          error={form.formState.errors.firstName?.message}
                        />
                        <FormField
                          id="lastName"
                          label="Last Name"
                          required
                          autoComplete="family-name"
                          placeholder="Last Name"
                          className={fieldClassName}
                          {...form.register("lastName")}
                          error={form.formState.errors.lastName?.message}
                        />
                      </div>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <FormField
                          id="email"
                          label="Email Address"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="receipt@example.com"
                          className={fieldClassName}
                          {...form.register("email")}
                          error={form.formState.errors.email?.message}
                        />
                        <FormField
                          id="phone"
                          label="Phone Number"
                          type="tel"
                          autoComplete="tel"
                          placeholder="(555) 123-4567"
                          className={fieldClassName}
                          {...form.register("phone")}
                          error={form.formState.errors.phone?.message}
                        />
                      </div>
                      <FormField
                        id="address"
                        label="Billing Address"
                        required
                        autoComplete="street-address"
                        placeholder="Street Address"
                        className={fieldClassName}
                        {...form.register("address")}
                        error={form.formState.errors.address?.message}
                      />
                      <div className="grid gap-4 sm:grid-cols-4">
                        <FormField
                          id="city"
                          label="City"
                          required
                          autoComplete="address-level2"
                          placeholder="City"
                          className={cn(fieldClassName, "sm:col-span-2")}
                          {...form.register("city")}
                          error={form.formState.errors.city?.message}
                        />
                        <SelectField
                          id="state"
                          label="State"
                          required
                          className={fieldClassName}
                          {...form.register("state")}
                          error={form.formState.errors.state?.message}
                        >
                          {US_STATES.map((s) => (
                            <option key={s.value} value={s.value}>
                              {s.label}
                            </option>
                          ))}
                        </SelectField>
                        <FormField
                          id="zip"
                          label="ZIP"
                          required
                          autoComplete="postal-code"
                          placeholder="ZIP"
                          className={fieldClassName}
                          {...form.register("zip")}
                          error={form.formState.errors.zip?.message}
                        />
                      </div>
                    </div>
                  </SectionCard>

                  <SectionCard step={3} title="Payment Method">
                    <fieldset>
                      <legend className="sr-only">Choose a payment method</legend>
                      <div className="grid gap-3 sm:grid-cols-3">
                        {paymentMethodOptions.map((paymentMethodOption) => (
                          <label
                            key={paymentMethodOption.id}
                            className={cn(
                              "flex min-h-[74px] cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border bg-white px-4 py-3 text-center transition-colors",
                              method === paymentMethodOption.id
                                ? "border-primary bg-[#E8F3EB] text-[#48484a]"
                                : "border-border text-[#48484a] hover:border-primary/40",
                            )}
                          >
                            <input
                              type="radio"
                              value={paymentMethodOption.id}
                              className="sr-only"
                              {...form.register("method")}
                            />
                            <span
                              className={cn(
                                "text-[#6b7280]",
                                method === paymentMethodOption.id && "text-[#48484a]",
                              )}
                              aria-hidden
                            >
                              {paymentMethodOption.icon}
                            </span>
                            <span className="text-sm font-medium">
                              {paymentMethodOption.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    {method === "card" ? (
                      <div className="mt-6 grid gap-6">
                        <FormField
                          id="cardNumber"
                          label="Card Number"
                          required
                          inputMode="numeric"
                          autoComplete="cc-number"
                          placeholder="0000 0000 0000 0000"
                          className={fieldClassName}
                          {...form.register("cardNumber")}
                          error={form.formState.errors.cardNumber?.message}
                        />
                        <div className="grid gap-6 sm:grid-cols-2">
                          <FormField
                            id="cardExp"
                            label="Expiration Date"
                            required
                            placeholder="MM/YY"
                            autoComplete="cc-exp"
                            className={fieldClassName}
                            {...form.register("cardExp")}
                            error={form.formState.errors.cardExp?.message}
                          />
                          <FormField
                            id="cardCvv"
                            label="Security Code (CVV)"
                            required
                            inputMode="numeric"
                            autoComplete="cc-csc"
                            placeholder="123"
                            className={fieldClassName}
                            {...form.register("cardCvv")}
                            error={form.formState.errors.cardCvv?.message}
                          />
                        </div>
                      </div>
                    ) : (
                      <p className="mt-6 rounded-lg bg-[#f9fafb] p-4 text-sm leading-relaxed text-muted">
                        Wallet payment buttons are represented here for layout parity in
                        this demo. Production Apple Pay and Google Pay typically launch
                        provider SDK flows.
                      </p>
                    )}
                  </SectionCard>
                </div>

                <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
                  <section className="rounded-xl border border-border bg-white p-[25px] shadow-sm">
                    <h2 className="font-sans text-[20px] font-bold leading-7 text-[#48484a]">
                      Summary
                    </h2>
                    <dl className="mt-5 space-y-3">
                      <div className="flex items-center justify-between gap-4 text-sm">
                        <dt className="text-[#48484a]">Payment Amount</dt>
                        <dd className="font-medium tabular-nums text-[#48484a]">
                          ${parsedAmount.toFixed(2)}
                        </dd>
                      </div>
                      <div className="flex items-center justify-between gap-4 text-sm">
                        <dt className="text-[#48484a]">Processing Fee</dt>
                        <dd className="font-medium tabular-nums text-[#48484a]">
                          ${processingFee.toFixed(2)}
                        </dd>
                      </div>
                      <div className="mt-5 flex items-end justify-between gap-4 pt-3">
                        <dt className="font-sans text-[18px] font-bold leading-7 text-[#48484a]">
                          Total
                        </dt>
                        <dd className="font-sans text-[36px] font-bold leading-none tracking-[-0.02em] text-primary">
                          ${total.toFixed(2)}
                        </dd>
                      </div>
                    </dl>
                    <div className="mt-6">
                      <Button
                        type="submit"
                        className="min-h-[60px] w-full rounded-2xl text-base font-bold shadow-none"
                        disabled={status === "submitting"}
                      >
                        <LockSolidIcon className="size-5 shrink-0" />
                        {status === "submitting" ? "Processing..." : "Pay Securely"}
                      </Button>
                      <p className="mt-3 flex items-center justify-center gap-1.5 text-center font-sans text-[12px] leading-4 text-muted">
                        <ShieldIcon className="size-[12px] text-primary" />
                        256-bit SSL Encryption
                      </p>
                    </div>
                  </section>

                  <section className="rounded-xl border border-primary/50 bg-mint p-[25px]">
                    <div className="flex gap-3">
                      <div className="flex size-8 shrink-0 items-center justify-center">
                        <NeedHelpSolidIcon className="size-8" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="font-sans text-[20px] font-bold leading-7 text-primary">
                          Need Help?
                        </h2>
                        <div className="mt-3 space-y-3">
                          <p className="text-sm leading-6 text-[#4b5563]">
                            If you have questions about your bill or need assistance
                            with this form, our billing department is here to help.
                          </p>
                          <a
                            className="flex items-center gap-2.5 text-sm font-medium text-[#48484a] hover:text-primary"
                            href={`tel:${site.phoneTel}`}
                          >
                            <PhoneIcon className="size-5 shrink-0 text-primary" />
                            781.396.4400 (Ext. 2)
                          </a>
                          <a
                            className="flex items-center gap-2.5 text-sm font-medium text-[#48484a] hover:text-primary"
                            href={`mailto:${site.billingEmail}`}
                          >
                            <MailIcon className="size-5 shrink-0 text-primary" />
                            {site.billingEmail}
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="rounded-[24px] bg-[#f8f7f2] p-6 sm:p-8">
                    <h2 className="font-sans text-[18px] font-bold leading-7 tracking-[-0.4395px] text-[#48484a]">
                      Payment Information
                    </h2>
                    <ul className="mt-5 space-y-4">
                      {[
                        "Email receipt sent immediately",
                        "Payments post within 24 hours",
                        "No convenience fees",
                        "Multiple payment methods accepted",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm font-medium leading-6 text-[#5c6370]"
                        >
                          <CheckBulletIcon className="mt-0.5 size-[18px] shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </aside>
              </form>
            ) : null}
          </div>
        </PageContainer>
      </section>
    </>
  );
}
