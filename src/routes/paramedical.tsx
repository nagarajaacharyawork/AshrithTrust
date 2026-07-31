import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, FlaskConical, Microscope, Hospital, Award } from "lucide-react";
import paramedicalImg from "@/assets/Lab-teaching.JPG";
import libraryImg from "@/assets/lab02.JPG";
import campusAerial from "@/assets/College_Image.JPG";
import { PageHero } from "@/components/site/chrome";
import { Reveal, SectionMark, Counter } from "@/components/site/primitives";

export const Route = createFileRoute("/paramedical")({
  head: () => ({
    meta: [
      { title: "K.R. Hegde College of Paramedical Sciences" },
      {
        name: "description",
        content:
          "Diploma and degree programmes in medical lab technology, radiography, operation theatre, dialysis and more — with real hospital lab exposure.",
      },
      { property: "og:title", content: "K.R. Hegde College of Paramedical Sciences" },
      {
        property: "og:description",
        content:
          "MLT, DMRT, OT, Dialysis and allied paramedical programmes with genuine hospital-lab training.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ParamedicalPage,
});

function ParamedicalPage() {
  return (
    <>
      <PageHero
        kicker="ii · Paramedical"
        title="K.R. Hegde"
        italic="College of"
        tail="Paramedical Sciences."
        lede="Diploma programmes in Medical Laboratory Technology, Operation Theatre Technology, Ophthalmic Technology and Dialysis Technology — taught with the diagnostic seriousness the hospital lab demands."
        image={paramedicalImg}
        crumbs={[{ l: "Home", to: "/" }, { l: "Paramedical" }]}
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="container-x grid grid-cols-12 gap-10 lg:gap-16">
          <div className="col-span-12 lg:col-span-7">
            <Reveal><SectionMark n="01" label="About" /></Reveal>
            <Reveal delay={100}>
              <h2 className="mt-8 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2.25rem,5vw,4rem)] text-ink">
                Behind every diagnosis,
                <br />
                <span className="italic font-light text-primary">a trained hand.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-10 text-[15px] text-muted-foreground leading-[1.9] max-w-2xl">
                K. R. Hegde College of Paramedical Sciences prepares technologists
                who anchor modern clinical practice — from the pathology bench to the
                operation theatre. Programmes combine rigorous theory with genuine
                hospital-lab immersion at Vinaya Hospital and affiliated centres.
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <Reveal delay={150}>
              <img src={libraryImg} alt="" className="w-full aspect-[4/5] object-cover" loading="lazy" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-primary-soft/30 py-24 lg:py-32">
        <div className="container-x">
          <Reveal>
            <SectionMark n="02" label="Programmes · Departments" />
            <h2 className="mt-8 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,4.5vw,3.75rem)] text-ink max-w-3xl">
              Four programmes.
              <span className="italic font-light text-primary"> One diagnostic standard.</span>
            </h2>
          </Reveal>

          <div className="mt-16 border-y-2 border-ink">
            {[
              { t: "DMLT — Diploma in Medical Laboratory Technology", d: "Diagnostic pathology, biochemistry, microbiology and haematology. Hands-on hospital lab rotations.", dur: "2 Years" },
              { t: "DOTT — Diploma in Operation Theatre Technology", d: "Peri-operative technique, sterilisation, instrument handling and OT assistance.", dur: "2 Years" },
              { t: "DOT — Diploma in Ophthalmic Technology", d: "Ophthalmic instruments, refraction, tonometry and assisting in eye surgeries.", dur: "2 Years" },
              { t: "DDT — Diploma in Dialysis Technology", d: "Nephrology unit workflow, dialysis machine setup and patient care.", dur: "2 Years" },
            ].map((c, i) => (
              <div key={c.t} className="grid grid-cols-2 md:grid-cols-[80px_1fr_180px_120px] gap-4 md:gap-6 py-8 border-b border-border items-center group hover:bg-white/60 transition">
                <div className="font-mono text-sm text-accent">0{i + 1}</div>
                <div>
                  <div className="font-display font-bold text-lg lg:text-xl text-ink group-hover:text-primary transition">{c.t}</div>
                  <div className="mt-2 text-[13px] text-muted-foreground max-w-lg leading-relaxed">{c.d}</div>
                </div>
                <div className="text-sm text-foreground">{c.dur}</div>
                <Link to="/contact" className="justify-self-end inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] font-semibold text-primary hover:text-accent transition">
                  Apply <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white py-24 lg:py-32">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-10 mb-14">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.32em] text-white/50">
                <span className="text-accent font-semibold">03</span>
                <span className="h-px w-10 bg-white/25" />
                <span>Laboratories · Clinical Facilities</span>
              </div>
              <h2 className="mt-8 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,4.5vw,3.75rem)]">
                Every lab is
                <br />
                <span className="italic font-light text-accent">a working lab.</span>
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-14 gap-y-2">
            {[
              { icon: FlaskConical, t: "Pathology & Biochemistry Lab" },
              { icon: Microscope, t: "Microbiology & Serology Lab" },
              { icon: Hospital, t: "Vinaya Hospital Rotations" },
              { icon: Award, t: "Dialysis Unit Training" },
            ].map(({ icon: Icon, t }, i) => (
              <Reveal key={t} delay={i * 60}>
                <div className="py-8 border-t border-white/10 flex items-start gap-4">
                  <Icon className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div className="font-display font-bold text-lg leading-tight">{t}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <div className="container-x grid grid-cols-12 gap-10 items-center">
          <div className="col-span-12 lg:col-span-6">
            <Reveal>
              <SectionMark n="04" label="Placements" />
              <h2 className="mt-8 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,4.5vw,3.5rem)] text-ink">
                Employable
                <br />
                <span className="italic font-light text-primary">from graduation day.</span>
              </h2>
              <p className="mt-8 text-[15px] text-muted-foreground leading-[1.9] max-w-lg">
                Our placement cell maintains long-standing relationships with hospitals,
                diagnostic chains and independent laboratories across South India.
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-8">
            {[
              { n: 92, s: "%", l: "Placed within 6 months" },
              { n: 30, s: "+", l: "Recruiting partners" },
              { n: 15, s: "K", l: "Starting salary (₹)" },
              { n: 100, s: "%", l: "Internship placement" },
            ].map((it) => (
              <Reveal key={it.l}>
                <div className="border-t-2 border-accent pt-5">
                  <div className="font-display font-black text-4xl text-ink tracking-[-0.02em]">
                    <Counter to={it.n} suffix={it.s} />
                  </div>
                  <div className="mt-3 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{it.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[50vh] flex items-center bg-ink text-white overflow-hidden">
        <img src={campusAerial} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
        <div className="container-x relative py-20 lg:py-28 grid grid-cols-12 gap-10 items-center">
          <div className="col-span-12 lg:col-span-8">
            <div className="text-[11px] uppercase tracking-[0.4em] text-accent font-semibold">Paramedical · Admissions</div>
            <h2 className="mt-6 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,5vw,4rem)]">
              Applications open
              <br />
              <span className="italic font-light text-white/85">for 2026.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <Link to="/contact" className="w-full inline-flex items-center justify-between gap-2 bg-accent text-white px-7 py-5 font-semibold text-[12px] uppercase tracking-[0.24em] hover:bg-white hover:text-ink transition">
              Enquire Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
