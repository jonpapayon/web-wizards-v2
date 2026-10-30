import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problema } from "@/components/Problema";
import { Sistema } from "@/components/Sistema";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <Problema />
        <Sistema />
      </main>
    </>
  );
}