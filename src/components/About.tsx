import { Dumbbell, Zap, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Dumbbell,
      title: "Musculación",
      description: "Equipamiento profesional y programas de fuerza personalizados",
    },
    {
      icon: Zap,
      title: "Funcional",
      description: "Entrenamiento dinámico para mejorar tu rendimiento atlético",
    },
    {
      icon: Target,
      title: "Coaching Personal",
      description: "Entrenadores certificados para alcanzar tus objetivos",
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section intro */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-primary">
            Entrena Como Un Espartano
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Gym Dénia combina lo mejor del entrenamiento de fuerza tradicional con técnicas
            funcionales modernas. Un espacio donde la disciplina se encuentra con la intensidad.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 group"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-display mb-4 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
