import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import { Gift, Sparkles } from "lucide-react";

const SLICES = [
  { label: "Quase!", color: "var(--cream)" },
  { label: "Bônus", color: "var(--rose)" },
  { label: "+1 chance", color: "var(--sand)" },
  { label: "Surpresa", color: "var(--sage)" },
  { label: "Quase!", color: "var(--cream)" },
  { label: "Presente", color: "var(--gold)" },
  { label: "Tente!", color: "var(--rose)" },
  { label: "Brinde", color: "var(--sand)" },
];

export function Roulette() {
  const [angle, setAngle] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [step, setStep] = useState<0 | 1 | 2>(0); // 0=initial, 1=spun once, 2=won
  const [message, setMessage] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  function fireConfetti() {
    const end = Date.now() + 1200;
    const colors = ["#f7a8b8", "#f5d6a8", "#b9d8b3", "#fff1dc", "#e85d75"];
    (function frame() {
      confetti({ particleCount: 5, angle: 60, spread: 70, origin: { x: 0 }, colors });
      confetti({ particleCount: 5, angle: 120, spread: 70, origin: { x: 1 }, colors });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
    confetti({ particleCount: 180, spread: 120, origin: { y: 0.6 }, colors, scalar: 1.1 });
  }

  function spin() {
    if (spinning) return;
    setMessage(null);
    setSpinning(true);
    const turns = 5;
    if (step === 0) {
      // land between slices (a "quase")
      const targetSlice = 0; // "Quase!"
      const sliceAngle = 360 / SLICES.length;
      const final = turns * 360 + (360 - targetSlice * sliceAngle - sliceAngle / 2) + 8;
      setAngle((a) => a + final - (a % 360));
      window.setTimeout(() => {
        setSpinning(false);
        setStep(1);
        setMessage("Foi quase! Você ganhou mais uma tentativa especial.");
      }, 4100);
    } else if (step === 1) {
      const targetSlice = 5; // "Presente"
      const sliceAngle = 360 / SLICES.length;
      const final = turns * 360 + (360 - targetSlice * sliceAngle - sliceAngle / 2);
      setAngle((a) => a + final);
      window.setTimeout(() => {
        setSpinning(false);
        setStep(2);
        setMessage("Parabéns! Seu Presente Especial de Boas-Vindas foi desbloqueado.");
        fireConfetti();
      }, 4100);
    }
  }

  useEffect(() => () => { /* cleanup */ }, []);

  return (
    <div className="relative mx-auto flex w-full max-w-md flex-col items-center gap-6">
      <div className="relative">
        {/* Pointer */}
        <div className="absolute left-1/2 top-[-14px] z-20 -translate-x-1/2">
          <div className="h-0 w-0 border-l-[14px] border-r-[14px] border-t-[22px] border-l-transparent border-r-transparent border-t-[color:var(--rose-deep)] drop-shadow-md" />
        </div>
        <div
          ref={ref}
          className="relative h-72 w-72 rounded-full border-8 border-white shadow-rose"
          style={{
            transform: `rotate(${angle}deg)`,
            transition: spinning ? "transform 4s cubic-bezier(.22,.61,.36,1)" : "none",
            background: `conic-gradient(${SLICES.map((s, i) => {
              const from = (i * 360) / SLICES.length;
              const to = ((i + 1) * 360) / SLICES.length;
              return `${s.color} ${from}deg ${to}deg`;
            }).join(", ")})`,
          }}
        >
          {SLICES.map((s, i) => {
            const rot = (i * 360) / SLICES.length + 360 / SLICES.length / 2;
            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 origin-left text-[11px] font-semibold uppercase tracking-wider text-[color:var(--foreground)]/70"
                style={{ transform: `rotate(${rot}deg) translate(40px, -6px)` }}
              >
                {s.label}
              </div>
            );
          })}
          <div className="absolute left-1/2 top-1/2 z-10 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-soft">
            <Gift className="h-8 w-8 text-[color:var(--rose-deep)]" />
          </div>
        </div>
      </div>

      <button
        onClick={spin}
        disabled={spinning || step === 2}
        className="group relative overflow-hidden rounded-full bg-rose-gradient px-8 py-3.5 text-sm font-semibold text-white shadow-rose transition hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-70"
      >
        <span className="relative z-10 inline-flex items-center gap-2">
          <Sparkles className="h-4 w-4" />
          {step === 0 ? "Girar a Roleta" : step === 1 ? "Girar de Novo" : "Presente Desbloqueado"}
        </span>
        <span
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full"
          style={{ transition: "transform 1.2s ease" }}
        />
      </button>

      {message && (
        <div
          className={`rounded-2xl border px-5 py-4 text-center text-sm font-medium shadow-soft ${
            step === 2
              ? "border-[color:var(--gold)] bg-white text-[color:var(--rose-deep)]"
              : "border-[color:var(--rose)] bg-white/80 text-foreground/80"
          }`}
        >
          {message}
          {step === 2 && (
            <p className="mt-1 text-xs font-normal text-muted-foreground">
              Seu presente é entregue automaticamente junto com sua compra.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
