import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { BotanicalSVG } from "../components/BotanicalSVG";
import { ArrowRight, MapPin, Sparkles, Heart, Users, Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Helmet } from "react-helmet-async";
import officeImg from "../assets/office-space.jpg";
import { Link } from "react-router-dom";

export function HeroImage() {
  return (
    <div className="relative group overflow-hidden rounded-xl lg:rounded-[2.5rem] border border-border/20 shadow-sm lg:shadow-elevated bg-muted w-full">
      <div className="aspect-[16/10] lg:aspect-[4/5] overflow-hidden w-full">
        <img
          src={officeImg}
          alt="Mobile Massage Office Context"
          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03]"
          loading="lazy"
          width={1280}
          height={896}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-white/5" />
      <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6 max-w-full">
        <div className="backdrop-blur-xl bg-background/70 border border-border/40 rounded-xl lg:rounded-2xl px-4 lg:px-5 py-3 lg:py-4 shadow-xs">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <p className="text-[8px] lg:text-[10px] uppercase tracking-[0.2em] font-mono text-muted-foreground/60 leading-none">
                editorial note
              </p>
              <p className="mt-1 text-xs lg:text-sm text-foreground font-light truncate">
                calm · focus · recovery
              </p>
            </div>
            <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 shadow-xs">
              <Sparkles className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AboutUs() {
  const { t } = useLanguage();
  const s = t.aboutPage;
  const sectionRef = useRef<HTMLElement>(null);
  useInView(sectionRef, { once: true, margin: "-100px" });

  const icons = [Heart, Star, Users];
  const rads = [
    "rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none",
    "rounded-tr-2xl rounded-bl-2xl rounded-tl-none rounded-br-none",
    "rounded-2xl",
  ];

  const values = t.aboutPage.valuesItems.map((v, i) => ({
    icon: icons[i],
    title: v.title,
    desc: v.desc,
    rad: rads[i],
  }));

  const stats = [
    {
      value: "120+",
      label: t.hero.stats.companii + " " + t.hero.stats.partenere,
    },
    { value: "18k", label: t.hero.stats.sedinte + " " + t.hero.stats.livrate },
    { value: "8 ani", label: t.trustBar.statExperienta },
    { value: "4.9★", label: t.hero.stats.scor + " " + t.hero.stats.feedback },
  ];

  return (
    <div className="w-full min-h-screen bg-background text-foreground antialiased pb-12 max-w-full overflow-x-hidden">
      <Helmet>
        <title>{s.metaTitle || "Servicii | Ramona's Mobile Massage"}</title>
        <meta
          name="description"
          content={s.metaDesc || "Descoperă serviciile de masaj mobil..."}
        />
      </Helmet>

      {/* HERO SECTION - Ajustat padding-ul de sus pentru o înălțime optimă */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-muted/30 to-transparent pt-12 sm:pt-24 lg:pt-6 pb-10 lg:pb-24 w-full">
        <div
          className="pointer-events-none absolute inset-0 select-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute top-0 right-0 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] rounded-full bg-muted/50 blur-[100px]" />
          <div className="absolute -bottom-20 -left-10 w-[280px] lg:w-[400px] h-[280px] lg:h-[400px] rounded-full bg-accent/5 blur-[80px]" />
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [-14, -11, -14] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:block absolute left-[-5rem] top-20 w-[26rem] text-sage/10"
          >
            <BotanicalSVG variant="branch" className="w-full h-full" />
          </motion.div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-16 w-full box-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full">
            {/* TEXT COLUMN */}
            <div className="lg:col-span-6 flex flex-col items-start w-full box-border">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card px-3 lg:px-4 py-1.5 lg:py-2 mb-4 lg:mb-8 shadow-2xs"
              >
                <Sparkles className="w-3 h-3 text-accent animate-pulse" />
                <span className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] font-mono text-muted-foreground font-semibold">
                  {t.aboutPage.badge}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-display text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[0.95] lg:leading-[0.92] tracking-[-0.03em] lg:tracking-[-0.04em] font-light text-foreground lowercase w-full"
              >
                {t.aboutPage.titlu1}
                <span className="block mt-1 lg:mt-2 text-accent italic font-normal">
                  {t.aboutPage.titluItalic}
                </span>
                {t.aboutPage.titlu2 && (
                  <span className="block mt-1 lg:mt-2">
                    {t.aboutPage.titlu2}
                  </span>
                )}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-6 lg:mt-8 text-[14px] sm:text-[15px] lg:text-[15.5px] leading-relaxed font-light text-muted-foreground space-y-3 lg:pr-6 w-full"
              >
                {Array.isArray(t.aboutPage.descriere) ? (
                  t.aboutPage.descriere.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))
                ) : (
                  <p>{t.aboutPage.descriere}</p>
                )}
              </motion.div>

              {/* MOBILE IMAGE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:hidden w-full mt-8 relative"
              >
                <div className="absolute -top-2 -left-2 w-10 h-10 border-t border-l border-border/40 pointer-events-none" />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b border-r border-border/40 pointer-events-none" />
                <HeroImage />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full"
              >
                <div className="flex items-center gap-3 bg-card/60 p-3 lg:p-0 rounded-xl border border-border/30 lg:border-0 lg:bg-transparent shrink-0">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-border/50 bg-card flex items-center justify-center shrink-0 shadow-2xs">
                    <MapPin className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[8px] lg:text-[10px] uppercase tracking-[0.2em] font-mono text-muted-foreground/60 leading-none">
                      {t.aboutPage.ariaBadge}
                    </p>
                    <p className="text-xs lg:text-sm text-foreground font-medium truncate mt-0.5 lg:mt-1">
                      {t.aboutPage.ariaText}
                    </p>
                  </div>
                </div>

                <Button
                  asChild
                  className="group h-11 lg:h-12 rounded-full bg-foreground text-background hover:bg-accent hover:text-white px-6 lg:px-8 transition-all duration-400 text-xs lg:text-sm shadow-xs font-medium w-full sm:w-auto"
                >
                  <Link
                    to="/contact"
                    className="flex items-center justify-between gap-2.5"
                  >
                    <span>{t.aboutPage.butonConversatie}</span>
                    <ArrowRight
                      className="w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform group-hover:translate-x-1"
                      strokeWidth={2}
                    />
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* DESKTOP IMAGE COLUMN */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block lg:col-span-6 relative w-full box-border"
            >
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t border-l border-border/40 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b border-r border-border/40 pointer-events-none" />
              <HeroImage />
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="border-b border-border/40 bg-card w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16 py-6 lg:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x divide-border/30 w-full">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="flex flex-col items-center lg:items-start px-2 sm:px-6 py-1.5 lg:py-2 text-center lg:text-left min-w-0"
              >
                <span className="text-display text-2xl sm:text-3xl lg:text-4xl font-light text-foreground tracking-tight truncate">
                  {s.value}
                </span>
                <span className="mt-0.5 lg:mt-1 text-[9.5px] sm:text-[10.5px] uppercase tracking-wider font-mono text-muted-foreground/80 truncate w-full">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="relative w-full bg-muted/10 border-y border-border/30 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 blur-3xl rounded-full" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-16 py-16 lg:py-28">
          <div className="mb-12 lg:mb-20 text-center">
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] font-mono text-accent">
              {t.aboutPage.valuesBadge}
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-foreground">
              {t.aboutPage.valuesTitlu}
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-sm text-muted-foreground font-light leading-relaxed">
              Principiile care definesc modul în care lucrăm și construim
              fiecare detaliu.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-10">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group relative"
              >
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-accent/0 via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 blur-sm" />

                <div
                  className={`relative h-full rounded-2xl bg-card/80 backdrop-blur-md border border-border/30 p-6 lg:p-8
            shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}
                >
                  <div
                    className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-muted/60 border border-border/40 flex items-center justify-center mb-6
              group-hover:bg-accent/10 group-hover:border-accent/30 transition"
                  >
                    <v.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[13px] lg:text-[14px] font-semibold uppercase tracking-wide text-foreground mb-2">
                    {v.title}
                  </h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed font-light">
                    {v.desc}
                  </p>
                  <div className="mt-5 h-px w-10 bg-accent/40 group-hover:w-16 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16 pt-16 lg:pt-28 w-full box-border overflow-hidden">
        <div
          className="relative text-background p-6 sm:p-10 lg:p-16 overflow-hidden shadow-xl w-full box-border bg-foreground"
          style={{ borderRadius: "2rem 0px 2rem 0px" }}
        >
          <div className="bg-glow-fluid absolute -top-20 -right-20 w-72 lg:w-[500px] h-72 lg:h-[500px] bg-accent/25 rounded-full blur-[90px] lg:blur-[120px] pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(183,116,79,0.08),transparent)] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-12 w-full">
            <div className="lg:col-span-5 space-y-2 lg:space-y-4">
              <span className="text-[8.5px] lg:text-[10px] font-mono uppercase tracking-[0.25em] text-background/50 block">
                {t.aboutPage.ctaGlowBadge}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tighter leading-tight text-background lowercase">
                {t.aboutPage.ctaGlowTitlu1}
                <span className="text-accent italic font-normal">
                  {t.aboutPage.ctaGlowItalic}
                </span>
                {t.aboutPage.ctaGlowTitlu2}
              </h2>
            </div>

            <div className="lg:col-span-4 lg:border-l lg:border-white/10 lg:pl-8">
              <p className="text-[12px] sm:text-[13px] lg:text-[14px] text-background/70 font-light leading-relaxed">
                {t.aboutPage.ctaGlowDesc}
              </p>
            </div>

            <div className="lg:col-span-3 flex justify-end w-full mt-2 lg:mt-0">
              <Button
                asChild
                className="group h-12 lg:h-14 rounded-full bg-accent text-white hover:bg-accent/90 px-6 lg:px-8 text-[10.5px] lg:text-[11px] font-mono uppercase tracking-[0.15em] shadow-md transition-all duration-400 font-bold w-full lg:w-auto"
              >
                <Link
                  to="/contact"
                  className="flex items-center justify-between lg:justify-center gap-3 w-full"
                >
                  <span>{t.aboutPage.ctaGlowButton}</span>
                  <ArrowRight
                    className="w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform group-hover:translate-x-1.5"
                    strokeWidth={2}
                  />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AboutUs;
