import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Search,
  Menu,
  X,
  ArrowRight,
  ArrowUp,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import logo from "@/assets/ashrithlogo.jpg";

type NavItem = { l: string; to: string };

const NAV: NavItem[] = [
  { l: "Home", to: "/" },
  { l: "Nursing", to: "/nursing" },
  { l: "Paramedical", to: "/paramedical" },
  { l: "Campus", to: "/campus" },
  { l: "Gallery", to: "/gallery" },
  { l: "Contact", to: "/contact" },
];

const INSTITUTIONS = [
  {
    to: "/nursing",
    title: "Ashrith College & School of Nursing",
    kicker: "i · Nursing",
    desc: "B.Sc Nursing · GNM · ANM",
  },
  {
    to: "/paramedical",
    title: "K.R. Hegde College of Paramedical Sciences",
    kicker: "ii · Paramedical",
    desc: "DMLT · D.Pharm · Allied Health",
  },
];

export function TopBar() {
  return (
    <div className="hidden lg:block bg-ink text-white/80 text-[12px] border-b border-white/5">
      <div className="container-x flex items-center justify-between py-2">
        <div className="flex items-center gap-8">
          <span className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-accent" /> Ashrith Trust Campus, Karnataka
          </span>
          <a
            href="mailto:info@ashrithtrust.org"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <Mail className="h-3.5 w-3.5 text-accent" /> info@ashrithtrust.org
          </a>
          <a
            href="tel:+919999999999"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <Phone className="h-3.5 w-3.5 text-accent" /> +91 99999 99999
          </a>
        </div>
        <div className="flex items-center gap-6">
          <Link
            to="/contact"
            className="uppercase tracking-[0.25em] text-[10px] font-semibold text-accent"
          >
            Admissions 2026 →
          </Link>
          <div className="flex items-center gap-4 pl-6 border-l border-white/10">
            <a aria-label="Facebook" href="#" className="hover:text-accent transition">
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a aria-label="Instagram" href="#" className="hover:text-accent transition">
              <Instagram className="h-3.5 w-3.5" />
            </a>
            <a aria-label="YouTube" href="#" className="hover:text-accent transition">
              <Youtube className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_var(--color-border)]"
          : "bg-white"
      }`}
    >
      <div className="container-x flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Ashrith Trust"
            width={52}
            height={52}
            className="h-12 w-12 object-contain"
          />
          <div className="leading-tight border-l border-border pl-3">
            <div className="font-display font-extrabold text-primary text-[17px] tracking-tight">
              Ashrith Group
            </div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              of Institutions · Est. 2009
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => {
            const isInst = n.l === "Nursing" || n.l === "Paramedical";
            if (isInst && n.l === "Nursing") {
              return (
                <div
                  key="institutions"
                  className="relative"
                  onMouseEnter={() => setMega(true)}
                  onMouseLeave={() => setMega(false)}
                >
                  <button className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/80 hover:text-primary transition-colors flex items-center gap-1">
                    Institutions <ChevronDown className="h-3 w-3" />
                  </button>
                  {mega && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[560px]">
                      <div className="bg-white shadow-lift border-t-2 border-accent p-8 grid grid-cols-1 gap-5">
                        {INSTITUTIONS.map((i) => (
                          <Link
                            key={i.to}
                            to={i.to}
                            onClick={() => setMega(false)}
                            className="group block"
                          >
                            <div className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold">
                              {i.kicker}
                            </div>
                            <div className="mt-2 font-display font-bold text-lg text-ink group-hover:text-primary transition">
                              {i.title}
                            </div>
                            <div className="mt-1 text-[13px] text-muted-foreground">
                              {i.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            if (isInst) return null;
            return (
              <Link
                key={n.l}
                to={n.to}
                className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/80 hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.l}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            className="hidden sm:grid place-items-center h-10 w-10 text-ink/60 hover:text-primary transition"
          >
            <Search className="h-4 w-4" />
          </button>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.16em] hover:bg-secondary transition"
          >
            Apply Now <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen(true)}
            className="lg:hidden grid place-items-center h-11 w-11 bg-ink text-white"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] transition ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/60 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-lift p-6 flex flex-col transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <img src={logo} alt="" width={44} height={44} className="h-11 w-11" />
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="grid place-items-center h-10 w-10 bg-muted"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col">
            {NAV.map((n, i) => (
              <Link
                key={n.l}
                to={n.to}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-5 border-b border-border font-display font-semibold text-xl text-ink hover:text-primary transition"
                style={{ animation: open ? `reveal-up 0.5s ${i * 50}ms both` : undefined }}
              >
                <span>
                  <span className="text-accent text-xs align-top mr-3">
                    0{i + 1}
                  </span>
                  {n.l}
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-8 bg-primary text-primary-foreground text-center px-6 py-4 font-semibold uppercase tracking-[0.16em] text-sm"
          >
            Apply for Admission
          </Link>
        </aside>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x pt-20 pb-10 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Ashrith Trust"
              width={56}
              height={56}
              className="h-14 w-14 bg-white p-1"
            />
            <div className="border-l border-white/20 pl-3 leading-tight">
              <div className="font-display font-extrabold text-xl">Ashrith Group</div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-white/60">
                of Institutions · Est. 2009
              </div>
            </div>
          </div>
          <p className="mt-8 text-[14px] text-white/60 leading-[1.85] max-w-sm">
            A legacy of professional education — nurturing compassionate healthcare
            professionals dedicated to service, care and healing.
          </p>
          <div className="mt-8 flex items-center gap-4">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 grid place-items-center border border-white/20 hover:bg-accent hover:border-accent transition"
                aria-label="Social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol
          title="Institutions"
          links={[
            { l: "Nursing College", to: "/nursing" },
            { l: "Paramedical Sciences", to: "/paramedical" },
          ]}
        />
        <FooterCol
          title="Explore"
          links={[
            { l: "Campus", to: "/campus" },
            { l: "Gallery", to: "/gallery" },
            { l: "Contact", to: "/contact" },
          ]}
        />
        <FooterCol
          title="Admissions"
          links={[
            { l: "Apply Online", to: "/contact" },
            { l: "Brochure", to: "/contact" },
            { l: "FAQ", to: "/contact" },
          ]}
        />

        <div className="lg:col-span-2">
          <div className="text-[10px] uppercase tracking-[0.28em] text-accent font-semibold">
            Newsletter
          </div>
          <p className="mt-6 text-[14px] text-white/60">Admission alerts & updates.</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-4 flex items-center border-b border-white/25"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent py-3 text-sm placeholder:text-white/40 outline-none"
            />
            <button
              className="h-9 w-9 grid place-items-center text-accent hover:text-white transition"
              aria-label="Subscribe"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-[0.22em] text-white/40">
          <div>© {new Date().getFullYear()} Ashrith Trust · All rights reserved</div>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
            <a href="#" className="hover:text-white transition">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { l: string; to: string }[];
}) {
  return (
    <div className="lg:col-span-2">
      <div className="text-[10px] uppercase tracking-[0.28em] text-accent font-semibold">
        {title}
      </div>
      <ul className="mt-6 space-y-3 text-[14px]">
        {links.map((l) => (
          <li key={l.l}>
            <Link to={l.to} className="text-white/70 hover:text-white story-link">
              {l.l}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed right-4 bottom-4 lg:right-6 lg:bottom-6 z-40 h-12 w-12 bg-ink text-white grid place-items-center shadow-lift transition-all ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

export function PageHero({
  kicker,
  title,
  italic,
  tail,
  lede,
  image,
  crumbs,
}: {
  kicker: string;
  title: string;
  italic?: string;
  tail?: string;
  lede: string;
  image: string;
  crumbs: { l: string; to?: string }[];
}) {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      <div className="container-x relative pt-24 lg:pt-32 pb-24 lg:pb-32">
        <nav className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-white/60">
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-3">
              {c.to ? (
                <Link to={c.to} className="hover:text-accent transition">
                  {c.l}
                </Link>
              ) : (
                <span className="text-white">{c.l}</span>
              )}
              {i < crumbs.length - 1 && <span className="text-white/30">/</span>}
            </span>
          ))}
        </nav>
        <div className="mt-16 max-w-5xl">
          <div className="text-[11px] uppercase tracking-[0.5em] text-accent font-semibold">
            {kicker}
          </div>
          <h1 className="mt-8 font-display font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2.5rem,7vw,6rem)]">
            {title}
            {italic && (
              <>
                <br />
                <span className="italic font-light text-white/85">{italic}</span>
              </>
            )}
            {tail && (
              <>
                <br />
                {tail}
              </>
            )}
          </h1>
          <p className="mt-10 max-w-2xl text-[15px] lg:text-[16px] text-white/80 leading-[1.9] border-t border-white/20 pt-8">
            {lede}
          </p>
        </div>
      </div>
    </section>
  );
}
