import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  HeartPulse,
  Building2,
  CalendarHeart,
} from "lucide-react";
import { BotanicalSVG } from "../components/BotanicalSVG";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import chairImg from "../assets/chair-massage.jpg";
import officeImg from "../assets/office-space.jpg";
import eventImg from "../assets/corporate-event.jpg";

export function Services() {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const icons = [HeartPulse, Building2, CalendarHeart];

  const categories = t.services.items.map((item, index) => ({
    id: `0${index + 1}`,
    icon: icons[index],
    title: item.title,
    desc: item.desc,
    img: index === 0 ? chairImg : index === 1 ? officeImg : eventImg,
    tag: item.tag,
  }));

  return (
    <section
      ref={sectionRef}
      className="bg-transparent text-[#1a1816] py-28 lg:py-36 relative overflow-hidden antialiased"
    >
      <div
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30 select-none"
        aria-hidden="true"
      >
        <BotanicalSVG
          variant="leaf"
          className="absolute -left-32 top-12 w-[480px] h-auto text-[#9eab95]"
        />
        <BotanicalSVG
          variant="bloom"
          className="absolute -right-24 bottom-6 w-96 h-auto text-[#baa090]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 lg:mb-24 border-b border-[#1a1816]/10 pb-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="text-[#baa090]">
                <Sparkles className="w-3.5 h-3.5" strokeWidth={1.5} />
              </span>
              <p className="inline-flex items-center text-[10px] uppercase tracking-[0.28em] text-[#6f5f55] font-mono font-semibold bg-[#f3eee8] px-3 py-1 rounded-full border border-[#e6ddd4]">
                {t.services.badge}
              </p>
            </div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] text-[#151311]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {t.services.titlu1} <br />
              <span className="font-normal text-[#7a6b62]">
                {t.services.titluItalic}
              </span>{" "}
              {t.services.titlu2}
            </h2>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-3 px-8 h-14 rounded-full border border-[#1a1816]/10 bg-white text-[#1a1816] shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:bg-[#1a1816] hover:text-white hover:border-transparent transition-all duration-500 text-[10px] font-mono uppercase tracking-widest group shrink-0 mb-2"
          >
            {t.services.butonToate}
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-stretch w-full">
          {categories.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isDimmed = hoveredIndex !== null && !isHovered;
            const IconComponent = item.icon;

            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={isInView ? { opacity: 1, y: 0 } : {}}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.08,
                }}
                animate={{
                  opacity: isDimmed ? 0.5 : 1,
                  y: isHovered ? -6 : 0,
                }}
                className="relative bg-white/70 border border-[#1a1816]/5 rounded-[2.5rem] flex flex-col justify-between overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.01)] hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(26,24,22,0.06)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group"
              >
                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#1a1816]/5 pointer-events-none" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#1a1816]/5 pointer-events-none" />

                <div className="w-full aspect-[4/3] overflow-hidden relative bg-[#1a1816]/5 shrink-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] grayscale-[15%] group-hover:grayscale-0"
                    style={{
                      backgroundImage: `url(${item.img})`,
                      transform: isHovered ? "scale(1.04)" : "scale(1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-6 left-6 font-mono text-[9px] font-bold bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[#baa090] tracking-wider border border-white/20">
                    {item.id}
                  </div>
                </div>

                <div className="p-7 lg:p-8 flex flex-col flex-1 justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between w-full">
                      {/* SCHIMBARE: Am pus text-neutral-500 în loc de maro */}
                      <span className="font-mono text-[10px] tracking-[0.2em] text-[#6f5f55] uppercase font-bold block">
                        {item.tag}
                      </span>

                      {/* Iconița neutră care devine gri închis la hover */}
                      <IconComponent className="w-4 h-4 text-neutral-400 group-hover:text-neutral-600 transition-colors" />
                    </div>

                    <h3
                      className="text-xl lg:text-2xl font-light tracking-tight text-neutral-950 pt-1"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {item.title}
                    </h3>

                    <p className="text-[13px] leading-relaxed font-normal text-neutral-600">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-[#1a1816]/5 pt-4 w-full">
                    <span className="font-mono text-[9px] tracking-widest uppercase font-bold text-neutral-500 group-hover:text-[#baa090] transition-colors duration-400">
                      {t.services.detalii}
                    </span>

                    <motion.div
                      animate={{ x: isHovered ? 3 : 0, y: isHovered ? -3 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#8c827a] group-hover:text-[#1a1816]"
                    >
                      <svg
                        width="13"
                        height="13"
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
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
