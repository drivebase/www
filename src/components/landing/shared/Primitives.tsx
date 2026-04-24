import type { ReactNode } from 'react';
import { A_ACCENT, colorWithAlpha } from '../theme';

type PillProps = { children: ReactNode; className?: string };
type DotProps = { color?: string };
type SpotlightProps = { x?: string; y?: string; color?: string; size?: string; opacity?: number };

// ─── Shared bits ─────────────────────────────────────────────
export const Grain = () => (
  <div
    className="pointer-events-none fixed inset-0 z-0 opacity-[0.035] mix-blend-overlay"
    style={{
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
    }}
  />
);

export const Spotlight = ({ x = '50%', y = '0%', color = A_ACCENT, size = '800px', opacity = 0.18 }: SpotlightProps) => (
  <div
    className="pointer-events-none absolute inset-0"
    style={{
      background: `radial-gradient(${size} ${size} at ${x} ${y}, ${colorWithAlpha(color, opacity)}, transparent 60%)`,
    }}
  />
);

export const Pill = ({ children, className = '' }: PillProps) => (
  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide
    bg-white/[0.04] border border-white/[0.08] text-white/70 backdrop-blur ${className}`}>
    {children}
  </div>
);

export const Dot = ({ color = A_ACCENT }: DotProps) => (
  <span className="relative flex w-1.5 h-1.5">
    <span className="absolute inset-0 rounded-full animate-ping" style={{ background: color, opacity: 0.7 }}/>
    <span className="relative inline-flex w-1.5 h-1.5 rounded-full" style={{ background: color }}/>
  </span>
);
