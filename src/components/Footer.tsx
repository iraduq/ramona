import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

export function Footer() {
  const { t } = useLanguage();

  const btnClass =
    "block md:inline-flex items-center text-center md:text-left px-4 py-3 md:py-2 rounded-lg text-[14px] md:text-[13px] font-medium text-neutral-600 md:text-neutral-700 bg-neutral-50 md:bg-white border border-neutral-100 md:border-neutral-200 shadow-sm hover:border-[#b7744f] hover:text-[#b7744f] hover:bg-[#b7744f]/5 transition-all duration-200 w-full md:w-auto";

  return (
    <footer className="w-full bg-[#fcfbf9] border-t border-neutral-200/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
        <div className="flex flex-col text-center md:text-left">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-5">
            {t.footer.navTitle}
          </h4>
          <ul className="flex flex-col md:flex-row md:flex-wrap gap-2.5 md:gap-2">
            <li className="w-full md:w-auto">
              <Link to="/" className={btnClass}>
                {t.nav.acasa}
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link to="/servicii" className={btnClass}>
                {t.nav.servicii}
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link to="/despre" className={btnClass}>
                {t.nav.despre}
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link to="/contact" className={btnClass}>
                {t.nav.contact}
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col text-center md:text-left">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-5">
            {t.footer.contactTitle}
          </h4>
          <ul className="flex flex-col md:flex-row md:flex-wrap gap-2.5 md:gap-2">
            <li className="w-full md:w-auto">
              <Link to="/legal-notice" className={btnClass}>
                {t.footer.impressum}
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link to="/confidentiality" className={btnClass}>
                {t.footer.datenschutz}
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link to="/cookies" className={btnClass}>
                {t.footer.cookies}
              </Link>
            </li>
            <li className="w-full md:w-auto">
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

          <div className="mt-8 pt-5 border-t border-neutral-200/60 w-full max-w-[200px] mx-auto md:mx-0">
            <span className="text-[13px] font-semibold text-neutral-800 block">
              {t.footer.tara}
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-8">
        <div className="border-t border-neutral-200/60 pt-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-3">
          <p className="text-[11px] text-neutral-500 tracking-wide order-1 md:order-none">
            {t.footer.company_info}
          </p>
          <p className="text-[11px] text-neutral-400 order-2 md:order-none">
            © {new Date().getFullYear()} Ramona's Mobile Massage
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
