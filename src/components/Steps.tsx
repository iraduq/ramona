import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";

import type { Variants } from "framer-motion";
import { BotanicalSVG } from "./BotanicalSVG";
import { useLanguage } from "../context/LanguageContext";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Process() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / -60;
      const y = (e.clientY - window.innerHeight / 2) / -60;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const steps = t.process.steps;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-bg via-bg-soft to-bg-warm/30 pt-10 pb-16 lg:pt-16 lg:pb-24 text-ink overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-[50%] h-[50%] bg-surface/70 blur-[120px]" />
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute -right-24 -bottom-16 w-[35rem] opacity-[0.07] text-sage-soft hidden md:block"
        >
          <BotanicalSVG variant="branch" className="w-full h-full" />
        </motion.div>
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute -left-16 -top-10 w-[25rem] opacity-[0.07] text-brand-soft hidden lg:block"
        >
          <BotanicalSVG variant="bloom" className="w-full h-full" />
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-0 lg:mb-10 flex flex-col items-start"
        >
          <h2 className="text-display leading-[1.08] tracking-tight">
            <span
              className="block text-[2.75rem] sm:text-6xl lg:text-[4.5rem] font-normal tracking-[-0.03em] text-transparent bg-clip-text bg-gradient-to-br from-ink via-ink/90 to-brand-soft pb-2"
              style={{ fontFamily: "var(--font-serif, Georgia, serif)" }}
            >
              {t.process.titlu1}
              <span className="text-brand-soft">.</span>
            </span>

            <span className="block text-3xl sm:text-4xl lg:text-[2.6rem] mt-2 text-ink/90">
              <em
                className="italic text-ink-subtle font-normal not-italic mr-2"
                style={{ fontFamily: "var(--font-serif, Georgia, serif)" }}
              >
                {t.process.titluItalic}
              </em>
              <span className="font-light">{t.process.titlu2}</span>
            </span>
          </h2>
        </motion.div>

        <div className="hidden lg:grid grid-cols-4 gap-5 pointer-events-none select-none relative z-0">
          {steps.map((_, idx) => (
            <div key={idx} className="relative flex items-center h-6 w-full">
              <div
                className={`absolute left-0 right-[calc(100%-24px)] h-[1px] ${
                  idx === 0 ? "opacity-0" : "bg-ink/20"
                }`}
              />

              <div className="absolute left-[24px] transform -translate-x-1/2 z-10 w-2.5 h-2.5 rounded-full bg-brand-soft ring-[3px] ring-bg shadow-sm" />
              <div
                className={`absolute left-[24px] w-[calc(100%+20px)] h-[1px] ${
                  idx === steps.length - 1 ? "opacity-0" : "bg-ink/20"
                }`}
              />
            </div>
          ))}
        </div>

        {/* 
          FIX APPLIED HERE: 
          1. Created a wrapper div for the relative positioning 
          2. Moved the decorative background line outside of the <ol>
        */}
        <div className="relative -mt-2 lg:mt-2">
          {/* Decorative vertical line is now a sibling to the list */}
          <div className="absolute top-4 bottom-4 left-[1.2rem] w-[1px] bg-gradient-to-b from-ink/15 via-ink/10 to-transparent lg:hidden z-0" />

          <motion.ol
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-5"
          >
            {steps.map((s, idx) => (
              <motion.li
                key={idx}
                variants={stepVariants}
                className="relative flex flex-col pt-1 px-4 pb-4 sm:p-5 lg:pt-4 lg:px-6 lg:pb-6 rounded-xl z-10 transition-all duration-300 lg:hover:bg-surface/40 lg:hover:shadow-[0_8px_30px_rgb(0,0,0,0.02)] lg:hover:border-ink/[0.03] border border-transparent group"
              >
                <div className="lg:hidden absolute top-[0.9rem] left-[0.9rem] flex items-center justify-center w-3 h-3 z-10 bg-bg">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-soft ring-[3px] ring-bg shadow-sm" />
                </div>

                <div className="pl-6 lg:pl-0 font-mono text-[9px] font-bold tracking-[0.2em] text-ink-subtle/80 mb-3 lg:group-hover:text-brand-soft transition-colors uppercase">
                  Step 0{idx + 1}
                </div>

                <div className="pl-6 lg:pl-0 space-y-2">
                  <h3
                    className={[
                      "text-display text-[1.15rem] lg:text-[1.35rem] font-medium tracking-tight",
                      "text-ink/85 lg:group-hover:text-ink transition-colors duration-300",
                      "relative inline-block",
                      "after:content-[''] after:absolute after:left-0 after:-bottom-0.5",
                      "after:h-[1.5px] after:w-0 after:bg-brand-soft after:transition-all after:duration-300",
                      "active:after:w-full active:text-brand-soft",
                      "lg:after:hidden lg:active:text-ink/85",
                    ].join(" ")}
                  >
                    {s.t}
                  </h3>

                  <p className="text-[13.5px] leading-[1.65] text-ink-muted/80 lg:group-hover:text-ink-muted transition-colors duration-300 pr-2">
                    {s.d}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
