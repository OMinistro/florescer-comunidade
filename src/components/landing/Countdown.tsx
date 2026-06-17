import { useEffect, useState } from "react";

function pad(n: number) { return n.toString().padStart(2, "0"); }

export function Countdown() {
  const [target] = useState(() => {
    if (typeof window === "undefined") return Date.now() + 1000 * 60 * 60 * 24;
    const stored = window.localStorage.getItem("promo-end");
    if (stored) {
      const t = parseInt(stored, 10);
      if (!Number.isNaN(t) && t > Date.now()) return t;
    }
    const t = Date.now() + 1000 * 60 * 60 * 23 + 1000 * 60 * 47;
    window.localStorage.setItem("promo-end", t.toString());
    return t;
  });
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const h = Math.floor(diff / 3.6e6);
  const m = Math.floor((diff % 3.6e6) / 6e4);
  const s = Math.floor((diff % 6e4) / 1000);

  return (
    <div className="flex items-center justify-center gap-1.5 font-medium tracking-wide">
      <span className="rounded-md bg-white/20 px-2 py-1 tabular-nums">{pad(h)}h</span>
      <span className="rounded-md bg-white/20 px-2 py-1 tabular-nums">{pad(m)}m</span>
      <span className="rounded-md bg-white/20 px-2 py-1 tabular-nums">{pad(s)}s</span>
    </div>
  );
}
