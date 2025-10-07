import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Pricing = () => {
  const plans = [
    {
      name: "Por Día",
      price: "8",
      period: "día",
      description: "Perfecto para probar o entrenar ocasionalmente",
      highlighted: false,
    },
    {
      name: "Semanal",
      price: "17",
      period: "semana",
      description: "Ideal para estancias cortas o turistas",
      highlighted: false,
    },
    {
      name: "Fin de Semana",
      price: "20",
      period: "mes",
      description: "Solo sábados y domingos",
      highlighted: false,
    },
    {
      name: "Mensual",
      price: "30",
      period: "mes",
      description: "Acceso ilimitado sin permanencia",
      highlighted: true,
    },
    {
      name: "Trimestral",
      price: "81",
      period: "trimestre",
      description: "27€/mes • Ahorra 9€ al trimestre",
      highlighted: false,
      badge: "Ahorra 9€",
    },
  ];

  const specialPlans = [
    {
      name: "Menores de 18 años",
      price: "27",
      period: "mes",
      icon: "🎓",
      description: "Tarifa especial estudiantes",
    },
    {
      name: "Pack Familia",
      price: "27",
      period: "mes/persona",
      icon: "👨‍👩‍👧‍👦",
      description: "Precio por persona en familia",
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
        {/* MEGA DESTACADO USP */}
        <div className="text-center mb-16">
          {/* Banner súper destacado con animaciones */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-primary blur-lg opacity-60 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-primary via-primary to-primary p-6 rounded-2xl border-4 border-primary shadow-[0_0_50px_hsl(var(--spartan-lime)/0.8)] transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center gap-4">
                <X className="w-8 h-8 text-primary-foreground animate-bounce" />
                <span className="font-display text-2xl md:text-4xl font-black text-primary-foreground tracking-wider">
                  SIN CUOTA DE ALTA
                </span>
              </div>
              <div className="flex items-center justify-center gap-4 mt-2">
                <X
                  className="w-8 h-8 text-primary-foreground animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                />
                <span className="font-display text-2xl md:text-4xl font-black text-primary-foreground tracking-wider">
                  SIN PERMANENCIA
                </span>
              </div>
            </div>
          </div>

          {/* Beneficios adicionales */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-primary/10 border-2 border-primary/50 rounded-xl p-4">
              <Check className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="font-display text-lg text-primary">
                MÁXIMA FLEXIBILIDAD
              </p>
              <p className="text-sm text-muted-foreground">
                Entrena cuando quieras
              </p>
            </div>
            <div className="bg-primary/10 border-2 border-primary/50 rounded-xl p-4">
              <Check className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="font-display text-lg text-primary">
                CERO COMPROMISOS
              </p>
              <p className="text-sm text-muted-foreground">
                Sin ataduras ni letras pequeñas
              </p>
            </div>
            <div className="bg-primary/10 border-2 border-primary/50 rounded-xl p-4">
              <Check className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="font-display text-lg text-primary">TÚ ELIGES</p>
              <p className="text-sm text-muted-foreground">
                Cuándo empezar y cuándo parar
              </p>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-display mb-6 text-foreground">
            Tarifas
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            La libertad de entrenar sin compromisos. Elige lo que mejor se
            adapte a tu estilo de vida.
          </p>
        </div>

        {/* Main Pricing Cards - Títulos en verde con mejor espaciado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col ${
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
              {plan.badge && (
                <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full font-display text-xs">
                  {plan.badge}
                </div>
              )}
              <CardHeader className="text-center pb-6">
                {/* Título en verde con mejor espaciado y peso de fuente */}
                <CardTitle className="font-display text-2xl mb-4 text-primary tracking-wide font-semibold leading-relaxed">
                  {plan.name}
                </CardTitle>
                <div className="mt-4 mb-4">
                  {/* Precio con acento verde más visible */}
                  <div className="inline-block bg-primary/10 px-4 py-2 rounded-lg border border-primary/30">
                    <span className="text-5xl font-display text-foreground font-black">
                      {plan.price}
                    </span>
                    <span className="text-primary font-bold text-xl">€</span>
                    <span className="text-muted-foreground text-base">
                      /{plan.period}
                    </span>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground text-sm min-h-[40px]">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex items-end">
                <Button
                  variant={plan.highlighted ? "hero" : "spartan"}
                  className="w-full"
                  onClick={scrollToContact}
                >
                  Comenzar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Plans Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-3xl font-display text-center mb-8 text-foreground drop-shadow-[0_0_10px_hsl(var(--spartan-lime)/0.3)]">
            Tarifas Especiales
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {specialPlans.map((plan, index) => (
              <Card
                key={index}
                className="border-2 border-primary/30 bg-card hover:border-primary transition-all"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{plan.icon}</div>
                    <div>
                      <h4 className="font-display text-xl text-primary tracking-wide font-semibold leading-relaxed">
                        {plan.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {plan.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="inline-block bg-primary/10 px-4 py-2 rounded-lg border border-primary/30">
                      <span className="text-4xl font-display text-foreground font-black">
                        {plan.price}
                      </span>
                      <span className="text-primary font-bold text-lg">€</span>
                      <span className="text-muted-foreground text-sm">
                        /{plan.period}
                      </span>
                    </div>
                    <Button
                      variant={plan.highlighted ? "hero" : "spartan"}
                      className="w-full"
                      onClick={scrollToContact}
                    >
                      Consultar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            * En caso de continuidad, la cuota por mes o trimestre se adaptarán
            para ser pagadas a principio de mes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
