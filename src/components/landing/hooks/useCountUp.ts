import { useEffect, useState } from 'react';

export function useCountUp(target: number, seen: boolean, dur = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!seen) return;

    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, target, dur]);

  return value;
}
