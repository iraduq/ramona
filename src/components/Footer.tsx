import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

export function Footer() {
  const { t } = useLanguage();

  const btnClass =
    "inline-flex items-center px-4 py-2 rounded-lg text-[13px] font-medium text-neutral-700 bg-white border border-neutral-200 shadow-sm hover:border-[#b7744f] hover:text-[#b7744f] hover:bg-[#b7744f]/5 transition-all duration-200";

  return (
    <footer className="w-full bg-[#fcfbf9] border-t border-neutral-200/60">
      {/* ───── TOP BRAND BAR ───── */}

      {/* ───── MAIN GRID ───── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
        {/* ── NAVIGARE ── */}
        <div className="flex flex-col">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-5">
            {t.footer.navTitle}
          </h4>
          <ul className="flex flex-wrap gap-2">
            <li>
              <Link to="/" className={btnClass}>
                {t.nav.acasa}
              </Link>
            </li>
            <li>
              <Link to="/servicii" className={btnClass}>
                {t.nav.servicii}
              </Link>
            </li>
            <li>
              <Link to="/despre" className={btnClass}>
                {t.nav.despre}
              </Link>
            </li>
            <li>
              <Link to="/contact" className={btnClass}>
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
          <ul className="flex flex-wrap gap-2">
            <li>
              <Link to="/legal-notice" className={btnClass}>
                {t.footer.impressum}
              </Link>
            </li>
            <li>
              <Link to="/confidentiality" className={btnClass}>
                {t.footer.datenschutz}
              </Link>
            </li>
            <li>
              <Link to="/cookies" className={btnClass}>
                {t.footer.cookies}
              </Link>
            </li>
            <li>
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className={btnClass}
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
          <p className="text-[11px] text-neutral-500 tracking-wide">
            Ramona's Mobile Balance Therapie · Büro · Unternehmen · Business
            Events
          </p>
          <p className="text-[11px] text-neutral-400">
            © {new Date().getFullYear()} Ramona's Mobile Balance Therapie
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
