import React from 'react';
import { A_ACCENT, foregroundAlpha, primaryAlpha } from '../theme';
import { Dot, Spotlight } from '../shared/Primitives';
import { HeroIllustration } from '../HeroIllustration';
import { siteConfig } from '../../../config/site';

// ─── Hero ────────────────────────────────────────────────────
export const Hero = () => {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(siteConfig.installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section className="site-hero-section relative overflow-hidden pb-10 pt-24 md:pb-16 md:pt-32">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: `linear-gradient(${foregroundAlpha(0.035)} 1px, transparent 1px),
                            linear-gradient(90deg, ${foregroundAlpha(0.035)} 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, #000 40%, transparent 80%)',
        }}
      />
      <Spotlight x="50%" y="5%" size="900px" opacity={0.22}/>
      <Spotlight x="85%" y="60%" color="rgb(var(--color-secondary-rgb))" size="500px" opacity={0.1}/>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Headline block */}
        <div className="site-hero-copy max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide mb-6
            bg-white/[0.04] border border-white/[0.08] text-white/70 backdrop-blur animate-[fadeInUp_0.6s_ease-out_forwards]">
            <Dot/>
            <span>{siteConfig.version} — {siteConfig.releaseNote}</span>
            <svg viewBox="0 0 24 24" className="w-3 h-3 text-white/40" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
          </div>

          <h1 className="site-hero-title text-[56px] md:text-[76px] leading-[0.95] font-semibold tracking-[-0.04em] text-white animate-[fadeInUp_0.7s_ease-out_forwards]">
            Every drive.
            <br/>
            <span className="relative inline-block">
              <span style={{
                background: `linear-gradient(100deg, rgb(var(--color-foreground-rgb)) 10%, ${A_ACCENT} 45%, rgb(var(--color-accent-rgb)) 65%, rgb(var(--color-foreground-rgb)) 90%)`,
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'shimmer 6s linear infinite',
              }}>
                One workspace.
              </span>
            </span>
          </h1>

          <p className="site-hero-subtitle mt-6 text-lg text-white/55 max-w-xl mx-auto leading-relaxed animate-[fadeInUp_0.8s_ease-out_forwards]">
            A desktop-class file manager for local, cloud, and object storage.
            Side-by-side windows, real-time transfers, zero friction.
          </p>

          <div className="site-hero-actions mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 animate-[fadeInUp_0.9s_ease-out_forwards]">
            {/* Install command */}
            <button
              onClick={copy}
              className="group relative flex w-full max-w-full items-center justify-center gap-2 rounded-xl py-2.5 pl-3 pr-2 font-mono text-[clamp(10px,2.65vw,14px)] text-white/80 sm:w-auto sm:gap-3 sm:pl-4 sm:pr-3
                         bg-white/[0.04] border border-white/[0.08] hover:border-white/20 transition-all backdrop-blur"
            >
              <span className="shrink-0 text-white/35 select-none">$</span>
              <span className="min-w-0 whitespace-nowrap">{siteConfig.installCommand}</span>
              <span className="ml-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/[0.06] transition-colors group-hover:bg-white/10 sm:ml-2">
                {copied ? (
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke={A_ACCENT} strokeWidth="2.5" strokeLinecap="round"><path d="M5 12l4 4L19 7"/></svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M15 5H6a1 1 0 00-1 1v9"/></svg>
                )}
              </span>
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-5 text-xs text-white/35 animate-[fadeInUp_1s_ease-out_forwards]">
            <span className="flex items-center gap-1.5">Open source</span>
            <span className="w-px h-3 bg-white/10"/>
            <span>MIT licensed</span>
          </div>
        </div>

        {/* Illustration */}
        <div
          className="hero-illustration-wrap relative mx-auto mt-12 h-[460px] max-w-[960px] animate-[fadeInUp_1.1s_ease-out_forwards]"
          style={{ display: 'block', height: '460px' }}
        >
          <div
            className="absolute -inset-x-8 -inset-y-10 -z-10 opacity-60"
            style={{
              background: `radial-gradient(60% 70% at 50% 50%, ${primaryAlpha(0.13)}, transparent 65%)`,
            }}
          />
          <div className="relative w-full h-full">
            <HeroIllustration animated={false} accent={A_ACCENT}/>
          </div>
        </div>
      </div>
    </section>
  );
};
