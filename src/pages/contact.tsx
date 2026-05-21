import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
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
      <BotanicalSVG
        variant="branch"
        className="pointer-events-none absolute -left-10 top-20 w-72 text-sage/30"
      />
      <BotanicalSVG
        variant="bloom"
        className="pointer-events-none absolute right-20 top-40 w-20 text-foreground/10"
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-24 grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <p className="eyebrow">{t.contactPage.badge}</p>
          <h1 className="mt-4 text-display text-5xl md:text-6xl leading-[1.05]">
            {t.contactPage.titlu1}{" "}
            <span className="italic text-accent">
              {t.contactPage.titluItalic}
            </span>
            {t.contactPage.titlu2}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {t.contactPage.descriere}
          </p>

          <ul className="mt-10 space-y-5 text-sm">
            <li className="flex gap-3 items-start">
              <Mail className="h-5 w-5 text-accent mt-0.5" />
              <div>
                <div className="text-foreground">hello@ramonamassage.de</div>
                <div className="text-muted-foreground">
                  {t.contactPage.infoMailSub}
                </div>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <Phone className="h-5 w-5 text-accent mt-0.5" />
              <div>
                <div className="text-foreground">+49 176 63167411</div>
                <div className="text-muted-foreground">
                  {t.contactPage.infoPhoneSub}
                </div>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <MapPin className="h-5 w-5 text-accent mt-0.5" />
              <div>
                <div className="text-foreground">Münsterland · NRW</div>
                <div className="text-muted-foreground">
                  {t.contactPage.infoMapSub}
                </div>
              </div>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="lg:col-span-7 bg-card border border-border/60 rounded-3xl p-8 md:p-10 shadow-card relative"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label={t.contactPage.form.name} id="name">
              <Input id="name" required className="h-11 rounded-xl" />
            </Field>
            <Field label={t.contactPage.form.company} id="company">
              <Input id="company" required className="h-11 rounded-xl" />
            </Field>
            <Field label={t.contactPage.form.email} id="email">
              <Input
                id="email"
                type="email"
                required
                className="h-11 rounded-xl"
              />
            </Field>
            <Field label={t.contactPage.form.phone} id="phone">
              <Input id="phone" className="h-11 rounded-xl" />
            </Field>
            <Field label={t.contactPage.form.size} id="size">
              <select
                id="size"
                className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm"
              >
                {t.contactPage.form.sizeOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </Field>
            <Field label={t.contactPage.form.topic} id="topic">
              <select
                id="topic"
                className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm"
              >
                {t.contactPage.form.topicOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </Field>
          </div>
          <div className="mt-5">
            <Field label={t.contactPage.form.msg} id="msg">
              <Textarea
                id="msg"
                rows={5}
                className="rounded-xl"
                placeholder={t.contactPage.form.placeholder}
              />
            </Field>
          </div>
          <Button
            type="submit"
            size="lg"
            className="mt-7 rounded-full px-7 h-12"
          >
            {sent ? (
              t.contactPage.form.btnSent
            ) : (
              <>
                {t.contactPage.form.btnSend} <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
          <p className="mt-4 text-xs text-muted-foreground">
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
    <div className="space-y-2">
      <Label
        htmlFor={id}
        className="text-xs uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </Label>
      {children}
    </div>
  );
}

export default Contact;
