import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";
import { BotanicalSVG } from "../components/BotanicalSVG";
import { useLanguage } from "../context/LanguageContext";
import heroImg from "../assets/hero.jpeg";
import { Link } from "react-router-dom";

const heroStyles = `
  @keyframes hero-fade-up { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes hero-img-reveal { from { opacity: 0; transform: scale(1.06); } to { opacity: 1; transform: scale(1); } }
  @keyframes hero-badge-in { from { opacity: 0; transform: translateY(10px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
  @keyframes botanical-sway { 0%, 100% { transform: rotate(-3deg) translateX(0px); } 50% { transform: rotate(-1deg) translateX(6px); } }
  @keyframes botanical-float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-8px) rotate(2deg); } }
  @keyframes stat-line-grow { from { width: 0; opacity: 0; } to { opacity: 1; } }
  @keyframes pulse-dot { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.45; transform: scale(0.65); } }
  
  .ha1 { animation: hero-fade-up .7s cubic-bezier(.22,1,.36,1) .05s both; }
  .ha2 { animation: hero-fade-up .7s cubic-bezier(.22,1,.36,1) .18s both; }
  .ha3 { animation: hero-fade-up .7s cubic-bezier(.22,1,.36,1) .32s both; }
  .ha4 { animation: hero-fade-up .7s cubic-bezier(.22,1,.36,1) .44s both; }
  .ha5 { animation: hero-fade-up .7s cubic-bezier(.22,1,.36,1) .56s both; }
  .img-reveal { animation: hero-img-reveal 1.1s cubic-bezier(.22,1,.36,1) .1s both; }
  .badge-in { animation: hero-badge-in .6s cubic-bezier(.34,1.56,.64,1) .85s both; }
  .badge-float { animation: hero-badge-in .6s cubic-bezier(.34,1.56,.64,1) 1s both; }
  .bot-sway { animation: botanical-sway 8s ease-in-out infinite; }
  .bot-float { animation: botanical-float 6s ease-in-out infinite 1s; }
  .sl1 { animation: stat-line-grow .5s cubic-bezier(.22,1,.36,1) .65s both; }
  .sl2 { animation: stat-line-grow .5s cubic-bezier(.22,1,.36,1) .75s both; }
  .sl3 { animation: stat-line-grow .5s cubic-bezier(.22,1,.36,1) .85s both; }
  .si1 { animation: hero-fade-up .6s cubic-bezier(.22,1,.36,1) .62s both; }
  .si2 { animation: hero-fade-up .6s cubic-bezier(.22,1,.36,1) .72s both; }
  .si3 { animation: hero-fade-up .6s cubic-bezier(.22,1,.36,1) .82s both; }
  .pdot { animation: pulse-dot 2.2s ease-in-out infinite; }
  .btn-shimmer { position: relative; overflow: hidden; }
  .btn-shimmer::after { content: ''; position: absolute; inset: 0; left: -100%; width: 55%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.13), transparent); transition: left .55s ease; }
  .btn-shimmer:hover::after { left: 160%; }
  .img-wrap { overflow: hidden; }
  .img-wrap img { transition: transform 900ms cubic-bezier(.22,1,.36,1); }
  .img-wrap:hover img { transform: scale(1.04); }
  .sal { transition: width .35s cubic-bezier(.22,1,.36,1), background-color .3s; }
  .si1:hover .sal, .si2:hover .sal, .si3:hover .sal { width: 32px !important; background-color: rgba(168,123,93,.55); }
  .si1:hover dt, .si2:hover dt, .si3:hover dt { color: var(--color-accent); }
  dt { transition: color .3s ease; }
`;

export function Hero() {
  const { t } = useLanguage();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: heroStyles }} />

      <section className="relative overflow-hidden bg-background w-full min-h-[80vh] flex items-center">
        <div className="w-full pt-12 pb-16 sm:pt-20 sm:pb-20 md:pt-28 md:pb-28 lg:pt-36 lg:pb-36 relative z-20">
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden z-0"
            aria-hidden="true"
          >
            <BotanicalSVG
              variant="leaf"
              className="bot-sway absolute -left-16 sm:-left-20 top-2 sm:top-8 w-60 sm:w-96 lg:w-[480px] text-sage/40 md:text-sage/60 opacity-25 md:opacity-40"
            />
            <BotanicalSVG
              variant="bloom"
              className="bot-float absolute right-2 sm:right-6 top-[20%] w-28 sm:w-36 lg:w-44 text-accent/30 md:text-accent/40 opacity-40 md:opacity-50"
            />
            <div className="absolute top-[-15%] right-[-10%] w-[260px] sm:w-[380px] md:w-[600px] h-[260px] sm:h-[380px] md:h-[600px] rounded-full bg-white/60 blur-[40px] sm:blur-[90px] md:blur-[120px]" />
            <div className="absolute bottom-[10%] left-[5%] w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] rounded-full bg-muted/50 blur-[40px] sm:blur-[80px]" />
          </div>

          <div className="relative z-20 mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
            <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16 lg:items-center gap-y-8">
              <div className="w-full lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left relative z-20 order-1">
                <div className="ha1 flex items-center gap-3 tracking-[0.2em] text-[9px] sm:text-[10px] font-semibold uppercase select-none mb-3">
                  <span className="flex items-center gap-2 text-[#7a4f2f]">
                    <span
                      className="pdot w-1 h-1 rounded-full bg-[#7a4f2f]/80"
                      aria-hidden="true"
                    />
                    {t.hero.badge}
                  </span>
                  <span
                    className="w-6 h-px bg-foreground/20"
                    aria-hidden="true"
                  />
                  <span className="text-neutral-500 font-medium">
                    Est. 2019
                  </span>
                </div>

                <h1
                  className="ha2 mt-2 sm:mt-4 font-light tracking-tight leading-[1.08] text-foreground"
                  style={{
                    fontSize: "clamp(2.1rem, 8.5vw, 4.5rem)",
                    letterSpacing: "-0.025em",
                  }}
                >
                  {t.hero.titlu1} <br />
                  <span
                    className="italic text-accent relative inline-block mx-1 lg:mx-0"
                    style={{ fontFamily: "var(--font-serif, Georgia, serif)" }}
                  >
                    {t.hero.titluItalic}
                    <svg
                      className="absolute -bottom-1 left-0 w-full overflow-visible"
                      height="6"
                      viewBox="0 0 100 6"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M0,4 Q15,1 30,3.5 Q50,6 70,3 Q85,0.5 100,3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeOpacity="0.28"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>{" "}
                  {t.hero.titlu2}
                </h1>

                {/* FIX: text-muted-foreground/78 → text-muted-foreground pentru contrast */}
                <p className="ha3 mt-4 max-w-[34ch] sm:max-w-[44ch] text-[0.875rem] sm:text-[0.975rem] lg:text-[1.05rem] text-neutral-700  leading-[1.75] font-light px-1 sm:px-0">
                  {t.hero.descriere}
                </p>

                <div className="ha4 hidden lg:flex flex-col w-full mt-8">
                  <div className="flex flex-row gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="btn-shimmer rounded-full px-8 h-[54px] text-[0.875rem] font-medium bg-primary text-primary-foreground shadow-[0_4px_20px_rgba(44,36,32,0.25),0_1px_4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-primary/90 hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(44,36,32,0.35)] active:translate-y-0"
                    >
                      <Link to="/contact" className="flex items-center gap-2.5">
                        {t.hero.butonConversatie}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="rounded-full px-8 h-[54px] text-[0.875rem] font-medium bg-card border border-foreground/10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:bg-muted hover:border-foreground/20 hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] active:translate-y-0"
                    >
                      <Link to="/services">{t.hero.butonServicii}</Link>
                    </Button>
                  </div>

                  <div
                    className="w-full h-px bg-gradient-to-r from-foreground/10 to-transparent mt-10 mb-8"
                    aria-hidden="true"
                  />

                  {/* Desktop stats */}
                  <dl className="grid grid-cols-3 w-full">
                    {[
                      {
                        value: "120+",
                        label: t.hero.stats.companii,
                        sub: t.hero.stats.partenere,
                        s: "si1",
                        l: "sl1",
                      },
                      {
                        value: "18k",
                        label: t.hero.stats.sedinte,
                        sub: t.hero.stats.livrate,
                        s: "si2",
                        l: "sl2",
                      },
                      {
                        value: "4.9★",
                        label: t.hero.stats.scor,
                        sub: t.hero.stats.feedback,
                        s: "si3",
                        l: "sl3",
                      },
                    ].map(({ value, label, sub, s, l }, i) => (
                      <div
                        key={label}
                        className={`${s} flex flex-col cursor-default ${i > 0 ? "border-l border-foreground/8 pl-6" : ""}`}
                      >
                        {/*
                          FIX: <dl> nu poate conține direct elemente care nu sunt <dt>, <dd> sau <div>
                          (cu condiția că div-ul conține doar <dt>/<dd>).
                          Linia decorativă este mutată într-un <dd aria-hidden> ca prim copil.
                        */}
                        <dd
                          aria-hidden="true"
                          className={`${l} sal w-5 h-[1.5px] bg-accent/35 mb-2`}
                        />
                        <dt
                          className="text-3xl font-light text-foreground"
                          style={{
                            fontFamily: "var(--font-serif, Georgia, serif)",
                            letterSpacing: "-0.02em",
                          }}
                        >
                          {value}
                        </dt>
                        <dd className="mt-1.5 flex flex-col gap-0.5">
                          {/* FIX: /70 → text-muted-foreground (fără opacitate redusă) */}
                          <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                            {label}
                          </span>
                          {/* FIX: /38 → /60 pentru contrast minim */}
                          <span className="text-[9px] uppercase tracking-wider text-muted-foreground/60 font-medium">
                            {sub}
                          </span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <div className="w-full lg:col-span-6 relative z-20 order-2">
                <div className="relative mx-auto w-full max-w-[270px] xs:max-w-[290px] sm:max-w-[420px] lg:max-w-none">
                  <div
                    className="hidden lg:block absolute -inset-3 bg-muted/55 rounded-[2rem] transform rotate-[1.5deg] scale-[0.985] pointer-events-none"
                    aria-hidden="true"
                  />
                  <div
                    className="hidden lg:block absolute -inset-1 bg-muted/70 rounded-[2rem] transform -rotate-[0.5deg] scale-[0.993] pointer-events-none"
                    aria-hidden="true"
                  />

                  <div className="img-reveal img-wrap relative aspect-[4/5] rounded-2xl lg:rounded-[1.75rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-border/20">
                    <img
                      src={heroImg}
                      alt={t.hero.imgAlt}
                      className="w-full h-full object-cover"
                      width={920}
                      height={1150}
                      loading="eager"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent lg:from-black/20 pointer-events-none"
                      aria-hidden="true"
                    />

                    <div className="badge-in lg:hidden absolute bottom-3 left-3 right-3 z-20">
                      <div className="inline-flex items-center gap-2 bg-card/90 backdrop-blur-2xl border border-border/60 rounded-xl px-2.5 py-2 shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                        <div
                          className="p-1 rounded-md bg-accent/10 shrink-0"
                          aria-hidden="true"
                        >
                          <Sparkles
                            className="h-3 w-3 text-accent"
                            aria-hidden="true"
                          />
                        </div>
                        <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-accent whitespace-nowrap">
                          {t.hero.badgeTimp}
                        </span>
                        <span
                          className="w-px h-2.5 bg-foreground/15 shrink-0"
                          aria-hidden="true"
                        />
                        <p className="text-[10px] font-light text-foreground/80 leading-none truncate">
                          {t.hero.badgeDescriere}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="badge-float hidden lg:block absolute bottom-8 -left-8 z-20">
                    <div className="bg-card/90 backdrop-blur-2xl border border-border/50 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.04)] max-w-[240px] transition-transform duration-500 ease-out hover:-translate-y-1.5">
                      <div className="flex items-center gap-2">
                        <div
                          className="p-1.5 rounded-lg bg-accent/10"
                          aria-hidden="true"
                        >
                          <Sparkles
                            className="h-4 w-4 text-accent"
                            aria-hidden="true"
                          />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
                          {t.hero.badgeTimpLung}
                        </span>
                      </div>
                      <div
                        className="my-2.5 h-px bg-foreground/7"
                        aria-hidden="true"
                      />
                      <p className="text-xs font-light text-foreground/75 leading-relaxed">
                        {t.hero.badgeDescriereLunga}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile stats + buttons */}
              <div className="ha5 w-full lg:hidden flex flex-col items-center order-3 mt-2">
                <div className="flex flex-col gap-3 w-full max-w-[270px] xs:max-w-[290px]">
                  <Button
                    asChild
                    size="lg"
                    className="btn-shimmer rounded-full w-full h-[50px] text-[0.85rem] font-medium bg-primary text-primary-foreground shadow-[0_4px_20px_rgba(44,36,32,0.22)] transition-all duration-300 hover:bg-primary/90 hover:-translate-y-[2px] active:scale-[0.99]"
                  >
                    <Link
                      to="/contact"
                      className="flex items-center justify-center gap-2"
                    >
                      {t.hero.butonConversatie}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="lg"
                    className="rounded-full w-full h-[50px] text-[0.85rem] font-medium bg-transparent border border-foreground/15 transition-all duration-300 hover:bg-foreground/5 hover:border-foreground/25 text-foreground/80"
                  >
                    <Link to="/services" className="justify-center">
                      {t.hero.butonServicii}
                    </Link>
                  </Button>
                </div>

                <div
                  className="w-full my-6 flex items-center gap-3 max-w-[270px] xs:max-w-[290px]"
                  aria-hidden="true"
                >
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
                  <div className="w-1 h-1 rounded-full bg-foreground/15 shrink-0" />
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/10 to-transparent" />
                </div>

                {/* Mobile stats dl */}
                <dl className="grid grid-cols-3 w-full max-w-[270px] xs:max-w-[290px]">
                  {[
                    { value: "120+", label: t.hero.stats.companii, s: "si1" },
                    { value: "18k", label: t.hero.stats.sedinte, s: "si2" },
                    { value: "4.9★", label: t.hero.stats.scor, s: "si3" },
                  ].map(({ value, label, s }, i) => (
                    <div
                      key={label}
                      className={`${s} flex flex-col items-center text-center cursor-default ${i > 0 ? "border-l border-foreground/8" : ""}`}
                    >
                      {/*
                        FIX: linia decorativă era un <div> copil direct al <dl>, ceea ce este invalid.
                        Înlocuit cu <dd aria-hidden="true"> care este permis în <dl>.
                      */}
                      <dd
                        aria-hidden="true"
                        className="sal w-4 h-[1px] bg-accent/35 mb-1.5"
                      />
                      <dt
                        className="font-light text-foreground"
                        style={{
                          fontSize: "clamp(1.2rem, 5vw, 1.5rem)",
                          fontFamily: "var(--font-serif, Georgia, serif)",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {value}
                      </dt>
                      <dd className="mt-1">
                        {/* FIX: /70 → text-muted-foreground */}
                        <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold whitespace-nowrap">
                          {label}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
