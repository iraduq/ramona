import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import eventImg from "../assets/durereCap.avif";

import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Events() {
  const { t } = useLanguage();

  return (
    <section className="relative mx-auto max-w-7xl px-6 lg:px-12 pt-8 pb-12 lg:pt-16 lg:pb-20 overflow-hidden antialiased">
      <div className="hidden lg:grid grid-cols-12 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: -20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-7 relative aspect-[4/3] sm:aspect-[16/11] rounded-[2.5rem] overflow-hidden bg-[#1a1816]/5 shadow-[0_30px_80px_-20px_rgba(26,24,22,0.08)] group"
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
            className="w-full h-full object-cover object-top grayscale-[15%] brightness-[0.95] transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
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
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-[3.2rem] font-light tracking-tight leading-[1.05] text-[#1a1816]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {t.events.titlu1} <br />
            <span className="italic font-normal text-[#8c827a]">
              {t.events.titluItalic}
            </span>{" "}
            {t.events.titlu2}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-[16px] leading-relaxed font-normal text-ink-soft max-w-md"
          >
            {t.events.descriere}
          </motion.p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-6 lg:hidden mt-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center w-full px-2"
        >
          <motion.h2
            variants={itemVariants}
            className="text-[2rem] sm:text-4xl font-light tracking-tight leading-[1.2] text-[#1a1816]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {t.events.titlu1} <br />
            <span className="italic font-normal text-[#8c827a]">
              {t.events.titluItalic}
            </span>{" "}
            <br className="hidden sm:block" />
            {t.events.titlu2}
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/3] rounded-[1.75rem] overflow-hidden bg-[#1a1816]/5 shadow-[0_20px_50px_-15px_rgba(26,24,22,0.06)] group w-full"
        >
          <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-white/20 pointer-events-none z-20" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-white/20 pointer-events-none z-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1816]/40 via-transparent to-transparent z-10 pointer-events-none" />
          <motion.img
            src={eventImg}
            alt={t.events.imgAlt}
            loading="lazy"
            className="w-full h-full object-cover object-top grayscale-[15%] brightness-[0.95]"
          />
          <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-md border border-white/40 px-3 py-2 rounded-lg flex items-center gap-2 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-[#baa090] animate-pulse" />
            <span className="text-[9px] font-mono font-bold text-[#1a1816] tracking-wider uppercase">
              {t.events.tagHover}
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="text-[15px] leading-relaxed font-normal text-ink-soft tracking-wide mt-2 text-center px-4 mx-auto"
        >
          {t.events.descriere}
        </motion.p>
      </div>
    </section>
  );
}
