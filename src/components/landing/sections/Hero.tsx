import React from 'react';
import { A_ACCENT, foregroundAlpha, primaryAlpha } from '../theme';
import { Dot, Spotlight } from '../shared/Primitives';
import { HeroIllustration } from '../HeroIllustration';

// ─── Hero ────────────────────────────────────────────────────
export const Hero = () => {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    navigator.clipboard?.writeText('curl -fsSL https://get.drivebase.app | sh');
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
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
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide mb-6
            bg-white/[0.04] border border-white/[0.08] text-white/70 backdrop-blur animate-[fadeInUp_0.6s_ease-out_forwards]">
            <Dot/>
            <span>v1.4 — native S3 multipart & signed URLs</span>
            <svg viewBox="0 0 24 24" className="w-3 h-3 text-white/40" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
          </div>

          <h1 className="text-[56px] md:text-[76px] leading-[0.95] font-semibold tracking-[-0.04em] text-white animate-[fadeInUp_0.7s_ease-out_forwards]">
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

          <p className="mt-6 text-lg text-white/55 max-w-xl mx-auto leading-relaxed animate-[fadeInUp_0.8s_ease-out_forwards]">
            A desktop-class file manager for local, cloud, and object storage.
            Side-by-side windows, real-time transfers, zero friction.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 animate-[fadeInUp_0.9s_ease-out_forwards]">
            {/* Install command */}
            <button
              onClick={copy}
              className="group relative flex items-center gap-3 pl-4 pr-3 py-2.5 rounded-xl font-mono text-sm text-white/80
                         bg-white/[0.04] border border-white/[0.08] hover:border-white/20 transition-all backdrop-blur"
            >
              <span className="text-white/35 select-none">$</span>
              <span>curl -fsSL <span style={{color: A_ACCENT}}>get.drivebase.app</span> | sh</span>
              <span className="ml-2 w-7 h-7 rounded-md bg-white/[0.06] flex items-center justify-center group-hover:bg-white/10 transition-colors">
                {copied ? (
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke={A_ACCENT} strokeWidth="2.5" strokeLinecap="round"><path d="M5 12l4 4L19 7"/></svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M15 5H6a1 1 0 00-1 1v9"/></svg>
                )}
              </span>
            </button>
            <a href="#download" className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-xl font-medium text-white/80
                                            bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:text-white transition-all">
              Download binary
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 4v12m-5-5l5 5 5-5"/></svg>
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-5 text-xs text-white/35 animate-[fadeInUp_1s_ease-out_forwards]">
            <span className="flex items-center gap-1.5"><svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor"><path d="M17.5 12.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11zM6 22l5.5-9.5L17 22H6z"/></svg>Open source</span>
            <span className="w-px h-3 bg-white/10"/>
            <span>MIT licensed</span>
            <span className="w-px h-3 bg-white/10"/>
            <span>macOS · Windows · Linux</span>
          </div>
        </div>

        {/* Illustration */}
        <div className="relative mt-12 mx-auto max-w-[960px] h-[460px] animate-[fadeInUp_1.1s_ease-out_forwards]">
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
