import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/contact";

export function Header() {
  return (
    <header className="shell">
      <div className="flex items-center justify-between py-5">
        <Link
          href="/"
          className="font-display text-2xl leading-none text-bone"
          aria-label="Web Wizards, inicio"
        >
          Web Wizards
        </Link>

        <nav aria-label="Principal" className="flex items-center gap-6">
          <a
            href="#sistema"
            className="hidden font-mono text-label uppercase text-smoke transition-colors hover:text-bone sm:inline"
          >
            Sistema
          </a>
          <a
            href="#metodo"
            className="hidden font-mono text-label uppercase text-smoke transition-colors hover:text-bone sm:inline"
          >
            Método
          </a>
          <Link
            href="/calculadora/"
            className="hidden font-mono text-label uppercase text-smoke transition-colors hover:text-bone sm:inline"
          >
            Calculadora
          </Link>
          <a
            href={WHATSAPP_URL}
            className="border border-bone px-4 py-2.5 font-mono text-label uppercase text-bone transition-colors hover:bg-bone hover:text-ink"
          >
            Escríbenos
          </a>
        </nav>
      </div>
    </header>
  );
}