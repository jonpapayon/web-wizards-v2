"use client";

import { useEffect, useRef, useState } from "react";
import { scenarios } from "./heroScenarios";

const COLOR_GRAPHITE = "#1a1a18";
const COLOR_LINE = "#2e2e2a";
const COLOR_SIGNAL = "#2b4cff";

export function HeroConsole() {
  const [index, setIndex] = useState(0);
  const [runKey, setRunKey] = useState(0);
  const rootRef = useRef<HTMLElement>(null);
  const scenario = scenarios[index];

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Con movimiento reducido se queda el estado final, sin animar
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let timeline: { revert: () => unknown } | null = null;

    (async () => {
      const { createTimeline, utils } = await import("animejs");
      if (cancelled) return;

      const msgs = root.querySelectorAll<HTMLElement>("[data-msg]");
      const nodes = root.querySelectorAll<HTMLElement>("[data-node]");
      const lines = root.querySelectorAll<HTMLElement>("[data-line]");
      const labels = root.querySelectorAll<HTMLElement>("[data-label]");
      const seal = root.querySelector<HTMLElement>("[data-seal]");

      // Estado inicial: todo apagado
      utils.set(msgs, { opacity: 0, translateY: 12 });
      utils.set(nodes, {
        backgroundColor: COLOR_GRAPHITE,
        borderColor: COLOR_LINE,
      });
      utils.set(lines, { scaleY: 0 });
      utils.set(labels, { opacity: 0.35 });
      if (seal) utils.set(seal, { opacity: 0, scale: 1.8 });

      const tl = createTimeline({ defaults: { ease: "outQuad" } });

      // Mensajes
      scenario.messages.forEach((m, i) => {
        const el = msgs[i];
        if (!el) return;
        tl.add(el, { opacity: 1, translateY: 0, duration: 450 }, m.at);
      });

      // Pasos del flujo: la línea se dibuja y luego se enciende el nodo
      scenario.steps.forEach((s, i) => {
        if (i > 0 && lines[i - 1]) {
          tl.add(
            lines[i - 1],
            { scaleY: 1, duration: 350, ease: "inOutQuad" },
            Math.max(s.at - 350, 0)
          );
        }
        if (nodes[i]) {
          tl.add(
            nodes[i],
            {
              backgroundColor: COLOR_SIGNAL,
              borderColor: COLOR_SIGNAL,
              duration: 250,
            },
            s.at
          );
        }
        if (labels[i]) {
          tl.add(labels[i], { opacity: 1, duration: 250 }, s.at);
        }
      });

      // Sello final
      if (seal) {
        tl.add(
          seal,
          { opacity: 1, scale: 1, duration: 350, ease: "outBack" },
          scenario.sealAt
        );
      }

      timeline = tl;
    })();

    return () => {
      cancelled = true;
      timeline?.revert(); // vuelve al estado final del HTML
    };
  }, [index, runKey, scenario]);

  return (
    <figure
      ref={rootRef}
      className="reg border border-line bg-graphite"
      aria-label="Demostración: un mensaje de WhatsApp se resuelve de forma automática, sin intervención humana"
    >
      {/* Barra superior */}
      <div className="flex items-center justify-between border-b border-line px-4 py-3 font-mono text-label uppercase">
        <span className="text-smoke">{scenario.file}</span>
        <span className="flex items-center gap-2 text-signal">
          <span className="h-1.5 w-1.5 bg-signal" aria-hidden="true" />
          Activo
        </span>
      </div>

      <div className="grid lg:grid-cols-[1.15fr_1fr]">
        {/* Conversación */}
        <div className="space-y-3 p-4 sm:p-6">
          <p className="font-mono text-label uppercase text-smoke">
            WhatsApp · {scenario.time}
          </p>

          {scenario.messages.map((m, i) => (
            <div
              key={`${scenario.id}-${i}`}
              data-msg
              className={
                m.from === "client"
                  ? "max-w-[85%] border border-line px-4 py-3 text-[0.95rem] text-bone"
                  : "ml-auto max-w-[85%] bg-bone px-4 py-3 text-[0.95rem] text-ink"
              }
            >
              {m.text}
            </div>
          ))}

          <div className="pt-2">
            <span
              data-seal
              className="inline-block -rotate-3 border-2 border-seal px-3 py-1.5 font-mono text-label uppercase text-seal"
            >
              {scenario.seal}
            </span>
          </div>
        </div>

        {/* Flujo */}
        <ol
          className="border-t border-line p-4 sm:p-6 lg:border-l lg:border-t-0"
          aria-label="Pasos del flujo automático"
        >
          {scenario.steps.map((s, i) => (
            <li
              key={`${scenario.id}-step-${i}`}
              className="relative flex gap-4 pb-8 last:pb-0"
            >
              {i < scenario.steps.length - 1 && (
                <span
                  data-line
                  aria-hidden="true"
                  className="absolute left-[0.6rem] top-6 h-[calc(100%-0.5rem)] w-px origin-top bg-signal"
                />
              )}
              <span
                data-node
                aria-hidden="true"
                className="relative z-10 mt-1 h-[1.25rem] w-[1.25rem] shrink-0 border border-signal bg-signal"
              />
              <div data-label>
                <p className="font-mono text-label uppercase text-smoke">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-1.5 font-mono text-sm uppercase tracking-[0.12em] text-bone">
                  {s.label}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Pie */}
      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-4 py-3 font-mono text-label uppercase">
        <span className="text-smoke">Tiempo del dueño</span>
        <span className="text-bone">0 minutos</span>
      </figcaption>

      {/* Escenarios + repetir */}
      <div className="flex flex-wrap items-center gap-2 border-t border-line p-4">
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Elige un escenario"
        >
          {scenarios.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-pressed={i === index}
              onClick={() => setIndex(i)}
              className={`border px-3 py-2 font-mono text-label uppercase transition-colors ${
                i === index
                  ? "border-signal text-signal"
                  : "border-line text-smoke hover:border-smoke hover:text-bone"
              }`}
            >
              {s.chip}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setRunKey((k) => k + 1)}
          className="ml-auto border border-line px-3 py-2 font-mono text-label uppercase text-smoke transition-colors hover:border-smoke hover:text-bone"
        >
          ↻ Repetir
        </button>
      </div>
    </figure>
  );
}