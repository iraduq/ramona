import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = useLocation().pathname;

  const navTranslations = (t?.nav || {}) as Record<string, string>;
  const links = [
    { to: "/", label: navTranslations.acasa || "Acasa" },
    { to: "/services", label: navTranslations.servicii || "Servicii" },
    { to: "/about-us", label: navTranslations.despre || "Despre" },
    { to: "/contact", label: navTranslations.contact || "Contact" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 w-full bg-bg-soft/95 backdrop-blur-sm border-b border-border-soft">
      <div className="h-[3px] w-full bg-gradient-to-r from-brand to-brand-deep" />

      <div className="mx-auto max-w-7xl px-4 lg:px-10 h-[64px] lg:h-[72px] flex items-center justify-between transition-all duration-300">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-3 shrink min-w-0 pr-2 group"
          aria-label="Mergi la pagina principală"
        >
          <div className="flex h-10 w-10 lg:h-11 lg:w-11 shrink-0 items-center justify-center rounded-xl bg-card shadow-sm border border-border-soft transition-all group-hover:border-brand/30">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="h-6 w-6 text-brand stroke-[1.5]"
              aria-hidden="true"
            >
              <circle cx="12" cy="7" r="4" />
              <circle cx="12" cy="15" r="5" />
              <path
                d="M4 12C4 12 8 8 12 12C16 16 20 12 20 12"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="flex flex-col min-w-0 justify-center py-1">
            <span className="text-[13px] lg:text-[15px] font-bold tracking-[0.05em] uppercase text-ink truncate leading-tight transition-colors">
              Ramona’s Mobile Massage
            </span>

            {/* Contrast fixat aici: text-neutral-800 in loc de text-brand */}
            <span className="text-[9px] lg:text-[10px] font-bold tracking-[0.15em] uppercase text-neutral-800 mt-[1px] lg:mt-[2px] truncate leading-tight">
              Münsterland | NRW
            </span>

            <span className="text-[7.5px] lg:text-[8.5px] font-semibold tracking-[0.1em] uppercase text-ink-muted mt-[2px] lg:mt-[2px] truncate leading-tight">
              {navTranslations.subtitle ||
                "Arbeitsplatz | Büro | Unternehmen | Business Events"}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-[11px] lg:text-[12px] tracking-[0.15em] uppercase font-bold transition-colors ${
                pathname === l.to
                  ? "text-brand"
                  : "text-neutral-700 hover:text-ink-soft"
              }`}
              aria-current={pathname === l.to ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4 lg:gap-5 shrink-0">
          <div className="flex bg-card rounded-full p-1 border border-border-soft shadow-sm">
            {["DE", "EN"].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang as "DE" | "EN")}
                aria-label={`Schimba limba in ${lang}`}
                className={`text-[10px] lg:text-[10px] font-bold px-3 py-1.5 rounded-full transition-colors ${
                  language === lang
                    ? "bg-ink-soft text-primary-foreground"
                    : "text-neutral-700 hover:text-ink-soft"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
          <Button
            asChild
            className="h-9 rounded-full px-5 lg:px-6 text-[10px] lg:text-[11px] uppercase font-bold bg-ink-soft text-primary-foreground hover:bg-brand transition-all"
          >
            <Link to="/contact">
              {navTranslations.programeaza || "Book Now"}
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 z-50 text-ink-soft hover:text-brand transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-bg-soft border-b border-border-soft overflow-hidden"
          >
            <div className="px-5 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`text-[13px] tracking-wider uppercase font-bold py-2 border-b border-border-soft/60 transition-colors ${
                    pathname === l.to ? "text-brand" : "text-ink-soft"
                  }`}
                  aria-current={pathname === l.to ? "page" : undefined}
                >
                  {l.label}
                </Link>
              ))}

              <div className="flex gap-2 mt-2">
                {["DE", "EN"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang as "DE" | "EN")}
                    aria-label={`Schimba limba in ${lang}`}
                    className={`flex-1 py-2.5 text-[12px] font-bold rounded-lg border transition-colors ${
                      language === lang
                        ? "bg-ink-soft text-primary-foreground border-ink-soft"
                        : "bg-card text-neutral-700 border-border-soft hover:border-ink-soft/30"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
