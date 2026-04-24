import React from 'react';
import { A_ACCENT, A_ACCENT2, foregroundAlpha, primaryAlpha } from '../theme';

// ─── Nav ─────────────────────────────────────────────────────
export const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgb(var(--color-background-rgb) / 0.72)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? `1px solid ${foregroundAlpha(0.06)}` : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Logo/>
          <span className="text-white font-semibold tracking-tight">Drivebase</span>
          <span className="ml-2 text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-white/40 border border-white/5">v1.4</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <a className="hover:text-white transition-colors" href="#features">Features</a>
          <a className="hover:text-white transition-colors" href="#providers">Providers</a>
          <a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
          <a className="hover:text-white transition-colors" href="#download">Download</a>
          <a className="hover:text-white transition-colors" href="#" >Docs</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 .5A11.5 11.5 0 00.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-1.95c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 015.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.66.79.55A11.5 11.5 0 0023.5 12 11.5 11.5 0 0012 .5z"/></svg>
            <span>12.4k</span>
          </a>
          <a href="#download" className="text-sm px-4 py-2 rounded-lg font-medium text-slate-950 transition-all hover:scale-[1.02]"
             style={{ background: `linear-gradient(180deg, rgb(var(--color-accent-rgb)), ${A_ACCENT2})`, boxShadow: `0 0 0 1px ${primaryAlpha(0.33)}, 0 8px 24px -8px ${primaryAlpha(0.4)}` }}>
            Install
          </a>
        </div>
      </div>
    </nav>
  );
};

export const Logo = () => (
  <div className="relative w-7 h-7 rounded-lg flex items-center justify-center"
       style={{ background: `linear-gradient(135deg, ${A_ACCENT}, ${A_ACCENT2})`, boxShadow: `0 4px 16px -4px ${primaryAlpha(0.5)}, inset 0 1px 0 ${foregroundAlpha(0.4)}` }}>
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="rgb(var(--color-primary-foreground-rgb))" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h6l2 2h8v10a1 1 0 01-1 1H5a1 1 0 01-1-1V7z"/>
      <path d="M8 13l3 3 5-6"/>
    </svg>
  </div>
);
