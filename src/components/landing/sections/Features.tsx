import React from 'react';
import type { ReactNode } from 'react';
import { A_ACCENT, foregroundAlpha, primaryAlpha } from '../theme';
import { useCountUp } from '../hooks/useCountUp';
import { useInView } from '../hooks/useInView';
import { Dot, Pill, Spotlight } from '../shared/Primitives';

type FeatureCardProps = { className?: string; tag: string; title: ReactNode; body: string; visual?: ReactNode; stat?: ReactNode; icon?: ReactNode; span?: boolean };

// ─── Features ────────────────────────────────────────────────
export const Features = () => {
  const [ref, seen] = useInView();
  const providers = useCountUp(5, seen);

  return (
    <section id="features" ref={ref} className="relative py-24">
      <Spotlight x="20%" y="30%" size="500px" opacity={0.08}/>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <Pill><Dot/>Built for file work</Pill>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-white leading-[1.05]">
            A file manager that thinks in windows.
          </h2>
          <p className="mt-4 text-white/50 text-lg leading-relaxed">
            Connect every provider, then browse, transfer, and resolve conflicts from one open-source desktop shell.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* Big: OS-like interface */}
          <FeatureCard
            className="col-span-12 lg:col-span-7 row-span-2"
            tag="OS-like interface"
            title="Apps, not dashboards."
            body="Files, Providers, and Settings open as windows you move, resize, and tile. Drag files between providers like they share one folder."
            visual={<MultiWindowVisual/>}
            span
          />

          {/* Multi-provider */}
          <FeatureCard
            className="col-span-12 sm:col-span-6 lg:col-span-5"
            tag="Multi-provider"
            title="Connect everything"
            body="Google Drive, S3, Dropbox, OneDrive, local — plus any S3-compatible store like R2, Wasabi, or MinIO."
            stat={<div className="flex items-baseline gap-1.5"><span className="text-3xl font-semibold text-white tabular-nums">{Math.round(providers)}+</span><span className="text-sm text-white/40">providers</span></div>}
          />

          {/* Real-time progress */}
          <FeatureCard
            className="col-span-12 sm:col-span-6 lg:col-span-5"
            tag="Real-time progress"
            title="Watch it happen"
            body="Live operation status streamed over SSE — no polling. Chunked uploads resume right through a browser reload."
            stat={<div className="flex items-baseline gap-1.5"><Dot color="#10b981"/><span className="text-sm font-mono text-white/60">SSE · resumable</span></div>}
          />

          {/* Batch ops */}
          <FeatureCard
            className="col-span-12 sm:col-span-6 lg:col-span-4"
            tag="Batch operations"
            title="Move at scale"
            body="Copy, move, transfer, and delete across providers — with preflight conflict analysis before anything runs."
            icon={<OpsIcon/>}
          />

          {/* Self-hosted */}
          <FeatureCard
            className="col-span-12 sm:col-span-6 lg:col-span-4"
            tag="Self-hosted"
            title="Your data, your box"
            body="Open source and self-hosted via Docker. Secrets auto-generate — nothing leaves your infrastructure."
            icon={<LockIcon/>}
          />

          {/* GraphQL API */}
          <FeatureCard
            className="col-span-12 sm:col-span-12 lg:col-span-4"
            tag="Extensible"
            title="Typed GraphQL API"
            body="Every capability is exposed over GraphQL. Add new backends with a clean IStorageProvider interface."
            icon={<ApiRow/>}
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ className = '', tag, title, body, visual, stat, icon, span }) => (
  <div
    className={`${className} group relative rounded-2xl overflow-hidden flex flex-col`}
    style={{
      background: `linear-gradient(180deg, ${foregroundAlpha(0.03)}, ${foregroundAlpha(0.01)})`,
      border: `1px solid ${foregroundAlpha(0.06)}`,
      minHeight: span ? 460 : 240,
    }}
  >
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{ background: `radial-gradient(400px 300px at 50% 0%, ${primaryAlpha(0.08)}, transparent 70%)` }}
    />
    <div className="relative p-6 flex flex-col gap-2 z-10">
      <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-white/40 uppercase">
        <span className="w-1 h-1 rounded-full" style={{ background: A_ACCENT }}/>
        {tag}
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-white mt-1">{title}</h3>
      <p className="text-sm text-white/55 leading-relaxed max-w-md">{body}</p>
      {stat && <div className="mt-2">{stat}</div>}
    </div>
    {visual && <div className="relative flex-1 z-0">{visual}</div>}
    {icon && <div className="relative flex-1 flex items-end justify-end p-6 z-0">{icon}</div>}
  </div>
);

const MultiWindowVisual = () => (
  <div className="absolute inset-0 p-6 pt-2 overflow-hidden">
    {/* Window 1 */}
    <div className="absolute left-6 top-24 right-1/3 bottom-6 rounded-xl overflow-hidden"
         style={{ background: 'linear-gradient(180deg, rgb(var(--color-surface-raised-rgb)), rgb(var(--color-surface-rgb)))', border: `1px solid ${foregroundAlpha(0.08)}`, boxShadow: '0 20px 50px rgb(0 0 0 / 0.5)' }}>
      <div className="flex items-center gap-1.5 px-3 h-7 border-b border-white/5">
        <div className="flex items-center gap-1.5 text-[10px] text-white/60">
          <svg viewBox="0 0 24 24" className="w-2.5 h-2.5"><path d="M7.5 3h9l6 10.5-4.5 7.5h-12L1.5 13.5 7.5 3z" fill="#4285F4"/></svg>
          My Drive
        </div>
      </div>
      <div className="p-3 grid grid-cols-4 gap-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="h-8 rounded" style={{ background: i % 4 === 0 ? 'rgb(var(--color-primary-rgb) / 0.18)' : i % 3 === 0 ? foregroundAlpha(0.1) : foregroundAlpha(0.06) }}/>
            <div className="h-0.5 rounded bg-white/10" style={{ width: `${50 + (i * 7) % 40}%` }}/>
          </div>
        ))}
      </div>
    </div>
    {/* Window 2 */}
    <div className="absolute right-6 top-10 w-[45%] bottom-16 rounded-xl overflow-hidden"
         style={{ background: 'linear-gradient(180deg, rgb(var(--color-surface-raised-rgb)), rgb(var(--color-surface-rgb)))', border: `1px solid ${primaryAlpha(0.2)}`, boxShadow: `0 20px 50px rgb(0 0 0 / 0.6), 0 0 0 1px ${primaryAlpha(0.13)}` }}>
      <div className="flex items-center gap-1.5 px-3 h-7 border-b border-white/5">
        <div className="flex items-center gap-1.5 text-[10px] text-white/80">
          <svg viewBox="0 0 24 24" className="w-2.5 h-2.5"><path d="M12 2L3 6v12l9 4 9-4V6l-9-4z" fill="#E25444"/></svg>
          prod-assets · S3
        </div>
      </div>
      <div className="p-3 space-y-1.5">
        {['campaign-hero.mp4','logo-dark.svg','onboarding-01.png','onboarding-02.png','pricing-v3.fig'].map((name, i) => (
          <div key={i} className={`flex items-center gap-2 px-2 py-1.5 rounded text-[10px] ${i === 2 ? 'bg-white/[0.06]' : ''}`}>
            <div className="w-3 h-3.5 rounded-sm bg-white/20"/>
            <span className="text-white/70 flex-1 truncate">{name}</span>
            <span className="text-white/30 font-mono">{['4.2M','12K','890K','1.1M','240K'][i]}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const OpsIcon = () => (
  <div className="flex flex-wrap gap-1.5 justify-end">
    {['copy', 'move', 'transfer', 'delete', 'overwrite', 'skip', 'rename', 'resolve'].map((t, i) => (
      <span key={t} className="px-2 py-1 rounded-md text-[10px] font-mono text-white/60 border border-white/10 bg-white/[0.02]"
            style={{ animation: `fadeIn 0.4s ease-out ${i * 0.08}s backwards, none` }}>
        {t}
      </span>
    ))}
  </div>
);

const LockIcon = () => (
  <div className="relative">
    <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none">
      <rect x="20" y="36" width="40" height="32" rx="4" stroke={A_ACCENT} strokeWidth="1.5" fill="rgb(var(--color-primary-rgb) / 0.05)"/>
      <path d="M28 36v-8a12 12 0 0124 0v8" stroke={A_ACCENT} strokeWidth="1.5" opacity="0.5"/>
      <circle cx="40" cy="52" r="3" fill={A_ACCENT}/>
    </svg>
  </div>
);

const ApiRow = () => (
  <div className="flex items-center gap-1.5 text-xs">
    {['query','mutation'].map((k) => (
      <kbd key={k} className="px-2.5 py-1.5 rounded-md font-mono text-white/70 border border-white/10 bg-white/[0.04]">{k}</kbd>
    ))}
    <span className="text-white/30 ml-1 text-xs font-mono">→ graphql</span>
  </div>
);
