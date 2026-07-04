import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Clock,
  Star,
  MapPin,
  Wallet,
  CalendarCheck,
  Info,
} from "lucide-react";
import { Link } from "react-router-dom";
import { BotanicalSVG } from "../components/BotanicalSVG";
import { useLanguage } from "../context/LanguageContext";
import { WaveDividerInverted } from "../components/ShapeDividers";

interface RateItem {
  time: string;
  price: string;
  detail?: string;
  featured?: boolean;
}

const botanicalStyles = `
  @keyframes bot-sway { 0%, 100% { transform: rotate(-3deg) translateX(0px); } 50% { transform: rotate(-0.5deg) translateX(5px); } }
  @keyframes bot-sway-r { 0%, 100% { transform: rotate(3deg) translateX(0px); } 50% { transform: rotate(0.5deg) translateX(-5px); } }
  @keyframes bot-sway-light { 0%, 100% { transform: rotate(5deg) scale(0.95); } 50% { transform: rotate(8deg) scale(0.98) translateY(4px); } }
  @keyframes bot-float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-10px) rotate(3deg); } }
  @keyframes bot-float-slow { 0%, 100% { transform: translateY(0px) rotate(180deg); } 50% { transform: translateY(8px) rotate(182deg); } }
  @keyframes bot-float-alt { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-8px) rotate(-2deg); } }

  .b-sway { animation: bot-sway 10s ease-in-out infinite; }
  .b-sway-r { animation: bot-sway-r 12s ease-in-out infinite 1s; }
  .b-sway-l { animation: bot-sway-light 14s ease-in-out infinite 2s; }
  .b-float { animation: bot-float 8s ease-in-out infinite 0.5s; }
  .b-float-s { animation: bot-float-slow 13s ease-in-out infinite 1.5s; }
  .b-float-a { animation: bot-float-alt 9s ease-in-out infinite 0.8s; }
`;

const SectionDivider = () => (
  <div className="w-full flex items-center justify-center py-4 md:py-8 lg:py-16 opacity-60">
    <div className="w-20 md:w-32 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="mx-3 md:mx-4 text-brand"
    >
      <Sparkles className="w-4 h-4 md:w-5 md:h-5 opacity-70" />
    </motion.div>
    <div className="w-20 md:w-32 h-px bg-gradient-to-l from-transparent via-brand to-transparent" />
  </div>
);

const FloatingLeaf = ({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) => (
  <motion.div
    animate={{ y: [0, -12, 0], rotate: [-4, 4, -4] }}
    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute pointer-events-none ${className}`}
  >
    <BotanicalSVG variant="leaf" className="w-full h-full" />
  </motion.div>
);

function RateCard({
  item,
  perSession,
  popularLabel,
  index,
  featured,
}: {
  item: RateItem;
  perSession: string;
  popularLabel: string;
  index: number;
  featured: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative flex flex-col rounded-[2rem] p-6 lg:p-9 transition-all duration-500 ${
        featured
          ? "bg-gradient-to-b from-ink-soft to-ink text-surface shadow-[0_20px_40px_-15px_color-mix(in_srgb,var(--color-ink-soft)_50%,transparent)] lg:-translate-y-4 ring-1 ring-surface/10"
          : "bg-surface text-ink-soft border border-border-soft hover:border-brand hover:shadow-[0_15px_30px_-10px_color-mix(in_srgb,var(--color-brand)_15%,transparent)] hover:-translate-y-1 lg:hover:-translate-y-2 backdrop-blur-sm"
      }`}
    >
      {featured && (
        <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand rounded-full blur-[60px] opacity-20" />
        </div>
      )}

      {featured && (
        <motion.span
          initial={{ scale: 0.9 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand to-brand-deep px-3.5 py-1 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] text-surface shadow-md shadow-brand/30 z-10 whitespace-nowrap"
        >
          <Star className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current" />{" "}
          {popularLabel}
        </motion.span>
      )}

      <div className="relative z-10 flex items-center gap-2 text-[10px] md:text-[11px] uppercase tracking-[0.28em] opacity-70">
        <Clock
          className={`w-3.5 h-3.5 md:w-4 md:h-4 ${featured ? "text-brand-soft" : "text-brand"}`}
        />
        <span className="font-medium">{item.time}</span>
      </div>

      <div className="relative z-10 mt-5 md:mt-6 flex items-baseline gap-1.5">
        <span className="text-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none font-light tracking-tighter">
          {item.price.replace(/[^0-9.,]/g, "")}
        </span>
        <span className="text-base md:text-lg opacity-70 font-medium">€</span>
      </div>
      <span className="relative z-10 mt-1 md:mt-2 text-[9px] md:text-[10px] font-mono uppercase tracking-[0.3em] opacity-50">
        {perSession}
      </span>

      {item.detail && (
        <p
          className={`relative z-10 mt-6 md:mt-8 text-sm leading-relaxed ${featured ? "text-surface/80" : "text-ink-muted"}`}
        >
          {item.detail}
        </p>
      )}

      <div
        className={`relative z-10 mt-auto pt-5 md:pt-6 border-t ${featured ? "border-surface/10" : "border-border-soft"} flex items-center justify-between text-[11px] md:text-xs`}
      >
        <span className="uppercase tracking-[0.25em] font-medium opacity-60"></span>
      </div>
    </motion.article>
  );
}

export function Servicii() {
  const { t } = useLanguage();
  const s = t.servicesPage;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const sx = useSpring(mouseX, { stiffness: 15, damping: 40 });
  const sy = useSpring(mouseY, { stiffness: 15, damping: 40 });

  const mx2 = useMotionValue(0);
  const my2 = useMotionValue(0);
  const sx2 = useSpring(mx2, { stiffness: 18, damping: 25 });
  const sy2 = useSpring(my2, { stiffness: 18, damping: 25 });

  useEffect(() => {
    if (window.innerWidth < 1024) return;
    const h = (e: MouseEvent) => {
      const cx = (e.clientX - window.innerWidth / 2) / 60;
      const cy = (e.clientY - window.innerHeight / 2) / 60;
      mouseX.set(cx);
      mouseY.set(cy);
      mx2.set((e.clientX - window.innerWidth / 2) / 45);
      my2.set((e.clientY - window.innerHeight / 2) / 45);
    };
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, [mouseX, mouseY, mx2, my2]);

  const rates = s.rates as readonly RateItem[];
  const featuredIdx = 2;

  return (
    <div className="w-full min-h-screen bg-background text-ink-soft antialiased selection:bg-brand/20 overflow-hidden font-sans">
      <style dangerouslySetInnerHTML={{ __html: botanicalStyles }} />

      <Helmet>
        <title>{s.metaTitle}</title>
        <meta name="description" content={s.metaDesc} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-0 pb-4 md:pb-6 lg:pb-8 overflow-hidden bg-background">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute -top-20 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full blur-[100px] md:blur-[140px] opacity-50 md:opacity-60"
            style={{
              background:
                "radial-gradient(circle, var(--color-bg-warm), transparent 70%)",
            }}
          />
          <div
            className="absolute top-40 -left-20 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full blur-[80px] md:blur-[120px] opacity-40 md:opacity-50"
            style={{
              background:
                "radial-gradient(circle, var(--color-bg-warmer), transparent 70%)",
            }}
          />

          <motion.div
            style={{ x: sx, y: sy }}
            className="absolute -right-10 top-0 w-[38rem] opacity-[0.05] hidden lg:block"
          >
            <BotanicalSVG
              variant="branch"
              className="b-sway w-full h-full text-ink-soft"
            />
          </motion.div>
          <motion.div
            style={{ x: sy, y: sx }}
            className="absolute -left-16 top-[20%] w-[22rem] opacity-[0.06] hidden lg:block"
          >
            <BotanicalSVG
              variant="leaf"
              className="b-sway-r w-full h-full text-brand"
            />
          </motion.div>
          <motion.div
            style={{ x: sx, y: sy }}
            className="absolute right-[8%] bottom-[5%] w-[14rem] opacity-[0.07] hidden lg:block"
          >
            <BotanicalSVG
              variant="bloom"
              className="b-float w-full h-full text-brand-soft"
            />
          </motion.div>

          <FloatingLeaf
            className="top-[12%] left-[8%] w-10 sm:w-14 opacity-10 text-ink-soft hidden sm:block lg:w-16 lg:left-[18%]"
            delay={0}
          />
          <FloatingLeaf
            className="bottom-[18%] right-[8%] w-14 sm:w-16 opacity-15 text-brand hidden sm:block lg:w-20 lg:right-[22%]"
            delay={2}
          />
          <FloatingLeaf
            className="top-[45%] right-[3%] w-8 sm:w-10 opacity-8 text-sage-soft hidden sm:block lg:hidden"
            delay={1}
          />
        </div>

        <div className="relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-12 mt-6 md:mt-10 lg:mt-16">
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <h1 className="text-display text-2xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] md:leading-[1.05] tracking-tight">
                {s.titlu1}{" "}
                <em className="not-italic text-brand font-light italic relative inline-block">
                  {s.titluItalic}
                  <svg
                    className="absolute w-full h-2 md:h-3 -bottom-0.5 md:-bottom-1 left-0 text-brand opacity-30"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="transparent"
                    />
                  </svg>
                </em>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="relative z-20 -mb-1">
        <WaveDividerInverted
          colorTop="var(--color-background)"
          colorBottom="var(--color-bg-soft)"
        />
      </div>

      {/* Prices Section */}
      {/* Am redus padding-ul de sus (pt-2 md:pt-4 lg:pt-6) pentru a ridica sectiunea */}
      <section className="relative pt-2 md:pt-4 lg:pt-6 pb-12 md:pb-24 lg:pb-32 bg-bg-soft overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden z-0"
          aria-hidden
        >
          <motion.div
            style={{ x: sx2, y: sy2 }}
            className="absolute -left-20 top-10 w-[420px] text-sage-soft opacity-40 lg:opacity-60 hidden lg:block"
          >
            <BotanicalSVG variant="leaf" className="b-sway w-full h-full" />
          </motion.div>
          <motion.div
            style={{ x: sx2, y: sy2 }}
            className="absolute -left-10 top-[45%] w-[280px] text-border opacity-30 lg:opacity-50 hidden lg:block"
          >
            <BotanicalSVG variant="bloom" className="b-sway-l w-full h-full" />
          </motion.div>
          <motion.div
            style={{ x: sx2, y: sy2 }}
            className="absolute -right-20 bottom-10 w-[360px] text-brand-soft opacity-40 lg:opacity-65 hidden lg:block rotate-12"
          >
            <BotanicalSVG variant="bloom" className="b-float w-full h-full" />
          </motion.div>
          <motion.div
            style={{ x: sx2, y: sy2 }}
            className="absolute -right-14 top-16 w-[320px] text-sage-soft opacity-30 lg:opacity-50 hidden lg:block"
          >
            <BotanicalSVG variant="leaf" className="b-float-s w-full h-full" />
          </motion.div>

          <BotanicalSVG
            variant="branch"
            className="b-sway absolute left-[44%] -top-24 w-[280px] text-sage-soft opacity-10 hidden xl:block rotate-90"
          />

          <FloatingLeaf
            className="top-[8%] right-[5%] w-10 opacity-10 text-brand sm:w-14 lg:hidden"
            delay={0.5}
          />
          <FloatingLeaf
            className="bottom-[10%] left-[4%] w-12 opacity-8 text-sage-soft lg:hidden"
            delay={1.5}
          />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12 relative z-10">
          {/* Centered Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center gap-4 md:gap-5 mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] md:leading-[1.05] tracking-tight">
              {s.module1Title}
            </h2>
          </motion.div>

          {/* Left-Aligned Badge (Preise ab) */}
          {/* Aici am micșorat mb-ul ca să fie mult mai aproape de cardurile cu prețuri */}
          <div className="w-full flex justify-start mb-4 md:mb-5 lg:mb-6">
            <span className="inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-brand/10 px-3.5 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-brand-deep font-bold">
              <Wallet className="w-3 h-3 md:w-3.5 md:h-3.5" />
              {s.startingFrom}
            </span>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
            {rates.map((r, i) => (
              <RateCard
                key={i}
                item={r}
                index={i}
                featured={i === featuredIdx}
                perSession={s.perSession}
                popularLabel={s.popular}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-20 -mb-1">
        <WaveDividerInverted
          colorTop="var(--color-bg-soft)"
          colorBottom="var(--color-background)"
        />
      </div>

      <section className="relative pt-2 pb-16 md:py-24 lg:py-32 overflow-hidden bg-background">
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden z-0"
          aria-hidden
        >
          <motion.div
            style={{ x: sx, y: sy }}
            className="absolute -right-24 top-8 w-[460px] text-sage-soft opacity-40 lg:opacity-60 hidden lg:block"
          >
            <BotanicalSVG variant="leaf" className="b-float-s w-full h-full" />
          </motion.div>
          <motion.div
            style={{ x: sx, y: sy }}
            className="absolute -left-20 bottom-20 w-[380px] text-brand-soft opacity-35 lg:opacity-55 hidden lg:block -rotate-12"
          >
            <BotanicalSVG variant="bloom" className="b-float w-full h-full" />
          </motion.div>
          <motion.div
            style={{ x: sy, y: sx }}
            className="absolute -left-16 top-[30%] w-[300px] text-border opacity-30 lg:opacity-50 hidden lg:block"
          >
            <BotanicalSVG variant="branch" className="b-sway-r w-full h-full" />
          </motion.div>
          <motion.div
            style={{ x: sx, y: sy }}
            className="absolute right-[5%] bottom-[15%] w-[220px] text-sage-soft opacity-25 lg:opacity-45 hidden lg:block rotate-6"
          >
            <BotanicalSVG variant="leaf" className="b-float-a w-full h-full" />
          </motion.div>

          <BotanicalSVG
            variant="branch"
            className="b-sway absolute right-[42%] -top-20 w-[260px] text-sage-soft opacity-10 hidden xl:block -rotate-90"
          />

          <FloatingLeaf
            className="top-[6%] left-[4%] w-10 opacity-10 text-ink-soft sm:w-12 lg:hidden"
            delay={0}
          />
          <FloatingLeaf
            className="bottom-[8%] right-[4%] w-12 opacity-10 text-brand sm:w-14 lg:hidden"
            delay={2}
          />
        </div>

        <SectionDivider />

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12 relative z-10 mt-2 md:mt-8 lg:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-brand/10 px-3.5 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-brand-deep font-bold">
                <MapPin className="w-3 h-3 md:w-3.5 md:h-3.5" />{" "}
                {s.module2Badge}
              </span>
              <h2 className="mt-5 md:mt-6 text-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] md:leading-[1.05] tracking-tight">
                {s.module2Title}
              </h2>

              <div className="mt-8 md:mt-10 rounded-[2rem] border border-border-soft bg-surface/60 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-bg-warmer rounded-full blur-2xl md:blur-3xl -z-10" />
                <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.26em] text-brand font-bold">
                  <CalendarCheck className="w-4 h-4 md:w-5 md:h-5" />{" "}
                  {s.vipMinBadge}
                </div>
                <p className="mt-4 md:mt-5 text-ink-muted leading-relaxed text-sm md:text-base font-light">
                  {s.vipMinText}
                </p>
              </div>

              <Link
                to="/contact"
                className="group mt-8 md:mt-10 inline-flex items-center justify-center gap-3 md:gap-4 rounded-full bg-ink-soft hover:bg-brand text-surface px-6 md:px-8 py-3.5 md:py-4 text-[13px] md:text-sm font-bold tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
              >
                {s.btnProposal}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-ink-soft to-ink text-surface p-7 sm:p-10 lg:p-14 relative overflow-hidden shadow-2xl shadow-ink-soft/20 mt-4 lg:mt-0"
            >
              <div
                className="absolute -top-20 -right-20 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full opacity-20 md:opacity-30 blur-[80px] md:blur-[100px]"
                style={{ background: "var(--color-brand)" }}
              />
              <div
                className="absolute -bottom-10 -left-10 w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full opacity-10 blur-[60px] md:blur-[80px]"
                style={{ background: "var(--color-bg-soft)" }}
              />

              <h3 className="relative text-display text-2xl sm:text-3xl lg:text-4xl tracking-tight text-bg-soft">
                {s.practicalInfoTitle}
              </h3>

              <ul className="relative mt-8 md:mt-12 space-y-6 md:space-y-8">
                {s.practicalInfo.map((info: string, i: number) => {
                  const Icon =
                    [Info, MapPin, CalendarCheck, Wallet, ShieldCheck][i] ||
                    Info;
                  return (
                    <li
                      key={i}
                      className="flex gap-4 md:gap-5 items-start group"
                    >
                      <span className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-[1rem] bg-surface/5 border border-surface/10 flex items-center justify-center group-hover:bg-brand/20 group-hover:border-brand/30 transition-all duration-300">
                        <Icon className="w-4 h-4 md:w-5 md:h-5 text-brand-soft" />
                      </span>
                      <span className="text-sm md:text-base leading-relaxed text-surface/80 font-light pt-0.5 md:pt-1">
                        {info}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24 relative z-10 bg-background overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden z-0"
          aria-hidden
        >
          <motion.div
            style={{ x: sx2, y: sy2 }}
            className="absolute -left-16 top-0 w-[260px] text-sage-soft opacity-20 lg:opacity-35 hidden lg:block"
          >
            <BotanicalSVG variant="leaf" className="b-float-a w-full h-full" />
          </motion.div>
          <motion.div
            style={{ x: sx2, y: sy2 }}
            className="absolute -right-12 bottom-0 w-[220px] text-brand-soft opacity-20 lg:opacity-30 hidden lg:block rotate-180"
          >
            <BotanicalSVG variant="bloom" className="b-float-s w-full h-full" />
          </motion.div>
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto rounded-[2rem] border border-border-soft bg-surface/40 backdrop-blur-sm p-6 sm:p-8 lg:p-10 text-center">
            <div className="flex items-center justify-center gap-2 text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-ink-muted font-bold mb-3 md:mb-4">
              <Info className="w-3.5 h-3.5 md:w-4 md:h-4" /> {s.legalBadge}
            </div>
            <p className="text-[13px] md:text-sm leading-relaxed text-ink-muted max-w-3xl mx-auto font-light">
              {s.legalDesc}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 md:mt-24 lg:mt-32 rounded-[2rem] border border-border-soft bg-gradient-to-br from-surface to-bg-soft px-6 sm:px-8 lg:px-12 py-7 md:py-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-8 lg:gap-12 shadow-sm"
          >
            <div className="flex items-center gap-4 md:min-w-[240px] lg:min-w-[280px]">
              <span className="w-1.5 h-10 md:h-12 bg-gradient-to-b from-brand to-brand-deep rounded-full shrink-0" />
              <h3 className="text-display text-xl md:text-2xl tracking-tight">
                {s.whyTitle}
              </h3>
            </div>
            <div className="hidden md:block w-px h-12 bg-border-soft" />
            <p className="text-ink-muted text-sm md:text-base leading-relaxed flex-1 font-light">
              {s.whyDesc}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Servicii;
