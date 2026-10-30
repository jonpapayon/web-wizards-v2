import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Web Wizards: automatización para tu negocio",
  description:
    "Estudio de tecnología que ayuda a negocios a modernizar sus operaciones con desarrollo web, automatización, software e inteligencia artificial.",
};

export const viewport: Viewport = {
  themeColor: "#0f0f0e",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${instrument.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body>
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
