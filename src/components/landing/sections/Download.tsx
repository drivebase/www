import React from 'react';
import { foregroundAlpha, primaryAlpha } from '../theme';
import { Spotlight } from '../shared/Primitives';

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
    <div className="absolute left-12 top-1/2 hidden -translate-y-1/2 flex-col gap-2 text-left font-mono text-[10px] text-white/20 md:flex">
      <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">drivebase auth</span>
      <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">mount cloud://</span>
      <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">sync --watch</span>
    </div>
    <div className="absolute right-12 top-1/2 hidden -translate-y-1/2 flex-col gap-2 text-left font-mono text-[10px] text-white/20 md:flex">
      <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">S3</span>
      <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">R2</span>
      <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">WebDAV</span>
    </div>
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
              className="inline-flex max-w-full items-center gap-3 rounded-xl px-4 py-3 font-mono text-sm text-white/80"
              style={{ background: foregroundAlpha(0.06), border: `1px solid ${foregroundAlpha(0.1)}` }}
            >
              <span className="text-white/35 select-none">$</span>
              <span className="break-all">curl -fsSL get.drivebase.app | sh</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
