import React from 'react';
import { Minus, Square, X } from 'lucide-react';
import { foregroundAlpha, primaryAlpha } from './theme';

type HeroIllustrationProps = { animated?: boolean; accent?: string };
type TransferPanelProps = { animated: boolean; accent: string; tick: number };

const WindowControls = ({ size = 'sm' }: { size?: 'sm' | 'md' }) => {
  const buttonSize = size === 'md' ? 'size-[14px]' : 'size-3';
  const iconSize = size === 'md' ? 9 : 8;
  const buttonClass = `${buttonSize} flex items-center justify-center border border-white/20 bg-white/10 text-white/90 transition-colors hover:bg-white/30`;

  return (
    <div className="group/controls flex items-center gap-1" data-no-drag>
      <button type="button" aria-label="Close" title="Close" className={buttonClass}>
        <X size={iconSize} strokeWidth={2.25} />
      </button>
      <button type="button" aria-label="Minimize" title="Minimize" className={buttonClass}>
        <Minus size={iconSize} strokeWidth={2.25} />
      </button>
      <button type="button" aria-label="Maximize" title="Maximize" className={buttonClass}>
        <Square size={iconSize} strokeWidth={2} />
      </button>
    </div>
  );
};

// Drivebase hero illustration — recreates the attached reference in Tailwind
// Three stacked app windows: back window (Drive sidebar), main file browser,
// and floating transfer panel. Designed to sit on a dark bg.
//
// Props:
//   animated: boolean — whether progress bars animate + tile flicker
//   accent:   string  — accent color (cyan default)

export const HeroIllustration = ({ animated = true, accent = 'rgb(var(--color-primary-rgb))' }: HeroIllustrationProps) => {
  const [tick, setTick] = React.useState(0);
  const [selectedIdx, setSelectedIdx] = React.useState(7);

  React.useEffect(() => {
    if (!animated) return;
    const iv = setInterval(() => setTick(t => t + 1), 80);
    return () => clearInterval(iv);
  }, [animated]);

  React.useEffect(() => {
    if (!animated) return;
    const iv = setInterval(() => {
      setSelectedIdx(i => {
        const next = [6, 7, 8, 13, 14, 15];
        return next[Math.floor(Math.random() * next.length)];
      });
    }, 2200);
    return () => clearInterval(iv);
  }, [animated]);

  // Provider icons (Drive, S3 bucket, Dropbox, OneDrive, R2)
  const DriveIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path d="M7.5 3h9l6 10.5-4.5 7.5h-12L1.5 13.5 7.5 3z" fill="#4285F4"/>
      <path d="M7.5 3l-6 10.5h9L16.5 3h-9z" fill="#00AC47"/>
      <path d="M16.5 3l6 10.5H13.5L7.5 3h9z" fill="#FFBA00"/>
      <path d="M1.5 13.5L6 21h12l-3-7.5H1.5z" fill="#EA4335" opacity="0.9"/>
    </svg>
  );

  const BucketIcon = ({ color = '#94a3b8' }) => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={color} strokeWidth="1.6">
      <path d="M4 7h16l-1.5 12a2 2 0 01-2 1.8H7.5a2 2 0 01-2-1.8L4 7z"/>
      <path d="M4 7c0-1.1 3.6-2 8-2s8 .9 8 2"/>
    </svg>
  );

  const FolderIcon = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M3 6.5c0-.83.67-1.5 1.5-1.5h4l2 2h9c.83 0 1.5.67 1.5 1.5V18c0 .83-.67 1.5-1.5 1.5h-15A1.5 1.5 0 013 18V6.5z"
            fill="#f4c26b" stroke="#d19944" strokeWidth="0.8"/>
      <path d="M3 9h18v9c0 .83-.67 1.5-1.5 1.5h-15A1.5 1.5 0 013 18V9z" fill="#f9d38a"/>
    </svg>
  );

  const DocIcon = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M6 3h8l5 5v12a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.6"/>
      <path d="M14 3v5h5" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="0.6"/>
      <path d="M8 12h8M8 15h8M8 18h5" stroke="#cbd5e1" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );

  const VideoIcon = ({ danger }) => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" fill={danger ? '#1a0a0a' : '#0f172a'} stroke={danger ? '#dc2626' : '#334155'} strokeWidth="1"/>
      <path d="M10 9l6 3-6 3V9z" fill={danger ? '#ef4444' : '#f87171'}/>
    </svg>
  );

  const ImgIcon = ({ active }) => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <rect x="3" y="4" width="18" height="16" rx="2" fill={active ? '#1e3a5f' : '#134152'} stroke={active ? accent : '#1e5970'} strokeWidth="1"/>
      <circle cx="9" cy="10" r="1.5" fill={active ? '#93c5fd' : '#7dd3fc'}/>
      <path d="M3 16l5-4 4 3 3-2 6 4v3H3v-4z" fill={active ? '#3b82f6' : '#0891b2'} opacity="0.8"/>
    </svg>
  );

  // Tile grid — 6 columns × 4 rows = 24 tiles
  const tiles = [
    'folder','doc','doc','video','video','doc',
    'img','img','img','img','img','img',
    'img','img','img','img','img','img',
    'video-red','img','video-red','img','img','img',
  ];

  return (
    <div className="relative w-full h-full" style={{ perspective: '1800px' }}>
      {/* bg circular rings (decorative) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="ring-fade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#fff" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <g fill="none" stroke="url(#ring-fade)" strokeWidth="1">
          <circle cx="120" cy="80" r="120"/>
          <circle cx="120" cy="80" r="180"/>
          <circle cx="120" cy="80" r="240"/>
          <circle cx="120" cy="80" r="300"/>
        </g>
      </svg>

      {/* Back window — secondary source (Drive sidebar only) */}
      <div
        className="absolute left-0 top-12 w-[200px] h-[360px] rounded-xl overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgb(var(--color-surface-raised-rgb)) 0%, rgb(var(--color-surface-rgb)) 100%)',
          boxShadow: `0 20px 60px rgb(0 0 0 / 0.5), inset 0 1px 0 ${foregroundAlpha(0.04)}`,
          border: `1px solid ${foregroundAlpha(0.06)}`,
        }}
      >
        {/* title bar */}
        <div className="flex items-center gap-1.5 px-3 h-8 border-b border-white/5">
          <WindowControls />
        </div>
        {/* sidebar rows */}
        <div className="p-3 space-y-3">
          {[
            { icon: <DriveIcon/>, w: 'w-20' },
            { icon: <BucketIcon/>, w: 'w-24' },
            { icon: <BucketIcon/>, w: 'w-16' },
            { icon: <ImgIcon active/>, w: 'w-20', active: true },
            { icon: <BucketIcon/>, w: 'w-20' },
            { icon: <BucketIcon/>, w: 'w-24' },
          ].map((row, i) => (
            <div key={i} className={`flex items-center gap-2.5 px-2 py-1.5 rounded-md ${row.active ? 'bg-white/5' : ''}`}>
              {row.icon}
              <div className={`h-1.5 ${row.w} rounded-full bg-white/10`}/>
            </div>
          ))}
        </div>
      </div>

      {/* Main window */}
      <div
        className="absolute left-[150px] top-0 right-[80px] h-[420px] rounded-xl overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgb(var(--color-surface-raised-rgb)) 0%, rgb(var(--color-surface-rgb)) 100%)',
          boxShadow: `0 30px 80px rgb(0 0 0 / 0.6), 0 0 0 1px ${foregroundAlpha(0.08)}, inset 0 1px 0 ${foregroundAlpha(0.05)}`,
        }}
      >
        {/* title bar */}
        <div className="flex items-center gap-2 px-4 h-9 border-b border-white/5">
          <WindowControls size="md" />
          <div className="ml-4 flex-1 h-5 rounded bg-white/[0.04]"/>
        </div>

        <div className="flex h-[calc(100%-36px)]">
          {/* sidebar */}
          <div className="w-[180px] border-r border-white/5 p-3 space-y-3">
            <div className="flex items-center gap-2.5 px-2 py-1.5 rounded-md">
              <DriveIcon/>
              <div className="h-1.5 w-20 rounded-full bg-white/15"/>
            </div>
            <div className="flex items-center gap-2.5 px-2 py-1.5 rounded-md">
              <BucketIcon/>
              <div className="h-1.5 w-24 rounded-full bg-white/10"/>
            </div>
            <div className="flex items-center gap-2.5 px-2 py-1.5 rounded-md">
              <BucketIcon/>
              <div className="h-1.5 w-16 rounded-full bg-white/10"/>
            </div>
            <div
              className="flex items-center gap-2.5 px-2 py-1.5 rounded-md relative"
              style={{ background: primaryAlpha(0.08) }}
            >
              <div className="absolute left-0 top-1 bottom-1 w-[2px] rounded-r" style={{ background: accent }}/>
              <ImgIcon active/>
              <div className="h-1.5 w-20 rounded-full" style={{ background: accent, opacity: 0.6 }}/>
            </div>
            <div className="flex items-center gap-2.5 px-2 py-1.5 rounded-md">
              <BucketIcon/>
              <div className="h-1.5 w-20 rounded-full bg-white/10"/>
            </div>
            <div className="flex items-center gap-2.5 px-2 py-1.5 rounded-md">
              <BucketIcon/>
              <div className="h-1.5 w-24 rounded-full bg-white/10"/>
            </div>
          </div>

          {/* main pane */}
          <div className="flex-1 flex flex-col">
            {/* toolbar */}
            <div className="flex items-center gap-1.5 px-3 h-11 border-b border-white/5">
              <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center text-white/50">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center text-white/50">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
              </button>
              <button className="w-8 h-7 rounded-md bg-white/[0.06] ring-1 ring-white/10 flex items-center justify-center text-white/80">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 4v12m-5-7l5-5 5 5M5 20h14"/></svg>
              </button>
              <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center text-white/50">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
              </button>
              <div className="w-px h-4 bg-white/10 mx-1"/>
              <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center text-white/50">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 11-3-6.7L21 8M21 3v5h-5"/></svg>
              </button>
              <div className="flex-1"/>
              <div className="h-7 w-56 rounded-md bg-white/[0.04] ring-1 ring-white/5"/>
              <div className="w-px h-4 bg-white/10 mx-1"/>
              <button className="w-7 h-7 rounded-md bg-white/[0.06] flex items-center justify-center text-white/70">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
              </button>
              <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center text-white/40">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
              </button>
            </div>

            {/* file grid */}
            <div className="flex-1 p-4 overflow-hidden">
              <div className="grid grid-cols-6 gap-x-3 gap-y-4">
                {tiles.map((kind, i) => {
                  const isSelected = i === selectedIdx;
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-1.5 rounded-md p-1.5 transition-all duration-200"
                      style={{
                        background: isSelected ? 'rgba(59,130,246,0.25)' : 'transparent',
                        transform: isSelected ? 'scale(1.02)' : 'scale(1)',
                      }}
                    >
                      <div className="relative">
                        {kind === 'folder' && <FolderIcon/>}
                        {kind === 'doc' && <DocIcon/>}
                        {kind === 'video' && <VideoIcon/>}
                        {kind === 'video-red' && <VideoIcon danger/>}
                        {kind === 'img' && <ImgIcon active={isSelected}/>}
                      </div>
                      <div
                        className="h-1 rounded-full"
                        style={{
                          width: isSelected ? '70%' : `${40 + ((i * 17) % 30)}%`,
                          background: isSelected ? 'rgba(147,197,253,0.5)' : 'rgba(255,255,255,0.1)',
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transfer panel */}
      <TransferPanel animated={animated} accent={accent} tick={tick}/>
    </div>
  );
};

const TransferPanel = ({ animated, accent, tick }: TransferPanelProps) => {
  // Six transfers — each with independent progress animation
  const transfers = [
    { kind: 'doc',    status: 'done',   base: 100, speed: 0 },
    { kind: 'doc',    status: 'done',   base: 100, speed: 0 },
    { kind: 'img',    status: 'active', base: 62,  speed: 0.4 },
    { kind: 'video',  status: 'active', base: 48,  speed: 0.5 },
    { kind: 'doc',    status: 'paused', base: 35,  speed: 0 },
    { kind: 'video',  status: 'error',  base: 78,  speed: 0 },
  ];

  const progressFor = (t, i) => {
    if (t.status === 'done') return 100;
    if (t.status === 'paused') return t.base;
    if (t.status === 'error') return t.base;
    // active — oscillate smoothly
    const p = t.base + Math.sin(tick * t.speed + i) * 6 + (tick * 0.3) % 12;
    return Math.min(94, Math.max(10, p));
  };

  const StatusIcon = ({ status }) => {
    if (status === 'done') return (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#10b981"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
    );
    if (status === 'error' || status === 'paused') return (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#64748b" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/></svg>
    );
    return <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#64748b" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/></svg>;
  };

  const Mini = ({ kind }) => {
    if (kind === 'doc') return (
      <svg viewBox="0 0 24 24" className="w-4 h-5" fill="none">
        <path d="M6 3h8l5 5v12a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.6"/>
      </svg>
    );
    if (kind === 'img') return (
      <svg viewBox="0 0 24 24" className="w-4 h-5" fill="none">
        <rect x="3" y="4" width="18" height="16" rx="2" fill="#134152" stroke="#1e5970" strokeWidth="0.8"/>
        <circle cx="9" cy="10" r="1.5" fill="#7dd3fc"/>
      </svg>
    );
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-5" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" fill="#0f172a" stroke="#334155" strokeWidth="0.8"/>
        <path d="M10 9l6 3-6 3V9z" fill="#f87171"/>
      </svg>
    );
  };

  return (
    <div
      className="absolute right-0 top-[118px] w-[280px] rounded-xl overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgb(var(--color-surface-raised-rgb)) 0%, rgb(var(--color-surface-rgb)) 100%)',
        boxShadow: `0 24px 70px rgb(0 0 0 / 0.7), 0 0 0 1px ${foregroundAlpha(0.08)}`,
      }}
    >
      <div className="flex items-center gap-2 px-3 h-9 border-b border-white/5">
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 17l-4-4 4-4M17 7l4 4-4 4M3 13h10M21 11H11"/>
        </svg>
        <div className="h-1.5 w-28 rounded-full bg-white/10"/>
      </div>
      <div className="p-3 space-y-2.5">
        {transfers.map((t, i) => {
          const pct = progressFor(t, i);
          const barColor =
            t.status === 'error' ? '#ef4444' :
            t.status === 'paused' ? '#64748b' :
            t.status === 'done' ? '#10b981' :
            accent;
          return (
            <div key={i} className="flex items-center gap-2.5">
              <Mini kind={t.kind}/>
              <div className="flex-1 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                <div
                  className="h-full rounded-full transition-[width] duration-300 ease-out"
                  style={{
                    width: `${pct}%`,
                    background: t.status === 'active'
                      ? `linear-gradient(90deg, ${barColor}, ${barColor}dd)`
                      : barColor,
                    boxShadow: t.status === 'active' ? `0 0 8px ${barColor}66` : 'none',
                  }}
                />
              </div>
              <StatusIcon status={t.status}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};
