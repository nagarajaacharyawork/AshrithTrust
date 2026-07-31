import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Phone, Mail, MapPin, Facebook, Instagram, Youtube, Search, Menu, X,
  ArrowRight, ArrowUpRight, GraduationCap, Stethoscope,
  Microscope, BookOpen, Award, Users, Building2, Heart,
  FlaskConical, Bus, Wifi, Dumbbell, Hospital, Library, Home as HomeIcon,
  Quote, Download, Send, ChevronRight, Plus, Minus, ArrowUp, User,
} from "lucide-react";

import heroCampus from "@/assets/College_Image.JPG";
import nursingImg from "@/assets/medical-teaching.JPG";
import paramedicalImg from "@/assets/Lab-teaching.JPG";
import puImg from "@/assets/Classroom.JPG";
import campusAerial from "@/assets/main-entrence.JPG";
import libraryImg from "@/assets/studentsatclass.JPG";
import student1 from "@/assets/teachingatclass.JPG";
import leader1 from "@/assets/awards.JPG";
import leader2 from "@/assets/C9250T01.JPG";
import leader3 from "@/assets/C9300T01.JPG";
import leader4 from "@/assets/C9385T01.JPG";
import leader5 from "@/assets/entrence-lordphoto.JPG";
import logo from "@/assets/ashrithlogo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ashrith Group of Institutions | Study to Serve the Humanity" },
      {
        name: "description",
        content:
          "Ashrith Trust (R) — Ashrith College of Nursing, Ashrith School of Nursing and K. R. Hegde College of Paramedical Sciences. Study to Serve the Humanity.",
      },
      { property: "og:title", content: "Ashrith Group of Institutions" },
      {
        property: "og:description",
        content:
          "Ashrith Trust (R) — Nursing and Paramedical education at Kota, Udupi. Study to Serve the Humanity.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

/* ---------------- Reveal on scroll ---------------- */
function Reveal({
  children, delay = 0, className = "",
}: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { setVisible(true); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref} className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 1s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 1s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >{children}</div>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const start = performance.now(), dur = 1800;
          const tick = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            setN(Math.round((1 - Math.pow(1 - p, 3)) * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick); io.unobserve(e.target);
        }
      });
    });
    io.observe(el); return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

/* Section number label — editorial device used across the page */
function SectionMark({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
      <span className="text-accent font-semibold">{n}</span>
      <span className="h-px w-10 bg-border" />
      <span>{label}</span>
    </div>
  );
}

/* ================================================================ */

function HomePage() {
  return (
    <>
      <Hero />
      <Legacy />
      <InstitutionOne />
      <InstitutionTwo />
      <Leadership />
      <Programmes />
      <CampusExperience />
      <Gallery />
      <TestimonialSpread />
      <Contact />
    </>
  );
}



/* Chrome (TopBar, Header, Footer, BackToTop) lives in src/components/site/chrome.tsx and is mounted in __root.tsx */


/* ---------------- Hero — cinematic editorial with disciplined grid ---------------- */
function Hero() {
  const stats = [
    { k: "15+", v: "Years of service" },
    { k: "1,200+", v: "Students on campus" },
    { k: "95%", v: "Placement rate" },
    { k: "25+", v: "Clinical partners" },
  ];
  return (
    <section className="relative isolate w-full overflow-hidden bg-ink text-white">
      <img
        src={heroCampus}
        alt="Ashrith campus"
        width={1920}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Layered scrims: full base + left column weight so text always reads */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-transparent" />

      {/* Vertical rule labels */}
      <div className="hidden xl:flex absolute left-8 top-32 bottom-40 flex-col items-center justify-between text-[10px] uppercase tracking-[0.4em] text-white/50">
        <span className="[writing-mode:vertical-rl] rotate-180">Est. Two Thousand Nine</span>
        <span className="[writing-mode:vertical-rl] rotate-180">Karnataka · India</span>
      </div>

      {/* Corner year marker */}
      <div className="absolute top-8 right-6 lg:top-10 lg:right-10 hidden md:block text-right">
        <div className="text-[10px] uppercase tracking-[0.4em] text-white/60">Since</div>
        <div className="font-display font-black text-4xl mt-1 text-white">2009</div>
      </div>

      <div className="container-x relative z-10 min-h-[calc(100vh-6.5rem)] py-24 lg:py-32 flex flex-col">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 flex-1 items-end">
          {/* Text column — 8 of 12 on desktop for editorial hierarchy */}
          <div className="col-span-12 lg:col-span-9 xl:col-span-8">
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.5em] text-accent font-semibold">
                Ashrith Group of Institutions · Kota, Udupi
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-10 font-display font-black tracking-[-0.035em] text-[clamp(3.25rem,10vw,9rem)] leading-[0.9] text-balance">
                Study to
                <br />
                <span className="italic font-light text-white/85">serve</span>
                <br />
                the humanity.
              </h1>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-10 max-w-xl text-[15px] lg:text-[17px] text-white/85 leading-[1.85] text-pretty">
                Ashrith Trust (R) shapes compassionate healthcare professionals
                through Nursing and Paramedical education — rooted in a single
                conviction:{" "}
                <span className="text-white">service, care, heal</span>.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-12 flex flex-wrap items-center gap-5">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-white text-ink px-8 py-4 font-semibold text-[12px] uppercase tracking-[0.22em] hover:bg-accent hover:text-white transition"
                >
                  Begin Application <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/nursing"
                  className="inline-flex items-center gap-2 text-white/90 font-semibold text-[12px] uppercase tracking-[0.22em] border-b border-white/30 pb-1 hover:border-accent hover:text-accent transition"
                >
                  Explore Institutions <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stat strip — aligned to same 12-col grid, sits above bottom edge with generous breathing */}
        <Reveal delay={520}>
          <div className="mt-20 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/25 pt-8">
            {stats.map((s) => (
              <div key={s.v}>
                <div className="font-display font-black text-3xl lg:text-4xl text-accent tracking-[-0.02em]">
                  {s.k}
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.24em] text-white/70">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}


/* ---------------- News ticker ---------------- */
function NewsBar() {
  const items = [
    "Admissions Open 2026 — B.Sc Nursing, GNM, DMLT, D.Pharm",
    "Ranked among top private nursing institutions in the region",
    "Merit & need-based scholarships available",
    "New clinical training partnership with a leading multi-specialty hospital",
    "Orientation programme for freshers announced",
  ];
  return (
    <div className="bg-primary text-primary-foreground border-y border-white/10">
      <div className="container-x flex items-center">
        <div className="shrink-0 py-3 pr-6 mr-6 border-r border-white/20 flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Announcements
        </div>
        <div className="flex-1 overflow-hidden py-3 marquee-pause">
          <div className="marquee text-[13px] text-white/90">
            {[...items, ...items].map((t, i) => (
              <span key={i} className="whitespace-nowrap">
                <span className="text-accent mr-3">§</span>{t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Legacy / About — editorial split with big number ---------------- */
function Legacy() {
  return (
    <section id="about" className="relative py-24 lg:py-40 bg-background">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: massive editorial statement */}
          <div className="lg:col-span-7">
            <Reveal><SectionMark n="01" label="The Trust · A Chronicle" /></Reveal>
            <Reveal delay={100}>
              <h2 className="mt-8 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2.5rem,6vw,5rem)] text-ink">
                Developing minds,<br />
                <span className="italic font-light text-primary">nurturing healers,</span><br />
                serving humanity.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 grid md:grid-cols-2 gap-10 max-w-3xl">
                <p className="text-[15px] text-muted-foreground leading-[1.85]">
                  Ashrith Trust (R) endeavours to meet the challenges of today and
                  tomorrow by focusing on the development of an individual
                  intellectually, emotionally, physically, socially and spiritually.
                  Founded by K. R. Hegde and Dr. Vidyadhar Shetty K.
                </p>
                <p className="text-[15px] text-muted-foreground leading-[1.85]">
                  Ashrith College of Nursing, Ashrith School of Nursing and
                  K. R. Hegde College of Paramedical Sciences are established and
                  managed by Ashrith Trust (R) — all committed to quality education,
                  innovation and practical healthcare training.
                </p>
              </div>
            </Reveal>
            <Reveal delay={280}>
              <a href="#institutions" className="mt-12 inline-flex items-center gap-3 text-primary font-semibold text-[12px] uppercase tracking-[0.24em] border-b border-primary/30 pb-1 hover:border-accent hover:text-accent transition">
                Read the full chronicle <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          {/* Right: portrait image with overlapping number */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={150}>
              <div className="relative">
                <img src={libraryImg} alt="" width={800} height={1000} loading="lazy"
                  className="w-full aspect-[3/4] object-cover" />
                <div className="absolute -top-6 -left-6 lg:-left-16 font-display font-black text-[10rem] lg:text-[14rem] leading-none text-accent/90 select-none pointer-events-none">
                  15
                </div>
                <div className="absolute bottom-0 right-0 bg-primary text-primary-foreground p-6 max-w-[240px]">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-accent">Years in service</div>
                  <div className="mt-2 font-display font-bold text-xl leading-tight">Founded on the belief that education is a sacred trust.</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Philosophy — full-width dark band with three pillars ---------------- */
function Philosophy() {
  const items = [
    { n: "I.", t: "Service", d: "Education as a means to serve — patients, community, and the profession." },
    { n: "II.", t: "Care", d: "Compassion held to the same standard as clinical competence." },
    { n: "III.", t: "Heal", d: "The end to which every skill, every study, every act of learning bends." },
  ];
  return (
    <section className="relative bg-ink text-white py-24 lg:py-32 overflow-hidden">
      <img src={campusAerial} alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />
      <div className="container-x relative">
        <Reveal><SectionMark n="02" label="Philosophy · The Three Precepts" /></Reveal>
        <div className="grid lg:grid-cols-12 gap-12 mt-10 items-end">
          <Reveal delay={100} className="lg:col-span-6">
            <h2 className="font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2.25rem,5vw,4rem)]">
              A philosophy older<br />
              <span className="italic font-light text-accent">than the buildings</span><br />
              that house it.
            </h2>
          </Reveal>
          <Reveal delay={180} className="lg:col-span-5 lg:col-start-8">
            <p className="text-[15px] text-white/70 leading-[1.85]">
              Every classroom, laboratory and clinical rotation at Ashrith is built
              around three precepts — inherited from the healers our founders
              admired and passed on to every cohort that walks these corridors.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">
          {items.map((p, i) => (
            <Reveal key={p.t} delay={i * 100}>
              <div className="p-8 md:px-10">
                <div className="font-display text-5xl text-accent">{p.n}</div>
                <div className="mt-6 font-display font-bold text-3xl">{p.t}</div>
                <div className="mt-4 text-[14px] text-white/70 leading-[1.85] max-w-xs">{p.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Institutions — three distinct editorial spreads ---------------- */
function InstitutionOne() {
  // Full-bleed image left · text right
  return (
    <section id="institutions" className="bg-background">
      <div className="container-x pt-24 lg:pt-32">
        <Reveal><SectionMark n="03" label="Our Institutions · Two Schools, One Purpose" /></Reveal>
      </div>
      <div className="mt-12 grid lg:grid-cols-2 min-h-[80vh]">
        <div className="relative min-h-[420px] lg:min-h-full">
          <img src={nursingImg} alt="Ashrith College of Nursing" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute top-6 left-6 bg-white/95 backdrop-blur px-5 py-2 text-[11px] uppercase tracking-[0.28em] font-semibold text-primary">
            Est. 2009
          </div>
        </div>
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16 lg:py-24 bg-background">
          <div className="text-[11px] uppercase tracking-[0.32em] text-accent font-semibold">i · Nursing</div>
          <h3 className="mt-6 font-display font-black leading-[0.95] tracking-[-0.02em] text-[clamp(2rem,4.5vw,3.75rem)] text-ink">
            Ashrith College<br />&amp; School of<br /><span className="italic font-light text-primary">Nursing.</span>
          </h3>
          <p className="mt-8 text-[15px] text-muted-foreground leading-[1.9] max-w-lg">
            Affiliated to Rajiv Gandhi University of Health Sciences (RGUHS) and
            recognised by the Karnataka Nursing Council. Offering B.Sc Nursing with
            structured clinical postings, modern laboratories and experienced faculty
            committed to compassionate care.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-8 max-w-md border-t border-border pt-8">
            <div><dt className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Programme</dt><dd className="mt-2 font-display font-bold text-2xl text-ink">B.Sc Nursing</dd></div>
            <div><dt className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Affiliation</dt><dd className="mt-2 font-display font-bold text-2xl text-ink">RGUHS</dd></div>
          </dl>
          <a href="#programmes" className="mt-12 inline-flex items-center gap-3 text-primary font-semibold text-[12px] uppercase tracking-[0.24em] border-b border-primary/30 pb-1 hover:text-accent hover:border-accent transition self-start">
            View Programmes <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function InstitutionTwo() {
  // Full-bleed image right · text left with large numeral
  return (
    <section className="bg-primary-soft/40">
      <div className="grid lg:grid-cols-2 min-h-[80vh]">
        <div className="relative flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16 lg:py-24 order-2 lg:order-1">
          <div className="absolute top-8 right-8 lg:right-16 font-display font-black text-[12rem] lg:text-[16rem] leading-none text-accent/15 select-none pointer-events-none">02</div>
          <div className="relative">
            <div className="text-[11px] uppercase tracking-[0.32em] text-accent font-semibold">ii · Paramedical</div>
            <h3 className="mt-6 font-display font-black leading-[0.95] tracking-[-0.02em] text-[clamp(2rem,4.5vw,3.75rem)] text-ink">
              K.R. Hegde<br />College of<br /><span className="italic font-light text-primary">Paramedical Sciences.</span>
            </h3>
            <p className="mt-8 text-[15px] text-muted-foreground leading-[1.9] max-w-lg">
              Offering DMLT, DOTT, DOT and DDT — training the diagnostic and
              technical backbone of modern healthcare. Hands-on laboratory hours
              and hospital rotations that lead directly to employment.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-8 max-w-md border-t border-border pt-8">
              <div><dt className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Programmes</dt><dd className="mt-2 font-display font-bold text-2xl text-ink">DMLT · DOTT · DOT · DDT</dd></div>
              <div><dt className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Duration</dt><dd className="mt-2 font-display font-bold text-2xl text-ink">2 Years each</dd></div>
            </dl>
            <a href="#programmes" className="mt-12 inline-flex items-center gap-3 text-primary font-semibold text-[12px] uppercase tracking-[0.24em] border-b border-primary/30 pb-1 hover:text-accent hover:border-accent transition self-start">
              View Programmes <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="relative min-h-[420px] lg:min-h-full order-1 lg:order-2">
          <img src={paramedicalImg} alt="Paramedical Sciences" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function InstitutionThree() {
  return null;
}


/* ---------------- Leadership — editorial portrait grid ---------------- */
function Leadership() {
  const people = [
    { name: "K. R. Hegde", role: "Chairman & Managing Trustee", img: leader1, note: "Co-founder of Ashrith Trust (R) and the driving force behind establishing quality healthcare education at Kota, Udupi." },
    { name: "Dr. Vidyadhar Shetty K.", role: "Director & Trustee", img: leader2, note: "MBBS, DA, PGDHHM. Specialisation in Anaesthesia and Hospital & Health Care Management." },
    { name: "Dr. Vishwanath Shetty", role: "Trustee", img: leader3, note: "Trustee of Ashrith Trust (R), committed to advancing professional healthcare education in the region." },
    { name: "Sarojini R. Hegde", role: "Managing Trustee", img: leader4, note: "Managing Trustee of Ashrith Trust (R), overseeing the welfare and development of all institutions." },
    { name: "Ashrita Hegde", role: "Trustee", img: leader5, note: "Trustee of Ashrith Trust (R), supporting the mission of quality education and student welfare." },
  ];
  return (
    <section className="bg-background py-24 lg:py-40">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <Reveal className="lg:col-span-7">
            <SectionMark n="04" label="Leadership · The Trustees" />
            <h2 className="mt-8 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2.25rem,5vw,4.25rem)] text-ink">
              Governed by trustees<br />
              <span className="italic font-light text-primary">who believe</span> in service.
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9 lg:pt-8">
            <p className="text-[15px] text-muted-foreground leading-[1.85]">
              Our trustees bring together decades of medicine, education and civic
              service. They are not distant benefactors but the everyday conscience
              of the institution.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-0 md:gap-8 lg:gap-10">
          {people.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <figure className={`relative ${i === 1 ? "md:mt-16" : ""} ${i === 2 ? "md:mt-8" : ""}`}>
                <div className="relative aspect-[3/4] overflow-hidden bg-muted flex items-center justify-center border border-border">
                  <User className="h-40 w-40 text-muted-foreground/40" strokeWidth={1} />
                  <div className="absolute top-4 left-4 font-display font-black text-6xl text-ink/15">0{i + 1}</div>
                </div>
                <figcaption className="mt-6">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold">{p.role}</div>
                  <div className="mt-2 font-display font-bold text-2xl text-ink leading-tight">{p.name}</div>
                  <p className="mt-4 text-[14px] text-muted-foreground leading-[1.85] max-w-xs">{p.note}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Choose — editorial list on photograph ---------------- */
function WhyChoose() {
  const items = [
    { icon: Hospital, t: "Clinical Training", d: "Structured postings across multi-specialty hospital partners." },
    { icon: Microscope, t: "Modern Laboratories", d: "Simulation, anatomy, biochemistry and pathology labs." },
    { icon: Users, t: "Experienced Faculty", d: "Senior clinicians and academics with years of teaching." },
    { icon: Award, t: "Placements", d: "A dedicated cell with a strong hospital & pharma network." },
    { icon: FlaskConical, t: "Research Culture", d: "Encouragement for case studies and clinical projects." },
    { icon: Heart, t: "Student Welfare", d: "Merit and need-based scholarships for deserving students." },
  ];
  return (
    <section className="relative bg-background py-24 lg:py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal><SectionMark n="05" label="Why Ashrith" /></Reveal>
            <Reveal delay={100}>
              <h2 className="mt-8 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,4.5vw,3.75rem)] text-ink">
                Everything a serious<br />
                student of medicine<br />
                <span className="italic font-light text-primary">would ask for.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 relative">
                <img src={student1} alt="" className="w-full aspect-[4/5] object-cover" loading="lazy" />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-border border-y border-border">
              {items.map(({ icon: Icon, t, d }, i) => (
                <Reveal key={t} delay={i * 60}>
                  <li className="grid grid-cols-[auto_1fr_auto] items-center gap-6 py-8 group">
                    <div className="text-[11px] font-mono text-accent w-8">0{i + 1}</div>
                    <div>
                      <div className="font-display font-bold text-2xl text-ink group-hover:text-primary transition">{t}</div>
                      <div className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{d}</div>
                    </div>
                    <Icon className="h-8 w-8 text-primary/70 shrink-0" />
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Programmes — editorial index table ---------------- */
function Programmes() {
  const list = [
    { cat: "Nursing", title: "B.Sc Nursing", dur: "4 Years", elig: "10+2 PCB · 45%" },
    { cat: "Paramedical", title: "DMLT — Medical Lab Technology", dur: "2 Years", elig: "10+2 Science" },
    { cat: "Paramedical", title: "DOTT — Operation Theatre Technology", dur: "2 Years", elig: "10+2 Science" },
    { cat: "Paramedical", title: "DOT — Ophthalmic Technology", dur: "2 Years", elig: "10+2 Science" },
    { cat: "Paramedical", title: "DDT — Dialysis Technology", dur: "2 Years", elig: "10+2 Science" },
  ];
  return (
    <section id="programmes" className="bg-primary-soft/30 py-24 lg:py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 items-end">
          <Reveal className="lg:col-span-8">
            <SectionMark n="06" label="Programmes · Index" />
            <h2 className="mt-8 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2.25rem,5vw,4.25rem)] text-ink">
              Programmes crafted for<br />
              <span className="italic font-light text-primary">a meaningful career.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-4">
            <p className="text-[15px] text-muted-foreground leading-[1.85]">
              From B.Sc Nursing to paramedical diplomas — each programme is
              calibrated for the clinic, the laboratory and the community it serves.
              Admissions open for the current academic year.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="border-y-2 border-ink">
            <div className="hidden md:grid grid-cols-[80px_1fr_180px_240px_120px] gap-6 py-4 text-[10px] uppercase tracking-[0.28em] text-muted-foreground border-b border-border">
              <div>№</div><div>Programme</div><div>Duration</div><div>Eligibility</div><div className="text-right">Apply</div>
            </div>
            {list.map((c, i) => (
              <div key={c.title} className="grid grid-cols-2 md:grid-cols-[80px_1fr_180px_240px_120px] gap-4 md:gap-6 py-6 border-b border-border items-center group hover:bg-white/60 transition">
                <div className="font-mono text-sm text-accent">0{i + 1}</div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{c.cat}</div>
                  <div className="mt-1 font-display font-bold text-lg lg:text-xl text-ink group-hover:text-primary transition">{c.title}</div>
                </div>
                <div className="text-sm text-foreground">{c.dur}</div>
                <div className="text-sm text-muted-foreground col-span-2 md:col-span-1">{c.elig}</div>
                <a href="#admissions" className="justify-self-end md:justify-self-end inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] font-semibold text-primary hover:text-accent transition">
                  Apply <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Campus Experience — full-bleed photography with overlay ---------------- */
function CampusExperience() {
  return (
    <section id="campus" className="relative bg-background">
      <div className="container-x pt-24 lg:pt-32">
        <Reveal><SectionMark n="07" label="Campus · Grounds & Life" /></Reveal>
        <Reveal delay={100}>
          <h2 className="mt-8 max-w-4xl font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2.25rem,5vw,4.5rem)] text-ink">
            A campus on NH-66,<br /><span className="italic font-light text-primary">Kota, Udupi District.</span>
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 relative">
        <img src={campusAerial} alt="Campus aerial" className="w-full h-[70vh] min-h-[520px] object-cover" loading="lazy" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent h-1/2" />

        <div className="container-x absolute inset-x-0 bottom-0 pb-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white border-t border-white/25 pt-8">
            {[
              { k: "20 km", v: "From Udupi Railway Station" },
              { k: "10 km", v: "From Barkur Railway Station" },
              { k: "12 km", v: "From Manipal" },
              { k: "NH-66", v: "Kota, Udupi District" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display font-black text-3xl lg:text-5xl text-accent">{s.k}</div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.24em] text-white/70">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats — minimal editorial strip ---------------- */
function Stats() {
  const s = [
    { n: 1200, suffix: "+", l: "Students on campus" },
    { n: 12, suffix: "+", l: "Departments" },
    { n: 80, suffix: "+", l: "Faculty & clinicians" },
    { n: 15, suffix: "+", l: "Programmes offered" },
    { n: 95, suffix: "%", l: "Placement rate" },
    { n: 25, suffix: "+", l: "Clinical partners" },
  ];
  return (
    <section className="bg-background py-24 lg:py-32 border-y border-border">
      <div className="container-x">
        <Reveal>
          <div className="max-w-3xl">
            <SectionMark n="08" label="By the Numbers" />
            <h2 className="mt-8 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,4.5vw,3.5rem)] text-ink">
              A legacy measured in<br /><span className="italic font-light text-primary">lives touched.</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-6">
          {s.map((it, i) => (
            <Reveal key={it.l} delay={i * 60}>
              <div className="border-t-2 border-accent pt-6">
                <div className="font-display font-black text-5xl lg:text-6xl text-ink tracking-[-0.03em]">
                  <Counter to={it.n} suffix={it.suffix} />
                </div>
                <div className="mt-4 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{it.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Gallery — asymmetric editorial grid ---------------- */
function Gallery() {
  const imgs = [
    { src: heroCampus, cat: "Campus" },
    { src: nursingImg, cat: "Students" },
    { src: paramedicalImg, cat: "Labs" },
    { src: libraryImg, cat: "Campus" },
    { src: campusAerial, cat: "Campus" },
    { src: puImg, cat: "Students" },
    { src: student1, cat: "Events" },
    { src: nursingImg, cat: "Labs" },
  ];
  const loop = [...imgs, ...imgs];

  return (
    <section id="gallery" className="bg-background py-24 lg:py-32 overflow-hidden">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <Reveal>
            <SectionMark n="09" label="Gallery · Life on Campus" />
            <h2 className="mt-8 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,4.5vw,3.75rem)] text-ink">
              Everyday scenes<br /><span className="italic font-light text-primary">from Ashrith.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/gallery" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] font-semibold text-ink hover:text-accent transition">
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="relative marquee-pause">
        <div className="marquee">
          {loop.map((im, i) => (
            <div key={i} className="group relative overflow-hidden shrink-0 w-[320px] md:w-[420px] aspect-[4/3]">
              <img src={im.src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-4 left-4 text-white text-[10px] uppercase tracking-[0.28em] opacity-0 group-hover:opacity-100 transition">{im.cat}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------------- Facilities — dense two-column editorial list ---------------- */
function Facilities() {
  const items = [
    { icon: Library, t: "Central Library", d: "Journals, e-resources and reading rooms." },
    { icon: FlaskConical, t: "Simulation Labs", d: "Manikins and skill stations for clinical rehearsal." },
    { icon: HomeIcon, t: "Hostel & Residency", d: "Safe hostels for boys and girls with warden care." },
    { icon: Bus, t: "Transport Fleet", d: "Bus routes covering the city and surrounding towns." },
    { icon: Hospital, t: "Teaching Hospital Tie-ups", d: "Structured clinical postings and internships." },
    { icon: Dumbbell, t: "Sports & Fitness", d: "Grounds, gymnasium and organised athletics." },
    { icon: Building2, t: "Digital Classrooms", d: "Audio-visual teaching and recorded lectures." },
    { icon: Wifi, t: "Campus-wide Wi-Fi", d: "Uninterrupted connectivity across blocks." },
    { icon: Stethoscope, t: "On-campus Medical Care", d: "Doctor on call and student health check-ups." },
  ];
  return (
    <section id="facilities" className="bg-ink text-white py-24 lg:py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.32em] text-white/50">
              <span className="text-accent font-semibold">10</span>
              <span className="h-px w-10 bg-white/25" />
              <span>Facilities · The Everyday</span>
            </div>
            <h2 className="mt-8 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2.25rem,5vw,4.25rem)]">
              Infrastructure designed for<br />
              <span className="italic font-light text-accent">everyday excellence.</span>
            </h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-2 divide-y divide-white/10 lg:divide-y-0">
          {items.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 50}>
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

/* ---------------- Testimonials — one large editorial quote spread ---------------- */
function TestimonialSpread() {
  const items = [
    { n: "Priya Rao", r: "B.Sc Nursing · Batch of 2023", img: student1, q: "Ashrith gave me not just a degree but the confidence and clinical exposure to walk into a ward on day one and know exactly what to do." },
    { n: "Suresh Kumar", r: "Parent · Class of 2024", img: leader1, q: "The faculty and hostel wardens treat students like family. My daughter feels safe, cared for, and challenged to be better every day." },
    { n: "Anjali Shetty", r: "DMLT Alumni · 2021", img: leader2, q: "I was placed in a leading diagnostic laboratory within a month of graduating. The lab training here is genuinely hands-on." },
  ];
  const [i, setI] = useState(0);
  const t = items[i];
  return (
    <section className="bg-background py-24 lg:py-40">
      <div className="container-x">
        <Reveal><SectionMark n="11" label="Voices · Alumni & Community" /></Reveal>
        <div className="mt-14 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <Reveal>
              <img src={t.img} alt={t.n} className="w-full aspect-[3/4] object-cover" />
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={120}>
              <Quote className="h-14 w-14 text-accent" strokeWidth={1.5} />
              <blockquote key={i} className="mt-8 font-display font-light italic text-[clamp(1.75rem,3.4vw,3rem)] leading-[1.2] tracking-[-0.02em] text-ink animate-reveal-in">
                “{t.q}”
              </blockquote>
              <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
                <div>
                  <div className="font-display font-bold text-xl text-ink">{t.n}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">{t.r}</div>
                </div>
                <div className="flex items-center gap-3">
                  {items.map((_, k) => (
                    <button key={k} onClick={() => setI(k)}
                      className={`text-[11px] font-mono transition ${i === k ? "text-accent" : "text-muted-foreground hover:text-ink"}`}>
                      0{k + 1}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Admissions CTA — full-bleed cinematic ---------------- */
function AdmissionCTA() {
  return (
    <section id="admissions" className="relative min-h-[70vh] flex items-center bg-ink text-white overflow-hidden">
      <img src={heroCampus} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
      <div className="container-x relative py-24 lg:py-32 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-accent font-semibold">Admissions · Session 2026</div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2.5rem,6vw,5.5rem)]">
              Your journey to<br />
              <span className="italic font-light text-white/85">serve humanity</span><br />
              begins here.
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-8 max-w-xl text-[15px] text-white/75 leading-[1.85]">
              Applications are now open for Nursing, Paramedical and PU programmes.
              Limited seats · Scholarships available · Rolling admissions through the season.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-3">
          <Reveal delay={280}>
            <a href="#contact" className="w-full inline-flex items-center justify-between gap-2 bg-accent text-white px-7 py-5 font-semibold text-[12px] uppercase tracking-[0.24em] hover:bg-white hover:text-ink transition">
              Begin Application <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
          <Reveal delay={340}>
            <a href="#contact" className="w-full inline-flex items-center justify-between gap-2 bg-white/10 backdrop-blur text-white px-7 py-5 font-semibold text-[12px] uppercase tracking-[0.24em] hover:bg-white/20 transition">
              Download Brochure <Download className="h-4 w-4" />
            </a>
          </Reveal>
          <Reveal delay={400}>
            <a href="#contact" className="w-full inline-flex items-center justify-between gap-2 border border-white/30 text-white px-7 py-5 font-semibold text-[12px] uppercase tracking-[0.24em] hover:bg-white hover:text-ink transition">
              Book a Campus Tour <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ — minimal typographic ---------------- */
function FAQ() {
  const qs = [
    { q: "What are the eligibility criteria for B.Sc Nursing?", a: "10+2 with Physics, Chemistry and Biology (PCB) with a minimum of 45% aggregate marks. Candidates must be at least 17 years of age at the time of admission." },
    { q: "Are scholarships available?", a: "Yes. Ashrith Trust offers merit-based and need-based scholarships. Government scholarship schemes are also facilitated for eligible students." },
    { q: "Is hostel accommodation provided?", a: "Yes, separate hostel facilities are provided for both boys and girls with trained warden supervision, mess and 24/7 security." },
    { q: "What clinical exposure do nursing students receive?", a: "Students undertake structured clinical postings across partnered multi-specialty hospitals and community health centres throughout their programme." },
    { q: "How do I apply?", a: "You can apply online using our enquiry form, download the brochure, or visit the admissions office directly. Rolling admissions are open through the season." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="container-x grid lg:grid-cols-12 gap-14">
        <Reveal className="lg:col-span-5">
          <SectionMark n="12" label="Frequently Asked" />
          <h2 className="mt-8 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,4.5vw,3.75rem)] text-ink">
            Questions,<br /><span className="italic font-light text-primary">answered.</span>
          </h2>
          <p className="mt-8 text-[15px] text-muted-foreground leading-[1.85] max-w-md">
            Everything you need to know before applying. If your question isn't listed,
            our admissions office is a phone call away.
          </p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-3 text-primary font-semibold text-[12px] uppercase tracking-[0.24em] border-b border-primary/30 pb-1 hover:text-accent hover:border-accent transition">
            Contact admissions <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>

        <div className="lg:col-span-7 border-t border-ink">
          {qs.map((it, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={it.q} delay={i * 50}>
                <div className="border-b border-border">
                  <button onClick={() => setOpen(isOpen ? -1 : i)} className="w-full flex items-center justify-between gap-6 py-6 text-left group">
                    <div className="flex items-baseline gap-6">
                      <span className="font-mono text-[11px] text-accent">0{i + 1}</span>
                      <span className="font-display font-semibold text-lg lg:text-xl text-ink group-hover:text-primary transition">{it.q}</span>
                    </div>
                    <span className={`h-8 w-8 grid place-items-center shrink-0 border transition ${isOpen ? "bg-ink border-ink text-white" : "border-border text-ink"}`}>
                      {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                    </span>
                  </button>
                  <div className="overflow-hidden transition-all duration-500" style={{ maxHeight: isOpen ? 320 : 0 }}>
                    <p className="pb-6 pl-10 text-[15px] text-muted-foreground leading-[1.85] max-w-xl">{it.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  return (
    <section id="contact" className="bg-primary-soft/40 py-24 lg:py-32">
      <div className="container-x grid lg:grid-cols-12 gap-14">
        <Reveal className="lg:col-span-5">
          <SectionMark n="13" label="Contact · Admissions Office" />
          <h2 className="mt-8 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,4.5vw,3.75rem)] text-ink">
            Visit us, call us,<br /><span className="italic font-light text-primary">or write.</span>
          </h2>
          <p className="mt-8 text-[15px] text-muted-foreground leading-[1.85] max-w-md">
            The admissions office is open Monday to Saturday. We're happy to arrange
            a campus tour at a time convenient for you and your family.
          </p>

          <div className="mt-12 divide-y divide-border border-y border-border">
            {[
              { icon: MapPin, t: "Address", d: "NH-66, Kota, Udupi Taluk & District, Karnataka – 576221" },
              { icon: Phone, t: "Phone", d: "+91 91480 87860 · +91 91480 87861" },
              { icon: Mail, t: "Email", d: "info@ashritheducationtrust.org" },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex items-start gap-6 py-6">
                <Icon className="h-5 w-5 text-accent mt-1 shrink-0" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{t}</div>
                  <div className="mt-2 font-display font-semibold text-lg text-ink">{d}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden aspect-[16/9] border border-border">
            <iframe title="Ashrith Trust Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=74.83%2C12.86%2C74.87%2C12.90&layer=mapnik"
              className="w-full h-full border-0" loading="lazy" />
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-7">
          <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! Our admissions team will contact you shortly."); }}
            className="bg-white border border-border p-8 lg:p-14">
            <div className="text-[11px] uppercase tracking-[0.28em] text-accent font-semibold">Enquire Now</div>
            <div className="mt-3 font-display font-black text-3xl lg:text-4xl text-ink tracking-[-0.02em]">Begin your application.</div>
            <p className="mt-3 text-[14px] text-muted-foreground">Fill in your details and our admissions team will reach out within 24 hours.</p>
            <div className="mt-10 grid gap-8">
              {[
                { label: "Full Name", type: "text" },
                { label: "Email Address", type: "email" },
                { label: "Phone Number", type: "tel" },
                { label: "Programme of Interest", type: "text" },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-[10px] uppercase tracking-[0.28em] text-muted-foreground mb-2">{f.label}</label>
                  <input required type={f.type}
                    className="w-full border-0 border-b border-ink/30 bg-transparent py-3 text-lg text-ink focus:border-primary outline-none transition" />
                </div>
              ))}
              <div>
                <label className="block text-[10px] uppercase tracking-[0.28em] text-muted-foreground mb-2">Your Message</label>
                <textarea rows={3}
                  className="w-full border-0 border-b border-ink/30 bg-transparent py-3 text-lg text-ink focus:border-primary outline-none transition resize-none" />
              </div>
              <button type="submit"
                className="mt-4 self-start inline-flex items-center gap-3 bg-ink text-white px-8 py-4 font-semibold text-[12px] uppercase tracking-[0.24em] hover:bg-primary transition">
                Send Enquiry <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}



