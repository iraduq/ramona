import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import eventImg from "../assets/corporate-event.jpg";

import type { Variants } from "framer-motion";
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Events() {
  const { t } = useLanguage();

  return (
    <section className="relative mx-auto max-w-7xl px-6 lg:px-12 py-24 lg:py-36 overflow-hidden antialiased">
      {/* DESKTOP */}
      <div className="hidden lg:grid grid-cols-12 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: -20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-7 relative aspect-[4/3] sm:aspect-[16/11] rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_-20px_rgba(26,24,22,0.08)] group"
        >
          <div className="absolute top-4 left-4 w-10 h-10 border-t border-l border-white/20 pointer-events-none z-20" />
          <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-white/20 pointer-events-none z-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1816]/40 via-transparent to-transparent z-10 pointer-events-none" />
          <motion.img
            src={eventImg}
            alt={t.events.imgAlt}
            loading="lazy"
            width={1280}
            height={896}
            className="w-full h-full object-cover grayscale-[15%] brightness-[0.95] transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
          />
          <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-md border border-white/40 px-4 py-2.5 rounded-xl flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.05)] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <div className="w-1.5 h-1.5 rounded-full bg-[#baa090] animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-[#1a1816] tracking-widest uppercase">
              {t.events.tagHover}
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="col-span-5 flex flex-col items-start w-full"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="text-[#baa090]">
              <Sparkles className="w-3.5 h-3.5" strokeWidth={1.5} />
            </span>
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#baa090] font-mono font-bold">
              {t.events.badge}
            </p>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-[3.2rem] font-light tracking-tight leading-[1.05] text-[#1a1816]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {t.events.titlu1} <br />
            <span className="italic font-normal text-[#8c827a]">
              {t.events.titluItalic}
            </span>
            {t.events.titlu2}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-[14.5px] leading-relaxed font-light text-[#8c827a] max-w-md"
          >
            {t.events.descriere}
          </motion.p>
        </motion.div>
      </div>

      {/* MOBILE */}
      <div className="flex flex-col gap-8 lg:hidden">
        {/* 1. Badge + Titlu */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-start w-full"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="text-[#baa090]">
              <Sparkles className="w-3.5 h-3.5" strokeWidth={1.5} />
            </span>
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#baa090] font-mono font-bold">
              {t.events.badge}
            </p>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-light tracking-tight leading-[1.05] text-[#1a1816]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {t.events.titlu1} <br />
            <span className="italic font-normal text-[#8c827a]">
              {t.events.titluItalic}
            </span>
            {t.events.titlu2}
          </motion.h2>
        </motion.div>

        {/* 2. Imagine */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_-20px_rgba(26,24,22,0.08)] group"
        >
          <div className="absolute top-4 left-4 w-10 h-10 border-t border-l border-white/20 pointer-events-none z-20" />
          <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-white/20 pointer-events-none z-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1816]/40 via-transparent to-transparent z-10 pointer-events-none" />
          <motion.img
            src={eventImg}
            alt={t.events.imgAlt}
            loading="lazy"
            width={1280}
            height={896}
            className="w-full h-full object-cover grayscale-[15%] brightness-[0.95] transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
          />
          <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-md border border-white/40 px-4 py-2.5 rounded-xl flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.05)] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <div className="w-1.5 h-1.5 rounded-full bg-[#baa090] animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-[#1a1816] tracking-widest uppercase">
              {t.events.tagHover}
            </span>
          </div>
        </motion.div>

        {/* 3. Descriere */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-[14.5px] leading-relaxed font-light text-[#8c827a]"
        >
          {t.events.descriere}
        </motion.p>
      </div>
    </section>
  );
}
