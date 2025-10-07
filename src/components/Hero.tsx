import { Button } from "@/components/ui/button";
import logo from "@/assets/gym-denia-logo.png";

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
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-background via-background to-secondary"
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--spartan-lime))_1px,_transparent_1px)] bg-[length:30px_30px]" />

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 animate-scale-in">
          <img
            src={logo}
            alt="Gym Dénia Logo"
            className="mx-auto h-48 w-auto drop-shadow-[0_0_40px_hsl(var(--spartan-lime)/0.5)]"
          />
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display mb-6 text-shadow-lime animate-fade-in">
          <span className="text-primary">Forja Tu Cuerpo.</span>
          <br />
          <span className="text-foreground">Conquista Tus Límites.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-body animate-fade-in">
          Entrenamiento de élite en el corazón de Dénia. Donde los guerreros se forjan.
        </p>

        {/* CTA Button */}
        <div className="animate-scale-in">
          <Button
            variant="hero"
            size="lg"
            onClick={scrollToContact}
            className="text-xl px-12 py-6 h-auto"
          >
            Prueba Gratuita
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
