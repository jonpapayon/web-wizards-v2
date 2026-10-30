import { Section } from "./Section";
import { Reveal } from "./Reveal";

const etapas = [
  {
    title: "Diagnóstico",
    text: "Revisamos cómo trabajas hoy y encontramos qué tareas te quitan más tiempo y cuáles se pueden resolver solas.",
  },
  {
    title: "Diseño",
    text: "Definimos el flujo completo y lo validamos contigo antes de construir nada, para que no haya sorpresas.",
  },
  {
    title: "Automatización",
    text: "Construimos, conectamos tus herramientas y lo probamos con casos reales de tu negocio.",
  },
  {
    title: "Soporte",
    text: "Nos quedamos después del arranque: ajustes, dudas y mejoras conforme tu operación cambia.",
  },
];

export function Metodo() {
  return (
    <Section number="03" label="Método" id="metodo">
      <h2 className="font-display text-headline text-bone">
        Así trabajamos, <em className="text-smoke">sin enredos</em>
      </h2>

      <Reveal className="mt-12 md:mt-20">
        <ol className="relative max-w-3xl" aria-label="Etapas del proyecto">
          {/* Línea que se dibuja hacia abajo */}
          <span
            data-grow
            aria-hidden="true"
            className="absolute left-[0.7rem] top-3 h-[calc(100%-1.5rem)] w-px origin-top bg-signal"
          />

          {etapas.map((e, i) => (
            <li
              key={e.title}
              data-fade
              data-delay={200 + i * 600}
              className="relative pb-14 pl-14 last:pb-0"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-1.5 h-[1.4rem] w-[1.4rem] border border-signal bg-signal"
              />
              <p className="font-mono text-label uppercase text-smoke">
                <span className="text-bone">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="ml-3">Etapa</span>
              </p>
              <h3 className="mt-3 font-display text-[clamp(2rem,4.5vw,4rem)] leading-[0.98] text-bone">
                {e.title}
              </h3>
              <p className="mt-4 max-w-md text-smoke">{e.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}