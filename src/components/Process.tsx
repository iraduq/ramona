import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";

import type { Variants } from "framer-motion";
import { Sparkles } from "lucide-react";
import { BotanicalSVG } from "../components/BotanicalSVG";
import { useLanguage } from "../context/LanguageContext";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Process() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 30, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / -55;
      const y = (e.clientY - window.innerHeight / 2) / -55;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-[#fcfbf9] via-[#faf8f5] to-[#f6f3ef] py-36 lg:py-44 text-[#1a1816] overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-[60%] h-[60%] bg-white/60 blur-[140px]" />

        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute -right-28 -bottom-24 w-[40rem] opacity-10 text-[#9aa896] hidden md:block"
        >
          <BotanicalSVG variant="branch" className="w-full h-full" />
        </motion.div>

        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute -left-20 -top-16 w-[30rem] opacity-10 text-[#b8a090] hidden lg:block"
        >
          <BotanicalSVG variant="bloom" className="w-full h-full" />
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-24 border-b border-black/10 pb-10"
        >
          {/* BADGE — mai vizibil */}
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full bg-white/70 border border-black/10 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#b08d7a]" />
            <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#7a6a60] font-semibold">
              {t.process.badge}
            </p>
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {t.process.titlu1}
            <span className="text-[#b08d7a]">.</span> <br />
            <span className="italic text-[#8a7b72] font-normal">
              {t.process.titluItalic}
            </span>{" "}
            {t.process.titlu2}
          </h2>
        </motion.div>

        {/* STEPS */}
        <motion.ol
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-10 relative"
        >
          {/* line */}
          <div className="absolute top-2 left-0 right-0 h-px bg-black/10 hidden lg:block" />

          {t.process.steps.map((s, idx) => (
            <motion.li
              key={idx}
              variants={stepVariants}
              className="relative flex flex-col pt-8 group"
            >
              {/* dot */}
              <div className="absolute top-[4px] left-0 w-2.5 h-2.5 rounded-full bg-[#b08d7a] shadow-[0_0_0_6px_rgba(176,141,122,0.12)] transition-transform duration-500 group-hover:scale-150" />

              {/* step index */}
              <div className="font-mono text-[10px] tracking-[0.3em] text-[#8f7f75] mb-4 group-hover:text-[#b08d7a] transition-colors">
                STEP 0{idx + 1}
              </div>

              {/* content */}
              <div className="space-y-3 transition-transform duration-500 group-hover:-translate-y-1">
                <h3
                  className="text-lg lg:text-xl font-light text-[#1a1816] group-hover:text-[#b08d7a] transition-colors"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {s.t}
                </h3>

                <p className="text-[13px] leading-relaxed text-[#7f726a] border-l border-black/10 pl-4 group-hover:border-[#b08d7a]/40 transition-colors">
                  {s.d}
                </p>
              </div>

              {/* underline accent */}
              <div className="w-8 h-px bg-[#b08d7a] mt-6 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
