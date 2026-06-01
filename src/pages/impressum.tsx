import { useLanguage } from "../context/LanguageContext";
import { LegalLayout, LegalSection } from "../components/LegalLayout";
import { Helmet } from "react-helmet-async";

const COMPANY = {
  name: "Ramona Aciu",
  form: "Einzelunternehmen",
  street: "Schorlemerstraße 11",
  city: "48351 Everswinkel",
  country: "Deutschland",
  phone: "+49 176 63167411",
  email: "ramonasmobilemassage@gmail.com",
  taxId: "",
  vat: "",
};

export function ImpressumPage() {
  const { t } = useLanguage();
  const i = t.impressumPage; // Alias pentru acces rapid

  return (
    <LegalLayout eyebrow={i.eyebrow} title={i.title} intro={i.intro}>
      <Helmet>
        <title>{i.metaTitle}</title>
        <meta name="description" content={i.metaDesc} />
      </Helmet>

      {/* FURNIZOR / INHABER */}
      <LegalSection title={i.sections.provider}>
        <p>
          {COMPANY.form} {COMPANY.name}
          <br />
          {COMPANY.street}
          <br />
          {COMPANY.city}
          <br />
          {COMPANY.country}
        </p>
      </LegalSection>

      {/* CONTACT */}
      <LegalSection title={i.sections.contact}>
        <p>
          <span className="text-foreground/50">{i.sections.phone} </span>
          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
            className="text-accent underline"
          >
            {COMPANY.phone}
          </a>
          <br />
          <span className="text-foreground/50">{i.sections.email} </span>
          <a href={`mailto:${COMPANY.email}`} className="text-accent underline">
            {COMPANY.email}
          </a>
        </p>
      </LegalSection>

      {/* TAXE */}
      <LegalSection title={i.sections.tax}>
        <p>
          <span className="text-foreground/50">{i.sections.taxNumber} </span>
          {COMPANY.taxId}
          {/* Afișăm USt-IdNr doar dacă există vreo valoare în COMPANY.vat pe viitor */}
          {COMPANY.vat && (
            <>
              <br />
              <span className="text-foreground/50">USt-IdNr.: </span>
              {COMPANY.vat}
            </>
          )}
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          {i.sections.smallBusiness}
        </p>
      </LegalSection>

      {/* TITLU PROFESIONAL */}
      <LegalSection title={i.sections.titleLabel}>
        <p>
          {i.sections.profession}
          <br />
          <span className="text-foreground/50">{i.sections.grantedIn}</span>
        </p>
      </LegalSection>

      {/* RESPONSABILITATE EDITORIALĂ */}
      <LegalSection title={i.sections.responsibility}>
        <p>{i.sections.responsibilityName}</p>
      </LegalSection>

      {/* SOLUȚIONAREA LITIGIILOR */}
      <LegalSection title={i.sections.dispute}>
        <p>
          {i.sections.disputeDesc}{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline break-all"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p className="mt-4">{i.sections.disputeObligation}</p>
      </LegalSection>

      {/* RĂSPUNDEREA PENTRU CONȚINUT & LINK-URI */}
      <LegalSection title={i.sections.liability}>
        <p className="leading-relaxed">{i.sections.liabilityDesc}</p>
      </LegalSection>

      {/* DREPTURI DE AUTOR */}
      <LegalSection title={i.sections.copyright}>
        <p className="leading-relaxed">{i.sections.copyrightDesc}</p>
      </LegalSection>
    </LegalLayout>
  );
}

export default ImpressumPage;
