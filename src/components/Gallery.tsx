import photo1 from "@/assets/3.1.png";
import photo2 from "@/assets/3.2.png";
import photo3 from "@/assets/3.3.png";
import photo4 from "@/assets/3.4.png";
import photo5 from "@/assets/3.5.png";
import photo6 from "@/assets/3.6.png";
import photo7 from "@/assets/3.7.png";
import photo8 from "@/assets/3.8.png";
import photo9 from "@/assets/3.9.png";
import { Eye } from "lucide-react";

const Gallery = () => {
  const images = [
    { src: photo1, alt: "Instalaciones Gym Dénia" },
    { src: photo2, alt: "Equipamiento profesional Gym Dénia" },
    { src: photo3, alt: "Zona de entrenamiento Gym Dénia" },
    { src: photo4, alt: "Área funcional Gym Dénia" },
    { src: photo5, alt: "Espacio de entrenamiento Gym Dénia" },
    { src: photo6, alt: "Instalaciones completas Gym Dénia" },
    { src: photo7, alt: "Zona de musculación Gym Dénia" },
    { src: photo8, alt: "Área de entrenamiento funcional Gym Dénia" },
    { src: photo9, alt: "Vista general instalaciones Gym Dénia" },
  ];

  return (
    <section
      id="galeria"
      className="py-24 bg-secondary relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(45deg,_hsl(var(--spartan-lime))_25%,_transparent_25%,_transparent_75%,_hsl(var(--spartan-lime))_75%)] bg-[length:60px_60px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-4 text-primary tracking-wide">
            Nuestras Instalaciones
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Equipamiento de última generación en un ambiente único diseñado para
            tu máximo rendimiento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border-2 border-border hover:border-primary transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_60px_-15px_hsl(var(--spartan-lime)/0.4)] cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              {/* Overlay gradiente oscuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              {/* Overlay primario */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500" />
              {/* Icono "ver" animado */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500">
                <Eye className="w-5 h-5 text-primary-foreground" />
              </div>
              {/* Bordes decorativos */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-10 border-2 border-primary/30 overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--spartan-lime))_2px,_transparent_2px)] bg-[length:30px_30px]" />
          <div className="relative z-10 text-center">
            <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4 tracking-wide">
              ¿Te gusta lo que ves?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ven a probarlo en persona. La primera visita es gratis y sin
              compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-display text-lg rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--spartan-lime)/0.5)]"
              >
                Agenda tu Primera Visita
              </a>
              <a
                href="#precios"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary text-primary font-display text-lg rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              >
                Ver Tarifas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
