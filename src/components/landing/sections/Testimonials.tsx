import React from 'react';
import { A_ACCENT, foregroundAlpha } from '../theme';
import { Dot, Pill, Spotlight } from '../shared/Primitives';

// ─── Testimonials ─────────────────────────────────────────────
const QUOTES = [
  { q: 'Replaced Finder, Cyberduck, and Transmit in a single window. Feels like the file manager macOS should have shipped.', a: 'Elena Park', r: 'Principal Engineer · Vercel', av: 'EP' },
  { q: 'We moved 40TB from S3 to R2 without writing a single script. Drivebase just… did it.', a: 'Marcus Lee', r: 'Infra Lead · Stripe', av: 'ML' },
  { q: 'The multi-window thing is a game changer. Dragging between a local folder and Drive works the way it always should have.', a: 'Sana Alvi', r: 'Design Director · Linear', av: 'SA' },
  { q: 'Keyboard-first, scriptable, open source. Exactly what power users have been asking for.', a: 'Theo Kaplan', r: 'Founder · Raycast-ish', av: 'TK' },
  { q: 'Transfer engine is the best I\'ve used. Parallel chunks, resumable, per-host throttling out of the box.', a: 'Priya Rao', r: 'Staff SRE · Cloudflare', av: 'PR' },
  { q: 'Our data team runs nightly S3→local mirrors via Drivebase macros. 0 failures in 3 months.', a: 'David Okafor', r: 'Head of Data · Ramp', av: 'DO' },
];

export const Testimonials = () => {
  return (
    <section className="relative py-24 border-t border-white/5 overflow-hidden">
      <Spotlight x="50%" y="50%" color="rgb(var(--color-secondary-rgb))" size="700px" opacity={0.06}/>
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex items-end justify-between gap-8">
          <div>
            <Pill><Dot color="#f59e0b"/>Loved by builders</Pill>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-white leading-[1.05]">
              Quiet praise,<br/>from noisy toolchains.
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-6 text-white/60 text-sm">
            <div><div className="text-2xl font-semibold text-white">4.9</div><div className="text-xs">★ avg review</div></div>
            <div className="w-px h-10 bg-white/10"/>
            <div><div className="text-2xl font-semibold text-white">12.4k</div><div className="text-xs">GitHub stars</div></div>
            <div className="w-px h-10 bg-white/10"/>
            <div><div className="text-2xl font-semibold text-white">1.2M</div><div className="text-xs">transfers / week</div></div>
          </div>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"/>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"/>
        <MarqueeRow quotes={QUOTES} dur={50}/>
        <MarqueeRow quotes={[...QUOTES].reverse()} dur={60} reverse/>
      </div>
    </section>
  );
};

const MarqueeRow = ({ quotes, dur, reverse }) => (
  <div className="flex gap-4 py-3" style={{ animation: `marquee ${dur}s linear infinite ${reverse ? 'reverse' : ''}`, width: 'max-content' }}>
    {[...quotes, ...quotes].map((q, i) => (
      <div key={i} className="w-[420px] shrink-0 rounded-2xl p-6"
           style={{ background: `linear-gradient(180deg, ${foregroundAlpha(0.03)}, ${foregroundAlpha(0.01)})`, border: `1px solid ${foregroundAlpha(0.06)}` }}>
        <p className="text-sm text-white/80 leading-relaxed">"{q.q}"</p>
        <div className="mt-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-white"
               style={{ background: `linear-gradient(135deg, ${A_ACCENT}, rgb(var(--color-secondary-rgb)))` }}>
            {q.av}
          </div>
          <div>
            <div className="text-xs font-medium text-white">{q.a}</div>
            <div className="text-xs text-white/40">{q.r}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);
