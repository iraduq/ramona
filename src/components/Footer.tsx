import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-[#f8f6f3] border-t border-neutral-200 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* ───── BRAND ───── */}
        <div className="col-span-1 md:col-span-2 space-y-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-neutral-200">
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
              <span className="text-[14px] font-bold tracking-[0.15em] uppercase text-neutral-900">
                Ramona's
              </span>
              <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-[#7a6456]">
                Mobile Balance Therapie
              </span>
            </div>
          </Link>

          <p className="text-[13px] text-neutral-700 leading-relaxed max-w-sm pt-2">
            {t.footer.descriere}
          </p>

          <p className="text-[12px] font-bold text-[#7a6456] uppercase tracking-wider">
            {t.footer.regiune}
          </p>

          {/* ───── CONTACT QUICK (LEGAL BEST PRACTICE) ───── */}
          <div className="pt-3 space-y-1 text-[12px] text-neutral-700">
            <a
              href="mailto:hello@ramonamassage.de"
              className="hover:text-black"
            >
              hello@ramonamassage.de
            </a>
            <br />
            <a href="tel:+4917663167411" className="hover:text-black">
              +49 176 63167411
            </a>
          </div>
        </div>

        {/* ───── NAV ───── */}
        <div className="space-y-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-900">
            {t.footer.navTitle}
          </p>

          <ul className="space-y-3">
            {["/", "/services", "/about-us", "/contact"].map((path) => (
              <li key={path}>
                <Link
                  to={path}
                  className="text-[13px] font-medium text-neutral-700 hover:text-[#4a3b32] transition-colors"
                >
                  {path === "/"
                    ? t.nav.acasa
                    : t.nav[path.replace("/", "") as keyof typeof t.nav]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ───── LEGAL ───── */}
        <div className="space-y-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-900">
            {t.footer.contactTitle}
          </p>

          <ul className="space-y-3">
            <li>
              <Link
                to="/legal-notice"
                className="text-[13px] font-medium hover:text-[#4a3b32]"
              >
                {t.footer.impressum}
              </Link>
            </li>

            <li>
              <Link
                to="/confidentiality"
                className="text-[13px] font-medium hover:text-[#4a3b32]"
              >
                {t.footer.datenschutz}
              </Link>
            </li>

            {/* GDPR / Cookies (IMPORTANT IN GERMANY) */}
            <li>
              <Link
                to="/cookies"
                className="text-[13px] font-medium hover:text-[#4a3b32]"
              >
                Cookies
              </Link>
            </li>

            {/* EU ODR (OBLIGATORIU pentru UE B2C) */}
            <li>
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-medium hover:text-[#4a3b32]"
              >
                EU-Streitbeilegung
              </a>
            </li>
          </ul>

          <div className="pt-4 border-t border-neutral-300">
            <p className="text-[12px] font-bold text-neutral-800">
              {t.footer.tara}
            </p>
          </div>
        </div>
      </div>

      {/* ───── LEGAL COMPANY LINE (IMPORTANT IN GERMANY) ───── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-10 text-[10px] text-neutral-500 leading-relaxed">
        Ramona [Nachname] · Mobile Balance Therapie · Deutschland ·
        Verantwortlich gemäß §5 DDG & §18 MStV
      </div>

      {/* ───── COPYRIGHT ───── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-6 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row justify-between gap-4">
        <p className="text-[11px] text-neutral-600 uppercase tracking-widest font-bold">
          © {new Date().getFullYear()} Ramona's Mobile Balance Therapie
        </p>

        <p className="text-[11px] text-[#7a6456] italic font-bold tracking-widest">
          {t.footer.moto}
        </p>
      </div>
    </footer>
  );
}
