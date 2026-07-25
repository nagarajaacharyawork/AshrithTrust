import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bus, Wifi, Dumbbell, Library, Home as HomeIcon, FlaskConical } from "lucide-react";
import campusAerial from "@/assets/entrence-lordphoto.JPG";
import libraryImg from "@/assets/Lab.JPG";
import heroCampus from "@/assets/College_Image.JPG";
import student1 from "@/assets/studentsatclass.JPG";
import nursingImg from "@/assets/medical-teaching.JPG";
import paramedicalImg from "@/assets/lab02.JPG";
import puImg from "@/assets/Classroom.JPG";
import { PageHero } from "@/components/site/chrome";
import { Reveal, SectionMark, Counter } from "@/components/site/primitives";

export const Route = createFileRoute("/campus")({
  head: () => ({
    meta: [
      { title: "Campus & Facilities — Ashrith Group of Institutions" },
      {
        name: "description",
        content:
          "Hostels, library, sports, transport and modern laboratories set within a purpose-built campus that supports professional healthcare education.",
      },
      { property: "og:title", content: "Campus & Facilities — Ashrith" },
      {
        property: "og:description",
        content:
          "A purpose-built campus with hostels, transport, sports and modern laboratories.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CampusPage,
});

function CampusPage() {
  return (
    <>
      <PageHero
        kicker="iii · Campus"
        title="An architecture"
        italic="that quietly"
        tail="teaches."
        lede="Our campus is planned around study, rest and clinical rehearsal — from residential hostels and a serious library to the labs and quiet courtyards that make professional education possible."
        image={campusAerial}
        crumbs={[{ l: "Home", to: "/" }, { l: "Campus" }]}
      />

      {/* Life on campus — editorial split */}
      <section className="bg-background py-24 lg:py-32">
        <div className="container-x grid grid-cols-12 gap-10 lg:gap-16">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <SectionMark n="01" label="Campus Life" />
              <h2 className="mt-8 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,4.5vw,3.75rem)] text-ink">
                A day here
                <br />
                <span className="italic font-light text-primary">has a rhythm.</span>
              </h2>
              <p className="mt-8 text-[15px] text-muted-foreground leading-[1.9] max-w-md">
                Mornings begin with clinical postings, the library holds the afternoon,
                and evenings belong to sport, cultural clubs and quiet study in the
                hostels. It is a life designed to make healthcare education sustainable.
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-7 grid grid-cols-6 gap-3">
            <Reveal className="col-span-6"><img src={heroCampus} alt="" className="w-full aspect-[16/9] object-cover" loading="lazy" /></Reveal>
            <Reveal className="col-span-3" delay={100}><img src={libraryImg} alt="" className="w-full aspect-[4/5] object-cover" loading="lazy" /></Reveal>
            <Reveal className="col-span-3" delay={180}><img src={student1} alt="" className="w-full aspect-[4/5] object-cover" loading="lazy" /></Reveal>
          </div>
        </div>
      </section>

      {/* Facilities editorial index */}
      <section className="bg-primary-soft/30 py-24 lg:py-32">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-10 mb-14">
            <div className="col-span-12 lg:col-span-8">
              <Reveal><SectionMark n="02" label="Infrastructure · Facilities" /></Reveal>
              <Reveal delay={100}>
                <h2 className="mt-8 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,4.5vw,3.75rem)] text-ink">
                  The buildings
                  <br />
                  <span className="italic font-light text-primary">do their share of the teaching.</span>
                </h2>
              </Reveal>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-2">
            {[
              { icon: HomeIcon, t: "Hostels", d: "Separate residential hostels for men and women with warden supervision." },
              { icon: Bus, t: "Transport", d: "Dedicated bus routes across town and neighbouring areas." },
              { icon: Library, t: "Library", d: "Reference sections, current journals and dedicated reading rooms." },
              { icon: FlaskConical, t: "Laboratories", d: "Simulation, anatomy, pathology and radiography labs." },
              { icon: Dumbbell, t: "Sports & Recreation", d: "Indoor games, outdoor courts and an active gymnasium." },
              { icon: Wifi, t: "Connected Campus", d: "Wi-fi enabled classrooms, hostels and study zones." },
            ].map(({ icon: Icon, t, d }, i) => (
              <Reveal key={t} delay={i * 50}>
                <div className="py-8 border-t border-ink/10 flex items-start gap-5">
                  <Icon className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div className="min-w-0">
                    <div className="font-display font-bold text-xl text-ink">{t}</div>
                    <div className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{d}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed campus photograph with overlay lede */}
      <section className="relative min-h-[80vh] bg-ink text-white overflow-hidden flex items-end">
        <img src={heroCampus} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <div className="container-x relative py-20 lg:py-28 grid grid-cols-12 gap-10 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="text-[11px] uppercase tracking-[0.4em] text-accent font-semibold">Virtual Tour</div>
            <h2 className="mt-6 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,5vw,4rem)]">
              See the campus
              <br />
              <span className="italic font-light text-white/85">before you arrive.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <Link to="/contact" className="w-full inline-flex items-center justify-between gap-2 bg-accent text-white px-7 py-5 font-semibold text-[12px] uppercase tracking-[0.24em] hover:bg-white hover:text-ink transition">
              Schedule a visit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-background py-20 lg:py-24 border-b border-border">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: 14, s: " acres", l: "Purpose-built campus" },
            { n: 6, s: "+", l: "Academic blocks" },
            { n: 2, s: "", l: "Residential hostels" },
            { n: 8, s: "+", l: "Modern laboratories" },
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
      </section>

      {/* Campus gallery grid */}
      <section className="bg-background py-24 lg:py-32">
        <div className="container-x">
          <div className="mb-12">
            <Reveal><SectionMark n="03" label="Campus Gallery" /></Reveal>
            <Reveal delay={100}>
              <h2 className="mt-8 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,4.5vw,3.5rem)] text-ink">
                Frames from
                <span className="italic font-light text-primary"> our year.</span>
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-12 gap-3">
            <img src={nursingImg} alt="" className="col-span-12 md:col-span-8 aspect-[16/10] object-cover" loading="lazy" />
            <img src={paramedicalImg} alt="" className="col-span-12 md:col-span-4 aspect-[4/5] object-cover" loading="lazy" />
            <img src={puImg} alt="" className="col-span-6 md:col-span-4 aspect-[4/5] object-cover" loading="lazy" />
            <img src={libraryImg} alt="" className="col-span-6 md:col-span-4 aspect-[4/5] object-cover" loading="lazy" />
            <img src={student1} alt="" className="col-span-12 md:col-span-4 aspect-[4/5] object-cover" loading="lazy" />
          </div>
          <div className="mt-10 text-right">
            <Link to="/gallery" className="inline-flex items-center gap-2 text-primary font-semibold text-[12px] uppercase tracking-[0.24em] border-b border-primary/30 pb-1 hover:text-accent hover:border-accent transition">
              Open full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
