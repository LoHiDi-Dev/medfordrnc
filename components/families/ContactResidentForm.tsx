"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CheckBulletIcon } from "@/components/icons/CheckBulletIcon";
import { SuccessCircleIcon } from "@/components/icons/SuccessCircleIcon";
import { UrgentInfoSolidIcon } from "@/components/icons/UrgentInfoSolidIcon";
import { PageContainer } from "@/components/layout/PageContainer";
import { InternalPageHero } from "@/components/sections/InternalPageHero";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { TextAreaField } from "@/components/ui/textarea-field";
import { assets } from "@/data/assets";
import { site } from "@/data/site";

const schema = z.object({
  senderName: z.string().min(2, "Enter your full name"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .regex(/^[0-9+().\-\s]{10,}$/, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  residentName: z.string().min(2, "Enter the resident’s full name"),
  room: z.string().optional(),
  message: z
    .string()
    .min(10, "Please share a few sentences so we can print your full note")
    .max(4000, "Message is too long for this demo form"),
});

type FormValues = z.infer<typeof schema>;

type ContactSuccessSnapshot = {
  values: FormValues;
  confirmationId: string;
  submittedAt: string;
};

function createMessageConfirmationId() {
  return `MSG-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

function senderDisplayFirstName(fullName: string) {
  const t = fullName.trim();
  if (!t) return "there";
  return t.split(/\s+/)[0] ?? t;
}

function downloadContactConfirmationFile(filename: string, text: string) {
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

function buildMessageConfirmationText(snapshot: ContactSuccessSnapshot) {
  const v = snapshot.values;
  const room = v.room?.trim() || "—";
  return [
    site.name,
    "MESSAGE SUBMISSION CONFIRMATION (demo — not stored or emailed)",
    "────────────────────────────────────────",
    `Reference: ${snapshot.confirmationId}`,
    `Submitted: ${new Date(snapshot.submittedAt).toLocaleString(undefined, {
      dateStyle: "long",
      timeStyle: "short",
    })}`,
    "",
    `From: ${v.senderName}`,
    `Email: ${v.email}`,
    `Phone: ${v.phone}`,
    "",
    `For resident: ${v.residentName}`,
    `Room: ${room}`,
    "",
    `Message length: ${v.message.length} characters`,
    "",
    "In production, staff would print and deliver your note within 24–48 hours.",
    `Questions? ${site.email} · ${site.phoneDisplay}`,
  ].join("\n");
}

function EnvelopeIcon(props: React.SVGProps<SVGSVGElement>) {
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

function SendIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="m22 2-7 20-4-9-9-4 20-7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m22 2-11 11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
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

const whyMessages = [
  "Brighten your loved one’s day",
  "Stay connected across distance",
  "Share important updates",
  "Express your love and care",
] as const;

export function ContactResidentForm() {
  const [successSnapshot, setSuccessSnapshot] = useState<ContactSuccessSnapshot | null>(
    null,
  );

  useEffect(() => {
    if (!successSnapshot) return;
    window.scrollTo(0, 0);
  }, [successSnapshot]);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      senderName: "",
      phone: "",
      email: "",
      residentName: "",
      room: "",
      message: "",
    },
    mode: "onTouched",
  });

  const fieldClassName =
    "min-h-[50px] rounded-lg border-[#d1d5db] bg-[#f9fafb] px-4 py-[15px] text-[16px] text-foreground shadow-none placeholder:text-[#9ca3af] focus:border-primary focus:ring-2 focus:ring-primary/20";
  const textAreaClassName =
    "min-h-[142px] rounded-lg border-[#d1d5db] bg-[#f9fafb] px-4 py-[15px] text-[16px] text-foreground shadow-none placeholder:text-[#9ca3af] focus:border-primary focus:ring-2 focus:ring-primary/20";

  async function onSubmit(values: FormValues) {
    await new Promise((r) => setTimeout(r, 700));
    setSuccessSnapshot({
      values: { ...values },
      confirmationId: createMessageConfirmationId(),
      submittedAt: new Date().toISOString(),
    });
  }

  return (
    <>
      {successSnapshot ? (
        <InternalPageHero
          title="Message Received"
          subtitle={`A confirmation has been sent to ${successSnapshot.values.email}.`}
        />
      ) : (
        <InternalPageHero
          title="Contact a Resident"
          subtitle="Send a warm message to your loved one. We'll print and hand-deliver your note directly to their room."
          contentClassName="sm:max-w-5xl lg:max-w-6xl"
          subtitleClassName="whitespace-nowrap max-w-full overflow-x-auto pb-1"
        />
      )}

      <section className="bg-white py-12 sm:py-16">
        <PageContainer>
          <div className="mx-auto max-w-[1216px]">
            {!successSnapshot ? (
              <p className="text-center font-sans text-[16px] font-semibold leading-6 tracking-[-0.3125px] text-[#48484a]">
                Our residents love mail
              </p>
            ) : null}

            {successSnapshot ? (
              <div
                className="mx-auto max-w-2xl space-y-8"
                role="status"
                aria-live="polite"
              >
                <div className="rounded-xl border border-border bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
                  <div className="flex flex-col items-center text-center">
                    <SuccessCircleIcon className="size-20 sm:size-24" />
                    <h2 className="mt-6 font-serif-display text-3xl font-bold tracking-tight text-[#48484a] sm:text-4xl">
                      Thank you, {senderDisplayFirstName(successSnapshot.values.senderName)}
                    </h2>
                    <p className="mt-4 text-pretty text-lg text-muted sm:text-xl">
                      Your message for{" "}
                      <span className="font-semibold text-[#48484a]">
                        {successSnapshot.values.residentName}
                      </span>{" "}
                      has been received. We&apos;ll print and deliver it within{" "}
                      <span className="font-medium text-[#48484a]">24–48 hours</span>.
                    </p>
                  </div>

                  <dl className="mt-10 space-y-3 rounded-2xl bg-mint-soft px-5 py-6 text-left text-sm sm:px-6">
                    <div className="flex flex-col gap-0.5 border-b border-primary/10 pb-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <dt className="text-muted">Reference Number</dt>
                      <dd className="break-all font-mono font-medium text-[#48484a]">
                        {successSnapshot.confirmationId}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                      <dt className="text-muted">Submitted</dt>
                      <dd className="font-medium text-[#48484a]">
                        {new Date(successSnapshot.submittedAt).toLocaleString(
                          undefined,
                          {
                            dateStyle: "long",
                            timeStyle: "short",
                          },
                        )}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                      <dt className="text-muted">Sender</dt>
                      <dd className="font-medium text-[#48484a]">
                        {successSnapshot.values.senderName}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                      <dt className="text-muted">Email</dt>
                      <dd className="break-all font-medium text-[#48484a]">
                        {successSnapshot.values.email}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                      <dt className="text-muted">Phone</dt>
                      <dd className="font-medium text-[#48484a]">
                        {successSnapshot.values.phone}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                      <dt className="text-muted">Resident</dt>
                      <dd className="font-medium text-[#48484a]">
                        {successSnapshot.values.residentName}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                      <dt className="text-muted">Room</dt>
                      <dd className="font-medium text-[#48484a]">
                        {successSnapshot.values.room?.trim() || "—"}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                      <dt className="text-muted">Delivery</dt>
                      <dd className="font-medium text-[#48484a]">
                        Printed &amp; delivered within 24–48 hours
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
                      downloadContactConfirmationFile(
                        `medford-message-confirmation-${successSnapshot.confirmationId}.txt`,
                        buildMessageConfirmationText(successSnapshot),
                      )
                    }
                  >
                    Download Confirmation
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
            ) : (
              <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,789px)_minmax(0,395px)]">
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="rounded-xl border border-border bg-white px-6 py-[33px] shadow-sm sm:px-[33px] sm:pb-[49px]"
                  noValidate
                >
                  <div className="grid gap-6">
                    <FormField
                      id="senderName"
                      label="Your Full Name"
                      required
                      autoComplete="name"
                      placeholder="Enter your full name"
                      className={fieldClassName}
                      {...form.register("senderName")}
                      error={form.formState.errors.senderName?.message}
                    />

                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField
                        id="phone"
                        label="Phone Number"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="(555) 123-4567"
                        className={fieldClassName}
                        {...form.register("phone")}
                        error={form.formState.errors.phone?.message}
                      />
                      <FormField
                        id="email"
                        label="Email Address"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        className={fieldClassName}
                        {...form.register("email")}
                        error={form.formState.errors.email?.message}
                      />
                    </div>

                    <div className="border-t border-border pt-6">
                      <h2 className="font-sans text-[18px] font-medium leading-7 text-[#48484a]">
                        Recipient Information
                      </h2>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField
                        id="residentName"
                        label="Resident&apos;s Full Name"
                        required
                        placeholder="Enter resident's name"
                        className={fieldClassName}
                        {...form.register("residentName")}
                        error={form.formState.errors.residentName?.message}
                      />
                      <FormField
                        id="room"
                        label="Room Number"
                        placeholder="e.g. 204B"
                        className={fieldClassName}
                        {...form.register("room")}
                        error={form.formState.errors.room?.message}
                      />
                    </div>

                    <TextAreaField
                      id="message"
                      label="Message"
                      required
                      rows={7}
                      placeholder="Type your message here..."
                      className={textAreaClassName}
                      {...form.register("message")}
                      error={form.formState.errors.message?.message}
                    />
                  </div>

                  <div className="mt-8 border-t border-border pt-8">
                    <Button
                      type="submit"
                      className="min-h-[60px] min-w-[168px] rounded-lg px-7 text-base font-bold"
                    >
                      <SendIcon className="size-[18px]" />
                      Send Message
                    </Button>
                  </div>
                </form>

                <aside className="space-y-6">
                  <section className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
                    <div className="relative h-[224px] w-full">
                      <Image
                        src={assets.contactSidebarPhoto}
                        alt="Resident and caregiver smiling together"
                        fill
                        className="object-cover"
                        sizes="395px"
                      />
                    </div>
                    <div className="p-[25px]">
                      <div className="flex items-start gap-3">
                        <div className="flex size-8 shrink-0 items-center justify-center text-primary">
                          <EnvelopeIcon className="size-7" />
                        </div>
                        <div>
                          <h2 className="font-sans text-[20px] font-bold leading-7 text-[#48484a]">
                            Message Delivery
                          </h2>
                          <p className="mt-2 text-sm leading-[22.75px] text-muted">
                            We will print and deliver your message within the next{" "}
                            <span className="font-bold text-[#48484a]">24-48 hours</span>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="rounded-xl border border-primary/50 bg-mint p-[25px]">
                    <div className="flex items-start gap-3">
                      <div className="flex size-8 shrink-0 items-center justify-center">
                        <UrgentInfoSolidIcon className="size-8" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="font-sans text-[20px] font-bold leading-7 text-primary">
                          Urgent Matters
                        </h2>
                        <p className="mt-3 text-sm leading-6 text-[#4b5563]">
                          If you need to reach a resident immediately or have an
                          urgent concern, please call the front desk directly.
                        </p>
                        <div className="mt-4 space-y-3">
                          <a
                            className="flex items-center gap-2.5 text-sm font-medium text-[#48484a] hover:text-primary"
                            href={`tel:${site.phoneTel}`}
                          >
                            <PhoneIcon className="size-5 shrink-0 text-primary" />
                            {site.phoneDisplay}
                          </a>
                          <p className="flex items-center gap-2.5 text-sm text-[#4b5563]">
                            <CheckBulletIcon className="size-5 shrink-0 text-primary" />
                            Available 24/7
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="rounded-[24px] bg-[#f8f7f2] p-6 sm:p-8">
                    <h2 className="font-sans text-[18px] font-bold leading-7 tracking-[-0.4395px] text-[#48484a]">
                      Why Messages Matter
                    </h2>
                    <ul className="mt-5 space-y-4">
                      {whyMessages.map((line) => (
                        <li
                          key={line}
                          className="flex items-start gap-3 text-sm font-medium leading-6 text-[#5c6370]"
                        >
                          <CheckBulletIcon className="mt-0.5 size-[18px] shrink-0 text-primary" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </aside>
              </div>
            )}
          </div>
        </PageContainer>
      </section>
    </>
  );
}
