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
import pozaOcazii from "../assets/pozadubla.avif";

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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-12 sm:mb-20 flex flex-col gap-6 border-b border-[#1a1816]/10 pb-8"
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

        <div className="flex flex-col lg:flex-row gap-4 w-full h-auto lg:h-[550px] items-stretch relative z-10">
          {categories.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const anyHovered = hoveredIndex !== null;

            // Adaptare lățime la hover
            const flexBasis = isHovered
              ? "lg:flex-[2.8]"
              : anyHovered
                ? "lg:flex-[0.55]"
                : "lg:flex-1";

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setHoveredIndex(isHovered ? null : index)}
                className={`relative rounded-[2xl] sm:rounded-[2.2rem] overflow-hidden transition-all duration-750 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col lg:flex-row ${flexBasis} aspect-square lg:aspect-auto lg:h-full bg-[#eae6df] cursor-pointer border border-[#1a1816]/5 group`}
              >
                {/* 1. CONTAINER IMAGINE */}
                <div
                  className="absolute inset-y-0 right-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden z-0"
                  style={{
                    left: isHovered && window.innerWidth >= 1024 ? "50%" : "0%",
                    width:
                      isHovered && window.innerWidth >= 1024 ? "50%" : "100%",
                  }}
                >
                  {/* Fundal blur — umple întregul container, taie marginile */}
                  <img
                    src={item.bgImage}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-xl scale-125 opacity-60"
                  />

                  {/* Imagine principală — object-cover ca să umple fără a fi tăiată vizual */}
                  <img
                    src={item.bgImage}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]
      ${isHovered ? "scale-100" : "scale-[1.02]"}
      object-cover object-center`}
                  />

                  <div
                    className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(26,24,22,0.08) 0%, rgba(26,24,22,0.65) 100%)",
                      opacity: isHovered
                        ? window.innerWidth >= 1024
                          ? 0
                          : 0.85
                        : 0.65,
                    }}
                  />
                </div>

                {/* 2. PANEL TEXT ALB PE DESKTOP (apare la hover în stânga) — exact 50% lățime */}
                <div
                  className="absolute left-0 inset-y-0 hidden lg:flex flex-col justify-between z-20 bg-white overflow-hidden"
                  style={{
                    width: "50%",
                    transform: isHovered
                      ? "translateX(0)"
                      : "translateX(-100%)",
                    opacity: isHovered ? 1 : 0,
                    transition:
                      "transform 700ms cubic-bezier(0.16,1,0.3,1), opacity 700ms cubic-bezier(0.16,1,0.3,1)",
                    padding: "2.5rem",
                  }}
                >
                  <div className="space-y-6 relative">
                    <div className="space-y-3 relative z-10">
                      <h3
                        className="text-[1.5rem] font-light tracking-tight text-[#1a1816]"
                        style={{ fontFamily: "'Georgia', serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-[12px] leading-relaxed font-light text-[#8c827a] max-w-sm">
                        {item.label}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-end justify-between border-t border-[#1a1816]/10 pt-6"></div>
                </div>

                {/* 3. TEXT PESTE IMAGINE (pe Mobil mereu, pe Desktop doar când e închis) */}
                <div
                  className="relative inset-0 p-6 sm:p-8 flex flex-col justify-between z-20 text-white w-full h-full lg:transition-opacity lg:duration-500"
                  style={{
                    opacity: isHovered && window.innerWidth >= 1024 ? 0 : 1,
                  }}
                >
                  <div className="mt-auto space-y-1 lg:space-y-2 relative z-20">
                    <h3
                      className="text-[1.2rem] sm:text-[1.4rem] font-light tracking-tight text-white"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {item.title}
                    </h3>

                    {/* Descriere care se deschide (acordeon) pe mobil la hover/click */}
                    <motion.p
                      initial={false}
                      animate={{
                        height:
                          isHovered && window.innerWidth < 1024 ? "auto" : 0,
                        opacity: isHovered && window.innerWidth < 1024 ? 1 : 0,
                      }}
                      className="text-[11px] font-light opacity-90 text-[#eae6df] max-w-xl overflow-hidden leading-relaxed block lg:hidden"
                    >
                      {item.label}
                    </motion.p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-300 flex flex-col space-y-8 relative z-10">
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
