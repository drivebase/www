import React from 'react';
import { primaryAlpha } from '../theme';
import { useInView } from '../hooks/useInView';
import { Dot, Pill } from '../shared/Primitives';

// ─── Providers ───────────────────────────────────────────────
const PROVIDERS = [
  { name: 'Google Drive',
    icon: (<svg viewBox="0 0 24 24" className="w-full h-full"><path d="M7.5 3h9l6 10.5-4.5 7.5h-12L1.5 13.5 7.5 3z" fill="#4285F4"/><path d="M7.5 3l-6 10.5h9L16.5 3h-9z" fill="#00AC47"/><path d="M16.5 3l6 10.5H13.5L7.5 3h9z" fill="#FFBA00"/><path d="M1.5 13.5L6 21h12l-3-7.5H1.5z" fill="#EA4335"/></svg>) },
  { name: 'Dropbox',
    icon: (<svg viewBox="0 0 24 24" className="w-full h-full"><path fill="#0061FF" d="M6 2L0 6l6 4 6-4-6-4zm12 0l-6 4 6 4 6-4-6-4zM0 14l6 4 6-4-6-4-6 4zm18-4l-6 4 6 4 6-4-6-4zM6 19l6 4 6-4-6-4-6 4z"/></svg>) },
  { name: 'OneDrive',
    icon: (<svg viewBox="0 0 24 24" className="w-full h-full"><path fill="#0364B8" d="M14 7c-2.8 0-5.2 1.7-6.2 4.2C6.2 11 4 12.6 4 15a4 4 0 004 4h13a3 3 0 003-3c0-1.5-1.1-2.8-2.5-3-.3-3.4-3.1-6-6.5-6z"/><path fill="#28A8EA" d="M4 15a4 4 0 004 4h13a3 3 0 00.7-.1C20.5 17.2 18 15 15 15c-2.4 0-4.5 1.4-5.5 3.4A4 4 0 014 15z" opacity="0.7"/></svg>) },
  { name: 'Amazon S3',
    icon: (<svg viewBox="0 0 24 24" className="w-full h-full"><path fill="#E25444" d="M12 2L3 6v12l9 4 9-4V6l-9-4z"/><path fill="#B32B17" d="M12 2v20l9-4V6l-9-4z" opacity="0.6"/><path fill="#fff" d="M12 8.5l-5 2v3l5 2 5-2v-3l-5-2z" opacity="0.3"/></svg>) },
  { name: 'Cloudflare R2',
    icon: (<svg viewBox="0 0 24 24" className="w-full h-full"><path fill="#F38020" d="M20.5 14c-.3 0-.5 0-.8.1-.8-2.5-3.1-4.3-5.9-4.3-3 0-5.5 2.1-6 4.9-.2 0-.4-.1-.5-.1C5 14.6 3 16.6 3 19c0 .3 0 .7.1 1h16.8c1.7-.3 3-1.8 3-3.5 0-1.9-1.6-3.5-3.5-3.5z"/></svg>) },
  { name: 'Backblaze',
    icon: (<svg viewBox="0 0 24 24" className="w-full h-full"><circle cx="12" cy="12" r="10" fill="#E42D2D"/><path fill="#fff" d="M8 7h3a3 3 0 010 6H8V7zm0 7h3.5a3 3 0 010 6H8v-6z"/></svg>) },
  { name: 'iCloud',
    icon: (<svg viewBox="0 0 24 24" className="w-full h-full"><path fill="#3AABF0" d="M18.5 15c-.2 0-.4 0-.6.1-.7-2.2-2.8-3.8-5.2-3.8-2.7 0-5 2-5.3 4.6-.2 0-.3-.1-.5-.1C5 15.8 3.3 17.5 3.3 19.6 3.3 21.7 5 23 7 23h11.5c1.9 0 3.5-1.6 3.5-3.5 0-2-1.6-3.5-3.5-3.5z"/></svg>) },
  { name: 'Box',
    icon: (<svg viewBox="0 0 24 24" className="w-full h-full"><path fill="#0061D5" d="M3 3h18v18H3z" rx="2"/><circle cx="9" cy="14" r="3" fill="none" stroke="#fff" strokeWidth="1.5"/><circle cx="15" cy="14" r="3" fill="none" stroke="#fff" strokeWidth="1.5"/></svg>) },
  { name: 'WebDAV',
    icon: (<svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="#94a3b8" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>) },
  { name: 'SFTP',
    icon: (<svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="#a78bfa" strokeWidth="1.5"><rect x="3" y="4" width="18" height="8" rx="1"/><rect x="3" y="14" width="18" height="6" rx="1"/><circle cx="7" cy="8" r="0.8" fill="#a78bfa"/><circle cx="7" cy="17" r="0.8" fill="#a78bfa"/></svg>) },
  { name: 'FTP',
    icon: (<svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="#64748b" strokeWidth="1.5"><path d="M3 12h18M7 7l-4 5 4 5M17 7l4 5-4 5"/></svg>) },
  { name: 'MinIO',
    icon: (<svg viewBox="0 0 24 24" className="w-full h-full"><path fill="#C72E49" d="M4 4h4l4 8 4-8h4v16h-3V9l-4 8h-2l-4-8v11H4V4z"/></svg>) },
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
              <div className="w-9 h-9 opacity-70 transition-[opacity,transform] duration-200 ease-out group-hover:scale-105 group-hover:opacity-100">{p.icon}</div>
              <div className="text-xs font-medium text-white/50 transition-colors duration-200 ease-out group-hover:text-white/90">{p.name}</div>
              <div className="absolute inset-0 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 pointer-events-none"
                   style={{ background: `radial-gradient(circle at 50% 50%, ${primaryAlpha(0.07)}, transparent 70%)` }}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
