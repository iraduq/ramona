import { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Asterisk,
} from "lucide-react";
import { BotanicalSVG } from "../components/BotanicalSVG";
import { useLanguage } from "../context/LanguageContext";

// --- INTERFEȚE TYPESCRIPT ---
interface RateItem {
  time: string;
  price: string;
  detail?: string;
  featured?: boolean;
}

interface RateCardProps {
  item: RateItem;
  perSession: string;
  popularLabel?: string;
  index: number;
}
// -----------------------------------

const luxuryStyles = `
  @keyframes shimmer-slow {
    0% { transform: translateX(-150%) skewX(-15deg); }
    100% { transform: translateX(200%) skewX(-15deg); }
  }
  .animate-shimmer-slow {
    animation: shimmer-slow 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export function Servicii() {
  const { t } = useLanguage();
  const s = t.servicesPage;
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Parallax subtil pentru mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 15, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 15, damping: 40 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseX.set((e.clientX - window.innerWidth / 2) / 50);
      mouseY.set((e.clientY - window.innerHeight / 2) / 50);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mouseX, mouseY]);

  return (
    <div className="w-full min-h-screen bg-[#fcfbf9] text-[#1a1816] antialiased overflow-hidden selection:bg-[#b08d7a]/30 relative">
      <Helmet>
        <title>{s.metaTitle || "Servicii | Ramona's Mobile Massage"}</title>
        <meta
          name="description"
          content={s.metaDesc || "Descoperă serviciile noastre de masaj mobil."}
        />
      </Helmet>

      <style dangerouslySetInnerHTML={{ __html: luxuryStyles }} />

      {/* ─── TEXTURĂ DE FUNDAL (NOISE FIN) ─── */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none z-0 fixed mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ─── HERO EDITORIAL ─── */}
      <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden z-10">
        {/* Glow & Botanicals VIZIBILE */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#b08d7a]/15 to-transparent rounded-full blur-[100px] -translate-y-1/3 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#9aa896]/15 to-transparent rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" />

          {/* Ramă delicată în dreapta */}
          <motion.div
            style={{ x: springX, y: springY }}
            animate={{ rotate: [0, 2, 0], y: [0, -10, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -right-10 top-10 w-[35rem] opacity-30 hidden lg:block"
          >
            <BotanicalSVG
              variant="branch"
              className="w-full h-full text-[#7a6a60]"
            />
          </motion.div>

          {/* Frunză subtilă în stânga */}
          <motion.div
            style={{ x: springY, y: springX }}
            animate={{ rotate: [0, -3, 0], x: [0, -10, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -left-12 top-[40%] w-[18rem] opacity-30 hidden lg:block"
          >
            <BotanicalSVG
              variant="leaf"
              className="w-full h-full text-[#9aa896]"
            />
          </motion.div>
        </div>

        <div className="relative mx-auto max-w-[85rem] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-24 items-center">
            {/* TEXT ECHILIBRAT (Mai fin, mai elegant) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Titlul este acum mai mic și mai rafinat (text-3xl la 4xl/5xl) */}
              <h1 className="font-serif text-[2.2rem] sm:text-4xl lg:text-[3.25rem] font-light tracking-[-0.01em] leading-[1.2] text-[#1a1816]">
                {s.titlu1}
                <span className="text-[#b08d7a] italic font-normal block mt-2 lg:mt-3 lg:ml-8">
                  {s.titluItalic}
                </span>
              </h1>

              <div className="mt-8 lg:mt-10 flex items-start gap-4 border-l border-[#b08d7a]/30 pl-6 lg:ml-2 relative">
                <div className="absolute -left-[3px] top-0 w-1.5 h-1.5 rounded-full bg-[#b08d7a]/60" />
                <p className="text-[13.5px] lg:text-[14.5px] text-[#7a6a60] font-light leading-[1.9] max-w-md">
                  {s.descriere}
                </p>
              </div>
            </motion.div>

            {/* ETHICAL BADGE - FLOAT DELICAT */}
            <motion.div
              initial={{ opacity: 0, x: 20, rotate: 1 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative lg:ml-auto w-full max-w-[22rem]"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative overflow-hidden rounded-[2rem] bg-white/40 backdrop-blur-2xl border border-white/70 p-8 shadow-[0_20px_40px_-15px_rgba(176,141,122,0.1)] group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#b08d7a]/15 to-transparent blur-2xl transition-all duration-700 group-hover:scale-125" />

                <div className="flex items-center gap-3 mb-5 relative z-10">
                  <Asterisk className="w-3.5 h-3.5 text-[#b08d7a] animate-[spin_6s_linear_infinite]" />
                  <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-[#1a1816] font-bold mt-px">
                    {s.ethicalBadge}
                  </span>
                </div>

                <p className="text-[13.5px] text-[#1a1816] font-light leading-relaxed mb-6 relative z-10">
                  {s.ethicalTitle}
                </p>

                <div className="flex items-center justify-between bg-[#1a1816] text-[#fcfbf9] py-1.5 pl-5 pr-1.5 rounded-full relative z-10 transition-all cursor-pointer hover:bg-[#b08d7a] duration-500 shadow-sm">
                  <span className="font-mono font-medium tracking-[0.2em] uppercase text-[9px]">
                    {s.ethicalSub}
                  </span>
                  <div className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-95 border border-white/5">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FLOATING RIBBON (WHY US) ─── */}
      <div className="w-full px-6 lg:px-12 -mt-12 lg:-mt-16 relative z-30 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-[85rem] bg-white/80 backdrop-blur-xl rounded-[1.5rem] p-6 lg:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.03)] border border-white pointer-events-auto"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#b08d7a] to-[#d8c3b5] rounded-l-[1.5rem]" />

          <div className="relative z-10 flex-1 pl-4 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 w-full">
            <h3 className="font-serif text-[1.2rem] lg:text-[1.4rem] text-[#1a1816] font-light whitespace-nowrap">
              {s.whyTitle}
            </h3>
            <div className="h-px bg-gradient-to-r from-[#b08d7a]/20 to-transparent flex-1 hidden lg:block" />
            <p className="text-[13px] lg:text-[13.5px] text-[#7a6a60] font-light leading-relaxed max-w-xl">
              {s.whyDesc}
            </p>
          </div>

          <div className="hidden md:flex shrink-0 w-10 h-10 bg-[#fcfbf9] rounded-full items-center justify-center border border-[#b08d7a]/15 shadow-inner">
            <CheckCircle2
              className="w-4 h-4 text-[#b08d7a]"
              strokeWidth={1.5}
            />
          </div>
        </motion.div>
      </div>

      {/* ─── MAIN LAYOUT (SPA MENU) ─── */}
      <div
        ref={sectionRef}
        className="relative z-10 mx-auto max-w-[85rem] px-6 lg:px-12 py-20 lg:py-32"
      >
        {/* Frunze imense în fundal (opacity-10) vizibile clar */}
        <motion.div
          animate={{ rotate: [0, 3, 0], x: [0, 10, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute right-[-15%] top-[10%] w-[50rem] opacity-[0.3] hidden xl:block pointer-events-none"
        >
          <BotanicalSVG
            variant="bloom"
            className="w-full h-full text-[#b08d7a]"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 relative z-10">
          {/* LEFT COLUMN: Tarife */}
          <div className="flex flex-col">
            <ColHeader badge={s.module1Badge} title={s.module1Title} />

            <div className="mt-10 mb-6 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#b08d7a]/40 block" />
              <span className="text-[9px] uppercase tracking-[0.3em] font-mono text-[#b08d7a] font-bold">
                {s.startingFrom}
              </span>
            </div>

            <div className="space-y-3">
              {s.rates.map((item: RateItem, idx: number) => (
                <RateCard
                  key={idx}
                  item={item}
                  perSession={s.perSession}
                  popularLabel={s.popular}
                  index={idx}
                />
              ))}
            </div>

            {/* QUOTE EDITORIAL */}
            {s.quote && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="mt-12 bg-white/40 border border-[#1a1816]/5 p-8 rounded-[1.5rem] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Sparkles className="w-12 h-12" />
                </div>
                <div className="flex gap-4">
                  <div className="w-px bg-gradient-to-b from-[#b08d7a]/40 to-transparent shrink-0" />
                  <p className="font-serif italic text-[14.5px] lg:text-[15.5px] text-[#5c524c] leading-[1.8] font-light relative z-10">
                    "{s.quote}"
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* RIGHT COLUMN: VIP & Info */}
          <div className="flex flex-col border-t border-[#1a1816]/5 lg:border-t-0 pt-12 lg:pt-0">
            <ColHeader badge={s.module2Badge} title={s.module2Title} />

            {/* VIP CARD "OBSIDIAN" */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-10 overflow-hidden rounded-[1.5rem] bg-[#141312] text-[#fcfbf9] p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] group border border-white/5"
            >
              <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer-slow pointer-events-none" />
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#b08d7a] rounded-full blur-[60px] opacity-[0.15] group-hover:opacity-30 transition-opacity duration-1000" />

              <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center border border-white/20 backdrop-blur-md">
                    <Sparkles className="w-3 h-3 text-[#e4d5cc]" />
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#e4d5cc] font-semibold mt-px">
                    {s.vipMinBadge}
                  </span>
                </div>
                <div>
                  <h4 className="font-serif text-[1.4rem] font-light mb-2 text-white tracking-wide">
                    The Signature Experience
                  </h4>
                  <p className="text-[13px] text-white/60 font-light leading-[1.8] max-w-sm">
                    {s.vipMinText}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* PRACTICAL INFO - DELICAT */}
            <div className="mt-12">
              <h3 className="font-serif text-[1.2rem] lg:text-[1.4rem] font-light text-[#1a1816] mb-5">
                {s.practicalInfoTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {s.practicalInfo.map((info: string, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    className="bg-white p-5 rounded-[1rem] border border-[#1a1816]/5 shadow-sm flex flex-col justify-start group hover:border-[#b08d7a]/20 transition-colors"
                  >
                    <Asterisk className="w-3 h-3 text-[#b08d7a]/50 mb-3 group-hover:text-[#b08d7a] transition-colors duration-300" />
                    <p className="text-[12.5px] text-[#7a6a60] font-light leading-[1.7]">
                      {info}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* LEGAL BOX */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 p-6 rounded-[1rem] bg-[#f0e8e0]/30 border border-[#b08d7a]/15 flex items-start gap-4"
            >
              <ShieldCheck
                className="w-4 h-4 text-[#b08d7a] shrink-0 mt-0.5"
                strokeWidth={1.5}
              />
              <div>
                <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#1a1816] font-bold block mb-1.5">
                  {s.legalBadge}
                </span>
                <p className="text-[12px] leading-[1.7] text-[#8a7b72] font-light">
                  {s.legalDesc}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── SUB-COMPONENTS ─── */
function ColHeader({ badge, title }: { badge: string; title: string }) {
  return (
    <div className="flex flex-col items-start relative">
      <span className="inline-block text-[9px] font-semibold font-mono uppercase tracking-[0.3em] text-[#b08d7a] border border-[#b08d7a]/20 px-3 py-1 rounded-full mb-5 bg-white">
        {badge}
      </span>
      {/* Mai rafinat: text-2xl/3xl în loc de 4xl */}
      <h2 className="font-serif text-[1.6rem] sm:text-[2rem] lg:text-[2.2rem] font-light tracking-tight text-[#1a1816] leading-[1.2]">
        {title}
      </h2>
    </div>
  );
}

function RateCard({ item, perSession, popularLabel, index }: RateCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`group relative flex items-center justify-between p-5 lg:p-6 rounded-[1.25rem] transition-all duration-500 cursor-pointer overflow-hidden ${
        item.featured
          ? "bg-[#1f1d1b] text-[#fcfbf9] shadow-[0_15px_30px_-10px_rgba(0,0,0,0.2)] scale-[1.01] origin-left border border-[#33302d] z-10 my-3"
          : "bg-white/60 backdrop-blur-sm border border-[#1a1816]/5 hover:bg-white hover:border-[#b08d7a]/20 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.03)]"
      }`}
    >
      {/* Săgeată interactivă la hover */}
      {!item.featured && (
        <div className="absolute left-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <ArrowRight className="w-3.5 h-3.5 text-[#b08d7a]" />
        </div>
      )}

      {/* Featured Badge */}
      {item.featured && (
        <div className="absolute top-0 right-6">
          <span className="text-[8.5px] font-mono uppercase tracking-[0.3em] bg-[#b08d7a] text-white px-3 py-1 rounded-b-md font-semibold shadow-sm">
            {popularLabel}
          </span>
        </div>
      )}

      {/* Linie verticală decorativă animată */}
      <div
        className={`w-[2px] h-10 rounded-full shrink-0 transition-all duration-700 ease-out ${
          item.featured
            ? "bg-[#b08d7a]"
            : hovered
              ? "opacity-0 scale-y-50"
              : "bg-[#1a1816]/10"
        }`}
      />

      <div
        className={`flex-1 min-w-0 space-y-1 ml-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          !item.featured && "group-hover:translate-x-5"
        }`}
      >
        <div className="flex items-baseline gap-4">
          {/* Mărime preț: 2xl / nu exagerat */}
          <span
            className={`font-serif text-[1.3rem] sm:text-[1.6rem] font-light tracking-tight block transition-colors duration-500 ${
              item.featured
                ? "text-white"
                : "text-[#1a1816] group-hover:text-[#b08d7a]"
            }`}
          >
            {item.time}
          </span>
        </div>

        {item.detail && (
          <p
            className={`text-[12.5px] font-light leading-snug ${
              item.featured ? "text-white/50" : "text-[#8a7b72]"
            }`}
          >
            {item.detail}
          </p>
        )}
      </div>

      <div className="text-right shrink-0 relative z-10 flex flex-col items-end justify-center">
        {/* Preț: text-2xl */}
        <span
          className={`font-serif text-[1.4rem] sm:text-[1.8rem] font-light leading-none transition-colors duration-500 ${
            item.featured
              ? "text-white"
              : hovered
                ? "text-[#b08d7a]"
                : "text-[#1a1816]"
          }`}
        >
          {item.price}
        </span>
        <span
          className={`block text-[8.5px] mt-2 font-mono uppercase tracking-[0.3em] ${
            item.featured ? "text-[#b08d7a]" : "text-[#8a7b72]"
          }`}
        >
          {perSession}
        </span>
      </div>
    </motion.div>
  );
}
export default Servicii;
