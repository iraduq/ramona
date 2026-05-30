import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { BotanicalSVG } from "../components/BotanicalSVG";
import { toast } from "sonner";
import { Toaster } from "../components/ui/sonner";
import { useLanguage } from "../context/LanguageContext";
import { Helmet } from "react-helmet-async";

export function Contact() {
  const { t } = useLanguage();
  const s = t.contactPage;

  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast.success(t.contactPage.form.toastSuccess);
  };

  return (
    <div className="relative overflow-hidden">
      <Helmet>
        <title>{s.metaTitle || "Servicii | Ramona's Mobile Massage"}</title>
        <meta name="description" content={s.metaDesc} />
      </Helmet>
      <Toaster />

      {/* Dimensiuni și poziționări ajustate pentru fundalul botanic pe mobil */}
      <BotanicalSVG
        variant="branch"
        className="pointer-events-none absolute -left-10 top-10 sm:top-20 w-48 sm:w-72 text-sage/30 hidden sm:block"
      />
      <BotanicalSVG
        variant="bloom"
        className="pointer-events-none absolute right-10 sm:right-20 top-20 sm:top-40 w-16 sm:w-20 text-foreground/10"
      />

      {/* Spațieri reduse pe mobil: pt-12, pb-16, gap-10 */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 pt-8 sm:pt-20 lg:pt-24 pb-16 sm:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 z-10 relative">
        {" "}
        {/* Coloana de contact */}
        <div className="lg:col-span-5">
          {/* Centrat pe mobil, stânga pe desktop */}
          <div className="text-center lg:text-left">
            <p className="eyebrow">{t.contactPage.badge}</p>

            <h1 className="mt-3 sm:mt-4 text-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] sm:leading-[1.05]">
              {t.contactPage.titlu1}{" "}
              <span className="italic text-accent">
                {t.contactPage.titluItalic}
              </span>{" "}
              {t.contactPage.titlu2}
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t.contactPage.descriere}
            </p>
          </div>

          <ul className="mt-8 sm:mt-10 space-y-6 sm:space-y-5 text-sm">
            <li className="flex gap-3 items-start">
              <Mail className="h-5 w-5 text-accent mt-0.5 shrink-0" />
              <div>
                <div className="text-foreground font-medium">
                  ramonasmobilemassage@gmail.com
                </div>
                <div className="text-muted-foreground text-xs sm:text-sm mt-0.5">
                  {t.contactPage.infoMailSub}
                </div>
              </div>
            </li>

            {/* WhatsApp Section */}
            <li>
              <a
                href="https://wa.me/4917663167411"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-start group"
              >
                <WhatsappIcon className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <div className="text-foreground group-hover:text-accent transition-colors font-medium">
                    +49 176 63167411
                  </div>
                  <div className="text-muted-foreground text-xs sm:text-sm mt-0.5">
                    {t.contactPage.infoWhatsappSub || "Message us on WhatsApp"}
                  </div>
                </div>
              </a>
            </li>

            {/* LinkedIn Section */}
            <li>
              <a
                href="https://www.linkedin.com/in/ramona%E2%80%99s-mobile-massage-nrw-6b8a85351/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-start group"
              >
                <LinkedinIcon className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <div className="text-foreground group-hover:text-accent transition-colors font-medium">
                    LinkedIn
                  </div>
                  <div className="text-muted-foreground text-xs sm:text-sm mt-0.5">
                    {t.contactPage.infoLinkedinSub || "Connect on LinkedIn"}
                  </div>
                </div>
              </a>
            </li>

            <li className="flex gap-3 items-start">
              <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
              <div>
                <div className="text-foreground font-medium">
                  Münsterland · NRW
                </div>
                <div className="text-muted-foreground text-xs sm:text-sm mt-0.5">
                  {t.contactPage.infoMapSub}
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* Formular - Padding redus (p-6) pe mobil, rotunjime mai mică */}
        <form
          onSubmit={onSubmit}
          className="lg:col-span-7 bg-card border border-border/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-card relative"
        >
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            <Field label={t.contactPage.form.name} id="name">
              <Input
                id="name"
                required
                className="h-12 sm:h-11 rounded-xl text-[16px] sm:text-sm"
              />
            </Field>
            <Field label={t.contactPage.form.company} id="company">
              <Input
                id="company"
                required
                className="h-12 sm:h-11 rounded-xl text-[16px] sm:text-sm"
              />
            </Field>
            <Field label={t.contactPage.form.email} id="email">
              <Input
                id="email"
                type="email"
                required
                className="h-12 sm:h-11 rounded-xl text-[16px] sm:text-sm"
              />
            </Field>
            <Field label={t.contactPage.form.phone} id="phone">
              <Input
                id="phone"
                className="h-12 sm:h-11 rounded-xl text-[16px] sm:text-sm"
              />
            </Field>
            <Field label={t.contactPage.form.size} id="size">
              <select
                id="size"
                className="h-12 sm:h-11 w-full rounded-xl border border-input bg-background px-3 text-[16px] sm:text-sm outline-none focus:ring-1 focus:ring-ring"
              >
                {t.contactPage.form.sizeOptions.map((opt: string) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </Field>
            <Field label={t.contactPage.form.topic} id="topic">
              <select
                id="topic"
                className="h-12 sm:h-11 w-full rounded-xl border border-input bg-background px-3 text-[16px] sm:text-sm outline-none focus:ring-1 focus:ring-ring"
              >
                {t.contactPage.form.topicOptions.map((opt: string) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </Field>
          </div>

          <div className="mt-4 sm:mt-5">
            <Field label={t.contactPage.form.msg} id="msg">
              <Textarea
                id="msg"
                rows={4}
                className="rounded-xl text-[16px] sm:text-sm resize-none"
                placeholder={t.contactPage.form.placeholder}
              />
            </Field>
          </div>

          {/* Buton setat pe w-full pe mobil pentru a fi ușor de atins */}
          <Button
            type="submit"
            size="lg"
            className="mt-6 sm:mt-7 rounded-full w-full sm:w-auto px-7 h-12 sm:h-12"
          >
            {sent ? (
              t.contactPage.form.btnSent
            ) : (
              <div className="flex items-center justify-center">
                {t.contactPage.form.btnSend} <Send className="ml-2 h-4 w-4" />
              </div>
            )}
          </Button>
          <p className="mt-4 text-[11px] sm:text-xs text-muted-foreground text-center sm:text-left">
            {t.contactPage.form.privacy}
          </p>
        </form>
      </section>
    </div>
  );
}

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5 sm:space-y-2 text-left">
      <Label
        htmlFor={id}
        className="text-[11px] sm:text-xs uppercase tracking-widest text-muted-foreground ml-1"
      >
        {label}
      </Label>
      {children}
    </div>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9l-5.05 1.9" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

export default Contact;
