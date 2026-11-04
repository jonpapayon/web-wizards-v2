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

const title = "Web Wizards: automatización para tu negocio";
const description =
  "Estudio de tecnología que ayuda a negocios a modernizar sus operaciones con desarrollo web, automatización, software e inteligencia artificial.";

export const metadata: Metadata = {
  metadataBase: new URL("https://webwizards.site"),
  title,
  description,
  verification: {
    google: "AOXb81IO-5pSXAdAXw9wdQvvahH6U979XwAgEho5LsM",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Web Wizards",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f0f0e",
};

// Se ejecuta antes de pintar: activa el estado inicial de las animaciones.
// Si algo falla, a los 5 s se quita la clase y el contenido siempre queda visible.
const animBootstrap = `(function(){try{var d=document.documentElement;if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){d.classList.add("anim");setTimeout(function(){d.classList.remove("anim")},5000)}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${instrument.variable} ${geist.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: animBootstrap }} />
      </head>
      <body suppressHydrationWarning>
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}