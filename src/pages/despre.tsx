import { motion } from "framer-motion";
import { BotanicalSVG } from "../components/BotanicalSVG";
import { useLanguage } from "../context/LanguageContext";
import { Helmet } from "react-helmet-async";
import officeImg from "../assets/aboutUs.avif";

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
              {/* --- TITLURILE PE ACELAȘI RÂND ÎNCADRATE DE LINIUȚE --- */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1,
                }}
                className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-6 lg:mb-8 w-full"
              >
                {/* Liniuța Stânga */}
                <div className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-brand/70 shrink-0" />

                <h1 className="text-display text-[clamp(2.2rem,5vw,3rem)] xl:text-[3.5rem] leading-[1.1] tracking-[-0.02em] font-light text-ink flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1">
                  <span>{t.aboutPage.titlu1}</span>
                  <span className="text-brand italic font-normal">
                    {t.aboutPage.titluItalic}
                  </span>
                  {t.aboutPage.titlu2 && <span>{t.aboutPage.titlu2}</span>}
                </h1>

                {/* Liniuța Dreapta */}
                <div className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-brand/70 shrink-0" />
              </motion.div>
              {/* ------------------------------------------------------- */}

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
