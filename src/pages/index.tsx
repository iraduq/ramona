// src/pages/Index.tsx
import { Hero } from "../components/Hero";
import { TrustBar } from "../components/TrustBar";
import { Problem } from "../components/Problem";
import { Services } from "../components/Services";
import { Process } from "../components/Process";
import { Events } from "../components/Events";
import { CTA } from "../components/CTA";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";
import {
  WaveDividerInverted,
  WaveDividerNormal,
} from "../components/ShapeDividers";

export default function Index() {
  const { t } = useLanguage();
  return (
    <div className="w-full bg-background min-h-screen">
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.desc} />
      </Helmet>
      <Hero />
      <WaveDividerInverted colorTop="#F7F0EA" colorBottom="#F7F4F0" />
      <TrustBar />
      <br />
      <WaveDividerNormal colorTop="#F7F1EB" colorBottom="#F8F6F3" />
      <Problem />
      <WaveDividerNormal colorTop="#FDFCFB" colorBottom="#F7F1EB" />
      <Services />
      <WaveDividerInverted colorTop="#F7F1EB" colorBottom="#FCFBFA" />
      <Process />
      <WaveDividerNormal colorTop="#FAF9F7" colorBottom="#F7F1EB" />
      <Events />
      <CTA />
    </div>
  );
}
