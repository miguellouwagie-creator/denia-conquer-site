import { Button } from "@/components/ui/button";
import logo from "@/assets/gym-denia-logo.png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-background via-background to-secondary px-4 pt-24 pb-8"
    >
      {/* Textura de fondo más visible */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--spartan-lime))_1px,_transparent_1px)] bg-[length:30px_30px]" />

      {/* Gradiente radial para profundidad */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_hsl(var(--spartan-lime)/0.1)_0%,_transparent_50%)]" />

      <div className="container mx-auto text-center relative z-10 max-w-5xl">
        {/* Logo más pequeño */}
        <div className="mb-8 animate-scale-in">
          <img
            src={logo}
            alt="Gym Dénia"
            className="mx-auto w-32 sm:w-36 md:w-40 h-auto drop-shadow-[0_0_30px_hsl(var(--spartan-lime)/0.4)]"
          />
        </div>

        {/* Headline más grande y impactante */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display mb-8 animate-fade-in leading-tight">
          <span className="text-primary block mb-2">FORJA TU CUERPO</span>
          <span className="text-foreground block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Conquista Tus Límites
          </span>
        </h1>

        {/* Subheadline mejorado - sin "Entrenamiento de élite en Dénia" */}
        <div className="mb-10 animate-fade-in">
          <p className="text-base sm:text-lg md:text-xl text-primary font-body font-semibold">
            Sin cuotas de alta • Sin permanencia
          </p>
        </div>

        {/* Botones mejorados con dos opciones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <Button
            variant="hero"
            size="lg"
            onClick={scrollToContact}
            className="text-xl sm:text-2xl px-10 py-7 h-auto group"
          >
            Agenda tu Visita
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Badge de valor añadido - SIN "Desde 8€/día" */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm sm:text-base animate-fade-in">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-muted-foreground">Abierto 7 días</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-muted-foreground">
              Equipamiento profesional
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
