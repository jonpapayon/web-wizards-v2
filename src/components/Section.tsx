import type { ReactNode } from "react";

type SectionProps = {
  number: string;
  label: string;
  id?: string;
  children: ReactNode;
};

export function Section({ number, label, id, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-line py-16 md:py-28">
      <div className="shell">
        <div className="page-grid gap-y-8">
          <p className="col-span-4 self-start font-mono text-label uppercase text-smoke md:sticky md:top-8 md:col-span-1">
            <span className="text-bone">§{number}</span>
            <span className="ml-3 md:ml-0 md:block md:mt-2">{label}</span>
          </p>
          <div className="col-span-4 md:col-span-11">{children}</div>
        </div>
      </div>
    </section>
  );
}