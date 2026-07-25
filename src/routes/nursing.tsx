import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Hospital,
  Microscope,
  Users,
  Award,
  FlaskConical,
  Heart,
  Stethoscope,
} from "lucide-react";
import nursingImg from "@/assets/medical-teaching.JPG";
import libraryImg from "@/assets/Lab-teaching.JPG";
import student1 from "@/assets/studentsatclass.JPG";
import leader3 from "@/assets/teachingatclass.JPG";
import campusAerial from "@/assets/College_Image.JPG";
import { PageHero } from "@/components/site/chrome";
import { Reveal, SectionMark, Counter } from "@/components/site/primitives";


export const Route = createFileRoute("/nursing")({
  head: () => ({
    meta: [
      { title: "Ashrith College & School of Nursing | B.Sc · GNM · ANM" },
      {
        name: "description",
        content:
          "Ashrith College & School of Nursing offers B.Sc, GNM and ANM programmes with structured clinical postings, modern simulation labs and experienced faculty.",
      },
      { property: "og:title", content: "Ashrith College & School of Nursing" },
      {
        property: "og:description",
        content:
          "B.Sc Nursing, GNM and ANM programmes at Ashrith — clinical rigor, compassionate care, real patient exposure.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NursingPage,
});

function NursingPage() {
  return (
    <>
      <PageHero
        kicker="i · Nursing"
        title="Ashrith College"
        italic="& School of"
        tail="Nursing."
        lede="Home to our B.Sc Nursing, GNM and ANM programmes. A curriculum built around structured clinical postings across partner multi-specialty hospitals, modern simulation labs, and a faculty of senior clinicians."
        image={nursingImg}
        crumbs={[
          { l: "Home", to: "/" },
          { l: "Nursing" },
        ]}
      />

      <About />
      <Programmes />
      <Facilities />
      <Clinical />
      <Faculty />
      <Admissions />
      <ContactCTA />
    </>
  );
}

function About() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="container-x grid grid-cols-12 gap-10 lg:gap-16">
        <div className="col-span-12 lg:col-span-7">
          <Reveal>
            <SectionMark n="01" label="About the College" />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-8 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2.25rem,5vw,4rem)] text-ink">
              Nursing, taught as
              <br />
              <span className="italic font-light text-primary">the vocation it is.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 grid md:grid-cols-2 gap-10 max-w-3xl">
              <p className="text-[15px] text-muted-foreground leading-[1.9]">
                Established in the founding year of the trust, Ashrith College &amp; School of
                Nursing prepares students for the ward, the ICU and the community — with
                equal seriousness given to clinical judgement and human compassion.
              </p>
              <p className="text-[15px] text-muted-foreground leading-[1.9]">
                Small cohorts, senior clinicians as mentors, and a genuine partnership with
                multi-specialty hospitals mean every student walks into a ward on day one
                knowing exactly what to do.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <Reveal delay={150}>
            <div className="relative">
              <img
                src={libraryImg}
                alt="Nursing college library"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 right-0 bg-primary text-primary-foreground p-6 max-w-[240px]">
                <div className="text-[10px] uppercase tracking-[0.3em] text-accent">
                  Since 2009
                </div>
                <div className="mt-2 font-display font-bold text-xl leading-tight">
                  Fifteen years of nursing education, uninterrupted.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Programmes() {
  const list = [
    {
      title: "B.Sc Nursing",
      dur: "4 Years",
      elig: "10+2 PCB · 45%",
      d: "Under-graduate degree preparing students for hospital, community and specialist nursing.",
    },
    {
      title: "GNM — General Nursing & Midwifery",
      dur: "3 Years",
      elig: "10+2 · 40%",
      d: "Diploma programme with strong midwifery and community health emphasis.",
    },
    {
      title: "ANM — Auxiliary Nurse Midwifery",
      dur: "2 Years",
      elig: "10+2",
      d: "Foundational diploma for community health worker and rural nursing roles.",
    },
  ];
  return (
    <section className="bg-primary-soft/30 py-24 lg:py-32">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-10 mb-16 items-end">
          <div className="col-span-12 lg:col-span-8">
            <Reveal>
              <SectionMark n="02" label="Programmes" />
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-8 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,4.5vw,3.75rem)] text-ink">
                Three programmes.
                <br />
                <span className="italic font-light text-primary">One standard of care.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <div className="border-y-2 border-ink">
            <div className="hidden md:grid grid-cols-[80px_1fr_180px_240px_120px] gap-6 py-4 text-[10px] uppercase tracking-[0.28em] text-muted-foreground border-b border-border">
              <div>№</div>
              <div>Programme</div>
              <div>Duration</div>
              <div>Eligibility</div>
              <div className="text-right">Apply</div>
            </div>
            {list.map((c, i) => (
              <div
                key={c.title}
                className="grid grid-cols-2 md:grid-cols-[80px_1fr_180px_240px_120px] gap-4 md:gap-6 py-8 border-b border-border items-center group hover:bg-white/60 transition"
              >
                <div className="font-mono text-sm text-accent">0{i + 1}</div>
                <div>
                  <div className="font-display font-bold text-lg lg:text-xl text-ink group-hover:text-primary transition">
                    {c.title}
                  </div>
                  <div className="mt-2 text-[13px] text-muted-foreground max-w-lg leading-relaxed">
                    {c.d}
                  </div>
                </div>
                <div className="text-sm text-foreground">{c.dur}</div>
                <div className="text-sm text-muted-foreground col-span-2 md:col-span-1">
                  {c.elig}
                </div>
                <Link
                  to="/contact"
                  className="justify-self-end inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] font-semibold text-primary hover:text-accent transition"
                >
                  Apply <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Facilities() {
  const items = [
    { icon: FlaskConical, t: "Simulation Labs", d: "Manikins, skill stations and OSCE-ready rehearsal spaces." },
    { icon: Microscope, t: "Anatomy & Physiology Labs", d: "Cadaveric specimens and modern audio-visual dissection setups." },
    { icon: Hospital, t: "Teaching Hospital Ties", d: "Structured rotations across partnered multi-specialty hospitals." },
    { icon: Heart, t: "Community Health Field", d: "Rural and urban field postings for public-health experience." },
    { icon: Users, t: "Tutorial Rooms", d: "Small-group tutorial spaces for clinical case discussion." },
    { icon: Award, t: "Examination Cell", d: "Dedicated cell coordinating internal and university evaluations." },
  ];
  return (
    <section className="bg-ink text-white py-24 lg:py-32">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-10 mb-14">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.32em] text-white/50">
              <span className="text-accent font-semibold">03</span>
              <span className="h-px w-10 bg-white/25" />
              <span>Facilities · Infrastructure</span>
            </div>
            <h2 className="mt-8 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,4.5vw,3.75rem)]">
              Infrastructure built
              <br />
              <span className="italic font-light text-accent">for the ward.</span>
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-2">
          {items.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 60}>
              <div className="py-8 border-t border-white/10 flex items-start gap-5">
                <Icon className="h-6 w-6 text-accent shrink-0 mt-1" />
                <div className="min-w-0">
                  <div className="font-display font-bold text-xl">{t}</div>
                  <div className="mt-2 text-[14px] text-white/60 leading-relaxed">{d}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clinical() {
  const stats = [
    { n: 2500, s: "+", l: "Clinical hours / year" },
    { n: 8, s: "+", l: "Partner hospitals" },
    { n: 12, s: "+", l: "Specialty departments" },
    { n: 95, s: "%", l: "First-attempt licensure pass" },
  ];
  return (
    <section className="relative bg-background py-24 lg:py-32">
      <div className="container-x grid grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
          <Reveal>
            <SectionMark n="04" label="Clinical Training" />
            <h2 className="mt-8 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,4.5vw,3.75rem)] text-ink">
              The ward is
              <br />
              <span className="italic font-light text-primary">the real classroom.</span>
            </h2>
            <p className="mt-8 text-[15px] text-muted-foreground leading-[1.9] max-w-lg">
              From second year, students rotate through medicine, surgery, obstetrics,
              paediatrics, psychiatry and community postings — always under the direct
              supervision of a clinical instructor.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-8">
            {stats.map((it) => (
              <Reveal key={it.l}>
                <div className="border-t-2 border-accent pt-5">
                  <div className="font-display font-black text-4xl text-ink tracking-[-0.02em]">
                    <Counter to={it.n} suffix={it.s} />
                  </div>
                  <div className="mt-3 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                    {it.l}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
          <Reveal delay={150}>
            <img
              src={student1}
              alt="Clinical training"
              className="w-full aspect-[4/5] object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Faculty() {
  return (
    <section className="bg-primary-soft/30 py-24 lg:py-32">
      <div className="container-x grid grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="col-span-12 lg:col-span-5">
          <Reveal>
            <img
              src={leader3}
              alt="Principal, Ashrith College of Nursing"
              className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition duration-[1500ms]"
              loading="lazy"
            />
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <Reveal delay={100}>
            <SectionMark n="05" label="Faculty · The Principal" />
            <h2 className="mt-8 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,4.5vw,3.5rem)] text-ink">
              Taught by clinicians
              <br />
              <span className="italic font-light text-primary">who still practise.</span>
            </h2>
            <p className="mt-8 text-[15px] text-muted-foreground leading-[1.9] max-w-xl">
              Our faculty is drawn from active clinicians and senior nurse educators —
              a body that keeps the curriculum tethered to the realities of contemporary
              hospital practice. Every classroom leads back to the ward.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 text-primary font-semibold text-[12px] uppercase tracking-[0.24em] border-b border-primary/30 pb-1 hover:text-accent hover:border-accent transition"
            >
              Speak to Admissions <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Admissions() {
  return (
    <section className="relative bg-background py-24 lg:py-32">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-10">
          <Reveal className="col-span-12 lg:col-span-5">
            <SectionMark n="06" label="Admissions" />
            <h2 className="mt-8 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,4.5vw,3.5rem)] text-ink">
              Applications
              <br />
              <span className="italic font-light text-primary">open for 2026.</span>
            </h2>
          </Reveal>
          <div className="col-span-12 lg:col-span-7">
            <ol className="divide-y divide-border border-y border-border">
              {[
                { t: "Enquire", d: "Submit an enquiry form or call the admissions office." },
                { t: "Prospectus & Application", d: "Receive the prospectus and complete the application form with required documents." },
                { t: "Counselling", d: "Attend counselling with our academic team to choose the right programme." },
                { t: "Provisional Admission", d: "On confirmation of eligibility and fees, a provisional admission letter is issued." },
              ].map((s, i) => (
                <Reveal key={s.t} delay={i * 60}>
                  <li className="grid grid-cols-[auto_1fr] gap-6 py-8">
                    <div className="text-accent font-mono text-sm">0{i + 1}</div>
                    <div>
                      <div className="font-display font-bold text-2xl text-ink">{s.t}</div>
                      <div className="mt-2 text-[14px] text-muted-foreground leading-relaxed max-w-lg">
                        {s.d}
                      </div>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="relative min-h-[50vh] flex items-center bg-ink text-white overflow-hidden">
      <img
        src={campusAerial}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
      <div className="container-x relative py-20 lg:py-28 grid grid-cols-12 gap-10 items-center">
        <div className="col-span-12 lg:col-span-8">
          <div className="text-[11px] uppercase tracking-[0.4em] text-accent font-semibold">
            <Stethoscope className="h-4 w-4 inline mr-2 -mt-1" />
            Nursing · Admissions
          </div>
          <h2 className="mt-6 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,5vw,4rem)]">
            Begin your journey
            <br />
            <span className="italic font-light text-white/85">into nursing.</span>
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Link
            to="/contact"
            className="w-full inline-flex items-center justify-between gap-2 bg-accent text-white px-7 py-5 font-semibold text-[12px] uppercase tracking-[0.24em] hover:bg-white hover:text-ink transition"
          >
            Enquire Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
