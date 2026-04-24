import React from 'react';
import { foregroundAlpha } from '../theme';
import { Pill } from '../shared/Primitives';

// ─── FAQ ─────────────────────────────────────────────────────
const FAQS = [
  { q: 'Is Drivebase really free?', a: 'The core app is open source (MIT) and free forever. Pro unlocks advanced features like E2E encryption and scriptable macros.' },
  { q: 'Does it sync or stream?', a: 'Streams. Drivebase speaks native protocols (S3, WebDAV, OAuth) so files render instantly without local duplication. Pin what you want offline.' },
  { q: 'Which platforms are supported?', a: 'Native binaries for macOS 12+, Windows 10+, and Linux (x86_64, arm64). All three ship from the same Rust core.' },
  { q: 'Is my data private?', a: 'Yes. Credentials live in your OS keychain. Optional E2E encryption means we never see your files. Telemetry is off by default.' },
  { q: 'Can I automate it?', a: 'Fully. TypeScript-flavored macros, shell hooks, and a CLI (drivebase mv s3://… gdrive://…). Scripts run inside the same transfer engine.' },
  { q: 'How is this different from rclone?', a: 'rclone is a CLI. Drivebase is a desktop GUI built on the same ideas — with side-by-side windows, live previews, and the rough edges sanded off.' },
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
                   style={{ maxHeight: open === i ? 200 : 0 }}>
                <p className="px-5 pb-5 text-white/60 text-sm leading-relaxed">{f.a}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
