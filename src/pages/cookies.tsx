import { useLanguage } from "../context/LanguageContext";
import { translations } from "../context/translations";
import { Helmet } from "react-helmet-async";
import {
  LegalLayout,
  LegalSection,
  LegalCallout,
  LegalFooterNav,
} from "../components/LegalLayout";

export function CookiesPage() {
  const { language } = useLanguage();
  const t = translations[language].cookiePage;

  return (
    <LegalLayout eyebrow={t.eyebrow} title={t.title} intro={t.intro}>
      <Helmet>
        <title>{t.metaTitle}</title>
      </Helmet>

      <LegalSection title={t.sections.whatAreCookies}>
        <p>{t.sections.whatAreCookiesDesc}</p>
      </LegalSection>

      <LegalSection title={t.sections.types}>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border border-border/60 rounded-xl p-5 bg-card">
            <div className="text-xs uppercase tracking-[0.2em] font-mono text-accent">
              {t.sections.session}
            </div>
            <p className="mt-2 text-sm">{t.sections.sessionDesc}</p>
          </div>
          <div className="border border-border/60 rounded-xl p-5 bg-card">
            <div className="text-xs uppercase tracking-[0.2em] font-mono text-accent">
              {t.sections.persistent}
            </div>
            <p className="mt-2 text-sm">{t.sections.persistentDesc}</p>
          </div>
        </div>
      </LegalSection>

      <LegalSection title={t.sections.purposes}>
        <ol className="space-y-3">
          {t.sections.purposeList.map((item, i) => (
            <li key={i}>
              <span className="text-accent font-mono mr-2">
                [{i + 1 < 10 ? `0${i + 1}` : i + 1}]
              </span>
              {item}
            </li>
          ))}
        </ol>
      </LegalSection>

      <LegalSection title={t.sections.manage}>
        <p>{t.sections.manageDesc}</p>
        <LegalCallout>{t.sections.note}</LegalCallout>
      </LegalSection>

      <LegalSection title={t.sections.tableTitle}>
        <div className="overflow-x-auto border border-border/60 rounded-xl">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-xs uppercase tracking-[0.15em] font-mono text-muted-foreground">
              <tr>
                <th className="py-3 px-4 text-left">{t.sections.table.name}</th>
                <th className="py-3 px-4 text-left">
                  {t.sections.table.category}
                </th>
                <th className="py-3 px-4 text-left">
                  {t.sections.table.purpose}
                </th>
                <th className="py-3 px-4 text-left">
                  {t.sections.table.duration}
                </th>
              </tr>
            </thead>
            <tbody className="text-foreground/85">
              <tr className="border-t border-border/60">
                <td className="py-3 px-4 font-mono text-xs">site-lang</td>
                <td className="py-3 px-4">{t.sections.table.essential}</td>
                <td className="py-3 px-4">{t.sections.table.lang}</td>
                <td className="py-3 px-4">Persistent</td>
              </tr>
              <tr className="border-t border-border/60">
                <td className="py-3 px-4 font-mono text-xs">CookieConsent</td>
                <td className="py-3 px-4">{t.sections.table.essential}</td>
                <td className="py-3 px-4">Cookiebot consent state</td>
                <td className="py-3 px-4">12 {t.sections.table.months}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          {t.sections.footer}
        </p>
      </LegalSection>

      <LegalFooterNav language={language} />
    </LegalLayout>
  );
}

export default CookiesPage;
