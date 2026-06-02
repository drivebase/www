import React from 'react';
import { A_ACCENT2, foregroundAlpha, primaryAlpha } from '../theme';
import { useGithubStars } from '../hooks/useGithubStars';
import { siteConfig } from '../../../config/site';
import { Logo } from '../shared/Logo';

// ─── Nav ─────────────────────────────────────────────────────
export const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const github = useGithubStars();
  const navInnerStyle = {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1fr)',
    alignItems: 'center',
    gap: '16px',
    height: '64px',
  } satisfies React.CSSProperties;

  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? 'rgb(var(--color-background-rgb) / 0.72)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? `1px solid ${foregroundAlpha(0.06)}` : '1px solid transparent',
      }}
    >
      <div
        className="site-nav-inner mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-4 px-4 sm:px-6"
        style={navInnerStyle}
      >
        <div className="flex min-w-0 items-center gap-2.5" style={{ display: 'flex', minWidth: 0, alignItems: 'center', gap: '10px' }}>
          <Logo />
          <span className="text-white font-semibold tracking-tight">{siteConfig.name}</span>
        </div>
        <div className="site-nav-links hidden md:flex items-center gap-8 text-sm text-white/60">
          <a className="hover:text-white transition-colors" href="#features">Features</a>
          <a className="hover:text-white transition-colors" href="#providers">Providers</a>
          <a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
          <a className="hover:text-white transition-colors" href="#" >Docs</a>
        </div>
        <div
          className="flex min-w-0 items-center justify-end gap-3 col-start-3"
          style={{ display: 'flex', minWidth: 0, alignItems: 'center', justifyContent: 'flex-end', gap: '12px', gridColumnStart: 3 }}
        >
          <a href={github.url} aria-label="GitHub" className="hidden shrink-0 items-center justify-end text-white/60 hover:text-white transition-colors sm:flex" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 .5A11.5 11.5 0 00.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-1.95c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 015.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.66.79.55A11.5 11.5 0 0023.5 12 11.5 11.5 0 0012 .5z"/></svg>
          </a>
          <a href="https://cloud.drivebase.io" target="_blank" rel="noreferrer" className="text-sm px-4 py-2 rounded-lg font-medium text-slate-950 transition-all hover:scale-[1.02]"
             style={{ background: `linear-gradient(180deg, rgb(var(--color-accent-rgb)), ${A_ACCENT2})`, boxShadow: `0 0 0 1px ${primaryAlpha(0.33)}, 0 8px 24px -8px ${primaryAlpha(0.4)}` }}>
               Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};
