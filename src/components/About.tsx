import { Dumbbell, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Dumbbell,
      title: "Musculación",
      description:
        "Equipamiento profesional y programas de fuerza personalizados",
      gradient: "from-primary/20 via-primary/10 to-transparent",
      iconBg: "bg-primary/20",
      borderColor: "border-primary/40",
      glowColor: "group-hover:shadow-[0_0_40px_hsl(var(--spartan-lime)/0.3)]",
    },
    {
      icon: Zap,
      title: "Funcional",
      description:
        "Entrenamiento dinámico para mejorar tu rendimiento atlético",
      gradient: "from-yellow-500/20 via-yellow-500/10 to-transparent",
      iconBg: "bg-yellow-500/20",
      borderColor: "border-yellow-500/40",
      glowColor: "group-hover:shadow-[0_0_40px_rgba(234,179,8,0.3)]",
    },
    {
      icon: Users,
      title: "Coaching Personal",
      description: "Entrenadores certificados para alcanzar tus objetivos",
      gradient: "from-blue-500/20 via-blue-500/10 to-transparent",
      iconBg: "bg-blue-500/20",
      borderColor: "border-blue-500/40",
      glowColor: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_hsl(var(--spartan-lime)/0.05)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_hsl(var(--spartan-lime)/0.05)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header mejorado con línea decorativa */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-display text-primary mb-4 tracking-wide">
                ENTRENA COMO UN ESPARTANO
              </h2>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Gym Dénia combina lo mejor del entrenamiento de fuerza tradicional
            con técnicas funcionales modernas. Un espacio donde tu disciplina se
            encuentra con la intensidad.
          </p>
        </div>

        {/* Cards mejoradas con efectos modernos */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className={`relative group border-2 ${feature.borderColor} bg-card overflow-hidden hover:scale-105 transition-all duration-500 ${feature.glowColor}`}
              >
                {/* Gradiente de fondo animado */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <CardContent className="p-8 relative z-10 text-center">
                  {/* Icono con efecto glow y animación */}
                  <div className="mb-6 flex justify-center">
                    <div
                      className={`w-20 h-20 ${feature.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative`}
                    >
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <Icon
                        className="w-10 h-10 text-primary relative z-10"
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>

                  {/* Título con mejor tipografía */}
                  <h3 className="font-display text-2xl text-primary mb-4 tracking-wide group-hover:text-foreground transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Línea decorativa animada */}
                  <div className="mt-6 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </CardContent>

                {/* Corner accent decorativo */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            );
          })}
        </div>
        {/* CTA eliminado - ya está en Gallery */}
      </div>
    </section>
  );
};

export default About;
