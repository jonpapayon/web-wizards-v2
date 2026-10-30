"use client";

import { useEffect, useRef, type ReactNode } from "react";

const BONE = "#efebe2";
const SMOKE = "#8a8a82";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Reveal({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    // Con movimiento reducido se queda el estado final, sin animar
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let observer: IntersectionObserver | null = null;
    const running: { revert: () => unknown }[] = [];

    (async () => {
      const { animate, stagger, utils } = await import("animejs");
      if (cancelled) return;

      const strikes = root.querySelectorAll<HTMLElement>("[data-strike]");
      const dims = root.querySelectorAll<HTMLElement>("[data-dim]");
      const draws = root.querySelectorAll<SVGElement>("[data-draw]");
      const fades = root.querySelectorAll<HTMLElement | SVGElement>(
        "[data-fade]"
      );

      // Estado inicial: todo apagado
      utils.set(strikes, { scaleX: 0 });
      utils.set(dims, { color: BONE });
      utils.set(draws, { strokeDashoffset: 1 });
      utils.set(fades, { opacity: 0 });

      observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting)) return;
          observer?.disconnect();

          if (strikes.length) {
            running.push(
              animate(strikes, {
                scaleX: 1,
                duration: 600,
                delay: stagger(260),
                ease: "outExpo",
              })
            );
            running.push(
              animate(dims, {
                color: SMOKE,
                duration: 500,
                delay: stagger(260, { start: 350 }),
                ease: "linear",
              })
            );
          }

          if (draws.length) {
            running.push(
              animate(draws, {
                strokeDashoffset: 0,
                duration: 1100,
                delay: stagger(120),
                ease: "inOutQuad",
              })
            );
          }

          if (fades.length) {
            running.push(
              animate(fades, {
                opacity: 1,
                duration: 500,
                delay: (el: unknown) =>
                  Number((el as HTMLElement).dataset.delay ?? 0) +
                  (draws.length ? 500 : 0),
                ease: "linear",
              })
            );
          }
        },
        { threshold: 0.25 }
      );

      observer.observe(root);
    })();

    return () => {
      cancelled = true;
      observer?.disconnect();
      running.forEach((a) => a.revert());
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}