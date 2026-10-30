import { WHATSAPP_URL } from "@/lib/contact";

export function Cierre() {
  return (
    <section id="contacto" className="bg-bone text-ink">
      <div className="shell py-20 md:py-32">
        <div className="page-grid gap-y-10">
          <p className="col-span-4 font-mono text-label uppercase text-ink/60 md:col-span-1">
            <span className="text-ink">§04</span>
            <span className="ml-3 md:ml-0 md:mt-2 md:block">Contacto</span>
          </p>

          <div className="col-span-4 md:col-span-11">
            <h2 className="font-display text-display text-ink">
              ¿Qué tarea quieres{" "}
              <em className="text-seal">dejar de hacer?</em>
            </h2>

            <p className="mt-10 max-w-xl text-lead text-ink">
              Cuéntanos por WhatsApp cómo trabajas hoy. Te decimos qué se puede
              automatizar y por dónde empezar.
            </p>

            <a
              href={WHATSAPP_URL}
              className="mt-10 inline-flex items-center gap-4 bg-ink px-7 py-5 font-mono text-label uppercase text-bone transition-colors hover:bg-signal"
            >
              Escribir por WhatsApp
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}