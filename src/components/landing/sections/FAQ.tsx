import React from 'react';
import { foregroundAlpha } from '../theme';
import { Pill } from '../shared/Primitives';

// ─── FAQ ─────────────────────────────────────────────────────
const FAQS = [
  { q: 'Is Drivebase really free?', a: 'Yes. The core is open source (MIT) and free to self-host forever. If you would rather not run it yourself, managed cloud instances start at $9.99/mo.' },
  { q: 'Self-hosted or cloud?', a: 'Both. Run it on your own box with Docker, or spin up a managed instance at cloud.drivebase.io and skip the ops.' },
  { q: 'Which providers are supported?', a: 'Today: Google Drive, Amazon S3 (and S3-compatible stores like Cloudflare R2), Dropbox, and your local filesystem. OneDrive, Box, and more are on the way.' },
  { q: 'Does it sync or copy files locally?', a: 'Neither by default. Drivebase talks to each provider’s API directly, so you browse and transfer in place. Batch operations move files provider-to-provider with conflict checks first.' },
  { q: 'Is my data private?', a: 'When self-hosted, everything runs on your infrastructure. Provider credentials live in your own database, secrets are auto-generated, and nothing routes through us.' },
  { q: 'How is this different from rclone?', a: 'rclone is a CLI. Drivebase is a self-hosted web app with an OS-like windowed UI, real-time transfer progress over SSE, and a typed GraphQL API — same spirit, friendlier surface.' },
];

export const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="relative py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <Pill>FAQ</Pill>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-white leading-[1.05]">
            Answers, no fluff.
          </h2>
        </div>
        <div className="space-y-2">
          {FAQS.map((f, i) => (
            <button key={i}
                    onClick={() => setOpen(open === i ? -1 : i)}
                    className="w-full text-left rounded-xl transition-all"
                    style={{
                      background: open === i ? foregroundAlpha(0.04) : foregroundAlpha(0.015),
                      border: `1px solid ${foregroundAlpha(0.06)}`,
                    }}>
              <div className="flex items-center justify-between p-5">
                <span className="text-white font-medium">{f.q}</span>
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white/50 transition-transform"
                     style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0)' }}
                     fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
              </div>
              <div className="overflow-hidden transition-all duration-300"
                   style={{ maxHeight: open === i ? 280 : 0 }}>
                <p className="px-5 pb-5 text-white/60 text-sm leading-relaxed">{f.a}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
