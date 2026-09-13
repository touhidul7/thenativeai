import { useEffect, useRef, type ReactNode } from "react";

// Match the published motion while keeping server-rendered content visible.
export function Reveal({
  children,
  delay = 0,
  hero = false,
}: {
  children: ReactNode;
  delay?: number;
  hero?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const device = navigator as Navigator & { deviceMemory?: number };
    const lowEnd =
      device.deviceMemory !== undefined
        ? device.deviceMemory <= 2
        : navigator.hardwareConcurrency <= 4;
    if (!element || preference.matches || (!hero && lowEnd)) return;
    let animation: Animation | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        animation = element.animate(
          [
            { opacity: 0, transform: "translateY(16px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          {
            duration: hero ? 600 : 350,
            delay,
            easing: "cubic-bezier(.22,1,.36,1)",
            fill: "backwards",
          },
        );
        observer.disconnect();
      },
      { rootMargin: hero ? "0px" : "-40px" },
    );
    observer.observe(element);
    const stop = () => {
      if (preference.matches) {
        observer.disconnect();
        animation?.cancel();
      }
    };
    preference.addEventListener("change", stop);
    return () => {
      observer.disconnect();
      animation?.cancel();
      preference.removeEventListener("change", stop);
    };
  }, [delay, hero]);
  return <div ref={ref}>{children}</div>;
}

const blobs = [
  {
    className:
      "absolute left-[-4%] top-[-8%] h-[34%] w-[42%] rounded-[48%_52%_45%_55%] bg-[#0a0a0a]/22 blur-3xl",
    x: [0, 28, -14, 0],
    y: [0, 18, -22, 0],
    scale: [1, 1.06, 0.96, 1],
    rotate: [0, 8, -4, 0],
    duration: 20,
    delay: 0,
  },
  {
    className:
      "absolute right-[-10%] top-[4%] h-[36%] w-[40%] rounded-[55%_45%_58%_42%] bg-[#52525b]/28 blur-3xl",
    x: [0, -32, 18, 0],
    y: [0, -16, 26, 0],
    scale: [1, 0.94, 1.08, 1],
    rotate: [0, -10, 6, 0],
    duration: 24,
    delay: 1.1,
  },
  {
    className:
      "absolute bottom-[-6%] left-[-2%] h-[32%] w-[44%] rounded-[42%_58%_50%_50%] bg-[#71717a]/24 blur-3xl",
    x: [0, 22, -26, 0],
    y: [0, -24, 12, 0],
    scale: [1, 1.1, 0.92, 1],
    rotate: [0, 5, -9, 0],
    duration: 18,
    delay: 0.6,
  },
  {
    className:
      "absolute right-[-2%] bottom-[-4%] h-[38%] w-[40%] rounded-[60%_40%_48%_52%] bg-[#0F766E]/40 blur-3xl",
    x: [0, -20, 30, 0],
    y: [0, 20, -14, 0],
    scale: [1, 1.08, 0.95, 1],
    rotate: [0, -6, 11, 0],
    duration: 16,
    delay: 0.3,
  },
  {
    className:
      "absolute left-[28%] top-[38%] h-[28%] w-[34%] rounded-[50%_50%_40%_60%] bg-[#14B8A6]/38 blur-2xl",
    x: [0, 34, -18, 0],
    y: [0, -28, 16, 0],
    scale: [1, 0.9, 1.12, 1],
    rotate: [0, 12, -5, 0],
    duration: 14,
    delay: 1.8,
  },
  {
    className:
      "absolute right-[22%] top-[42%] h-[24%] w-[30%] rounded-[45%_55%_55%_45%] bg-[#5EEAD4]/45 blur-2xl",
    x: [0, -16, 24, 0],
    y: [0, 22, -10, 0],
    scale: [1, 1.14, 0.88, 1],
    rotate: [0, -8, 4, 0],
    duration: 12,
    delay: 2.2,
  },
];

export function HeroGraphic() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animations: Animation[] = [];
    const update = () => {
      animations.forEach((animation) => animation.cancel());
      animations = [];
      if (preference.matches || !ref.current) return;
      animations = Array.from(ref.current.children).map((element, index) => {
        const blob = blobs[index];
        return element.animate(
          blob.x.map((x, frame) => ({
            transform: `translate(${x}px, ${blob.y[frame]}px) scale(${blob.scale[frame]}) rotate(${blob.rotate[frame]}deg)`,
            easing: "ease-in-out",
          })),
          { duration: blob.duration * 1000, delay: blob.delay * 1000, iterations: Infinity },
        );
      });
    };
    update();
    preference.addEventListener("change", update);
    return () => {
      animations.forEach((animation) => animation.cancel());
      preference.removeEventListener("change", update);
    };
  }, []);
  return (
    <div
      className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[min(62%,720px)] min-w-[260px]"
      aria-hidden
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 28%, black 58%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 28%, black 58%)",
      }}
    >
      <div ref={ref} className="absolute inset-0 overflow-hidden">
        {blobs.map((blob, index) => (
          <div key={index} className={blob.className} />
        ))}
      </div>
    </div>
  );
}
