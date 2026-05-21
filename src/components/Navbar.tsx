import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const { language, setLanguage, t } = useLanguage();

  // react-router-dom
  const location = useLocation();
  const pathname = location.pathname;

  const navTranslations = (t?.nav || {}) as Record<string, string>;

  const links = [
    { to: "/", label: navTranslations.acasa || "Acasa" },
    { to: "/services", label: navTranslations.servicii || "Servicii" },
    { to: "/about-us", label: navTranslations.despre || "Despre" },
    { to: "/contact", label: navTranslations.contact || "Contact" },
  ] as const;

  const textProgrameaza = navTranslations.programeaza || "Book Now";

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F7F5F2] border-b border-neutral-300">
      <div className="h-[3px] w-full bg-[#b7744f]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 h-[64px] flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-200">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="h-6 w-6 text-[#b7744f] stroke-[1.5]"
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

          <div className="flex flex-col">
            <span className="text-[13px] font-bold tracking-[0.15em] uppercase text-neutral-950">
              Ramona's
            </span>

            <span className="text-[8px] font-bold tracking-[0.18em] uppercase text-neutral-700 -mt-0.5">
              Mobile Balance Therapie
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const active = pathname === l.to;

            return (
              <Link
                key={l.to}
                to={l.to}
                className={`text-[11px] tracking-[0.2em] uppercase font-bold transition-colors py-[25px] ${
                  active ? "text-[#965935]" : "text-[#404040] hover:text-black"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center bg-neutral-200/50 rounded-full p-0.5 border border-neutral-300">
            {["DE", "EN"].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang as "DE" | "EN")}
                className={`text-[10px] font-bold px-3 py-1 rounded-full transition-all duration-300 ${
                  language === lang
                    ? "bg-[#4a3b32] text-white shadow-sm"
                    : "text-neutral-700 hover:text-neutral-950"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <Button
            asChild
            className="h-9 rounded-full px-5 text-[10px] font-bold bg-[#4a3b32] text-white hover:bg-[#2d2825]"
          >
            <Link to="/contact">{textProgrameaza}</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="w-5 h-5 text-neutral-950" />
          ) : (
            <Menu className="w-5 h-5 text-neutral-950" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#F7F5F2] border-b border-neutral-300 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-[13px] uppercase font-bold text-neutral-950 py-2 border-b border-neutral-200"
                >
                  {l.label}
                </Link>
              ))}

              <div className="flex gap-2 mt-2">
                {["DE", "EN"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang as "DE" | "EN")}
                    className={`flex-1 py-3 text-[12px] font-bold rounded-xl border ${
                      language === lang
                        ? "bg-[#4a3b32] text-white border-[#4a3b32]"
                        : "bg-white text-neutral-800 border-neutral-300"
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
