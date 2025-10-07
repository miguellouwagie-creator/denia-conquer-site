import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar } from "lucide-react";

const Schedule = () => {
  const schedule = [{ day: "Lunes a Domingo", hours: "7:00 - 22:00" }];

  return (
    <section
      id="horarios"
      className="py-24 bg-secondary relative overflow-hidden"
    >
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_hsl(var(--spartan-lime))_1px,_transparent_1px)] bg-[length:40px_40px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Icono decorativo arriba del título */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 mb-6 animate-pulse">
            <Clock className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-4xl md:text-5xl font-display mb-4 text-primary tracking-wide">
            Horarios
          </h2>
          <p className="text-lg text-muted-foreground">
            Abiertos cuando más nos necesitas. Entrena a tu ritmo.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-card border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-[0_20px_50px_-15px_hsl(var(--spartan-lime)/0.2)]">
          <CardHeader className="relative">
            {/* Elemento decorativo superior */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

            <CardTitle className="text-center font-display text-2xl text-primary tracking-wide pt-2">
              Horario Semanal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="group relative flex justify-between items-center p-6 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-lg border-2 border-primary/30 hover:border-primary hover:from-primary/10 hover:to-primary/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                >
                  {/* Icono calendario */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    {/* Texto mejorado con mayor tamaño y espaciado */}
                    <span className="font-display text-xl md:text-2xl text-foreground tracking-wide leading-relaxed">
                      {item.day}
                    </span>
                  </div>

                  {/* Horario con estilo mejorado */}
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary/70" />
                    <span className="font-display text-xl text-primary font-semibold tracking-wider">
                      {item.hours}
                    </span>
                  </div>

                  {/* Línea decorativa animada */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              ))}
            </div>

            {/* Nota informativa con estilo */}
            <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                💪{" "}
                <span className="text-primary font-semibold">
                  15 horas al día
                </span>{" "}
                para que alcances tus objetivos
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Info adicional decorativa */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            ¿Necesitas más información?{" "}
            <a
              href="#contacto"
              className="text-primary hover:underline font-semibold"
            >
              Contáctanos
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
