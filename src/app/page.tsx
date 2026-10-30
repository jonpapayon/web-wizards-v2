import { Section } from "@/components/Section";

const swatches = [
  { name: "ink", cls: "bg-ink", hex: "#0F0F0E" },
  { name: "graphite", cls: "bg-graphite", hex: "#1A1A18" },
  { name: "line", cls: "bg-line", hex: "#2E2E2A" },
  { name: "smoke", cls: "bg-smoke", hex: "#8A8A82" },
  { name: "bone", cls: "bg-bone", hex: "#EFEBE2" },
  { name: "signal", cls: "bg-signal", hex: "#2B4CFF" },
  { name: "seal", cls: "bg-seal", hex: "#E8391D" },
];

export default function Home() {
  return (
    <main id="contenido">
      <Section number="01" label="Tipografía">
        <h1 className="font-display text-display text-bone">
          Tu negocio, <em className="text-smoke">en piloto</em> automático
        </h1>
        <p className="mt-10 max-w-xl text-lead text-smoke">
          Texto de cuerpo en Geist. Debe leerse cómodo en móvil y en escritorio,
          con buen contraste y sin esfuerzo.
        </p>
        <p className="mt-8 font-mono text-label uppercase text-signal">
          Etiqueta mono · v2.0 · 20.0000° N
        </p>
      </Section>

      <Section number="02" label="Paleta">
        <div className="grid grid-cols-2 gap-px bg-line sm:grid-cols-4 lg:grid-cols-7">
          {swatches.map((s) => (
            <div key={s.name} className="bg-ink p-3">
              <div className={`${s.cls} h-24 border border-line`} />
              <p className="mt-3 font-mono text-label uppercase text-bone">
                {s.name}
              </p>
              <p className="mt-1 font-mono text-xs text-smoke">{s.hex}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section number="03" label="Rejilla">
        <div className="reg page-grid gap-y-4 py-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="col-span-1 flex h-20 items-end border border-line p-2 font-mono text-xs text-smoke"
            >
              {String(i + 1).padStart(2, "0")}
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
