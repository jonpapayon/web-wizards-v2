import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problema } from "@/components/Problema";
import { Sistema } from "@/components/Sistema";
import { Metodo } from "@/components/Metodo";
import { Cierre } from "@/components/Cierre";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <Problema />
        <Sistema />
        <Metodo />
        <Cierre />
      </main>
      <Footer />
    </>
  );
}