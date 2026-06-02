import React from 'react';
import { Icon } from '@iconify/react';
import { primaryAlpha } from '../theme';
import { useInView } from '../hooks/useInView';
import { Dot, Pill } from '../shared/Primitives';

// ─── Providers ───────────────────────────────────────────────
// `supported: true` renders in full brand color; everything else is monochrome
// until the backend lands.
const PROVIDERS: Array<{ name: string; icon: string; color?: string; supported?: boolean }> = [
  { name: 'Google Drive', icon: 'logos:google-drive', supported: true },
  { name: 'Amazon S3', icon: 'logos:aws-s3', supported: true },
  { name: 'Cloudflare R2', icon: 'logos:cloudflare-icon', supported: true },
  { name: 'Dropbox', icon: 'logos:dropbox', supported: true },
  { name: 'Local', icon: 'mdi:folder', color: '#60a5fa', supported: true },
  { name: 'OneDrive', icon: 'logos:microsoft-onedrive' },
  { name: 'Backblaze', icon: 'simple-icons:backblaze', color: '#E21E29' },
  { name: 'iCloud', icon: 'simple-icons:icloud', color: '#3693F3' },
  { name: 'Box', icon: 'simple-icons:box', color: '#0061D5' },
  { name: 'WebDAV', icon: 'mdi:folder-network-outline', color: '#94a3b8' },
  { name: 'SFTP', icon: 'mdi:console-network-outline', color: '#a78bfa' },
  { name: 'MinIO', icon: 'simple-icons:minio', color: '#C72E49' },
];

export const Providers = () => {
  const [ref, seen] = useInView();
  return (
    <section id="providers" ref={ref} className="relative py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 mb-10">
          <div className="flex-1">
            <Pill>
              <Dot color="#a78bfa"/>
              <span>12 providers · one interface</span>
            </Pill>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-white leading-[1.05]">
              Bring any storage.<br/>Work with it like local.
            </h2>
          </div>
          <p className="max-w-sm text-white/50 leading-relaxed">
            Native protocols, not sync folders. Drivebase speaks S3, WebDAV, and OAuth directly — so remote feels instant.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {PROVIDERS.map((p, i) => (
            <div
              key={p.name}
              className="group relative flex flex-col items-center justify-center gap-3 bg-surface px-4 py-8 transition-[background-color,opacity,transform] duration-200 ease-out hover:bg-surface-raised"
              style={{
                opacity: seen ? 1 : 0,
                transform: seen ? 'translateY(0)' : 'translateY(8px)',
                transitionDelay: seen ? '0ms' : `${i * 40}ms`,
              }}
            >
              {!p.supported && (
                <span className="absolute right-2 top-2 rounded-full border border-white/10 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wide text-white/30">
                  Soon
                </span>
              )}
              <div
                className="flex h-9 w-9 items-center justify-center transition-[opacity,transform,filter] duration-200 ease-out group-hover:scale-105"
                style={{
                  opacity: p.supported ? 0.7 : 0.4,
                  filter: p.supported ? 'none' : 'grayscale(1)',
                }}
              >
                <Icon icon={p.icon} color={p.color} width="32" height="32" />
              </div>
              <div className={`text-xs font-medium transition-colors duration-200 ease-out ${p.supported ? 'text-white/50 group-hover:text-white/90' : 'text-white/30'}`}>{p.name}</div>
              <div className="absolute inset-0 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 pointer-events-none"
                   style={{ background: `radial-gradient(circle at 50% 50%, ${primaryAlpha(0.07)}, transparent 70%)` }}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
