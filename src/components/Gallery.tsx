import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const Gallery = () => {
  const images = [
    { src: gallery1, alt: "Área de musculación con equipamiento profesional" },
    { src: gallery2, alt: "Zona de entrenamiento funcional" },
    { src: gallery3, alt: "Área de cardio moderna" },
    { src: gallery4, alt: "Plataforma de levantamiento olímpico" },
    { src: gallery5, alt: "Sesión de coaching personal" },
    { src: gallery6, alt: "Rig funcional con anillas y barras" },
  ];

  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-primary">
            Nuestras Instalaciones
          </h2>
          <p className="text-lg text-muted-foreground">
            Equipamiento de última generación en un ambiente único
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-border hover:border-primary transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
