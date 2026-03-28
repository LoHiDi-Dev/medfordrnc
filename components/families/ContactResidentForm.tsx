"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { assets } from "@/data/assets";
import { site } from "@/data/site";
import { PageContainer } from "@/components/layout/PageContainer";
import { InternalPageHero } from "@/components/sections/InternalPageHero";
import { SupportCard } from "@/components/sections/SupportCard";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { TextAreaField } from "@/components/ui/textarea-field";

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

function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 10v6M12 7h.01"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 21s-7-4.35-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.65-7 10-7 10Z"
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

const whyMessages = [
  "Brighten your loved one’s day",
  "Stay connected across distance",
  "Share important updates",
  "Express your love and care",
] as const;

export function ContactResidentForm() {
  const [sent, setSent] = useState(false);

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

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 700));
    setSent(true);
  }

  return (
    <>
      <InternalPageHero
        title="Contact a Resident"
        subtitle="Send a warm message to your loved one. We’ll print and hand-deliver your note directly to their room."
      />

      <section className="py-12 sm:py-16">
        <PageContainer>
          <p className="text-center text-lg font-medium text-primary">
            Our residents love mail
          </p>

          {sent ? (
            <div
              role="status"
              className="mx-auto mt-10 max-w-2xl rounded-2xl border border-primary/30 bg-mint-soft p-10 text-center shadow-sm"
            >
              <h2 className="font-serif-display text-2xl font-semibold text-foreground">
                Thank you — your message is queued (demo)
              </h2>
              <p className="mt-3 text-muted">
                Nothing was stored or emailed. In production, this confirmation would
                reflect your real workflow and privacy safeguards.
              </p>
              <Button
                type="button"
                className="mt-6"
                onClick={() => {
                  setSent(false);
                  form.reset();
                }}
              >
                Send another message (demo)
              </Button>
            </div>
          ) : (
            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="rounded-2xl border border-border bg-white p-6 shadow-md sm:p-8"
                noValidate
              >
                <div className="grid gap-5">
                  <FormField
                    id="senderName"
                    label="Your Full Name"
                    required
                    autoComplete="name"
                    placeholder="Enter your full name"
                    {...form.register("senderName")}
                    error={form.formState.errors.senderName?.message}
                  />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      id="phone"
                      label="Phone Number"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="(555) 123-4567"
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
                      {...form.register("email")}
                      error={form.formState.errors.email?.message}
                    />
                  </div>
                  <h2 className="pt-2 font-serif-display text-lg font-semibold text-foreground">
                    Recipient Information
                  </h2>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      id="residentName"
                      label="Resident’s Full Name"
                      required
                      placeholder="Resident’s full name"
                      {...form.register("residentName")}
                      error={form.formState.errors.residentName?.message}
                    />
                    <FormField
                      id="room"
                      label="Room Number"
                      placeholder="Optional"
                      {...form.register("room")}
                      error={form.formState.errors.room?.message}
                    />
                  </div>
                  <TextAreaField
                    id="message"
                    label="Message"
                    required
                    placeholder="Write your note here. We’ll print it exactly as entered."
                    {...form.register("message")}
                    error={form.formState.errors.message?.message}
                  />
                </div>
                <div className="mt-8">
                  <Button type="submit" size="lg" className="gap-2">
                    <SendIcon className="size-5" />
                    Send Message
                  </Button>
                </div>
              </form>

              <aside className="space-y-6">
                <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={assets.contactSidebarPhoto}
                      alt="Resident and caregiver smiling together"
                      fill
                      className="object-cover"
                      sizes="380px"
                    />
                  </div>
                </div>

                <SupportCard
                  title="Message Delivery"
                  icon={<EnvelopeIcon className="size-5" />}
                >
                  <p>
                    We will print and deliver your message within the next{" "}
                    <strong>24–48 hours</strong>.
                  </p>
                </SupportCard>

                <SupportCard
                  variant="accent"
                  title="Urgent Matters"
                  icon={<InfoIcon className="size-5" />}
                >
                  <p>
                    If you need to reach a resident immediately or have an urgent
                    concern, please call the front desk directly.
                  </p>
                  <p className="mt-3 font-semibold text-foreground">
                    <a
                      className="text-primary hover:underline"
                      href={`tel:${site.phoneTel}`}
                    >
                      {site.phoneDisplay}
                    </a>
                  </p>
                  <p className="mt-1 text-sm font-medium text-primary">
                    Available 24/7
                  </p>
                </SupportCard>

                <SupportCard
                  title="Why Messages Matter"
                  icon={<HeartIcon className="size-5" />}
                >
                  <ul className="mt-2 space-y-2 text-sm text-muted">
                    {whyMessages.map((line) => (
                      <li key={line} className="flex gap-2">
                        <span
                          className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white"
                          aria-hidden
                        >
                          ✓
                        </span>
                        <span className="text-foreground">{line}</span>
                      </li>
                    ))}
                  </ul>
                </SupportCard>
              </aside>
            </div>
          )}
        </PageContainer>
      </section>
    </>
  );
}
