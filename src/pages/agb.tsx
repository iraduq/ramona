import { useLanguage } from "../context/LanguageContext";
import { translations } from "../context/translations";
import {
  LegalLayout,
  LegalSection,
  LegalCallout,
  LegalFooterNav,
} from "../components/LegalLayout";

export default function AGBPage() {
  const { language } = useLanguage();
  const t = translations[language].agbPage;

  return (
    <LegalLayout
      eyebrow={t.eyebrow}
      title={t.title}
      intro={t.intro}
      operator="Ramona's Mobile Massage"
      updated="11.2026"
    >
      <LegalCallout>{t.callout}</LegalCallout>

      {t.sections.map((sec, i) => (
        <LegalSection key={i} index={sec.index} title={sec.title}>
          <p>{sec.content}</p>
        </LegalSection>
      ))}

      <LegalSection index="04." title={t.cancellation.title}>
        <ul className="list-disc pl-5 space-y-2">
          {t.cancellation.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </LegalSection>

      <LegalFooterNav language={language} />
    </LegalLayout>
  );
}
