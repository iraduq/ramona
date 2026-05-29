import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { BotanicalSVG } from "./BotanicalSVG";
import { useLanguage } from "../context/LanguageContext";
import tensionImg from "../assets/imageProblem.png";

const problemStyles = `
  @keyframes problem-sway { 0%, 100% { transform: rotate(-2deg) scale(1) translateX(0px); } 50% { transform: rotate(1deg) scale(1.04) translateX(6px); } }
  @keyframes problem-float { 0%, 100% { transform: translateY(0px) rotate(12deg) scale(0.9); } 50% { transform: translateY(-15px) rotate(15deg) scale(0.95); } }
  @keyframes problem-sway-soft { 0%, 100% { transform: rotate(-5deg) translateY(0px); } 50% { transform: rotate(-2deg) translateY(8px); } }

  .prob-sway { animation: problem-sway 11s ease-in-out infinite; }
  .prob-sway-light { animation: problem-sway-soft 15s ease-in-out infinite 1s; }
  .prob-float { animation: problem-float 9s ease-in-out infinite 0.5s; }
`;

export function Problem() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 35, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 35, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / -45;
      const y = (e.clientY - innerHeight / 2) / -45;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-[#f7f5f1] via-[#fbfaf8] to-[#fdfcfb] py-32 lg:py-40 select-none overflow-hidden antialiased text-[#1a1816]"
    >
      <style dangerouslySetInnerHTML={{ __html: problemStyles }} />

      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="block w-full h-[3.5vw]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,85 900,85 1200,0 L1200,120 L0,120 Z"
            fill="#f6f4f0"
            className="scale-y-[-1] translate-y-[-100%]"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none rotate-180">
        <svg
          className="block w-full h-[3vw]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z"
            fill="#fdfcfb"
          />
        </svg>
      </div>

      <div
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/4 w-[60%] h-[60%] bg-white/40 rounded-full blur-[130px]" />
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute -left-28 -bottom-16 w-[36rem] h-auto text-[#9eab95] opacity-[0.15] blur-[0.2px] hidden md:block"
        >
          <BotanicalSVG variant="branch" className="prob-sway w-full h-full" />
        </motion.div>
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute -left-16 bottom-[30%] w-64 h-auto text-[#b5a898] opacity-[0.1] hidden lg:block"
        >
          <BotanicalSVG
            variant="leaf"
            className="prob-sway-light w-full h-full rotate-45"
          />
        </motion.div>
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute -right-20 -top-12 w-[28rem] h-auto text-[#baa090] opacity-[0.14] hidden lg:block"
        >
          <BotanicalSVG variant="bloom" className="prob-float w-full h-full" />
        </motion.div>
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute -right-12 top-[40%] w-72 h-auto text-[#9eab95] opacity-[0.08] hidden xl:block -rotate-12"
        >
          <BotanicalSVG variant="leaf" className="prob-sway w-full h-full" />
        </motion.div>
      </div>

      {/* ── MOBILE LAYOUT (< lg) ── stacked în 4 blocuri */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 z-10">
        {/* DESKTOP */}
        <div className="hidden lg:grid grid-cols-12 gap-24 items-center">
          {/* Imagine */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, x: -15 }}
            whileInView={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-5 relative w-full"
          >
            <div className="absolute -top-4 -left-4 w-10 h-10 border-t border-l border-[#1a1816]/10 pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b border-r border-[#1a1816]/10 pointer-events-none" />

            {/* AM PUS aspect-square AICI */}
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-[#f4f1eb] border border-[#1a1816]/5 shadow-[0_40px_90px_rgba(26,24,22,0.03)] group">
              <img
                src={tensionImg}
                alt={t.problem.imgAlt}
                className="w-full h-full object-cover grayscale-[15%] brightness-[0.96] contrast-[98%] transition-transform duration-[2.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                loading="lazy"
                width={1280}
                height={896}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1816]/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Tot textul */}
          <div className="col-span-7 flex flex-col items-start w-full space-y-6">
            <span className="font-mono text-[9px] tracking-[0.35em] text-[#9b8b7f] uppercase font-medium">
              {t.problem.badge}
            </span>
            <h2
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-light tracking-tight leading-[1.05] text-[#1a1816]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {t.problem.titlu1} <br />
              <span className="italic font-normal text-[#6f645d]">
                {t.problem.titluItalic}
              </span>
            </h2>
            <p className="text-[15px] leading-relaxed text-[#6f645d] font-light max-w-xl tracking-wide">
              {t.problem.descriere}
            </p>
          </div>
        </div>

        {/* MOBILE */}
        <div className="flex flex-col gap-10 lg:hidden">
          {/* 1. Badge + Titlu */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={isInView ? { opacity: 1, y: 0 } : {}}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start space-y-4"
          >
            <span className="font-mono text-[9px] tracking-[0.35em] text-[#9b8b7f] uppercase font-medium">
              {t.problem.badge}
            </span>
            <h2
              className="text-4xl font-light tracking-tight leading-[1.05] text-[#1a1816]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {t.problem.titlu1} <br />
              <span className="italic font-normal text-[#6f645d]">
                {t.problem.titluItalic}
              </span>
            </h2>
          </motion.div>

          {/* 2. Imagine */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={isInView ? { opacity: 1, scale: 1 } : {}}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full"
          >
            <div className="absolute -top-4 -left-4 w-10 h-10 border-t border-l border-[#1a1816]/10 pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b border-r border-[#1a1816]/10 pointer-events-none" />

            {/* AM PUS aspect-square AICI */}
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-[#f4f1eb] border border-[#1a1816]/5 shadow-[0_40px_90px_rgba(26,24,22,0.03)] group">
              <img
                src={tensionImg}
                alt={t.problem.imgAlt}
                className="w-full h-full object-cover grayscale-[15%] brightness-[0.96] contrast-[98%] transition-transform duration-[2.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                loading="lazy"
                width={1280}
                height={896}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1816]/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* 3. Descriere */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={isInView ? { opacity: 1, y: 0 } : {}}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-[15px] leading-relaxed text-[#6f645d] font-light tracking-wide"
          >
            {t.problem.descriere}
          </motion.p>

          {/* 4. Stats */}
          <div className="grid grid-cols-1 gap-8 w-full border-t border-[#1a1816]/10 pt-10">
            {t.problem.stats.map((s, idx) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 15 }}
                whileInView={isInView ? { opacity: 1, y: 0 } : {}}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1 + idx * 0.08,
                }}
                className="flex flex-col border-l border-[#1a1816]/10 pl-4 cursor-default group"
              >
                <div className="w-4 h-px bg-[#baa090]/40 group-hover:bg-[#baa090] group-hover:w-6 transition-all duration-500 mb-3" />
                <div
                  className="text-3xl font-light tracking-tight text-[#1a1816] group-hover:text-[#8c7a6b] transition-colors duration-300"
                  style={{
                    fontFamily: "'Georgia', serif",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.n}
                </div>
                <p className="text-[12px] font-light text-[#7a6f66] leading-relaxed mt-2 tracking-wide">
                  {s.t}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
