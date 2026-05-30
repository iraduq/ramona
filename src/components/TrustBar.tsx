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

      {/* ... (Codul de fundal și header rămâne neschimbat) ... */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* GRID PE MOBIL - carduri patratice, FLEX PE DESKTOP */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-row gap-3 sm:gap-4 w-full h-auto lg:h-[420px] items-stretch relative z-10">
          {categories.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const anyHovered = hoveredIndex !== null;
            const flexBasis = isHovered
              ? "lg:flex-[3.5]"
              : anyHovered
                ? "lg:flex-[0.5]"
                : "lg:flex-1";

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setHoveredIndex(isHovered ? null : index)}
                className={`relative rounded-2xl lg:rounded-[1.5rem] overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${flexBasis} aspect-square lg:aspect-auto lg:h-full bg-[#d8d4cc] cursor-pointer border border-[#1a1816]/5 group`}
              >
                {/* CONTAINER IMAGINE - OBJECT-CONTAIN PE MOBIL, OBJECT-COVER PE DESKTOP */}
                <div
                  className="absolute inset-0 lg:inset-y-0 lg:right-0 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden z-0"
                  style={{
                    left: isHovered && window.innerWidth >= 1024 ? "45%" : "0%",
                    width:
                      isHovered && window.innerWidth >= 1024 ? "55%" : "100%",
                  }}
                >
                  <img
                    src={item.bgImage}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-contain lg:object-cover transition-transform duration-[600ms]"
                  />
                  {/* Overlay gradient de jos pentru text lizibil */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: isHovered && window.innerWidth < 1024
                        ? "linear-gradient(to bottom, rgba(26,24,22,0.1) 0%, rgba(26,24,22,0.85) 100%)"
                        : "linear-gradient(to bottom, rgba(26,24,22,0) 40%, rgba(26,24,22,0.75) 100%)",
                    }}
                  />
                </div>

                {/* TEXT PE PC - panel alb la hover */}
                <div
                  className="absolute left-0 inset-y-0 w-[45%] bg-white p-8 hidden lg:flex flex-col justify-between z-20 transition-all duration-[600ms]"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered
                      ? "translateX(0)"
                      : "translateX(-100%)",
                  }}
                >
                  <h3
                    className="text-[1.5rem] font-light text-[#1a1816]"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[#8c827a]">{item.label}</p>
                </div>

                {/* TEXT PE MOBIL - jos, cu descriere care se deschide la click */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end z-20 text-white lg:hidden">
                  <h3 
                    className="text-[0.95rem] sm:text-[1.1rem] font-light leading-tight"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {item.title}
                  </h3>
                  {/* Descrierea care se deschide la click */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isHovered ? "auto" : 0,
                      opacity: isHovered ? 1 : 0,
                      marginTop: isHovered ? 8 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-[10px] sm:text-[11px] font-light text-white/90 leading-relaxed">
                      {item.label}
                    </p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
