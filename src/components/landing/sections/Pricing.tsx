import React from 'react';
import { A_ACCENT, A_ACCENT2, foregroundAlpha, primaryAlpha } from '../theme';
import { useInView } from '../hooks/useInView';
import { Dot, Pill } from '../shared/Primitives';
import { githubUrl } from '../../../config/site';

const CLOUD_URL = 'https://cloud.drivebase.io';

type PricingTier = {
  name: string;
  desc: string;
  price: string;
  suffix: string;
  features: string[];
  cta: string;
  href: string;
  highlight: boolean;
};

const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Self-hosted',
    desc: 'Open source.',
    price: 'Free',
    suffix: 'forever',
    features: ['All providers', 'Run anywhere via Docker', 'Unified file browser', 'Community support'],
    cta: 'Deploy yourself',
    href: githubUrl,
    highlight: false,
  },
  {
    name: 'Pro',
    desc: 'Managed instance.',
    price: '$9.99',
    suffix: '/ month',
    features: ['Hosted & always on', '20 GB storage', '5 TB transfer', 'Automatic updates'],
    cta: 'Get started',
    href: CLOUD_URL,
    highlight: false,
  },
  {
    name: 'Max',
    desc: 'For power users.',
    price: '$14.99',
    suffix: '/ month',
    features: ['Everything in Pro', '40 GB storage', '10 TB transfer', 'Priority provisioning'],
    cta: 'Get started',
    href: CLOUD_URL,
    highlight: true,
  },
  {
    name: 'Ultra',
    desc: 'Maximum performance.',
    price: '$24.99',
    suffix: '/ month',
    features: ['Everything in Max', '80 GB storage', '20 TB transfer', 'Dedicated resources'],
    cta: 'Get started',
    href: CLOUD_URL,
    highlight: false,
  },
];

// ─── Pricing ─────────────────────────────────────────────────
export const Pricing = () => {
  const [ref, seen] = useInView();

  return (
    <section id="pricing" ref={ref} className="relative py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Pill><Dot color="#10b981"/>Pricing</Pill>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-white leading-[1.05]">
            Self-host free, or let us run it.
          </h2>
          <p className="mt-4 text-white/50">Open source core. Managed cloud instances when you'd rather not.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRICING_TIERS.map((t, i) => (
            <div key={t.name}
                 className="relative rounded-2xl p-8 flex flex-col transition-all duration-500"
                 style={{
                   background: t.highlight
                     ? `linear-gradient(180deg, ${primaryAlpha(0.08)}, ${primaryAlpha(0.02)})`
                     : `linear-gradient(180deg, ${foregroundAlpha(0.03)}, ${foregroundAlpha(0.01)})`,
                   border: t.highlight ? `1px solid ${primaryAlpha(0.25)}` : `1px solid ${foregroundAlpha(0.06)}`,
                   boxShadow: t.highlight ? `0 20px 60px -20px ${primaryAlpha(0.27)}` : 'none',
                   opacity: seen ? 1 : 0,
                   transform: seen ? 'translateY(0)' : 'translateY(16px)',
                   transitionDelay: `${i * 80}ms`,
                 }}>
              {t.highlight && (
                <div className="absolute -top-3 right-6 px-2.5 py-1 text-[10px] font-medium rounded-full text-slate-950"
                     style={{ background: `linear-gradient(180deg, rgb(var(--color-accent-rgb)), ${A_ACCENT2})` }}>
                  Most popular
                </div>
              )}
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold text-lg">{t.name}</h3>
                <span className="text-xs text-white/40 font-mono">{t.desc}</span>
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-white tracking-tight">{t.price}</span>
                <span className="text-white/40 text-sm">{t.suffix}</span>
              </div>
              <div className="mt-6 space-y-3 flex-1">
                {t.features.map(f => (
                  <div key={f} className="flex items-center gap-2.5 text-sm text-white/70">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={t.highlight ? A_ACCENT : 'rgb(var(--color-muted-rgb))'} strokeWidth="2" strokeLinecap="round"><path d="M5 12l4 4L19 7"/></svg>
                    {f}
                  </div>
                ))}
              </div>
              <a href={t.href} target="_blank" rel="noreferrer"
                 className="mt-8 py-2.5 rounded-lg text-sm font-medium text-center transition-all hover:scale-[1.01]"
                 style={{
                   background: t.highlight ? `linear-gradient(180deg, rgb(var(--color-accent-rgb)), ${A_ACCENT2})` : foregroundAlpha(0.05),
                   color: t.highlight ? 'rgb(var(--color-primary-foreground-rgb))' : 'rgb(var(--color-foreground-rgb))',
                   border: t.highlight ? 'none' : `1px solid ${foregroundAlpha(0.08)}`,
                 }}>
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
