import { useState, useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  Armchair,
  Presentation,
  HeartPulse,
  Hotel,
  PartyPopper,
} from "lucide-react";
import { BotanicalSVG } from "./BotanicalSVG";
import { useLanguage } from "../context/LanguageContext";
import sanatate from "../assets/sanatate.avif";
import pozaHotel from "../assets/hotele.avif";
import pozaBus from "../assets/bus.avif";
import pozaBirou from "../assets/work.avif";
import pozaOcazii from "../assets/special.avif";

const trustBarStyles = `
  @keyframes botanical-sway { 0%, 100% { transform: rotate(-3deg) translateX(0px); } 50% { transform: rotate(-0.5deg) translateX(5px); } }
  @keyframes botanical-sway-light { 0%, 100% { transform: rotate(5deg) scale(0.95); } 50% { transform: rotate(8deg) scale(0.98) translateY(4px); } }
  @keyframes botanical-float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-10px) rotate(3deg); } }
  @keyframes botanical-float-slow { 0%, 100% { transform: translateY(0px) rotate(180deg); } 50% { transform: translateY(8px) rotate(182deg); } }
  
  .bot-sway { animation: botanical-sway 10s ease-in-out infinite; }
  .bot-sway-delayed { animation: botanical-sway-light 14s ease-in-out infinite 2s; }
  .bot-float { animation: botanical-float 8s ease-in-out infinite 0.5s; }
  .bot-float-delayed { animation: botanical-float-slow 13s ease-in-out infinite 1.5s; }
`;

export function TrustBar() {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 18, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 18, damping: 25 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseX.set((e.clientX - window.innerWidth / 2) / 45);
      mouseY.set((e.clientY - window.innerHeight / 2) / 45);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mouseX, mouseY]);

  const icons = [Armchair, Presentation, HeartPulse, Hotel, PartyPopper];
  const bgImages = [pozaBirou, pozaBus, sanatate, pozaHotel, pozaOcazii];

  const categories = t.trustBar.items.map((item, index) => ({
    id: `0${index + 1}`,
    title: item.title,
    label: item.label,
    icon: icons[index],
    bgImage: bgImages[index],
  }));

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#f6f4f0] py-24 md:py-32 select-none overflow-hidden antialiased text-[#1a1816]"
    >
      <style dangerouslySetInnerHTML={{ __html: trustBarStyles }} />

      <div
        className="absolute inset-0 opacity-[0.012] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "160px",
        }}
      />

      {/* Decorative Botanicals */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none"
        aria-hidden="true"
      >
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute -left-24 top-6 w-64 sm:w-80 lg:w-[460px] text-[#9eab95] opacity-40 lg:opacity-65 hidden lg:block"
        >
          <BotanicalSVG variant="leaf" className="bot-sway w-full h-full" />
        </motion.div>
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute -left-12 top-[42%] w-44 sm:w-56 lg:w-[320px] text-[#b5a898] opacity-35 lg:opacity-55 hidden lg:block"
        >
          <BotanicalSVG
            variant="bloom"
            className="bot-sway-delayed w-full h-full"
          />
        </motion.div>
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute -right-24 bottom-16 w-44 sm:w-56 lg:w-[380px] text-[#bd9b84] opacity-45 lg:opacity-70 hidden lg:block rotate-12"
        >
          <BotanicalSVG variant="bloom" className="bot-float w-full h-full" />
        </motion.div>
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute -right-16 top-20 w-52 sm:w-64 lg:w-[360px] text-[#9eab95] opacity-35 lg:opacity-55 hidden lg:block"
        >
          <BotanicalSVG
            variant="leaf"
            className="bot-float-delayed w-full h-full"
          />
        </motion.div>
        <BotanicalSVG
          variant="leaf"
          className="bot-sway absolute left-[46%] -top-28 w-[300px] text-[#9eab95] opacity-15 hidden xl:block rotate-90"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-12 sm:mb-20 flex flex-col gap-6 border-b border-[#1a1816]/10 pb-8 max-w-7xl mx-auto"
        >
          <div className="space-y-2">
            <span className="font-mono text-[9px] tracking-[0.35em] text-[#baa090] uppercase block font-semibold">
              {t.trustBar.badge}
            </span>
            <h2
              className="text-[2rem] sm:text-[2.4rem] md:text-[3rem] font-light tracking-tight leading-[1.1] text-[#1a1816]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {t.trustBar.titlu1} <br />
              <span className="italic font-normal text-[#8c827a]">
                {t.trustBar.titluItalic}
              </span>
            </h2>
          </div>
          <p className="text-[13px] md:text-[14px] text-[#6b6661] font-light max-w-4xl leading-[1.8] font-sans mt-2">
            {t.trustBar.descriere}
          </p>
        </motion.div>

        {/* ── GRID MODERN EXOTIC (Zig-Zag) ── */}
        {/* Folosim grid-cols-5 și items-start pentru a lăsa fiecare card să curgă natural */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 w-full relative z-10 items-start lg:pb-20">
          {categories.map((item, index) => {
            const isHovered = hoveredIndex === index;

            // MAGIA ESTE AICI: Dacă index-ul este impar (1 și 3, adică pozele 2 și 4), le împingem în jos
            const isStaggered = index % 2 !== 0;
            const staggerClass = isStaggered ? "lg:mt-24" : "lg:mt-0";

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                // h-fit se mulează exact pe poză, iar staggerClass le dă forma de "Val"
                className={`h-fit relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-[#1a1816] cursor-pointer group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 ${staggerClass}`}
              >
                {/* 1. IMAGINEA PRINCIPALĂ (Nimic tăiat, nicio dungă neagră) */}
                <img
                  src={item.bgImage}
                  alt={item.title}
                  className={`w-full h-auto block transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isHovered ? "scale-105" : "scale-100"
                  }`}
                />

                {/* 2. GRADIENT PENTRU LIZIBILITATEA TEXTULUI */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(26,24,22,0.95) 0%, rgba(26,24,22,0.3) 50%, transparent 100%)",
                  }}
                />

                {/* 3. CONȚINUT TEXT */}
                <div className="absolute inset-0 p-5 sm:p-6 lg:p-5 xl:p-6 flex flex-col justify-end z-20 text-white">
                  <div className="mt-auto relative z-20">
                    <span className="text-[9px] tracking-[0.3em] text-white/60 font-mono mb-2 block">
                      {item.id}
                    </span>
                    <h3
                      className="text-[1.2rem] sm:text-[1.4rem] lg:text-[1.05rem] xl:text-[1.2rem] font-light tracking-tight text-white mb-2 leading-snug"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {item.title}
                    </h3>

                    {/* Descrierea apare finuț */}
                    <div
                      className="grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{
                        gridTemplateRows:
                          isHovered || window.innerWidth < 1024 ? "1fr" : "0fr",
                      }}
                    >
                      <div className="overflow-hidden">
                        <p className="text-[11px] xl:text-[12px] font-light opacity-90 text-[#eae6df] leading-relaxed mt-1">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FOOTER */}
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-neutral-300 flex flex-col space-y-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-1 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-12 gap-y-4">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-xl font-light font-serif text-neutral-950">
                  NRW
                </span>
                <span className="text-[10px] tracking-[0.2em] text-neutral-600 uppercase font-bold">
                  {t.trustBar.statRegiune}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 tracking-[0.2em] uppercase font-bold text-[10px] text-neutral-900">
              <span className="w-2 h-2 rounded-full bg-[#b7744f] block animate-pulse" />
              {t.trustBar.legalBadge}
            </div>
          </div>
          <div className="border-t border-neutral-300 pt-6 sm:pl-6 sm:border-t-0 sm:border-l sm:border-neutral-300">
            <p className="text-[11px] leading-[1.8] text-neutral-700 font-medium tracking-wide font-sans max-w-4xl text-center sm:text-left">
              <strong className="text-neutral-950 font-bold block mb-1 uppercase tracking-widest text-[10px]">
                {t.trustBar.legalTitlu}
              </strong>
              {t.trustBar.legalDescriere}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
