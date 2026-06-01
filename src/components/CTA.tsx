import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";
import { BotanicalSVG } from "../components/BotanicalSVG";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

export function CTA() {
  const { t } = useLanguage();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 35, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 35, damping: 18 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 20;
      const y = (e.clientY - innerHeight / 2) / 20;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#f7f5f1] via-[#fbfaf8] to-[#fdfcfb] py-32 lg:py-44 select-none overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-[50%] h-full pointer-events-none z-0 overflow-visible opacity-[0.25] lg:opacity-100">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-white/60 rounded-full blur-[100px]" />
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute right-[-5rem] lg:right-[-2rem] top-1/2 -translate-y-1/2 w-[32rem] md:w-[42rem] h-auto text-sage"
        >
          <BotanicalSVG
            variant="bloom"
            className="w-full h-full transform rotate-[-15deg]"
          />
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-12 top-[20%] w-24 h-auto text-accent/40 hidden lg:block"
        >
          <BotanicalSVG variant="bloom" className="w-full h-full" />
        </motion.div>
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-16 z-10 grid grid-cols-1 lg:grid-cols-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-start space-y-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/50 border border-foreground/[0.04] text-[10px] font-mono tracking-widest uppercase text-foreground/60 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent opacity-90 animate-pulse" />
            <span>{t.cta.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="text-display text-4xl sm:text-6xl lg:text-7xl font-light tracking-tighter leading-[0.95] text-foreground lowercase text-balance"
          >
            {t.cta.titlu1} <br />
            <span className="font-normal italic text-foreground/50">
              {t.cta.titluItalic}
            </span>{" "}
            {t.cta.titlu2}
            <span className="text-foreground/30">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-base sm:text-lg leading-relaxed text-muted-foreground/90 font-light text-balance"
          >
            {t.cta.descriere}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="pt-4 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
              className="w-full sm:w-auto"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 h-14 text-xs font-mono uppercase tracking-widest w-full sm:w-auto justify-center bg-[#111111] text-white hover:bg-black shadow-xl shadow-black/5 group transition-all duration-300 border border-transparent"
              >
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full px-8 h-14 text-xs font-mono uppercase tracking-widest w-full sm:w-auto bg-[#111111] text-white hover:bg-black shadow-xl shadow-black/5 transition-all duration-300 border border-transparent group"
                >
                  {t.cta.butonDemo}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="w-full sm:w-auto"
            >
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="rounded-full px-8 h-14 text-xs font-mono uppercase tracking-widest bg-white/40 border border-foreground/[0.08] text-foreground hover:bg-white/80 transition-all backdrop-blur-sm w-full sm:w-auto justify-center shadow-sm"
              >
                <Link to="/services">{t.cta.butonPachete}</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,17,17,0.005)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,17,17,0.005)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-0" />
    </section>
  );
}
