"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { site } from "@/data/site";
import { US_STATES } from "@/data/us-states";
import { PageContainer } from "@/components/layout/PageContainer";
import { InternalPageHero } from "@/components/sections/InternalPageHero";
import { SummaryCard } from "@/components/sections/SummaryCard";
import { SupportCard } from "@/components/sections/SupportCard";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { SelectField } from "@/components/ui/select-field";
import { cn } from "@/lib/utils";

const paymentMethodSchema = z.enum(["card", "apple_pay", "google_pay"]);

const paySchema = z
  .object({
    residentName: z.string().min(2, "Enter the resident’s full name"),
    accountNumber: z.string().min(3, "Enter an account or invoice number"),
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
    address: z.string().min(4, "Enter the billing street address"),
    city: z.string().min(2, "Enter the city"),
    state: z.string().min(2, "Select a state"),
    zip: z
      .string()
      .regex(/^\d{5}(-\d{4})?$/, "Enter a valid ZIP code"),
    method: paymentMethodSchema,
    cardNumber: z.string().optional(),
    cardExp: z.string().optional(),
    cardCvv: z.string().optional(),
    simulateDecline: z.boolean().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.method !== "card") return;
    const num = (data.cardNumber ?? "").replace(/\s/g, "");
    if (!/^\d{13,19}$/.test(num)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Enter a valid card number",
        path: ["cardNumber"],
      });
    }
    if (!/^(0[1-9]|1[0-2])\/(\d{2})$/.test((data.cardExp ?? "").trim())) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Use MM/YY",
        path: ["cardExp"],
      });
    }
    if (!/^\d{3,4}$/.test((data.cardCvv ?? "").trim())) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Enter the CVV",
        path: ["cardCvv"],
      });
    }
  });

type PayFormValues = z.infer<typeof paySchema>;

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
    <section className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <span
          className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
          aria-hidden
        >
          {step}
        </span>
        <h2 className="font-serif-display text-xl font-semibold text-foreground">
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

  async function onSubmit(values: PayFormValues) {
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 900));
    if (values.simulateDecline) {
      setStatus("error");
      return;
    }
    setStatus("success");
  }

  return (
    <>
      <InternalPageHero
        title="Online Bill Pay"
        subtitle="Securely pay your bill online with our encrypted payment system"
      />

      <section className="bg-warm-gray/30 py-12 sm:py-16">
        <PageContainer>
          <div className="mb-8 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">
            <ShieldIcon className="size-8 text-primary" />
            <p className="text-base font-semibold text-foreground">
              256-bit SSL encrypted payment (demo UI only)
            </p>
          </div>

          {status === "success" ? (
            <div
              role="status"
              className="mx-auto max-w-2xl rounded-2xl border border-primary/30 bg-mint-soft p-8 text-center shadow-sm"
            >
              <h2 className="font-serif-display text-2xl font-semibold text-foreground">
                Payment submitted (demo)
              </h2>
              <p className="mt-3 text-muted">
                No charge was processed. This front-end demo simulates a successful
                submission only. Integrate your payment provider in{" "}
                <code className="rounded bg-white px-1 py-0.5 text-sm">
                  PayOnlineForm
                </code>
                .
              </p>
              <Button
                type="button"
                className="mt-6"
                onClick={() => {
                  setStatus("idle");
                  form.reset();
                }}
              >
                Pay another bill (demo)
              </Button>
            </div>
          ) : null}

          {status === "error" ? (
            <div
              role="alert"
              className="mx-auto mb-8 max-w-2xl rounded-2xl border border-red-200 bg-red-50 p-8 text-center shadow-sm"
            >
              <h2 className="font-serif-display text-2xl font-semibold text-red-900">
                Payment could not be completed (demo)
              </h2>
              <p className="mt-3 text-red-800">
                This simulated decline helps you preview error handling. Uncheck
                “Simulate declined payment” and try again.
              </p>
              <Button
                type="button"
                className="mt-6"
                variant="secondary"
                onClick={() => setStatus("idle")}
              >
                Return to form
              </Button>
            </div>
          ) : null}

          {status === "idle" || status === "submitting" ? (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid gap-10 lg:grid-cols-[1fr_360px]"
              noValidate
            >
              <div className="space-y-8">
                <SectionCard step={1} title="Payment Details">
                  <div className="grid gap-5">
                    <FormField
                      id="residentName"
                      label="Resident Full Name"
                      required
                      autoComplete="name"
                      {...form.register("residentName")}
                      error={form.formState.errors.residentName?.message}
                    />
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        id="accountNumber"
                        label="Account / Invoice Number"
                        required
                        {...form.register("accountNumber")}
                        error={form.formState.errors.accountNumber?.message}
                      />
                      <FormField
                        id="amount"
                        label="Payment Amount ($)"
                        required
                        inputMode="decimal"
                        placeholder="0.00"
                        {...form.register("amount")}
                        error={form.formState.errors.amount?.message}
                      />
                    </div>
                  </div>
                </SectionCard>

                <SectionCard step={2} title="Billing Information">
                  <div className="grid gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        id="firstName"
                        label="First Name"
                        required
                        autoComplete="given-name"
                        {...form.register("firstName")}
                        error={form.formState.errors.firstName?.message}
                      />
                      <FormField
                        id="lastName"
                        label="Last Name"
                        required
                        autoComplete="family-name"
                        {...form.register("lastName")}
                        error={form.formState.errors.lastName?.message}
                      />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        id="email"
                        label="Email Address"
                        type="email"
                        required
                        autoComplete="email"
                        {...form.register("email")}
                        error={form.formState.errors.email?.message}
                      />
                      <FormField
                        id="phone"
                        label="Phone Number"
                        type="tel"
                        autoComplete="tel"
                        {...form.register("phone")}
                        error={form.formState.errors.phone?.message}
                      />
                    </div>
                    <FormField
                      id="address"
                      label="Billing Address"
                      required
                      autoComplete="street-address"
                      {...form.register("address")}
                      error={form.formState.errors.address?.message}
                    />
                    <div className="grid gap-5 sm:grid-cols-3">
                      <FormField
                        id="city"
                        label="City"
                        required
                        autoComplete="address-level2"
                        {...form.register("city")}
                        error={form.formState.errors.city?.message}
                      />
                      <SelectField
                        id="state"
                        label="State"
                        required
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
                      {(
                        [
                          { id: "card" as const, label: "Credit Card" },
                          { id: "apple_pay" as const, label: "Apple Pay" },
                          { id: "google_pay" as const, label: "Google Pay" },
                        ] as const
                      ).map((m) => (
                        <label
                          key={m.id}
                          className={cn(
                            "flex cursor-pointer items-center justify-center rounded-xl border-2 px-3 py-4 text-center text-sm font-semibold transition-colors",
                            method === m.id
                              ? "border-primary bg-mint-soft text-primary"
                              : "border-border bg-white hover:border-primary/40",
                          )}
                        >
                          <input
                            type="radio"
                            value={m.id}
                            className="sr-only"
                            {...form.register("method")}
                          />
                          {m.label}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  {method === "card" ? (
                    <div className="mt-6 grid gap-5">
                      <FormField
                        id="cardNumber"
                        label="Card Number"
                        required
                        inputMode="numeric"
                        autoComplete="cc-number"
                        placeholder="1234 5678 9012 3456"
                        {...form.register("cardNumber")}
                        error={form.formState.errors.cardNumber?.message}
                      />
                      <div className="grid gap-5 sm:grid-cols-2">
                        <FormField
                          id="cardExp"
                          label="Expiration Date"
                          required
                          placeholder="MM/YY"
                          autoComplete="cc-exp"
                          {...form.register("cardExp")}
                          error={form.formState.errors.cardExp?.message}
                        />
                        <FormField
                          id="cardCvv"
                          label="Security Code (CVV)"
                          required
                          inputMode="numeric"
                          autoComplete="cc-csc"
                          {...form.register("cardCvv")}
                          error={form.formState.errors.cardCvv?.message}
                        />
                      </div>
                    </div>
                  ) : (
                    <p className="mt-6 rounded-lg bg-mint-soft/80 p-4 text-sm text-muted">
                      Wallet payments are represented in this demo for layout only.
                      Production implementations typically invoke{" "}
                      <span className="font-medium text-foreground">
                        Apple Pay / Google Pay
                      </span>{" "}
                      SDK flows from your provider.
                    </p>
                  )}

                  <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm text-muted">
                    <input
                      type="checkbox"
                      className="mt-1 size-4 rounded border-border text-primary focus:ring-primary"
                      {...form.register("simulateDecline")}
                    />
                    <span>
                      <span className="font-semibold text-foreground">
                        Simulate declined payment
                      </span>{" "}
                      (demo only — toggles the mock error state after validation)
                    </span>
                  </label>
                </SectionCard>
              </div>

              <aside className="space-y-6 lg:sticky lg:top-[180px] lg:self-start">
                <SummaryCard
                  title="Summary"
                  lines={[
                    {
                      label: "Payment amount",
                      value: `$${parsedAmount.toFixed(2)}`,
                    },
                    {
                      label: "Processing fee",
                      value: `$${processingFee.toFixed(2)}`,
                    },
                    {
                      label: "Total",
                      value: `$${total.toFixed(2)}`,
                      emphasize: true,
                    },
                  ]}
                  footer={
                    <div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full gap-2"
                        disabled={status === "submitting"}
                      >
                        <LockIcon className="size-5" />
                        {status === "submitting" ? "Processing…" : "Pay Securely"}
                      </Button>
                      <p className="mt-3 flex items-center justify-center gap-2 text-xs text-muted">
                        <ShieldIcon className="size-4 text-primary" />
                        256-bit SSL encryption (demo)
                      </p>
                    </div>
                  }
                />

                <SupportCard
                  variant="accent"
                  title="Need Help?"
                  icon={<span aria-hidden>☎</span>}
                >
                  <p>
                    Billing questions: call{" "}
                    <a
                      className="font-semibold text-primary hover:underline"
                      href={`tel:${site.phoneTel}`}
                    >
                      {site.phoneDisplay}
                    </a>{" "}
                    (ask for Billing, ext. 2 in production).
                  </p>
                  <p className="mt-2">
                    Email{" "}
                    <a
                      className="font-semibold text-primary hover:underline"
                      href={`mailto:${site.billingEmail}`}
                    >
                      {site.billingEmail}
                    </a>
                  </p>
                </SupportCard>

                <SupportCard title="Payment information" variant="muted">
                  <ul className="list-inside list-disc space-y-2 text-sm text-muted">
                    <li>Email receipt sent immediately (when enabled)</li>
                    <li>Payments post within 24 hours (typical)</li>
                    <li>No convenience fees in this demo narrative</li>
                    <li>Multiple payment methods accepted at go-live</li>
                  </ul>
                </SupportCard>
              </aside>
            </form>
          ) : null}
        </PageContainer>
      </section>
    </>
  );
}
