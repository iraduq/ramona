import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Briefcase,
  Truck,
} from "lucide-react";
import { BotanicalSVG } from "../components/BotanicalSVG";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

export function Servicii() {
  const { t } = useLanguage();
  const s = t.servicesPage;

  return (
    <div className="w-full min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Helmet>
        <title>{s.metaTitle || "Servicii | Ramona's Mobile Massage"}</title>
        <meta
          name="description"
          content={s.metaDesc || "Descoperă serviciile noastre de masaj mobil."}
        />
      </Helmet>

      {/* ─── HERO ─── */}
      <section className="relative border-b border-border/40 bg-gradient-to-b from-muted/30 to-transparent pt-10 pb-8 lg:pt-16 lg:pb-12 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -right-24 -top-32 w-[380px] h-[380px] rounded-full bg-muted/50 blur-[80px]" />
          <div className="absolute -left-16 bottom-0 w-[220px] h-[220px] rounded-full bg-accent/5 blur-[60px]" />
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [-12, -10, -12] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-8 top-4 w-48 opacity-30 hidden lg:block"
          >
            <BotanicalSVG variant="branch" className="w-full h-full" />
          </motion.div>
        </div>

        <div className="relative mx-auto max-w-6xl px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-1.5 text-[9px] font-mono tracking-[0.25em] uppercase text-accent bg-card border border-border/50 px-3 py-1">
              <Sparkles className="w-2.5 h-2.5 animate-pulse" />
              {s.topBadge}
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[0.88] lowercase">
                {s.titlu1}
                <span className="text-accent italic font-normal block">
                  {s.titluItalic}
                </span>
              </h1>
              <p className="mt-4 text-sm text-muted-foreground font-light leading-relaxed max-w-lg">
                {s.descriere}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative overflow-hidden border bg-card p-5 shadow-sm"
              style={{
                borderRadius: "1rem 0 1rem 0",
                borderColor: "hsl(var(--accent))",
              }}
            >
              <div className="absolute top-0 right-0 w-10 h-10 bg-accent/5 rounded-bl-full" />
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                <span className="text-[8px] font-mono tracking-[0.22em] uppercase text-accent font-bold">
                  {s.ethicalBadge}
                </span>
              </div>
              <p className="text-[12px] text-foreground font-light leading-relaxed mb-3">
                {s.ethicalTitle}
              </p>
              <div className="bg-[#965935] text-white font-mono font-bold tracking-[0.25em] uppercase text-[10px] py-2.5 px-2 text-center rounded-sm">
                {s.ethicalSub}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── MAIN ─── */}
      <div className="mx-auto max-w-6xl px-5 lg:px-12 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-0">
          {/* LEFT COLUMN */}
          <div className="lg:pr-10 pb-10">
            <ColHeader badge={s.module1Badge} title={s.module1Title} />
            <div className="space-y-2 mt-5">
              {s.rates.map((item, idx) => (
                <RateCard
                  key={idx}
                  item={item}
                  perSession={s.perSession}
                  popularLabel={s.popular}
                  index={idx}
                />
              ))}
            </div>
            <div className="mt-6 border-l-2 border-accent/25 pl-4">
              <p className="font-serif italic text-[13px] text-muted-foreground leading-relaxed font-light">
                {s.quote}
              </p>
            </div>
          </div>

          <div className="hidden lg:block bg-border/40 self-stretch mx-0" />

          {/* RIGHT COLUMN */}
          <div className="lg:pl-10 pt-10 lg:pt-0 border-t border-border/30 lg:border-t-0">
            <ColHeader badge={s.module2Badge} title={s.module2Title} />
            <div className="relative mt-5 overflow-hidden rounded-xl bg-neutral-900 text-white p-6">
              <div className="relative z-10">
                <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-neutral-400 block mb-2 font-bold">
                  {s.vipMinBadge}
                </span>
                <div className="font-serif text-5xl font-light tracking-[-0.04em] text-white leading-none">
                  120
                  <span className="text-[#b7744f] text-lg ml-1.5 italic font-serif">
                    min.
                  </span>
                </div>
                <p className="mt-3 text-[13px] text-neutral-300 font-normal leading-relaxed">
                  {s.vipMinText}
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <LogisticsRow
                icon={Briefcase}
                title={s.logisticTitle}
                desc={s.logisticDesc}
              />
              <LogisticsRow
                icon={Truck}
                title={s.transportTitle}
                desc={s.transportDesc}
              />
            </div>

            <div className="mt-4 overflow-hidden rounded-lg border border-border/30 bg-card">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/30 bg-muted/40">
                <ShieldCheck
                  className="w-3.5 h-3.5 text-accent"
                  strokeWidth={1.5}
                />
                <span className="text-[8px] font-mono uppercase tracking-[0.25em] text-foreground font-bold">
                  {s.legalBadge}
                </span>
              </div>
              <p className="px-4 py-3 text-[11px] leading-relaxed text-muted-foreground font-light">
                {s.legalDesc}
              </p>
            </div>
          </div>
        </div>

        {/* CTA BUTON MUTAT JOS */}
        <div className="mt-10 lg:mt-0 flex justify-center lg:justify-start">
          <Link
            to="/contact"
            className="group flex items-center justify-between w-full max-w-md lg:max-w-[300px] rounded-full bg-foreground text-background px-6 py-4 text-[9px] font-mono uppercase tracking-[0.22em] font-bold transition-all duration-300 hover:bg-accent hover:scale-[1.01]"
          >
            <span>{s.btnProposal}</span>
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─── SUB-COMPONENTS ─── */
function ColHeader({ badge, title }: { badge: string; title: string }) {
  return (
    <div>
      <span className="inline-block text-[9px] font-bold uppercase tracking-[0.3em] text-[#965935] bg-[#f0e8e0] px-3 py-1 rounded-full">
        {badge}
      </span>
      <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-neutral-950">
        {title}
      </h2>
    </div>
  );
}

function RateCard({ item, perSession, popularLabel, index }: any) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative flex items-center justify-between gap-4 px-4 py-3.5 rounded-xl border transition-all duration-300 cursor-default ${item.featured ? "bg-foreground text-background border-foreground shadow-md" : "bg-card border-border/30 hover:border-accent/30 hover:-translate-y-px hover:shadow-sm"}`}
    >
      {item.featured && (
        <span className="absolute top-2.5 right-3 text-[7px] font-mono uppercase tracking-widest bg-accent text-white px-2 py-0.5 rounded-full font-bold">
          {popularLabel}
        </span>
      )}
      <div
        className={`w-0.5 h-10 rounded-full shrink-0 ${item.featured ? "bg-accent" : "bg-accent/25"}`}
      />
      <div className="flex-1 min-w-0 space-y-0.5">
        <span
          className={`font-serif text-xl font-light ${item.featured ? "text-background" : "text-foreground"}`}
        >
          {item.time}
        </span>
        <p
          className={`text-[11px] font-light ${item.featured ? "text-background/60" : "text-muted-foreground"}`}
        >
          {item.detail}
        </p>
      </div>
      <div className="text-right shrink-0">
        <span
          className={`font-serif text-2xl font-light transition-colors ${item.featured ? "text-background" : hovered ? "text-accent" : "text-foreground"}`}
        >
          {item.price}
        </span>
        <span className="block text-[8px] font-mono uppercase tracking-widest text-neutral-600">
          {perSession}
        </span>
      </div>
    </motion.div>
  );
}

function LogisticsRow({ icon: Icon, title, desc }: any) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-card border border-border/30">
      <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
      </div>
      <div>
        <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-foreground">
          {title}
        </p>
        <p className="text-[11px] text-muted-foreground font-light">{desc}</p>
      </div>
    </div>
  );
}

export default Servicii;
