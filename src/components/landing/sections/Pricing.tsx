import React from 'react';
import { A_ACCENT, A_ACCENT2, foregroundAlpha, primaryAlpha } from '../theme';
import { useInView } from '../hooks/useInView';
import { Dot, Pill } from '../shared/Primitives';

type BillingPeriod = 'monthly' | 'annual';

type PricingTier = {
  name: string;
  desc: string;
  pricing: Record<BillingPeriod, { price: string; suffix: string }>;
  features: string[];
  cta: string;
  highlight: boolean;
};

const BILLING_OPTIONS: Array<{ label: string; value: BillingPeriod }> = [
  { label: 'Monthly', value: 'monthly' },
  { label: 'Annual', value: 'annual' },
];

const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Solo',
    desc: 'For individuals, OSS.',
    pricing: {
      monthly: { price: 'Free', suffix: 'Forever' },
      annual: { price: 'Free', suffix: 'Forever' },
    },
    features: ['Unlimited providers', '1 workspace', 'Local + 5 cloud drives', 'Community support'],
    cta: 'Install',
    highlight: false,
  },
  {
    name: 'Pro',
    desc: 'For power users.',
    pricing: {
      monthly: { price: '$12', suffix: '/ month' },
      annual: { price: '$10', suffix: '/ month · billed annually' },
    },
    features: ['Everything in Solo', 'Unlimited cloud drives', 'E2E encryption', 'Scriptable macros', 'Priority sync'],
    cta: 'Coming soon',
    highlight: true,
  },
  {
    name: 'Team',
    desc: 'For teams & ops.',
    pricing: {
      monthly: { price: '$8', suffix: '/ user · month' },
      annual: { price: '$6', suffix: '/ user · month · billed annually' },
    },
    features: ['Everything in Pro', 'Shared workspaces', 'SSO + audit logs', 'Role-based policies', 'SLA 99.9%'],
    cta: 'Coming soon',
    highlight: false,
  },
];

// ─── Pricing ─────────────────────────────────────────────────
export const Pricing = () => {
  const [ref, seen] = useInView();
  const [billing, setBilling] = React.useState<BillingPeriod>('monthly');

  return (
    <section id="pricing" ref={ref} className="relative py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Pill><Dot color="#10b981"/>Pricing</Pill>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-white leading-[1.05]">
            Fair, simple, per-seat.
          </h2>
          <p className="mt-4 text-white/50">Open source core. Pay only for what saves time.</p>
          <div
            className="mx-auto mt-7 inline-flex rounded-xl p-1"
            style={{ background: foregroundAlpha(0.04), border: `1px solid ${foregroundAlpha(0.08)}` }}
          >
            {BILLING_OPTIONS.map((option) => {
              const active = billing === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setBilling(option.value)}
                  className="relative rounded-lg px-4 py-2 text-sm font-medium transition-colors"
                  style={{
                    background: active ? `linear-gradient(180deg, rgb(var(--color-accent-rgb)), ${A_ACCENT2})` : 'transparent',
                    color: active ? 'rgb(var(--color-primary-foreground-rgb))' : foregroundAlpha(0.62),
                    boxShadow: active ? `0 8px 24px -12px ${primaryAlpha(0.7)}` : 'none',
                  }}
                  aria-pressed={active}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {PRICING_TIERS.map((t, i) => {
            const price = t.pricing[billing];

            return (
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
                <span className="text-5xl font-semibold text-white tracking-tight">{price.price}</span>
                <span className="text-white/40 text-sm">{price.suffix}</span>
              </div>
              <div className="mt-6 space-y-3 flex-1">
                {t.features.map(f => (
                  <div key={f} className="flex items-center gap-2.5 text-sm text-white/70">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={t.highlight ? A_ACCENT : 'rgb(var(--color-muted-rgb))'} strokeWidth="2" strokeLinecap="round"><path d="M5 12l4 4L19 7"/></svg>
                    {f}
                  </div>
                ))}
              </div>
              <button className="mt-8 py-2.5 rounded-lg text-sm font-medium transition-all hover:scale-[1.01]"
                      style={{
                        background: t.highlight ? `linear-gradient(180deg, rgb(var(--color-accent-rgb)), ${A_ACCENT2})` : foregroundAlpha(0.05),
                        color: t.highlight ? 'rgb(var(--color-primary-foreground-rgb))' : 'rgb(var(--color-foreground-rgb))',
                        border: t.highlight ? 'none' : `1px solid ${foregroundAlpha(0.08)}`,
                      }}>
                {t.cta}
              </button>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
