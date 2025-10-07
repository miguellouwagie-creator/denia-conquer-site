import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Gallery /> {/* ← Movido aquí: Primero las fotos */}
      <About /> {/* ← Después: Explica qué ofreces */}
      <Pricing /> {/* ← Tercero: Precios con ventaja competitiva */}
      <Schedule /> {/* ← Cuarto: Información práctica */}
      <Contact /> {/* ← Final: CTA de conversión */}
      <Footer />
    </div>
  );
};

export default Index;
