import { HeroConsole } from "./HeroConsole";

export function Hero() {
  return (
    <section className="shell pb-20 pt-10 md:pb-28 md:pt-16">
      <div className="page-grid gap-y-14">
        {/* Etiqueta */}
        <p className="col-span-4 font-mono text-label uppercase text-smoke md:col-span-12">
          <span className="text-bone">§00</span>
          <span className="ml-4">Estudio de automatización · México</span>
        </p>

        {/* Titular */}
        <h1 className="col-span-4 font-display text-display text-bone md:col-span-11">
          Tu negocio,
          <br />
          <em className="text-smoke">en piloto</em>
          <br />
          automático
        </h1>

        {/* Texto de apoyo (columna estrecha, pegada a la izquierda) */}
        <div className="col-span-4 md:col-span-4 md:self-end">
          <p className="text-lead text-bone">
            Dejas de contestar lo mismo 40 veces al día. Tus citas, mensajes y
            recordatorios se resuelven solos, y tú vuelves a tu negocio.
          </p>
          <a
            href="#sistema"
            className="mt-8 inline-flex items-center gap-3 font-mono text-label uppercase text-bone underline decoration-signal decoration-2 underline-offset-8 transition-colors hover:text-signal"
          >
            Ver cómo funciona
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        {/* Consola: desplazada a la derecha y hacia abajo */}
        <div className="col-span-4 md:col-span-7 md:col-start-6 md:mt-16">
          <HeroConsole />
        </div>
      </div>
    </section>
  );
}