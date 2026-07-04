import { BotanicalSVG } from "./BotanicalSVG";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  children: ReactNode;
};

export function LegalLayout({ eyebrow, title, intro, children }: Props) {
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

      <header className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-10 pt-6 sm:pt-20 pb-10 sm:pb-14 relative">
        <p className="eyebrow text-accent">{eyebrow}</p>

        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-display leading-tight text-foreground break-words">
          {title}
        </h1>

        <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          {intro}
        </p>
      </header>

      <main className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-10 pb-20 sm:pb-24 space-y-8 sm:space-y-10">
        {children}
      </main>
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-border/60 pt-8 sm:pt-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-10">
        <div className="md:col-span-3">
          <h2 className="text-lg font-semibold text-foreground leading-tight">
            {title}
          </h2>
        </div>

        <div className="md:col-span-9 space-y-4 text-[15px] sm:text-base leading-7 text-foreground/80 break-words">
          {children}
        </div>
      </div>
    </section>
  );
}

export function LegalBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-accent/30 bg-accent/5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.22em] text-accent">
      {children}
    </span>
  );
}

export function LegalCallout({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-accent/20 bg-accent/5 p-4 sm:p-5 text-sm leading-7 text-foreground/85">
      {children}
    </div>
  );
}

export default LegalLayout;
