export type InternalPageCopy = {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  body: string[];
  ctaTitle: string;
  ctaBody: string;
  /** Optional: hide the CTA card/buttons on this page. */
  hideCta?: boolean;
  /** Optional: hide the “Return to the homepage” helper line. */
  hideReturnLink?: boolean;
};

const paragraph = (lines: string[]): InternalPageCopy["body"] => lines;

export const internalPages = {
  "about-us": {
    title: "About Us",
    description:
      "Learn how Medford Rehabilitation & Nursing Center serves our community with skilled nursing and rehabilitation.",
    heroTitle: "About Us",
    heroSubtitle: "Trusted care rooted in Medford for more than three decades.",
    intro:
      "We are a Medicare/Medicaid-certified skilled nursing and rehabilitation center focused on clinical quality, comfort, and clear communication with families.",
    body: paragraph([
      "Our interdisciplinary team includes attending physicians, nurse practitioners, registered nurses, certified nursing assistants, and licensed therapists who coordinate around each resident’s goals.",
      "Families choose us when they want a partner who explains the plan, celebrates progress, and responds quickly when needs change.",
    ]),
    ctaTitle: "See the center in person",
    ctaBody:
      "Walk the therapy gym, meet leadership, and ask the questions that matter to your family.",
  },
  "about-us-mission-values": {
    title: "Mission & Values",
    description:
      "The principles that guide care, communication, and respect at Medford Rehabilitation & Nursing Center.",
    heroTitle: "Mission & Values",
    heroSubtitle: "Dignity first—in every interaction, every day.",
    intro:
      "Our mission is to deliver skilled, compassionate care that helps residents recover, thrive, and feel at home.",
    body: paragraph([
      "We value honesty, empathy, and accountability. That means transparent updates for families, respectful listening, and a culture where staff can do their best work.",
      "Safety, infection prevention, and clinical protocols are non-negotiable—but never at the expense of warmth and human connection.",
    ]),
    ctaTitle: "Experience our culture",
    ctaBody: "Schedule a tour and meet the leaders who set the tone for our community.",
  },
  "about-us-our-team": {
    title: "Our Team",
    description:
      "Meet the clinical and support professionals who make Medford Rehabilitation & Nursing Center a trusted choice.",
    heroTitle: "Our Team",
    heroSubtitle: "Experienced clinicians who collaborate around your goals.",
    intro:
      "From nursing leadership to therapy specialists, our team trains continuously and rounds together to keep care coordinated.",
    body: paragraph([
      "You will see consistent faces at the bedside, in the gym, and at the nurses’ station—people who know your preferences and advocate for your comfort.",
      "We welcome questions. If you are unsure about a medication, therapy schedule, or next step in discharge planning, ask any team member and we will connect you with the right expert.",
    ]),
    ctaTitle: "Talk with our admissions team",
    ctaBody:
      "Share your situation and we will help you understand options, timelines, and what to expect.",
  },
  "about-us-location-community": {
    title: "Location & Community",
    description:
      "Medford Rehabilitation & Nursing Center is part of the Greater Boston community with convenient access for families.",
    heroTitle: "Location & Community",
    heroSubtitle: "Close to home for Medford, Somerville, Malden, and nearby towns.",
    intro:
      "We are proud to serve neighbors who need short-term rehabilitation after a hospital stay or long-term support with complex medical needs.",
    body: paragraph([
      "Local primary care practices, hospitals, and specialists know our team and trust our communication during transitions of care.",
      "Visitors will find clear signage, accessible entrances, and staff ready to help you find your loved one’s neighborhood within the building.",
    ]),
    ctaTitle: "Plan your visit",
    ctaBody: "Review visiting guidelines and parking information before you arrive.",
  },
  services: {
    title: "Services",
    description:
      "Skilled nursing, therapy, and specialized programs designed around each resident’s clinical and personal goals.",
    heroTitle: "Our Services",
    heroSubtitle: "Rehabilitation and long-term support under one roof.",
    intro:
      "Whether you need a few weeks of intensive therapy or ongoing nursing care, we build a plan that respects your pace and preferences.",
    body: paragraph([
      "Therapy services include physical, occupational, and speech therapy with modern equipment and private treatment spaces.",
      "Clinical specialties such as wound care, IV therapy, and post-surgical recovery are supported by experienced nursing leadership.",
    ]),
    ctaTitle: "Match services to your needs",
    ctaBody:
      "Request information and our team will outline what a typical stay could look like for your situation.",
  },
  "services-short-term-rehabilitation": {
    title: "Short-Term Rehabilitation",
    description:
      "Goal-driven rehab after surgery, injury, or illness with daily therapy and nursing oversight.",
    heroTitle: "Short-Term Rehabilitation",
    heroSubtitle: "Focused therapy to help you return home safely.",
    intro:
      "Our rehab program emphasizes mobility, strength, balance, and the real-life tasks you will manage at home.",
    body: paragraph([
      "Therapists collaborate with nurses and physicians to adjust your plan as you progress—never a one-size-fits-all pathway.",
      "Discharge planning begins on day one so equipment, home support, and follow-up appointments are lined up before you leave.",
    ]),
    ctaTitle: "Start with a clinical review",
    ctaBody:
      "Our admissions team can coordinate with your hospital case manager to streamline your transition.",
  },
  "services-long-term-care": {
    title: "Long-Term Care",
    description:
      "24-hour nursing care for residents who need ongoing medical support and assistance with daily activities.",
    heroTitle: "Long-Term Care",
    heroSubtitle: "Consistent, dignified support when living at home is no longer safe.",
    intro:
      "Long-term residents benefit from structured routines, engaging activities, and care plans that evolve with changing health needs.",
    body: paragraph([
      "We emphasize skin integrity, nutrition, fall prevention, and medication management with regular physician oversight.",
      "Families stay involved through care conferences, phone updates, and clear explanations of any changes in condition.",
    ]),
    ctaTitle: "Tour resident neighborhoods",
    ctaBody:
      "See dining, activities, and resident rooms to picture daily life for your loved one.",
  },
  "services-memory-care": {
    title: "Memory Care",
    description:
      "Secure, structured support for residents living with Alzheimer’s disease and other forms of dementia.",
    heroTitle: "Memory Care",
    heroSubtitle: "Predictable routines and trained staff who understand dementia.",
    intro:
      "Our memory care approach reduces anxiety with familiar cues, sensory-friendly activities, and consistent caregivers.",
    body: paragraph([
      "Families receive guidance on communication strategies and what to expect as needs change over time.",
      "Safety features, wander management, and thoughtful programming help residents experience engagement without overwhelm.",
    ]),
    ctaTitle: "Ask about memory support",
    ctaBody:
      "Speak with our team about assessments, secure areas, and family resources.",
  },
  "services-skilled-nursing": {
    title: "Skilled Nursing",
    description:
      "Clinical nursing services for complex medical needs, including wound care, IV therapy, and chronic disease management.",
    heroTitle: "Skilled Nursing",
    heroSubtitle: "Physician-directed care with nurses at the bedside around the clock.",
    intro:
      "Skilled nursing is the foundation of both short-term rehab and long-term residency at Medford.",
    body: paragraph([
      "We monitor vitals, labs, and medications closely while keeping families informed in plain language.",
      "Our team coordinates with specialists and hospitals when a higher level of care is needed.",
    ]),
    ctaTitle: "Discuss clinical needs",
    ctaBody:
      "Share your medical history and we will explain how we can support recovery or stabilization.",
  },
  "services-physical-therapy": {
    title: "Physical Therapy",
    description:
      "Restore mobility, endurance, and confidence with licensed physical therapists and modern rehab equipment.",
    heroTitle: "Physical Therapy",
    heroSubtitle: "From first steps to stairs—therapy that mirrors real life.",
    intro:
      "Physical therapy focuses on gait training, balance, pain management, and strength after surgery or illness.",
    body: paragraph([
      "We measure progress with standardized assessments so you can see how far you have come.",
      "Therapists partner with occupational therapy and speech when your goals overlap—such as safe transfers or swallowing precautions during exertion.",
    ]),
    ctaTitle: "Preview our therapy gym",
    ctaBody: "Schedule a tour to see equipment, treatment bays, and daily schedules.",
  },
  "services-occupational-therapy": {
    title: "Occupational Therapy",
    description:
      "Rebuild the everyday skills that matter most—dressing, bathing, meal preparation, and community mobility.",
    heroTitle: "Occupational Therapy",
    heroSubtitle: "Practice the tasks you will repeat at home.",
    intro:
      "Occupational therapists design sessions around your environment, cognitive needs, and adaptive equipment.",
    body: paragraph([
      "We simulate home tasks in our ADL kitchen and bathroom training areas when appropriate.",
      "Cognitive strategies help residents with memory or attention challenges participate safely in daily routines.",
    ]),
    ctaTitle: "Learn how OT fits your plan",
    ctaBody:
      "Admissions can explain how occupational therapy complements nursing and physical therapy.",
  },
  "services-speech-therapy": {
    title: "Speech Therapy",
    description:
      "Swallowing, voice, language, and cognitive-communication therapy from licensed speech-language pathologists.",
    heroTitle: "Speech Therapy",
    heroSubtitle: "Safer swallowing and clearer communication.",
    intro:
      "Speech therapy supports residents recovering from stroke, neurological conditions, or respiratory illness affecting voice and swallow.",
    body: paragraph([
      "We collaborate with dietary teams on texture-modified diets when needed for aspiration risk.",
      "Cognitive-linguistic exercises help residents follow multi-step directions and participate in conversations with family.",
    ]),
    ctaTitle: "Ask about swallow studies",
    ctaBody:
      "Our team can outline how referrals and bedside assessments typically work.",
  },
  "services-post-acute-care": {
    title: "Post-Acute Care",
    description:
      "Bridge the gap between hospital discharge and home with coordinated nursing, therapy, and medication management.",
    heroTitle: "Post-Acute Care",
    heroSubtitle: "Smooth transitions after a hospital stay.",
    intro:
      "Post-acute care is for patients who no longer need acute hospital services but are not yet ready to manage safely at home.",
    body: paragraph([
      "We align with your hospital discharge paperwork, reconcile medications, and watch for early warning signs of complications.",
      "Case management keeps your primary care physician and specialists in the loop.",
    ]),
    ctaTitle: "Coordinate your discharge",
    ctaBody:
      "Hospital case managers and families can call us to reserve a bed and confirm clinical acceptance.",
  },
  families: {
    title: "For Families",
    description:
      "Resources, communication expectations, and ways to stay connected with your loved one’s care team.",
    heroTitle: "For Families",
    heroSubtitle: "Partnership, transparency, and respect for your role in care.",
    intro:
      "We know distance, work schedules, and worry make healthcare stressful. Our team is trained to respond promptly and explain clearly.",
    body: paragraph([
      "Use this section to find visiting information, FAQs, and ways to send encouragement to residents.",
      "When something feels urgent, call the front desk—we are available around the clock.",
    ]),
    ctaTitle: "",
    ctaBody: "",
    hideCta: true,
    hideReturnLink: true,
  },
  "families-visiting-information": {
    title: "Visiting Information",
    description:
      "Hours, parking, entrance instructions, and tips for a smooth visit to Medford Rehabilitation & Nursing Center.",
    heroTitle: "Visiting Information",
    heroSubtitle: "We welcome families and friends who support our residents.",
    intro:
      "Consistent visitors help residents stay connected to community, faith, and family traditions.",
    body: paragraph([
      "Please check in at the front desk on arrival. Staff may screen for respiratory symptoms during peak illness season to protect vulnerable residents.",
      "Quiet hours and meal times are posted in each neighborhood—ask the charge nurse if you are unsure when to visit.",
    ]),
    ctaTitle: "Call before you visit",
    ctaBody:
      "If your loved one is in therapy or a procedure, we can suggest the best window to arrive.",
  },
  "families-faqs": {
    title: "FAQs",
    description:
      "Answers to common questions families ask before admission, during a stay, and around discharge.",
    heroTitle: "Family FAQs",
    heroSubtitle: "Straightforward answers—no jargon required.",
    intro:
      "If you do not see your question here, contact us and we will connect you with the right department.",
    body: paragraph([
      "Insurance and benefits questions are best handled with our admissions and business office so we can review your specific policy details.",
      "Care conferences can be scheduled with nursing and therapy so everyone hears the same plan at the same time.",
    ]),
    ctaTitle: "Still have questions?",
    ctaBody: "Request a call from admissions or nursing leadership.",
  },
  admissions: {
    title: "Admissions",
    description:
      "How to begin a stay at Medford Rehabilitation & Nursing Center—from referral to move-in day.",
    heroTitle: "Admissions",
    heroSubtitle: "A guided process with a single point of contact.",
    intro:
      "Our admissions team works with hospitals, physicians, and families to confirm clinical fit, benefits, and paperwork.",
    body: paragraph([
      "We review diagnoses, therapy needs, and insurance authorization so there are fewer surprises at admission.",
      "On arrival, expect a warm greeting, a room orientation, and introductions to your nursing and therapy partners.",
    ]),
    ctaTitle: "Request information",
    ctaBody:
      "Share a few details about your situation and we will follow up with next steps.",
  },
  "admissions-request-information": {
    title: "Request Information",
    description:
      "Tell us about your needs and our admissions team will respond with options, timelines, and paperwork guidance.",
    heroTitle: "Request Information",
    heroSubtitle: "No pressure—just clear answers.",
    intro:
      "Whether you are planning ahead or responding to a hospital discharge today, we can outline what a stay might look like.",
    body: paragraph([
      "Helpful details include diagnosis, recent hospitalization dates, insurance carrier, and whether you need rehab or long-term placement.",
      "We will explain room options, visiting policies, and what to bring on day one.",
    ]),
    ctaTitle: "Prefer to talk?",
    ctaBody: `Call us at the number in the header—we answer 24/7 for urgent placement questions.`,
  },
  "admissions-schedule-a-tour": {
    title: "Schedule a Tour",
    description:
      "Book a walkthrough of Medford Rehabilitation & Nursing Center with a member of our leadership team.",
    heroTitle: "Schedule a Tour",
    heroSubtitle: "See therapy spaces, dining, and resident rooms firsthand.",
    intro:
      "Tours typically take 30–45 minutes and can include time with nursing or therapy if you have clinical questions.",
    body: paragraph([
      "We recommend bringing a list of medications, insurance cards, and any paperwork from a recent hospitalization.",
      "If you cannot visit in person, ask about a virtual introduction and packet of photos and floor plans.",
    ]),
    ctaTitle: "Use the main CTA anytime",
    ctaBody:
      "The Schedule a Tour button in the header is the fastest way to reach our team.",
  },
  careers: {
    title: "Careers",
    description:
      "Join a team that values clinical skill, compassion, and professional growth at Medford Rehabilitation & Nursing Center.",
    heroTitle: "Careers",
    heroSubtitle: "Make a measurable difference in residents’ lives every shift.",
    intro:
      "We hire nurses, therapists, CNAs, dietary staff, housekeeping, activities professionals, and administrative roles.",
    body: paragraph([
      "Benefits and schedules vary by position—our HR team can share current openings and orientation expectations.",
      "This demo site does not accept applications online; in production, you would link to an ATS or careers email here.",
    ]),
    ctaTitle: "Contact human resources",
    ctaBody:
      "Reach out through our main phone line and ask for the talent acquisition mailbox.",
  },
  contact: {
    title: "Contact",
    description:
      "Phone, email, and mailing information for Medford Rehabilitation & Nursing Center.",
    heroTitle: "Contact Us",
    heroSubtitle: "We are here to help—day or night.",
    intro:
      "For clinical updates about a current resident, please call the nurses’ station or front desk rather than using email.",
    body: paragraph([
      "Admissions and billing have dedicated extensions in a production environment; this demo lists general contact details only.",
      "We respond to non-urgent messages within one business day whenever possible.",
    ]),
    ctaTitle: "Send a message (demo)",
    ctaBody:
      "Production sites might embed a form here; for this demo, please call or visit during business hours.",
  },
  "privacy-policy": {
    title: "Privacy Policy",
    description:
      "Privacy policy for Medford Rehabilitation & Nursing Center.",
    heroTitle: "Privacy Policy",
    heroSubtitle: "",
    intro: "",
    body: paragraph([]),
    ctaTitle: "",
    ctaBody: "",
  },
  "terms-of-service": {
    title: "Terms of Service",
    description:
      "Terms of service for Medford Rehabilitation & Nursing Center.",
    heroTitle: "Terms of Service",
    heroSubtitle: "",
    intro: "",
    body: paragraph([]),
    ctaTitle: "",
    ctaBody: "",
  },
  accessibility: {
    title: "Accessibility",
    description:
      "Accessibility information for Medford Rehabilitation & Nursing Center.",
    heroTitle: "Accessibility",
    heroSubtitle: "",
    intro: "",
    body: paragraph([]),
    ctaTitle: "",
    ctaBody: "",
  },
} satisfies Record<string, InternalPageCopy>;
