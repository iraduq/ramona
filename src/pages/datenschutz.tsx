import { useLanguage } from "../context/LanguageContext";
import {
  LegalLayout,
  LegalSection,
  LegalBadge,
} from "../components/LegalLayout";
import { Helmet } from "react-helmet-async";

export const COMPANY = {
  name: "Ramona [Nachname]",
  form: "Einzelunternehmen",
  street: "[Straße und Hausnummer]",
  city: "[PLZ] [Ort]",
  country: "Deutschland",
  phone: "+49 176 63167411",
  email: "hello@ramonamassage.de",
  taxId: "[Steuernummer]",
  vat: "[USt-IdNr.]",
};

export function DatenschutzPage() {
  const { t } = useLanguage();
  const d = t.datenschutzPage;

  return (
    <LegalLayout
      eyebrow={d.eyebrow}
      title={d.title}
      intro={d.intro}
      operator="Ramona's Mobile Massage"
      updated="21.05.2026"
    >
      <Helmet>
        <title>{d.metaTitle}</title>
        <meta name="description" content={d.metaDesc} />
      </Helmet>
      <LegalSection index="01." title={d.sections.controller}>
        <p>{d.sections.controllerDesc}</p>
        <p>
          Ramona [Nachname]
          <br />
          [Adresse]
          <br />
          <span className="text-foreground/50">{d.sections.email} · </span>
          <a
            href="mailto:hello@ramonamassage.de"
            className="text-accent underline"
          >
            {COMPANY.email}
          </a>
        </p>
      </LegalSection>

      <LegalSection index="02." title={d.sections.dataTypes}>
        <p className="font-medium text-foreground">{d.sections.providedData}</p>
        <p>{d.sections.providedDesc}</p>
        <p className="font-medium text-foreground mt-4">
          {d.sections.autoData}
        </p>
        <p>{d.sections.autoDesc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <LegalBadge>✓ {d.sections.noSensitive}</LegalBadge>
          <LegalBadge>✓ {d.sections.noThirdParty}</LegalBadge>
          <LegalBadge>✓ {d.sections.noMinors}</LegalBadge>
        </div>
      </LegalSection>

      {/* Continuă restul secțiunilor folosind t.datenschutzPage.sections... */}
    </LegalLayout>
  );
}
export default DatenschutzPage;
