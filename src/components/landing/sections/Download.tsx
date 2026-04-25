import React from 'react';
import { foregroundAlpha, primaryAlpha } from '../theme';
import { Spotlight } from '../shared/Primitives';
import { siteConfig } from '../../../config/site';

const DownloadBackground = () => (
  <>
    <div
      className="absolute inset-0 opacity-35"
      style={{
        backgroundImage: `
          linear-gradient(${foregroundAlpha(0.06)} 1px, transparent 1px),
          linear-gradient(90deg, ${foregroundAlpha(0.06)} 1px, transparent 1px)
        `,
        backgroundSize: '44px 44px',
        maskImage: 'linear-gradient(90deg, transparent, #000 18%, #000 82%, transparent)',
      }}
    />
    <div
      className="absolute inset-x-10 top-8 h-px"
      style={{ background: `linear-gradient(90deg, transparent, ${primaryAlpha(0.45)}, transparent)` }}
    />
    <div
      className="absolute inset-x-10 bottom-8 h-px"
      style={{ background: `linear-gradient(90deg, transparent, ${primaryAlpha(0.25)}, transparent)` }}
    />
    <div className="absolute left-10 top-10 h-10 w-10 border-l border-t border-primary/30" />
    <div className="absolute right-10 top-10 h-10 w-10 border-r border-t border-primary/30" />
    <div className="absolute bottom-10 left-10 h-10 w-10 border-b border-l border-primary/20" />
    <div className="absolute bottom-10 right-10 h-10 w-10 border-b border-r border-primary/20" />
  </>
);

// ─── Download ────────────────────────────────────────────────
export const Download = () => (
  <section id="download" className="relative py-24 border-t border-white/5">
    <Spotlight x="50%" y="50%" size="700px" opacity={0.15}/>
    <div className="max-w-5xl mx-auto px-6">
      <div className="relative rounded-3xl p-12 text-center overflow-hidden"
           style={{
             background: `linear-gradient(180deg, ${primaryAlpha(0.08)}, ${primaryAlpha(0.02)})`,
             border: `1px solid ${primaryAlpha(0.2)}`,
           }}>
        <DownloadBackground />
        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-white">
            Ready to consolidate?
          </h2>
          <p className="mt-4 text-white/60">
            Install in one command.
          </p>
          <div className="mt-8 flex justify-center">
            <div
              className="inline-flex max-w-full items-center gap-2 rounded-xl px-3 py-3 font-mono text-[clamp(10px,2.7vw,14px)] text-white/80 sm:gap-3 sm:px-4"
              style={{ background: foregroundAlpha(0.06), border: `1px solid ${foregroundAlpha(0.1)}` }}
            >
              <span className="shrink-0 text-white/35 select-none">$</span>
              <span className="min-w-0 whitespace-nowrap">{siteConfig.installCommand}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
