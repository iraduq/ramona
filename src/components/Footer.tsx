import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-[#fcfbf9] border-t border-neutral-200/60">
      {/* ───── TOP BRAND BAR ───── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-14 pb-10 border-b border-neutral-200/60">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-neutral-200 shadow-sm transition-transform duration-300 group-hover:scale-105">
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
                  className="text-[#b7744f] stroke-[2]"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[17px] font-bold tracking-[0.18em] uppercase text-neutral-900">
                RAMONA'S MOBILE MASSAGE
              </span>
              <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#8a7666]">
                Münsterland · NRW
              </span>
            </div>
          </Link>
          <p className="text-[12px] text-neutral-400 tracking-wide md:text-right">
            Corporate Wellbeing · Est. 2019
          </p>
        </div>
      </div>

      {/* ───── MAIN GRID ───── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
        {/* ── NAVIGARE ── */}
        <div className="flex flex-col">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-5">
            {t.footer.navTitle}
          </h4>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                to="/"
                className="text-[14px] text-neutral-700 hover:text-[#b7744f] transition-colors duration-200"
              >
                {t.nav.acasa}
              </Link>
            </li>
            <li>
              <Link
                to="/servicii"
                className="text-[14px] text-neutral-700 hover:text-[#b7744f] transition-colors duration-200"
              >
                {t.nav.servicii}
              </Link>
            </li>
            <li>
              <Link
                to="/despre"
                className="text-[14px] text-neutral-700 hover:text-[#b7744f] transition-colors duration-200"
              >
                {t.nav.despre}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-[14px] text-neutral-700 hover:text-[#b7744f] transition-colors duration-200"
              >
                {t.nav.contact}
              </Link>
            </li>
          </ul>
        </div>

        {/* ── LEGAL ── */}
        <div className="flex flex-col">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-5">
            {t.footer.contactTitle}
          </h4>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                to="/legal-notice"
                className="text-[14px] text-neutral-700 hover:text-[#b7744f] transition-colors duration-200"
              >
                {t.footer.impressum}
              </Link>
            </li>
            <li>
              <Link
                to="/confidentiality"
                className="text-[14px] text-neutral-700 hover:text-[#b7744f] transition-colors duration-200"
              >
                {t.footer.datenschutz}
              </Link>
            </li>
            <li>
              <Link
                to="/cookies"
                className="text-[14px] text-neutral-700 hover:text-[#b7744f] transition-colors duration-200"
              >
                {t.footer.cookies}
              </Link>
            </li>
            <li>
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px]
                text-neutral-700 hover:text-[#b7744f] transition-colors
                duration-200"
              >
                {t.footer.euDispute}
              </a>
            </li>
          </ul>
          <div className="mt-6 pt-5 border-t border-neutral-200 w-full max-w-[280px]">
            <span className="text-[13px] font-semibold text-neutral-800">
              {t.footer.tara}
            </span>
          </div>
        </div>
      </div>

      {/* ───── BOTTOM LINE ───── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-8">
        <div className="border-t border-neutral-200 pt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="text-[11px] text-neutral-400">
            © {new Date().getFullYear()} Ramona's Mobile Balance Therapie | Büro
            | Unternehmen | Business Events & Sport
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
