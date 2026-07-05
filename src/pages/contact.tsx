import { useState, useRef } from "react";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { BotanicalSVG } from "../components/BotanicalSVG";
import { toast } from "sonner";
import { Toaster } from "../components/ui/sonner";
import { useLanguage } from "../context/LanguageContext";
import { Helmet } from "react-helmet-async";

const EMAILJS_SERVICE_ID = "service_4dr2jvh";
const EMAILJS_TEMPLATE_ID = "template_mhm79u4";
const EMAILJS_PUBLIC_KEY = "pwzMV43GtFSGfICCU";

export function Contact() {
  const { t } = useLanguage();
  const s = t.contactPage;
  const formRef = useRef<HTMLFormElement>(null);

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setSent(true);
      toast.success(t.contactPage.form.toastSuccess);
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      toast.error(
        "A apărut o eroare. Încearcă din nou sau scrie-ne direct pe email.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden bg-bg text-ink antialiased min-h-screen">
      <Helmet>
        <title>{s.metaTitle || "Contact | Ramona's Mobile Massage"}</title>
        <meta name="description" content={s.metaDesc} />
      </Helmet>
      <Toaster />

      <BotanicalSVG
        variant="branch"
        className="pointer-events-none absolute -left-10 top-10 sm:top-20 w-48 sm:w-72 text-sage-soft/40 hidden sm:block"
      />
      <BotanicalSVG
        variant="bloom"
        className="pointer-events-none absolute right-10 sm:right-20 top-20 sm:top-40 w-16 sm:w-20 text-ink/5"
      />

      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 pt-8 sm:pt-20 lg:pt-24 pb-16 sm:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 z-10 relative">
        <div className="lg:col-span-5">
          <div className="text-center lg:text-left">
            <h1 className="mt-3 sm:mt-4 text-display text-[30px] sm:text-5xl md:text-6xl leading-[1.1] sm:leading-[1.05] tracking-tight font-light">
              {t.contactPage.titlu1}{" "}
              <span className="italic text-brand font-normal">
                {t.contactPage.titluItalic}
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-ink-muted leading-relaxed font-light">
              {t.contactPage.descriere}
            </p>
          </div>

          <ul className="mt-8 sm:mt-10 space-y-6 sm:space-y-5 text-sm">
            <li className="flex gap-3 items-start">
              <Mail className="h-5 w-5 text-brand mt-0.5 shrink-0" />
              <div>
                <div className="text-ink-muted text-xs sm:text-sm mb-0.5">
                  {t.contactPage.infoMailSub}
                </div>
                <div className="text-ink font-medium">
                  ramonasmobilemassage@gmail.com
                </div>
              </div>
            </li>

            <li>
              <a
                href="https://wa.me/4917663167411"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-start group"
              >
                <WhatsappIcon className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                <div>
                  <div className="text-ink-muted text-xs sm:text-sm mb-0.5">
                    {t.contactPage.infoWhatsappSub || "Message us on WhatsApp"}
                  </div>
                  <div className="text-ink group-hover:text-brand transition-colors font-medium">
                    +49 176 63167411
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/ramona%E2%80%99s-mobile-massage-nrw-6b8a85351/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-start group"
              >
                <LinkedinIcon className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                <div>
                  <div className="text-ink-muted text-xs sm:text-sm mb-0.5">
                    {t.contactPage.infoLinkedinSub || "Connect on LinkedIn"}
                  </div>
                  <div className="text-ink group-hover:text-brand transition-colors font-medium">
                    LinkedIn
                  </div>
                </div>
              </a>
            </li>

            <li className="flex gap-3 items-start">
              <MapPin className="h-5 w-5 text-brand mt-0.5 shrink-0" />
              <div>
                <div className="text-ink-muted text-xs sm:text-sm mb-0.5">
                  {t.contactPage.infoMapTitle}
                </div>
                <div className="text-ink font-medium">
                  {t.contactPage.infoMapSub}
                </div>
              </div>
            </li>
          </ul>
        </div>

        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="lg:col-span-7 bg-surface border border-border-soft rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-ink/5 relative"
        >
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            <Field label={t.contactPage.form.name} id="name">
              <Input
                id="name"
                name="name"
                required
                className="h-12 sm:h-11 rounded-xl text-[16px] sm:text-sm bg-bg-soft border-border-soft focus-visible:ring-brand focus-visible:border-brand text-ink"
              />
            </Field>
            <Field label={t.contactPage.form.company} id="company">
              <Input
                id="company"
                name="company"
                required
                className="h-12 sm:h-11 rounded-xl text-[16px] sm:text-sm bg-bg-soft border-border-soft focus-visible:ring-brand focus-visible:border-brand text-ink"
              />
            </Field>
            <Field label={t.contactPage.form.email} id="email">
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="h-12 sm:h-11 rounded-xl text-[16px] sm:text-sm bg-bg-soft border-border-soft focus-visible:ring-brand focus-visible:border-brand text-ink"
              />
            </Field>
            <Field label={t.contactPage.form.phone} id="phone">
              <Input
                id="phone"
                name="phone"
                className="h-12 sm:h-11 rounded-xl text-[16px] sm:text-sm bg-bg-soft border-border-soft focus-visible:ring-brand focus-visible:border-brand text-ink"
              />
            </Field>
            <Field label={t.contactPage.form.size} id="size">
              <select
                id="size"
                name="size"
                className="h-12 sm:h-11 w-full rounded-xl border border-border-soft bg-bg-soft px-3 text-[16px] sm:text-sm outline-none focus:ring-1 focus:ring-brand focus:border-brand text-ink"
              >
                {t.contactPage.form.sizeOptions.map((opt: string) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </Field>
            <Field label={t.contactPage.form.topic} id="topic">
              <select
                id="topic"
                name="topic"
                className="h-12 sm:h-11 w-full rounded-xl border border-border-soft bg-bg-soft px-3 text-[16px] sm:text-sm outline-none focus:ring-1 focus:ring-brand focus:border-brand text-ink"
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
                name="message"
                rows={4}
                className="rounded-xl text-[16px] sm:text-sm resize-none bg-bg-soft border-border-soft focus-visible:ring-brand focus-visible:border-brand text-ink"
                placeholder={t.contactPage.form.placeholder}
              />
            </Field>
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={loading || sent}
            className="mt-6 sm:mt-7 rounded-full w-full sm:w-auto px-8 h-12 sm:h-12 bg-ink text-surface hover:bg-brand transition-colors duration-300 shadow-lg shadow-ink/10 disabled:opacity-70"
          >
            {loading ? (
              <div className="flex items-center justify-center font-bold tracking-wide">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Se trimite...
              </div>
            ) : sent ? (
              t.contactPage.form.btnSent
            ) : (
              <div className="flex items-center justify-center font-bold tracking-wide">
                {t.contactPage.form.btnSend} <Send className="ml-2 h-4 w-4" />
              </div>
            )}
          </Button>
          <p className="mt-5 text-[11px] sm:text-xs text-ink-muted text-center sm:text-left font-light">
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
        className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-ink-muted ml-1"
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
