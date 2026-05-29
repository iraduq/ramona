import { useLanguage } from "../context/LanguageContext";
import {
  LegalLayout,
  LegalSection,
  LegalCallout,
} from "../components/LegalLayout";
import { Helmet } from "react-helmet-async";

const COMPANY = {
  name: "Ramona [Nachname]",
  form: "Einzelunternehmen",
  street: "[Straße]",
  city: "[PLZ] [Ort]",
  country: "Deutschland",
  phone: "+49 176 63167411",
  email: "ramonasmobilemassage@gmail.com",
  taxId: "[Steuernummer]",
  vat: "[USt-IdNr.]",
};

export function ImpressumPage() {
  const { t } = useLanguage();
  const i = t.impressumPage; // Alias pentru acces rapid

  return (
    <LegalLayout
      eyebrow={i.eyebrow}
      title={i.title}
      intro={i.intro}
      operator={COMPANY.name}
      updated="11.2026"
    >
      <Helmet>
        <title>{i.metaTitle}</title>
        <meta name="description" content={i.metaDesc} />
      </Helmet>
      <LegalSection index="01." title={i.sections.provider}>
        <p>
          {COMPANY.name}
          <br />
          {COMPANY.form}
          <br />
          {COMPANY.street}
          <br />
          {COMPANY.city}
          <br />
          {COMPANY.country}
        </p>
        <LegalCallout>{i.sections.disclaimer}</LegalCallout>
      </LegalSection>

      <LegalSection index="02." title={i.sections.contact}>
        <p>
          <span className="text-foreground/50">{i.sections.phone} · </span>
          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
            className="text-accent underline"
          >
            {COMPANY.phone}
          </a>
          <br />
          <span className="text-foreground/50">{i.sections.email} · </span>
          <a href={`mailto:${COMPANY.email}`} className="text-accent underline">
            {COMPANY.email}
          </a>
        </p>
      </LegalSection>

      <LegalSection index="03." title={i.sections.tax}>
        <p>
          <span className="text-foreground/50">{i.sections.taxNumber}</span>
          {COMPANY.taxId}
          <br />
          <span className="text-foreground/50">USt-IdNr.: </span>
          {COMPANY.vat}
        </p>
        <p className="text-sm text-muted-foreground">
          {i.sections.smallBusiness}
        </p>
      </LegalSection>

      {/* Continuă restul secțiunilor similar folosind i.sections... */}
    </LegalLayout>
  );
}
export default ImpressumPage;
