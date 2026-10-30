import { Section } from "./Section";
import { Reveal } from "./Reveal";

const tareas = [
  "Contestar lo mismo.",
  "Agendar por WhatsApp.",
  "Mandar recordatorios.",
  "Dar seguimiento.",
  "Cobrar y confirmar.",
];

export function Problema() {
  return (
    <Section number="01" label="Problema">
      <h2 className="font-display text-headline text-bone">
        Lo que hoy haces <em className="text-smoke">a mano</em>
      </h2>

      <Reveal className="mt-12 md:mt-20">
        <ul
          aria-label="Tareas manuales que se pueden automatizar"
          className="space-y-3 md:space-y-4"
        >
          {tareas.map((t) => (
            <li key={t}>
              <span className="relative inline-block">
                <span
                  data-dim
                  className="font-display text-[clamp(2rem,6vw,5.5rem)] leading-[1.05] text-smoke"
                >
                  {t}
                </span>
                <span
                  data-strike
                  aria-hidden="true"
                  className="absolute left-0 top-[56%] h-[3px] w-full origin-left bg-seal"
                />
              </span>
            </li>
          ))}
        </ul>

        <p
          data-fade
          data-delay="1900"
          className="mt-12 max-w-xl text-lead text-bone md:mt-16"
        >
          Todo esto se puede resolver solo. Empezamos por lo que más tiempo te
          quita.
        </p>
      </Reveal>
    </Section>
  );
}