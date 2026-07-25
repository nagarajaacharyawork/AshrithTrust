import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, ArrowRight, Clock, Building2 } from "lucide-react";
import campusAerial from "@/assets/College_Image.JPG";
import { PageHero } from "@/components/site/chrome";
import { Reveal, SectionMark } from "@/components/site/primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Admissions — Ashrith Group of Institutions" },
      {
        name: "description",
        content:
          "Speak to admissions, find department contacts, office timings and directions to Ashrith Group of Institutions.",
      },
      { property: "og:title", content: "Contact & Admissions — Ashrith" },
      { property: "og:description", content: "Admission enquiries, department contacts, office timings and directions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        kicker="v · Contact"
        title="Speak to"
        italic="admissions,"
        tail="or simply visit."
        lede="Whether you want to enquire about a programme, request a prospectus or arrange a campus visit — our admissions office is happy to help."
        image={campusAerial}
        crumbs={[{ l: "Home", to: "/" }, { l: "Contact" }]}
      />

      <ContactBlock />
      <Departments />
      <MapBlock />
      <FAQBlock />
    </>
  );
}

function ContactBlock() {
  const [sent, setSent] = useState(false);
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="container-x grid grid-cols-12 gap-10 lg:gap-16">
        <div className="col-span-12 lg:col-span-5">
          <Reveal>
            <SectionMark n="01" label="Admissions Office" />
            <h2 className="mt-8 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,4.5vw,3.5rem)] text-ink">
              Reach us
              <br />
              <span className="italic font-light text-primary">directly.</span>
            </h2>
          </Reveal>
          <div className="mt-10 space-y-8">
            {[
              { icon: MapPin, label: "Campus", value: "Ashrith Group of Institutions,\nKarnataka, India" },
              { icon: Phone, label: "Phone", value: "+91 00000 00000" },
              { icon: Mail, label: "Email", value: "admissions@ashrithtrust.org" },
              { icon: Clock, label: "Office Hours", value: "Mon – Sat · 9:00 AM – 5:00 PM" },
            ].map(({ icon: Icon, label, value }) => (
              <Reveal key={label}>
                <div className="grid grid-cols-[auto_1fr] gap-5 border-b border-border pb-8">
                  <Icon className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{label}</div>
                    <div className="mt-2 font-display font-semibold text-lg text-ink whitespace-pre-line leading-snug">{value}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <Reveal delay={100}>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="bg-white p-8 lg:p-12 border border-border shadow-soft"
            >
              <div className="text-[10px] uppercase tracking-[0.32em] text-accent font-semibold">Admission Enquiry</div>
              <h3 className="mt-4 font-display font-black text-3xl lg:text-4xl text-ink tracking-[-0.02em] leading-tight">
                Tell us about you.
              </h3>

              <div className="mt-10 grid md:grid-cols-2 gap-6">
                <Field label="Full name" name="name" />
                <Field label="Phone" name="phone" type="tel" />
                <Field label="Email" name="email" type="email" />
                <Field label="Programme of interest" name="programme" />
              </div>
              <div className="mt-6">
                <Field label="Message" name="message" textarea />
              </div>

              <button
                type="submit"
                className="mt-10 inline-flex items-center gap-3 bg-ink text-white px-8 py-4 font-semibold text-[12px] uppercase tracking-[0.24em] hover:bg-accent transition"
              >
                {sent ? "Enquiry received" : "Submit Enquiry"} <Send className="h-4 w-4" />
              </button>
              {sent && (
                <p className="mt-4 text-sm text-success">Thank you — our admissions team will be in touch shortly.</p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", textarea = false,
}: { label: string; name: string; type?: string; textarea?: boolean }) {
  return (
    <label className="block group">
      <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          className="mt-3 w-full bg-transparent border-b-2 border-border py-3 text-[15px] text-ink outline-none focus:border-accent transition resize-none"
        />
      ) : (
        <input
          name={name}
          type={type}
          className="mt-3 w-full bg-transparent border-b-2 border-border py-3 text-[15px] text-ink outline-none focus:border-accent transition"
        />
      )}
    </label>
  );
}

function Departments() {
  const list = [
    { t: "Nursing College", p: "+91 00000 00001", e: "nursing@ashrithtrust.org" },
    { t: "Paramedical Sciences", p: "+91 00000 00002", e: "paramedical@ashrithtrust.org" },
    { t: "Pre-University College", p: "+91 00000 00003", e: "pu@ashrithtrust.org" },
    { t: "Hostel & Transport", p: "+91 00000 00004", e: "hostel@ashrithtrust.org" },
    { t: "Accounts", p: "+91 00000 00005", e: "accounts@ashrithtrust.org" },
    { t: "Administration", p: "+91 00000 00006", e: "office@ashrithtrust.org" },
  ];
  return (
    <section className="bg-primary-soft/30 py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <SectionMark n="02" label="Department Contacts" />
          <h2 className="mt-8 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,4.5vw,3.5rem)] text-ink max-w-3xl">
            The right desk,
            <span className="italic font-light text-primary"> the first time.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-2">
          {list.map((d, i) => (
            <Reveal key={d.t} delay={i * 50}>
              <div className="py-8 border-t border-ink/10">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  <Building2 className="h-3.5 w-3.5" /> Department
                </div>
                <div className="mt-3 font-display font-bold text-xl text-ink">{d.t}</div>
                <div className="mt-4 text-[14px] text-muted-foreground">{d.p}</div>
                <a href={`mailto:${d.e}`} className="mt-1 block text-[14px] text-primary hover:text-accent transition">{d.e}</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MapBlock() {
  return (
    <section className="relative bg-background">
      <div className="container-x pt-24 lg:pt-32 pb-16">
        <div className="grid grid-cols-12 gap-10 items-end">
          <div className="col-span-12 lg:col-span-8">
            <SectionMark n="03" label="Directions" />
            <h2 className="mt-8 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,4.5vw,3.5rem)] text-ink">
              Find us on
              <span className="italic font-light text-primary"> the map.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 text-right">
            <a
              href="https://maps.google.com/?q=Karnataka+India"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold text-[12px] uppercase tracking-[0.24em] border-b border-primary/30 pb-1 hover:text-accent hover:border-accent transition"
            >
              Open in Google Maps <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full aspect-[16/7] bg-primary-soft">
        <iframe
          title="Campus location"
          src="https://www.google.com/maps?q=Karnataka+India&output=embed"
          className="w-full h-full border-0 grayscale contrast-[1.05]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

function FAQBlock() {
  const faqs = [
    { q: "When do admissions open?", a: "Applications for the coming academic year open in March. Enquiries are welcome year-round." },
    { q: "Are hostels available?", a: "Yes — separate residential hostels are available for men and women with warden supervision." },
    { q: "Do you provide transport?", a: "Yes, dedicated buses operate on multiple routes across town and neighbouring areas." },
    { q: "Are scholarships offered?", a: "Merit-based and government scholarships are available. Please speak to the admissions office for details." },
  ];
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="container-x grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-4">
          <SectionMark n="04" label="Frequently Asked" />
          <h2 className="mt-8 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,4vw,3rem)] text-ink">
            Answers to
            <span className="italic font-light text-primary"> common questions.</span>
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <div className="border-t border-border">
            {faqs.map((f, i) => (
              <details key={f.q} className="group border-b border-border py-6">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                  <div className="flex gap-6">
                    <span className="font-mono text-sm text-accent">0{i + 1}</span>
                    <span className="font-display font-bold text-lg lg:text-xl text-ink">{f.q}</span>
                  </div>
                  <span className="text-primary text-2xl leading-none group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-4 pl-11 text-[15px] text-muted-foreground leading-[1.9] max-w-2xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
