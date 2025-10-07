import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Schedule = () => {
  const schedule = [
    { day: "Lunes", hours: "6:00 - 22:00" },
    { day: "Martes", hours: "6:00 - 22:00" },
    { day: "Miércoles", hours: "6:00 - 22:00" },
    { day: "Jueves", hours: "6:00 - 22:00" },
    { day: "Viernes", hours: "6:00 - 22:00" },
    { day: "Sábado", hours: "8:00 - 14:00" },
    { day: "Domingo", hours: "Cerrado" },
  ];

  return (
    <section id="horarios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-primary">Horarios</h2>
          <p className="text-lg text-muted-foreground">
            Abiertos cuando más nos necesitas. Entrena a tu ritmo.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-card border-primary/30">
          <CardHeader>
            <CardTitle className="text-center font-display text-2xl text-primary">
              Horario Semanal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <span className="font-display text-lg text-foreground">{item.day}</span>
                  <span className="font-body text-primary font-semibold">{item.hours}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Schedule;
