import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { BotanicalSVG } from "../components/BotanicalSVG";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Helmet } from "react-helmet-async";
import officeImg from "../assets/aboutUs.avif";
import { Link } from "react-router-dom";

export function HeroImage() {
  return (
    <div className="relative w-full group z-10 lg:max-h-[80vh]">
      {/* Chenar decalat (Offset Border) pentru un efect arhitectural pe desktop */}
      <div
        className="absolute -inset-4 border border-ink/10 rounded-[2.5rem] transform translate-x-4 translate-y-4 -z-10 hidden lg:block transition-transform duration-700 ease-out group-hover:translate-x-6 group-hover:translate-y-6"
        aria-hidden="true"
      />

      {/* Umbră colorată subtilă sub imagine pe desktop */}
      <div className="absolute inset-4 bg-brand/20 blur-[40px] -z-10 hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative overflow-hidden rounded-2xl lg:rounded-[2rem] border border-border-soft/60 shadow-xl lg:shadow-2xl bg-bg-warm w-full h-full">
        {/* Aspect ratio controlat: pe PC folosește procente din înălțimea ecranului pentru a se încadra într-o pagină */}
        <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[70vh] xl:h-[75vh] overflow-hidden w-full">
          <img
            src={officeImg}
            alt="Mobile Massage Office Context"
            className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            loading="lazy"
            width={1280}
            height={896}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-surface/10" />
      </div>

      {/* Element vizual plutitor cu efect de sticlă */}
      <div className="absolute -left-4 sm:-left-6 lg:-left-8 xl:-left-12 bottom-6 sm:bottom-8 lg:bottom-12 z-20 hidden sm:flex items-center gap-3 bg-surface/90 backdrop-blur-xl p-3 sm:p-4 rounded-2xl border border-surface/40 shadow-[0_15px_30px_color-mix(in_srgb,var(--color-ink)_10%,transparent)] transition-transform duration-500 hover:-translate-y-2">
        <div className="p-1.5 sm:p-2 bg-brand/10 rounded-full shrink-0">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-brand animate-pulse" />
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="w-10 sm:w-12 h-1 bg-brand/40 rounded-full" />
          <div className="w-5 sm:w-6 h-1 bg-ink/10 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function AboutUs() {
  const { t } = useLanguage();
  const s = t.aboutPage;

  // REZOLVARE EROARE TYPESCRIPT:
  const descriereData = s.descriere as string | string[];
  const descArray: string[] = Array.isArray(descriereData)
    ? descriereData
    : typeof descriereData === "string"
      ? [descriereData]
      : [];

  const leadParagraph = descArray[0] || "";
  const restOfParagraphs = descArray.slice(1);

  return (
    <div className="w-full min-h-screen lg:h-screen lg:overflow-hidden bg-bg text-ink antialiased max-w-full relative flex flex-col justify-start pb-12 lg:pb-0">
      <Helmet>
        <title>{s.metaTitle || "Despre Mine | Ramona's Mobile Massage"}</title>
        <meta
          name="description"
          content={
            s.metaDesc || "Descoperă povestea Ramona's Mobile Massage..."
          }
        />
      </Helmet>

      {/* Pattern de fundal subtil (Dot Grid) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-ink) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <section className="relative overflow-hidden w-full z-10 pt-4 sm:pt-28 lg:pt-6 xl:pt-8 flex-grow flex items-start bg-gradient-to-b from-bg-warm/20 via-transparent to-transparent">
        {/* =========================================
            ELEMENTE DECORATIVE ȘI BOTANICE
            ========================================= */}
        <div
          className="pointer-events-none absolute inset-0 select-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute top-0 right-0 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] rounded-full bg-bg-warm/50 blur-[120px]" />
          <div className="absolute top-[40%] lg:-bottom-20 -left-10 w-[280px] lg:w-[500px] h-[280px] lg:h-[500px] rounded-full bg-brand/10 blur-[100px]" />

          {/* Botanica 1 (Stânga Sus) */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [-8, -5, -8] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-16 sm:-left-10 top-0 sm:top-10 w-[20rem] sm:w-[26rem] lg:w-[28rem] xl:w-[32rem] text-sage/30 opacity-80 z-0"
          >
            <BotanicalSVG variant="branch" className="w-full h-full" />
          </motion.div>

          {/* Botanica 2 (Dreapta Mijloc) */}
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [5, 8, 5] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-20 top-[45%] lg:top-[30%] w-[16rem] lg:w-[20rem] xl:w-[24rem] text-brand/20 opacity-60 z-0"
          >
            <BotanicalSVG variant="bloom" className="w-full h-full" />
          </motion.div>
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-12 w-full box-border">
          {/* =========================================
              CONTENT GRID
              ========================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start w-full">
            {/* TEXT COLUMN */}
            <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left w-full box-border relative pt-0">
              {/* Supratitlu (Eyebrow) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex items-center justify-center lg:justify-start gap-4 mb-2 lg:mb-3 w-full"
              >
                <span
                  className="w-8 lg:w-12 h-px bg-brand/60 block"
                  aria-hidden="true"
                />
                <span className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-brand mt-1">
                  Povestea Mea
                </span>
                <span
                  className="lg:hidden w-8 h-px bg-brand/60 block"
                  aria-hidden="true"
                />
              </motion.div>

              {/* Titlul Principal */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1,
                }}
                className="text-display text-[clamp(2.4rem,5.5vw,3.5rem)] xl:text-[4rem] leading-[1.05] lg:leading-[1.1] tracking-[-0.02em] font-light text-ink max-w-3xl mb-4 lg:mb-4 w-full"
              >
                {t.aboutPage.titlu1}
                <span className="block mt-1 lg:mt-2 text-brand italic font-normal text-[clamp(1.6rem,4vw,2.2rem)] xl:text-[2.5rem]">
                  {t.aboutPage.titluItalic}
                </span>
                {t.aboutPage.titlu2 && (
                  <span className="block mt-1">{t.aboutPage.titlu2}</span>
                )}
              </motion.h1>

              {/* Primul Paragraf (Lead text) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative text-left text-[15px] sm:text-[16px] xl:text-[17px] leading-[1.7] lg:leading-[1.8] font-normal text-ink/80 pl-0 lg:pl-5 border-l-0 lg:border-l-[1.5px] border-brand/40 mb-4 lg:mb-6 w-full"
              >
                <p>{leadParagraph}</p>
              </motion.div>

              {/* --- IMAGINEA PE MOBIL --- */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3,
                }}
                className="lg:hidden w-full mb-8 mt-2 relative max-w-lg self-center"
              >
                <HeroImage />
              </motion.div>

              {/* Restul Paragrafelor (Text Normal) */}
              {restOfParagraphs.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-left text-[14px] xl:text-[15px] leading-[1.7] font-light text-ink-muted space-y-4 lg:space-y-4 lg:pr-8 w-full"
                >
                  {restOfParagraphs.map((paragraph: string, idx: number) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </motion.div>
              )}

              {/* Bara de Acțiune (Contact & Locație) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-6 lg:mt-6 xl:mt-8 bg-surface/50 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-4 lg:p-0 rounded-3xl sm:rounded-full border border-border-soft lg:border-0 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 lg:gap-8 w-full shadow-sm lg:shadow-none"
              >
                <Button
                  asChild
                  className="group relative overflow-hidden h-12 xl:h-14 rounded-xl sm:rounded-full bg-ink text-surface hover:bg-ink px-8 transition-all duration-500 text-sm font-medium w-full sm:w-auto shadow-xl shadow-ink/10 order-2 sm:order-1"
                >
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-3 w-full"
                  >
                    <div className="absolute inset-0 w-full h-full bg-brand -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] -z-10" />
                    <span className="relative z-10">
                      {t.aboutPage.butonConversatie}
                    </span>
                    <div className="relative z-10 w-6 h-6 xl:w-7 xl:h-7 rounded-full bg-surface/10 flex items-center justify-center transition-transform duration-500 group-hover:bg-surface/20">
                      <ArrowRight
                        className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-0.5"
                        strokeWidth={2}
                      />
                    </div>
                  </Link>
                </Button>

                <div className="flex items-center text-left gap-3 px-2 py-1 lg:p-0 shrink-0 order-1 sm:order-2 w-full sm:w-auto justify-center sm:justify-start">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-brand/20 rounded-full blur-[8px] animate-pulse" />
                    <div className="w-10 h-10 rounded-full border border-brand/20 bg-surface flex items-center justify-center shrink-0 shadow-sm relative z-10">
                      <MapPin className="w-4 h-4 text-brand" />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] uppercase tracking-[0.2em] font-mono text-ink-muted/60 leading-none mb-1">
                      {t.aboutPage.ariaBadge}
                    </p>
                    <p className="text-[13px] lg:text-[14px] text-ink font-semibold truncate">
                      {t.aboutPage.ariaText}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* IMAGE COLUMN (Dreapta pe PC) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="hidden lg:block lg:col-span-6 relative w-full box-border xl:pl-6"
            >
              {/* Crosshair decorativ */}
              <div
                className="absolute -top-6 right-4 w-5 h-5 z-20"
                aria-hidden="true"
              >
                <div className="absolute top-1/2 left-0 w-full h-px bg-ink/30" />
                <div className="absolute left-1/2 top-0 h-full w-px bg-ink/30" />
              </div>
              <HeroImage />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AboutUs;
