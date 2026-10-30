const steps = [
  { id: "recibido", n: "01", label: "Recibido", active: true },
  { id: "agenda", n: "02", label: "Consultar agenda", active: true },
  { id: "responder", n: "03", label: "Responder", active: true },
  { id: "confirmar", n: "04", label: "Confirmar cita", active: true },
];

const scenarios = ["Agendar citas", "Responder dudas", "Recordatorios"];

export function HeroConsole() {
  return (
    <figure
      className="reg border border-line bg-graphite"
      aria-label="Demostración: un mensaje de WhatsApp se convierte en una cita confirmada sin intervención humana"
      data-console
    >
      {/* Barra superior */}
      <div className="flex items-center justify-between border-b border-line px-4 py-3 font-mono text-label uppercase">
        <span className="text-smoke">agendar-citas.flow</span>
        <span className="flex items-center gap-2 text-signal">
          <span className="h-1.5 w-1.5 bg-signal" aria-hidden="true" />
          Activo
        </span>
      </div>

      <div className="grid lg:grid-cols-[1.15fr_1fr]">
        {/* Conversación */}
        <div className="space-y-3 p-4 sm:p-6" data-chat>
          <p className="font-mono text-label uppercase text-smoke">
            WhatsApp · 20:47
          </p>

          <div className="max-w-[85%] border border-line px-4 py-3 text-[0.95rem] text-bone">
            Hola, ¿tienen cita el jueves?
          </div>

          <div className="ml-auto max-w-[85%] bg-bone px-4 py-3 text-[0.95rem] text-ink">
            ¡Hola! Para el jueves tengo 10:00, 12:30 y 17:00. ¿Cuál te acomoda?
          </div>

          <div className="max-w-[85%] border border-line px-4 py-3 text-[0.95rem] text-bone">
            A las 12:30
          </div>

          <div className="ml-auto max-w-[85%] bg-bone px-4 py-3 text-[0.95rem] text-ink">
            Listo, quedó agendada tu cita el jueves a las 12:30.
          </div>

          <div className="pt-2">
            <span
              className="inline-block -rotate-3 border-2 border-seal px-3 py-1.5 font-mono text-label uppercase text-seal"
              data-seal
            >
              Confirmada
            </span>
          </div>
        </div>

        {/* Flujo */}
        <ol
          className="border-t border-line p-4 sm:p-6 lg:border-l lg:border-t-0"
          aria-label="Pasos del flujo automático"
        >
          {steps.map((s, i) => (
            <li key={s.id} className="relative flex gap-4 pb-8 last:pb-0">
              {i < steps.length - 1 && (
                <span
                  className="absolute left-[0.6rem] top-6 h-[calc(100%-0.5rem)] w-px bg-signal"
                  aria-hidden="true"
                  data-line={s.id}
                />
              )}
              <span
                className={`relative z-10 mt-1 h-[1.25rem] w-[1.25rem] shrink-0 border ${
                  s.active ? "border-signal bg-signal" : "border-line bg-graphite"
                }`}
                aria-hidden="true"
                data-node={s.id}
              />
              <div>
                <p className="font-mono text-label uppercase text-smoke">
                  {s.n}
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

      {/* Escenarios (aún sin lógica) */}
      <div
        className="flex flex-wrap gap-2 border-t border-line p-4"
        role="group"
        aria-label="Elige un escenario"
      >
        {scenarios.map((label, i) => (
          <button
            key={label}
            type="button"
            aria-pressed={i === 0}
            className={`border px-3 py-2 font-mono text-label uppercase transition-colors ${
              i === 0
                ? "border-signal text-signal"
                : "border-line text-smoke hover:border-smoke hover:text-bone"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </figure>
  );
}