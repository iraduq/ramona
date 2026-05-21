import { Link } from "react-router-dom";
import { BotanicalSVG } from "./BotanicalSVG";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  operator: string;
  updated: string;
  children: ReactNode;
};

export function LegalLayout({
  eyebrow,
  title,
  intro,
  operator,
  updated,
  children,
}: Props) {
  return (
    <div className="relative overflow-hidden bg-background">
      <BotanicalSVG
        variant="branch"
        className="pointer-events-none absolute -left-16 top-32 w-72 text-sage/20"
      />
      <BotanicalSVG
        variant="bloom"
        className="pointer-events-none absolute right-10 top-96 w-24 text-accent/10 hidden lg:block"
      />

      <header className="mx-auto max-w-4xl px-6 lg:px-10 pt-20 pb-14 relative">
        <p className="eyebrow text-accent">{eyebrow}</p>
        <h1 className="mt-4 text-display text-5xl md:text-6xl leading-[1.05] text-foreground">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          {intro}
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-xs uppercase tracking-[0.18em] text-muted-foreground font-mono">
          <span>
            <span className="text-foreground/40">Operator · </span>
            <span className="text-foreground">{operator}</span>
          </span>
          <span>
            <span className="text-foreground/40">Update · </span>
            <span className="text-foreground">{updated}</span>
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 lg:px-10 pb-24 space-y-10">
        {children}
      </div>
    </div>
  );
}

export function LegalSection({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="grid md:grid-cols-12 gap-6 md:gap-10 border-t border-border/60 pt-10">
      <div className="md:col-span-3">
        <div className="text-display text-5xl text-accent/30 leading-none">
          {index}
        </div>
        <h2 className="mt-3 text-lg font-medium text-foreground leading-tight">
          {title}
        </h2>
      </div>
      <div className="md:col-span-9 text-foreground/80 leading-relaxed space-y-4 text-[15px]">
        {children}
      </div>
    </section>
  );
}

export function LegalBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block text-[10px] uppercase tracking-[0.22em] font-mono text-accent border border-accent/30 bg-accent/5 px-2.5 py-1 rounded">
      {children}
    </span>
  );
}

export function LegalCallout({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-2 border-accent bg-accent/5 px-5 py-4 text-sm text-foreground/85 rounded-r-lg">
      {children}
    </div>
  );
}

export function LegalFooterNav({ language }: { language: "DE" | "EN" }) {
  const labels =
    language === "DE"
      ? {
          agb: "AGB",
          privacy: "Datenschutz",
          cookies: "Cookies",
          impressum: "Impressum",
          home: "← Startseite",
        }
      : {
          agb: "Terms",
          privacy: "Privacy",
          cookies: "Cookies",
          impressum: "Imprint",
          home: "← Home",
        };

  return (
    <nav className="border-t border-border/60 pt-8 mt-12 flex flex-wrap gap-x-8 gap-y-2 text-sm">
      <Link to="/" className="text-muted-foreground hover:text-foreground">
        {labels.home}
      </Link>
      <Link to="/agb" className="text-accent underline underline-offset-4">
        {labels.agb}
      </Link>
      <Link
        to="/confidentiality"
        className="text-accent underline underline-offset-4"
      >
        {labels.privacy}
      </Link>
      <Link to="/cookies" className="text-accent underline underline-offset-4">
        {labels.cookies}
      </Link>
      <Link
        to="/legal-notice"
        className="text-accent underline underline-offset-4"
      >
        {labels.impressum}
      </Link>
    </nav>
  );
}
