import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import campusAerial from "@/assets/entrence-lordphoto.JPG";
import heroCampus from "@/assets/College_Image.JPG";
import libraryImg from "@/assets/Lab.JPG";
import nursingImg from "@/assets/medical-teaching.JPG";
import paramedicalImg from "@/assets/lab02.JPG";
import puImg from "@/assets/Classroom.JPG";
import student1 from "@/assets/studentsatclass.JPG";
import leader1 from "@/assets/awards.JPG";
import leader2 from "@/assets/C9250T01.JPG";
import leader3 from "@/assets/C9300T01.JPG";
import { PageHero } from "@/components/site/chrome";
import { Reveal, SectionMark } from "@/components/site/primitives";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Ashrith Group of Institutions" },
      {
        name: "description",
        content:
          "A visual record of campus life, laboratories, celebrations and student moments at Ashrith Group of Institutions.",
      },
      { property: "og:title", content: "Gallery — Ashrith" },
      { property: "og:description", content: "Campus, students, celebrations, laboratories and infrastructure." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

type Item = { src: string; cat: string; caption: string; span: "sm" | "md" | "lg" | "tall" };

const ALL: Item[] = [
  { src: heroCampus, cat: "Campus", caption: "Main college building", span: "lg" },
  { src: nursingImg, cat: "Campus", caption: "Medical teaching session", span: "md" },
  { src: libraryImg, cat: "Laboratories", caption: "Laboratory block", span: "tall" },
  { src: paramedicalImg, cat: "Laboratories", caption: "Lab practical session", span: "md" },
  { src: puImg, cat: "Campus", caption: "Classroom block", span: "sm" },
  { src: student1, cat: "Students", caption: "Students at class", span: "md" },
  { src: campusAerial, cat: "Campus", caption: "College entrance", span: "lg" },
  { src: leader1, cat: "Events", caption: "Awards ceremony", span: "sm" },
  { src: leader2, cat: "Events", caption: "College event", span: "sm" },
  { src: leader3, cat: "Events", caption: "Campus programme", span: "sm" },
  { src: libraryImg, cat: "Celebrations", caption: "Annual cultural evening", span: "md" },
  { src: student1, cat: "Celebrations", caption: "Lamp-lighting ceremony", span: "tall" },
];

const CATS = ["All", "Campus", "Students", "Laboratories", "Infrastructure", "Events", "Celebrations"];

function GalleryPage() {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<number | null>(null);

  const items = useMemo(() => (cat === "All" ? ALL : ALL.filter((i) => i.cat === cat)), [cat]);

  const spanClass = (s: Item["span"]) => {
    switch (s) {
      case "lg": return "md:col-span-6 aspect-[16/10]";
      case "md": return "md:col-span-4 aspect-[4/5]";
      case "tall": return "md:col-span-4 aspect-[3/5]";
      default: return "md:col-span-3 aspect-square";
    }
  };

  return (
    <>
      <PageHero
        kicker="iv · Gallery"
        title="Frames from"
        italic="a year on"
        tail="campus."
        lede="A visual record of academics, clinics, celebrations and everyday moments — because a university reveals itself most honestly through its photographs."
        image={heroCampus}
        crumbs={[{ l: "Home", to: "/" }, { l: "Gallery" }]}
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="container-x">
          <div className="flex items-end justify-between flex-wrap gap-8 mb-12">
            <Reveal>
              <SectionMark n="01" label="Curated · Filtered" />
              <h2 className="mt-6 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,4vw,3rem)] text-ink">
                Choose a chapter.
              </h2>
            </Reveal>
            <div className="flex flex-wrap gap-2">
              {CATS.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-4 py-2 text-[11px] uppercase tracking-[0.24em] font-semibold transition border ${
                    cat === c
                      ? "bg-ink text-white border-ink"
                      : "bg-transparent text-ink border-border hover:border-ink"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-12 gap-3">
            {items.map((it, i) => (
              <Reveal key={i} delay={(i % 6) * 40} className={`relative overflow-hidden group cursor-pointer ${spanClass(it.span)}`}>
                <button onClick={() => setOpen(i)} className="absolute inset-0 h-full w-full">
                  <img src={it.src} alt={it.caption} className="h-full w-full object-cover transition duration-[900ms] group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                  <div className="absolute left-4 bottom-4 right-4 text-left opacity-0 group-hover:opacity-100 transition translate-y-2 group-hover:translate-y-0">
                    <div className="text-[10px] uppercase tracking-[0.28em] text-accent">{it.cat}</div>
                    <div className="mt-1 font-display text-white font-semibold text-sm lg:text-base">{it.caption}</div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {open !== null && (
        <div className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setOpen(null)}>
          <button className="absolute top-4 right-4 h-11 w-11 grid place-items-center text-white hover:text-accent" onClick={() => setOpen(null)} aria-label="Close">
            <X className="h-6 w-6" />
          </button>
          <button
            className="absolute left-4 md:left-8 h-11 w-11 grid place-items-center text-white hover:text-accent"
            onClick={(e) => { e.stopPropagation(); setOpen((v) => (v === null ? 0 : (v - 1 + items.length) % items.length)); }}
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            className="absolute right-4 md:right-8 h-11 w-11 grid place-items-center text-white hover:text-accent"
            onClick={(e) => { e.stopPropagation(); setOpen((v) => (v === null ? 0 : (v + 1) % items.length)); }}
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <figure className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={items[open].src} alt={items[open].caption} className="w-full max-h-[80vh] object-contain" />
            <figcaption className="mt-4 text-center text-white/70 text-sm">
              <span className="text-accent uppercase tracking-[0.28em] text-[10px] mr-3">{items[open].cat}</span>
              {items[open].caption}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
