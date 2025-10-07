import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const plans = [
    {
      name: "Básico",
      price: "35",
      period: "mes",
      description: "Perfecto para empezar tu transformación",
      features: [
        "Acceso ilimitado al gimnasio",
        "Área de musculación",
        "Área de cardio",
        "Vestuarios y duchas",
      ],
      highlighted: false,
    },
    {
      name: "Premium",
      price: "50",
      period: "mes",
      description: "Máximo rendimiento y seguimiento",
      features: [
        "Todo lo del plan Básico",
        "Clases funcionales grupales",
        "Evaluación física mensual",
        "Plan de entrenamiento personalizado",
        "Acceso a zona funcional",
      ],
      highlighted: true,
    },
    {
      name: "Anual",
      price: "450",
      period: "año",
      description: "Compromiso total, ahorro máximo",
      features: [
        "Todo lo del plan Premium",
        "2 meses gratis",
        "Sesión de coaching inicial",
        "Prioridad en reservas",
        "Invitaciones a eventos exclusivos",
      ],
      highlighted: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="precios" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-primary">Tarifas</h2>
          <p className="text-lg text-muted-foreground">
            Elige el plan que se adapta a tus objetivos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.highlighted
                  ? "border-primary border-2 bg-card shadow-[0_0_30px_hsl(var(--spartan-lime)/0.2)] scale-105"
                  : "border-border bg-card"
              } hover:scale-105 transition-all duration-300`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full font-display text-sm">
                  MÁS POPULAR
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="font-display text-3xl mb-2 text-primary">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-display text-foreground">€{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.highlighted ? "hero" : "spartan"}
                  className="w-full"
                  size="lg"
                  onClick={scrollToContact}
                >
                  Comenzar Ahora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
