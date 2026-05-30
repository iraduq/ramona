import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Clock,
  Star,
  MapPin,
  Wallet,
  CalendarCheck,
  Info,
  Leaf,
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

/* ─── COMPONENTE VIZUALE EXTRA ─── */
const SectionDivider = () => (
  <div className="w-full flex items-center justify-center py-8 lg:py-16 opacity-60">
    <div className="w-20 md:w-32 h-px bg-gradient-to-r from-transparent via-[#b7744f] to-transparent" />
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="mx-3 md:mx-4 text-[#b7744f]"
    >
      <Sparkles className="w-4 h-4 md:w-5 md:h-5 opacity-70" />
    </motion.div>
    <div className="w-20 md:w-32 h-px bg-gradient-to-l from-transparent via-[#b7744f] to-transparent" />
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
          ? "bg-gradient-to-b from-[#4a3b32] to-[#362b24] text-[#F7F5F2] shadow-[0_20px_40px_-15px_rgba(74,59,50,0.5)] lg:-translate-y-4 ring-1 ring-white/10"
          : "bg-white text-[#4a3b32] border border-[#e5e0d8] hover:border-[#b7744f] hover:shadow-[0_15px_30px_-10px_rgba(183,116,79,0.15)] hover:-translate-y-1 lg:hover:-translate-y-2 backdrop-blur-sm"
      }`}
    >
      {/* Background Glow for Featured */}
      {featured && (
        <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#b7744f] rounded-full blur-[60px] opacity-20" />
        </div>
      )}

      {featured && (
        <motion.span
          initial={{ scale: 0.9 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#b7744f] to-[#965935] px-3.5 py-1 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] text-white shadow-md shadow-[#b7744f]/30 z-10 whitespace-nowrap"
        >
          <Star className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current" />{" "}
          {popularLabel}
        </motion.span>
      )}

      <div className="relative z-10 flex items-center gap-2 text-[10px] md:text-[11px] uppercase tracking-[0.28em] opacity-70">
        <Clock
          className={`w-3.5 h-3.5 md:w-4 md:h-4 ${featured ? "text-[#d6a68d]" : "text-[#b7744f]"}`}
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
          className={`relative z-10 mt-6 md:mt-8 text-sm leading-relaxed ${featured ? "text-white/80" : "text-[#73655c]"}`}
        >
          {item.detail}
        </p>
      )}

      <div
        className={`relative z-10 mt-auto pt-5 md:pt-6 border-t ${featured ? "border-white/10" : "border-[#e5e0d8]"} flex items-center justify-between text-[11px] md:text-xs`}
      >
        <span className="uppercase tracking-[0.25em] font-medium opacity-60">
          Inkl. Setup
        </span>
        <CheckCircle2
          className={`w-4 h-4 md:w-5 md:h-5 ${featured ? "text-[#d6a68d]" : "text-[#c2baaf]"}`}
        />
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

  useEffect(() => {
    // Only apply mouse parallax on desktop
    if (window.innerWidth < 1024) return;
    const h = (e: MouseEvent) => {
      mouseX.set((e.clientX - window.innerWidth / 2) / 60);
      mouseY.set((e.clientY - window.innerHeight / 2) / 60);
    };
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, [mouseX, mouseY]);

  const rates = s.rates as readonly RateItem[];
  const featuredIdx = 2; // 25 min

  return (
    <div className="w-full min-h-screen bg-[#F7F5F2] text-[#4a3b32] antialiased selection:bg-[#b7744f]/20 overflow-hidden font-sans">
      <Helmet>
        <title>{s.metaTitle}</title>
        <meta name="description" content={s.metaDesc} />
      </Helmet>

      {/* ─── HERO ─── */}
      <section className="relative pt-4 pb-16 md:pb-20 lg:pb-24 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute -top-20 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full blur-[100px] md:blur-[140px] opacity-50 md:opacity-60"
            style={{
              background: "radial-gradient(circle, #f2e8de, transparent 70%)",
            }}
          />
          <div
            className="absolute top-40 -left-20 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full blur-[80px] md:blur-[120px] opacity-40 md:opacity-50"
            style={{
              background: "radial-gradient(circle, #e8dfd5, transparent 70%)",
            }}
          />

          {/* Parallax Botanicals (Desktop Only) */}
          <motion.div
            style={{ x: sx, y: sy }}
            className="absolute -right-10 top-0 w-[38rem] opacity-[0.05] hidden lg:block"
          >
            <BotanicalSVG
              variant="branch"
              className="w-full h-full text-[#4a3b32]"
            />
          </motion.div>
          <motion.div
            style={{ x: sy, y: sx }}
            className="absolute -left-16 top-[25%] w-[20rem] opacity-[0.06] hidden lg:block"
          >
            <BotanicalSVG
              variant="leaf"
              className="w-full h-full text-[#b7744f]"
            />
          </motion.div>

          {/* Floating Leaves (Hidden on very small screens to avoid clutter) */}
          <FloatingLeaf
            className="top-[15%] left-[10%] w-12 opacity-10 text-[#4a3b32] hidden sm:block lg:w-16 lg:left-[20%]"
            delay={0}
          />
          <FloatingLeaf
            className="bottom-[20%] right-[10%] w-16 opacity-15 text-[#b7744f] hidden sm:block lg:w-24 lg:right-[25%]"
            delay={2}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-12 mt-6 lg:mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-[#b7744f]/10 border border-[#b7744f]/20 px-3.5 py-1.5 md:px-4 md:py-2 text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#b7744f] font-bold mb-6 md:mb-8">
                <Leaf className="w-3 h-3 md:w-3.5 md:h-3.5" /> {s.topBadge}
              </div>
              <h1 className="text-display text-[2.5rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
                {s.titlu1}{" "}
                <em className="not-italic text-[#b7744f] font-light italic relative whitespace-nowrap">
                  {s.titluItalic}
                  <svg
                    className="absolute w-full h-2 md:h-3 -bottom-0.5 md:-bottom-1 left-0 text-[#b7744f] opacity-30"
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
              <p className="mt-6 md:mt-8 max-w-xl mx-auto lg:mx-0 text-base md:text-lg lg:text-xl text-[#73655c] leading-relaxed font-light">
                {s.descriere}
              </p>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative rounded-[2rem] bg-white/80 backdrop-blur-xl border border-white p-7 sm:p-8 lg:p-10 shadow-[0_20px_50px_-20px_rgba(74,59,50,0.1)]"
            >
              <div className="absolute top-0 right-0 p-5 md:p-6 opacity-5 pointer-events-none">
                <ShieldCheck className="w-16 h-16 md:w-24 md:h-24 text-[#4a3b32]" />
              </div>
              <div className="flex items-center gap-2.5 text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#b7744f] font-bold">
                <ShieldCheck className="w-4 h-4" /> {s.ethicalBadge}
              </div>
              <p className="mt-4 md:mt-5 text-[#4a3b32] text-lg md:text-xl leading-snug font-medium pr-4">
                {s.ethicalTitle}
              </p>
              <button className="mt-6 md:mt-8 group inline-flex items-center gap-3 rounded-full bg-[#4a3b32] hover:bg-[#b7744f] text-white px-5 py-3 text-[10px] md:text-[11px] uppercase tracking-[0.24em] font-bold transition-all duration-300 w-full sm:w-auto justify-center">
                {s.ethicalSub}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.aside>
          </div>

          {/* Why bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 md:mt-24 lg:mt-32 rounded-[2rem] border border-[#e5e0d8] bg-gradient-to-br from-white to-[#F7F5F2] px-6 sm:px-8 lg:px-12 py-7 md:py-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-8 lg:gap-12 shadow-sm"
          >
            <div className="flex items-center gap-4 md:min-w-[240px] lg:min-w-[280px]">
              <span className="w-1.5 h-10 md:h-12 bg-gradient-to-b from-[#b7744f] to-[#965935] rounded-full shrink-0" />
              <h3 className="text-display text-xl md:text-2xl tracking-tight">
                {s.whyTitle}
              </h3>
            </div>
            <div className="hidden md:block w-px h-12 bg-[#e5e0d8]" />
            <p className="text-[#73655c] text-sm md:text-base leading-relaxed flex-1 font-light">
              {s.whyDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── PREISE ─── */}
      <div className="relative z-20 -mb-1">
        <WaveDividerInverted colorTop="#F7F5F2" colorBottom="#f0ece6" />
      </div>

      <section className="relative py-16 md:py-24 lg:py-32 bg-[#f0ece6]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-16 lg:mb-20 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/60 border border-[#e5e0d8] px-3.5 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-[#b7744f] font-bold shadow-sm">
                {s.module1Badge}
              </span>
              <h2 className="mt-4 md:mt-6 text-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
                {s.module1Title}
              </h2>
            </div>
            <div className="inline-flex items-center justify-center gap-2.5 bg-white/50 px-5 md:px-6 py-2.5 md:py-3 rounded-2xl border border-[#e5e0d8] mx-auto md:mx-0">
              <Wallet className="w-4 h-4 md:w-5 md:h-5 text-[#b7744f]" />
              <p className="text-xs md:text-sm text-[#73655c]">
                <span className="uppercase tracking-[0.2em] md:tracking-[0.22em] text-[#4a3b32] font-bold mr-1.5">
                  {s.startingFrom}
                </span>
                <span className="text-base md:text-lg text-[#4a3b32] font-medium">
                  {rates[0]?.price}
                </span>{" "}
                <span className="opacity-80">{s.perSession}</span>
              </p>
            </div>
          </div>

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

      {/* ─── HOTELS / SPECIAL ─── */}
      <div className="relative z-20 -mb-1">
        <WaveDividerInverted colorTop="#f0ece6" colorBottom="#F7F5F2" />
      </div>

      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-[#F7F5F2]">
        <SectionDivider />

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12 relative z-10 mt-8 lg:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-[#b7744f]/10 px-3.5 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-[#965935] font-bold">
                <MapPin className="w-3 h-3 md:w-3.5 md:h-3.5" />{" "}
                {s.module2Badge}
              </span>
              <h2 className="mt-5 md:mt-6 text-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] md:leading-[1.05] tracking-tight">
                {s.module2Title}
              </h2>

              <div className="mt-8 md:mt-10 rounded-[2rem] border border-[#e5e0d8] bg-white/60 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#e8dfd5] rounded-full blur-2xl md:blur-3xl -z-10" />
                <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.26em] text-[#b7744f] font-bold">
                  <CalendarCheck className="w-4 h-4 md:w-5 md:h-5" />{" "}
                  {s.vipMinBadge}
                </div>
                <p className="mt-4 md:mt-5 text-[#73655c] leading-relaxed text-sm md:text-base font-light">
                  {s.vipMinText}
                </p>
              </div>

              <Link
                to="/contact"
                className="group mt-8 md:mt-10 inline-flex items-center justify-center gap-3 md:gap-4 rounded-full bg-[#4a3b32] hover:bg-[#b7744f] text-white px-6 md:px-8 py-3.5 md:py-4 text-[13px] md:text-sm font-bold tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
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
              className="rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-[#4a3b32] to-[#2a221c] text-white p-7 sm:p-10 lg:p-14 relative overflow-hidden shadow-2xl shadow-[#4a3b32]/20 mt-4 lg:mt-0"
            >
              <div
                className="absolute -top-20 -right-20 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full opacity-20 md:opacity-30 blur-[80px] md:blur-[100px]"
                style={{ background: "#b7744f" }}
              />
              <div
                className="absolute -bottom-10 -left-10 w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full opacity-10 blur-[60px] md:blur-[80px]"
                style={{ background: "#F7F5F2" }}
              />

              <h3 className="relative text-display text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#F7F5F2]">
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
                      <span className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-[1rem] bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#b7744f]/20 group-hover:border-[#b7744f]/30 transition-all duration-300">
                        <Icon className="w-4 h-4 md:w-5 md:h-5 text-[#d6a68d]" />
                      </span>
                      <span className="text-sm md:text-base leading-relaxed text-white/80 font-light pt-0.5 md:pt-1">
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

      {/* ─── LEGAL ─── */}
      <section className="pb-16 md:pb-24 relative z-10 bg-[#F7F5F2]">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-12">
          <div className="rounded-[2rem] border border-[#e5e0d8] bg-white/40 backdrop-blur-sm p-6 sm:p-8 lg:p-10 text-center">
            <div className="flex items-center justify-center gap-2 text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#73655c] font-bold mb-3 md:mb-4">
              <Info className="w-3.5 h-3.5 md:w-4 md:h-4" /> {s.legalBadge}
            </div>
            <p className="text-[13px] md:text-sm leading-relaxed text-[#73655c] max-w-3xl mx-auto font-light">
              {s.legalDesc}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Servicii;
