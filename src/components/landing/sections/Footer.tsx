import React from 'react';
import { A_ACCENT2 } from '../theme';
import { Logo } from '../shared/Logo';
import { siteConfig } from '../../../config/site';

// ─── Footer ──────────────────────────────────────────────────
export const Footer = () => {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  return (
    <footer className="relative pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <Logo />
              <span className="text-white font-semibold tracking-tight">{siteConfig.name}</span>
            </div>
            <p className="mt-4 text-sm text-white/50 max-w-xs leading-relaxed">
              A desktop-class workspace for every drive you own.
            </p>
            <form className="mt-5 flex gap-2 max-w-sm" onSubmit={(e) => { e.preventDefault(); if(email){ setSent(true); setTimeout(() => setSent(false), 2000); setEmail(''); } }}>
              <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="you@work.com"
                     className="flex-1 px-3 py-2 rounded-lg text-sm text-white bg-white/[0.04] border border-white/[0.08] placeholder:text-white/30 focus:outline-none focus:border-white/20"/>
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-slate-950 transition-all hover:scale-[1.02]"
                      style={{ background: `linear-gradient(180deg, rgb(var(--color-accent-rgb)), ${A_ACCENT2})` }}>
                {sent ? '✓ Subscribed' : 'Notify me'}
              </button>
            </form>
          </div>
          {[
            { h: 'Product', items: ['Features', 'Providers', 'Changelog', 'Roadmap', 'Status'] },
            { h: 'Developers', items: ['Docs', 'CLI', 'API', 'GitHub', 'Discord'] },
            { h: 'Company', items: ['About', 'Privacy', 'Terms', 'Security', 'Contact'] },
          ].map(c => (
            <div key={c.h}>
              <h4 className="text-xs font-mono tracking-wider text-white/40 uppercase mb-4">{c.h}</h4>
              <ul className="space-y-2.5">
                {c.items.map(i => <li key={i}><a className="text-sm text-white/60 hover:text-white transition-colors" href="#">{i}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-white/40 font-mono">© 2026 Drivebase Labs · Built in SF & Berlin</div>
          <div className="flex items-center gap-4 text-white/40">
            <a href="#"><svg viewBox="0 0 24 24" className="w-4 h-4 hover:text-white transition-colors" fill="currentColor"><path d="M12 .5A11.5 11.5 0 00.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-1.95c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 015.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.66.79.55A11.5 11.5 0 0023.5 12 11.5 11.5 0 0012 .5z"/></svg></a>
            <a href="#"><svg viewBox="0 0 24 24" className="w-4 h-4 hover:text-white transition-colors" fill="currentColor"><path d="M18.9 1.2h3.6l-7.8 9 9.3 12.6h-7.2l-5.7-7.5-6.6 7.5H0.9l8.4-9.6L0.3 1.2h7.5l5.1 6.8L18.9 1.2z"/></svg></a>
            <a href="#"><svg viewBox="0 0 24 24" className="w-4 h-4 hover:text-white transition-colors" fill="currentColor"><path d="M20.32 4.37A19.8 19.8 0 0015.72 3l-.2.4a18.3 18.3 0 00-5 .93 17.8 17.8 0 00-3.78 1.12L3.68 4.37A19.8 19.8 0 00.8 7.12 26 26 0 00.2 18.8a19.8 19.8 0 005.4 2.72l1.1-1.5a11.5 11.5 0 01-1.8-.87l.45-.35a13 13 0 0012.3 0l.45.35a11.5 11.5 0 01-1.8.87l1.1 1.5a19.8 19.8 0 005.4-2.72 26 26 0 00-.6-11.68 19.8 19.8 0 00-2.88-2.75zM8.02 15.32c-1.1 0-2-1-2-2.24s.88-2.24 2-2.24 2.02 1 2 2.24c0 1.24-.88 2.24-2 2.24zm7.96 0c-1.1 0-2-1-2-2.24s.88-2.24 2-2.24 2.02 1 2 2.24-.88 2.24-2 2.24z"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
