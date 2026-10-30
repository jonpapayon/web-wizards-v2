import { Section } from "./Section";
import { Reveal } from "./Reveal";
import {
  DiagramWeb,
  DiagramAutomation,
  DiagramSoftware,
  DiagramAI,
} from "./Diagrams";

const items = [
  {
    n: "01",
    tag: "Sitio web",
    title: "Una página que trabaja mientras tú no.",
    text: "Sitios rápidos, claros en el celular y pensados para que el cliente te escriba o agende, no solo para verse bien.",
    Diagram: DiagramWeb,
  },
  {
    n: "02",
    tag: "Automatización",
    title: "Los procesos repetitivos, resueltos solos.",
    text: "WhatsApp, citas, recordatorios y seguimiento conectados para que nadie tenga que acordarse de nada.",
    Diagram: DiagramAutomation,
  },
  {
    n: "03",
    tag: "Software a la medida",
    title: "Herramientas hechas para tu operación.",
    text: "Paneles, control de pedidos o inventario cuando una hoja de cálculo ya no alcanza.",
    Diagram: DiagramSoftware,
  },
  {
    n: "04",
    tag: "Inteligencia artificial",
    title: "Asistentes que entienden a tus clientes.",
    text: "Respuestas y clasificación de mensajes con IA, siempre con una persona al mando de lo importante.",
    Diagram: DiagramAI,
  },
];

export function Sistema() {
  return (
    <Section number="02" label="Sistema" id="sistema">
      <h2 className="font-display text-headline text-bone">
        Cuatro piezas, <em className="text-smoke">un solo sistema</em>
      </h2>

      <div className="mt-12 md:mt-20">
        {items.map(({ n, tag, title, text, Diagram }) => (
          <Reveal key={n}>
            <article className="page-grid gap-y-8 border-t border-line py-10 md:py-14">
              <div className="col-span-4 md:col-span-7">
                <p className="font-mono text-label uppercase text-smoke">
                  <span className="text-bone">{n}</span>
                  <span className="ml-3">{tag}</span>
                </p>
                <h3 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4.5vw,4rem)] leading-[0.98] text-bone">
                  {title}
                </h3>
                <p className="mt-6 max-w-md text-smoke">{text}</p>
              </div>

              <div className="col-span-4 md:col-span-5 md:self-center">
                <div className="reg border border-line p-4">
                  <Diagram />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}