import { WHATSAPP_URL } from "@/lib/contact";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-2xl leading-none text-bone">
          Web Wizards
        </p>

        <nav
          aria-label="Pie de página"
          className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-label uppercase text-smoke"
        >
          <a href="#sistema" className="transition-colors hover:text-bone">
            Sistema
          </a>
          <a href="#metodo" className="transition-colors hover:text-bone">
            Método
          </a>
          <a href={WHATSAPP_URL} className="transition-colors hover:text-bone">
            WhatsApp
          </a>
        </nav>

        <p className="font-mono text-label uppercase text-smoke">
          © {year} · México
        </p>
      </div>
    </footer>
  );
}