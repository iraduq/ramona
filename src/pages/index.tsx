// src/pages/Index.tsx
import { Hero } from "../components/Hero";
import { TrustBar } from "../components/TrustBar";
import { Process } from "../components/Steps";
import { Events } from "../components/Events";

import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";
import {
  WaveDividerInverted,
  WaveDividerNormal,
} from "../components/ShapeDividers";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const SectionDivider = () => (
  <div className="w-full flex items-center justify-center py-12 lg:py-20 opacity-60">
    <div className="w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="mx-4 text-brand"
    >
      <Sparkles className="w-4 h-4 md:w-5 md:h-5 opacity-70" />
    </motion.div>
    <div className="w-24 md:w-32 h-px bg-gradient-to-l from-transparent via-brand to-transparent" />
  </div>
);

export default function Index() {
  const { t } = useLanguage();
  return (
    <div className="w-full bg-background min-h-screen">
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.desc} />
      </Helmet>
      <Hero />
      <SectionDivider />
      <Events />
      <WaveDividerInverted colorTop="#F7F0EA" colorBottom="#F7F4F0" />
      <TrustBar />
      <WaveDividerNormal colorTop="#F7F4F0" colorBottom="#FCFAF8" />
      <Process />
    </div>
  );
}
