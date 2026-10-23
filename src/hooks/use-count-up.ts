import { useEffect, useRef, useState } from 'react';
import { useInView } from '../lib/motion';

export function useCountUp(target: number, duration = 1500) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [value, setValue] = useState(0);
  const isFloat = !Number.isInteger(target);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;

    function step(ts: number) {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    }

    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return { ref, value: isFloat ? value.toFixed(1) : Math.round(value).toString() };
}
