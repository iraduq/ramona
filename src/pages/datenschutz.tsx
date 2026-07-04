import { useLanguage } from "../context/LanguageContext";
import { LegalLayout, LegalSection } from "../components/LegalLayout";
import { Helmet } from "react-helmet-async";
import { COMPANY } from "../data/company";

export function DatenschutzPage() {
  const { t } = useLanguage();
  const d = t.datenschutzPage;
  const s = d.sections;

  const responsiveTitle = (
    <span className="block w-full max-w-full break-words hyphens-auto [word-break:break-word] tracking-tight">
      {d.title}
    </span>
  );

  return (
    <LegalLayout eyebrow={d.eyebrow} title={responsiveTitle} intro={d.intro}>
      <Helmet>
        <title>{d.metaTitle}</title>
        <meta name="description" content={d.metaDesc} />
      </Helmet>

      <div
        className="w-full max-w-full overflow-hidden break-words hyphens-auto [word-break:break-word] text-neutral-600 dark:text-neutral-400"
        lang="de"
      >
        <LegalSection title={s.controller}>
          <p className="mb-4 leading-relaxed">{s.controllerDesc}</p>
          <p className="font-semibold text-neutral-800 dark:text-neutral-200">
            {COMPANY.name} — {COMPANY.form}
          </p>
          <p className="leading-relaxed">
            {COMPANY.street}
            <br />
            {COMPANY.city}, {COMPANY.country}
          </p>
          <p className="mt-3 text-[14px] leading-relaxed">
            <span className="font-medium text-neutral-800 dark:text-neutral-200">
              {s.phone}:
            </span>{" "}
            <a
              href={`tel:${COMPANY.phone}`}
              className="text-neutral-800 dark:text-neutral-200 font-medium hover:text-[#b7744f] transition-colors"
            >
              {COMPANY.phone}
            </a>
            <br />
            <span className="font-medium text-neutral-800 dark:text-neutral-200">
              {s.email}:
            </span>{" "}
            <a
              href={`mailto:${COMPANY.email}`}
              className="text-neutral-800 dark:text-neutral-200 font-medium underline hover:text-[#b7744f] transition-colors break-all inline-block align-middle"
            >
              {COMPANY.email}
            </a>
          </p>
        </LegalSection>

        <LegalSection title={s.rights}>
          <p className="mb-4 leading-relaxed">{s.rightsDesc}</p>
          <ul className="list-disc pl-5 pr-2 space-y-2 mb-4 text-sm sm:text-base">
            {s.rightsList.map((item: string, idx: number) => (
              <li key={idx} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
          <p className="mb-4 font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed">
            {s.consentWithdraw}
          </p>
          <div className="text-[14px] leading-relaxed">
            <p className="mb-2">{s.complaint}</p>
            <span className="text-neutral-600 dark:text-neutral-400 block mb-1">
              {s.complaintLink}
            </span>{" "}
            <a
              href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-800 dark:text-neutral-200 underline hover:text-[#b7744f] transition-colors break-all inline-block font-medium w-full"
            >
              https://www.bfdi.bund.de
            </a>
          </div>
        </LegalSection>

        <LegalSection title={s.contactForm}>
          <p className="font-semibold text-neutral-800 dark:text-neutral-200 mb-1 mt-2">
            {s.contactFormPurposes}
          </p>
          <p className="mb-4 leading-relaxed text-justify sm:text-left">
            {s.contactFormDesc}
          </p>

          <p className="font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
            {s.legalBasis}
          </p>
          <p className="mb-4 leading-relaxed">{s.legalBasisDesc}</p>

          <p className="font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
            {s.recipients}
          </p>
          <p className="mb-4 leading-relaxed">{s.recipientsDesc}</p>

          <p className="font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
            {s.retention}
          </p>
          <p className="mb-4 leading-relaxed">{s.retentionDesc}</p>

          <p className="font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
            {s.requiredData}
          </p>
          <p className="mb-4 leading-relaxed">{s.requiredDataDesc}</p>

          <p className="font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
            {s.objectRight}
          </p>
          <p className="leading-relaxed">{s.objectRightDesc}</p>
        </LegalSection>

        <LegalSection title={s.cookies}>
          <p className="mb-4 leading-relaxed">{s.cookiesDesc}</p>
          <p className="font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
            {s.cookiesDelete}
          </p>
          <p className="leading-relaxed">{s.cookiesDeleteDesc}</p>
        </LegalSection>

        <LegalSection title={s.techCookies}>
          <p className="mb-4 leading-relaxed">{s.techCookiesDesc}</p>
          <p className="font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
            {s.techCookiesBasis}
          </p>
          <p className="mb-4 leading-relaxed">{s.techCookiesBasisDesc}</p>
          <p className="font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
            {s.techCookiesRetention}
          </p>
          <p className="leading-relaxed">{s.techCookiesRetentionDesc}</p>
        </LegalSection>

        <LegalSection title={s.art21Title}>
          <p className="font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
            {s.art21Case}
          </p>
          <p className="mb-4 leading-relaxed">{s.art21Desc}</p>
          <p className="font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
            {s.art21Recipient}
          </p>
          <p className="leading-relaxed">
            {s.art21RecipientDesc}{" "}
            <a
              href={`mailto:${COMPANY.email}`}
              className="text-neutral-800 dark:text-neutral-200 font-medium underline hover:text-[#b7744f] transition-colors break-all inline-block align-middle"
            >
              {COMPANY.email}
            </a>
          </p>
        </LegalSection>

        <LegalSection title={s.changesTitle}>
          <p className="mb-6 leading-relaxed">{s.changesDesc}</p>

          <h4 className="font-bold text-[14px] uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-2">
            {s.questionsTitle}
          </h4>
          <p className="mb-6 leading-relaxed">{s.questionsDesc}</p>
        </LegalSection>
      </div>
    </LegalLayout>
  );
}

export default DatenschutzPage;
