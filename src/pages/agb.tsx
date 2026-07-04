import { useEffect } from "react"; // <-- Importăm useEffect pentru a schimba datele în browser
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../context/translations";
import {
  LegalLayout,
  LegalSection,
  LegalCallout,
} from "../components/LegalLayout";

export default function AGBPage() {
  const { language } = useLanguage();
  const t = translations[language].agbPage;

  useEffect(() => {
    document.title = t.metaTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", t.metaDesc);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = t.metaDesc;
      document.head.appendChild(meta);
    }
  }, [t.metaTitle, t.metaDesc]);

  return (
    <LegalLayout eyebrow={t.eyebrow} title={t.title} intro={t.intro}>
      <LegalCallout>{t.callout}</LegalCallout>

      {t.sections.map((sec, i) => (
        <LegalSection key={i} title={sec.title}>
          <p>{sec.content}</p>
        </LegalSection>
      ))}

      <LegalSection title={t.cancellation.title}>
        <ul className="list-disc pl-5 space-y-2">
          {t.cancellation.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </LegalSection>
    </LegalLayout>
  );
}
