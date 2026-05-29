import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { BotanicalSVG } from "../components/BotanicalSVG";
import { ArrowRight, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Helmet } from "react-helmet-async";
import officeImg from "../assets/aboutUs.avif";
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
    </div>
  );
}

export function AboutUs() {
  const { t } = useLanguage();
  const s = t.aboutPage;

  return (
    <div className="w-full min-h-screen bg-background text-foreground antialiased pb-12 max-w-full overflow-x-hidden">
      <Helmet>
        <title>{s.metaTitle || "Despre Mine | Ramona's Mobile Massage"}</title>
        <meta
          name="description"
          content={
            s.metaDesc || "Descoperă povestea Ramona's Mobile Massage..."
          }
        />
      </Helmet>

      {/* HERO SECTION (Singura secțiune rămasă) */}
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
                className="mt-6 lg:mt-10 text-[14.5px] sm:text-[15.5px] lg:text-[16px] leading-[1.8] font-light text-muted-foreground space-y-5 lg:pr-6 w-full"
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
                className="lg:hidden w-full mt-10 relative"
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
                className="mt-10 lg:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full"
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
                  className="group h-12 lg:h-12 rounded-full bg-foreground text-background hover:bg-accent hover:text-white px-6 lg:px-8 transition-all duration-400 text-xs lg:text-sm shadow-xs font-medium w-full sm:w-auto sm:ml-auto lg:ml-4"
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
    </div>
  );
}
export default AboutUs;
