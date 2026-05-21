import { useState, useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  Briefcase,
  UserRound,
  CalendarHeart,
  GlassWater,
  Brain,
} from "lucide-react";
import { BotanicalSVG } from "./BotanicalSVG";
import { useLanguage } from "../context/LanguageContext";

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

  const icons = [Briefcase, UserRound, CalendarHeart, GlassWater, Brain];
  const metrics = ["94%", "15'", "2×", "500+", "−62%"];
  const bgImages = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
  ];

  const categories = t.trustBar.items.map((item, index) => ({
    id: `0${index + 1}`,
    title: item.title,
    label: item.label,
    icon: icons[index],
    metric: metrics[index],
    metricLabel: item.metricLabel,
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
          className="mb-12 sm:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-[#1a1816]/10 pb-8"
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
          <p className="text-[12px] text-[#8c827a] font-light max-w-xs md:text-right leading-relaxed font-sans">
            {t.trustBar.descriere}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-4 w-full h-auto lg:h-[550px] items-stretch relative z-10">
          {categories.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const anyHovered = hoveredIndex !== null;
            const flexBasis = isHovered
              ? "lg:flex-[2.8]"
              : anyHovered
                ? "lg:flex-[0.55]"
                : "lg:flex-1";
            const IconComponent = item.icon;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setHoveredIndex(isHovered ? null : index)}
                className={`relative rounded-[2rem] sm:rounded-[2.2rem] overflow-hidden transition-all duration-750 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col lg:flex-row ${flexBasis} h-[180px] sm:h-[220px] lg:h-full bg-[#eae6df] cursor-pointer border border-[#1a1816]/5 group`}
              >
                <div
                  className="absolute inset-y-0 right-0 transition-all duration-770 ease-[cubic-bezier(0.16,1,0.3,1)] bg-cover bg-center z-0"
                  style={{
                    backgroundImage: `url(${item.bgImage})`,
                    left: isHovered && window.innerWidth >= 1024 ? "50%" : "0%",
                    width:
                      isHovered && window.innerWidth >= 1024 ? "50%" : "100%",
                  }}
                />

                <div
                  className="absolute inset-0 transition-opacity duration-700 pointer-events-none z-10"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(26,24,22,0.1) 0%, rgba(26,24,22,0.55) 100%)",
                    opacity: isHovered
                      ? window.innerWidth >= 1024
                        ? 0
                        : 0.85
                      : 0.65,
                  }}
                />

                <div
                  className="absolute left-0 inset-y-0 w-1/2 bg-white transition-all duration-750 ease-[cubic-bezier(0.16,1,0.3,1)] p-10 hidden lg:flex flex-col justify-between z-20"
                  style={{
                    transform: isHovered
                      ? "translateX(0)"
                      : "translateX(-100%)",
                    opacity: isHovered ? 1 : 0,
                  }}
                >
                  <div className="space-y-6 relative">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-widest text-[#baa090] font-bold">
                        {t.trustBar.wordRelaxare} / {item.id}
                      </span>
                      <div className="w-5 h-5 flex items-center justify-center text-[#1a1816]">
                        <IconComponent
                          strokeWidth={1}
                          className="w-full h-full"
                        />
                      </div>
                    </div>

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

                  <div className="flex items-end justify-between border-t border-[#1a1816]/10 pt-6">
                    <div className="space-y-0.5">
                      <span className="text-[2.2rem] font-light leading-none tracking-tighter font-serif text-[#1a1816] block">
                        {item.metric}
                      </span>
                      <span className="text-[8px] tracking-[0.15em] uppercase font-mono block text-[#948b82]">
                        {item.metricLabel}
                      </span>
                    </div>
                    <div className="text-[#1a1816] mb-1">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 11L11 1M11 1H4M11 1V8"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div
                  className="relative inset-0 p-6 sm:p-8 flex flex-col justify-between z-20 text-white w-full h-full lg:transition-opacity lg:duration-500"
                  style={{
                    opacity: isHovered && window.innerWidth >= 1024 ? 0 : 1,
                  }}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-mono text-[10px] opacity-60 tracking-wider">
                      {item.id}
                    </span>
                    <IconComponent
                      strokeWidth={1.2}
                      className="w-4 h-4 opacity-70"
                    />
                  </div>

                  <div className="mt-auto space-y-1 lg:space-y-2 relative z-20">
                    <h3
                      className="text-[1.2rem] sm:text-[1.4rem] font-light tracking-tight text-white"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {item.title}
                    </h3>

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

                    <div className="flex items-baseline gap-2 pt-1">
                      <span className="text-[1.3rem] sm:text-[1.6rem] font-light font-serif text-white leading-none">
                        {item.metric}
                      </span>
                      <span className="text-[8px] tracking-wider uppercase font-mono opacity-50">
                        {item.metricLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-300 flex flex-col space-y-8 relative z-10">
          {/* Stat Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-1 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-12 gap-y-4">
              {/* Stat 1 */}
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-xl font-light font-serif text-neutral-950">
                  NRW
                </span>
                <span className="text-[10px] tracking-[0.2em] text-neutral-600 uppercase font-bold">
                  {t.trustBar.statRegiune}
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-xl font-light font-serif text-neutral-950">
                  8 ani
                </span>
                <span className="text-[10px] tracking-[0.2em] text-neutral-600 uppercase font-bold">
                  {t.trustBar.statExperienta}
                </span>
              </div>
            </div>

            {/* Badge Legal */}
            <div className="flex items-center justify-center gap-2 tracking-[0.2em] uppercase font-bold text-[10px] text-neutral-900">
              <span className="w-2 h-2 rounded-full bg-[#b7744f] block animate-pulse" />
              {t.trustBar.legalBadge}
            </div>
          </div>

          {/* Disclaimer Legal */}
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
