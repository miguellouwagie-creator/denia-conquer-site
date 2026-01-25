import { useState } from "react";
import { MapPin, Phone, Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!termsAccepted) {
      toast({
        title: "Atención",
        description:
          "Debes aceptar la política de privacidad para enviar el mensaje.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Crear mensaje para WhatsApp
    const whatsappMessage = `Hola, soy ${formData.name}.%0A%0A${formData.message}${formData.phone ? `%0A%0AMi teléfono: ${formData.phone}` : ""}`;
    const whatsappNumber = "34647802493";

    setTimeout(() => {
      window.open(
        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
        "_blank",
        "noopener,noreferrer",
      );

      setFormData({ name: "", phone: "", message: "" });
      setTermsAccepted(false);
      setIsSubmitting(false);

      toast({
        title: "Redirigiendo a WhatsApp",
        description: "Gracias por contactar con Gym Dénia.",
      });
    }, 1000);
  };

  return (
    <section id="contacto" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-primary">
            Contacto
          </h2>
          <p className="text-lg text-muted-foreground">
            Da el primer paso hacia tu transformación
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Mapa Corregido */}
          <div className="relative h-[400px] md:h-auto rounded-lg overflow-hidden border-2 border-primary/30">
            <iframe
              src="https://maps.google.com/maps?q=Av.+Juan+Chab%C3%A1s,+5,+03700+D%C3%A9nia&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Ubicación Gym Dénia"
            />
          </div>

          {/* Formulario */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 mb-8 bg-background/50 p-6 rounded-xl border border-primary/10"
            >
              <div>
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="mt-2"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <Label htmlFor="phone">Teléfono (opcional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="mt-2"
                  placeholder="+34 600 000 000"
                />
              </div>

              <div>
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="mt-2 resize-none"
                  placeholder="Cuéntanos tus objetivos..."
                />
              </div>

              {/* CHECKBOX LEGAL */}
              <div className="flex items-start space-x-3 p-3 rounded-lg border border-border bg-background/50">
                <Checkbox
                  id="terms"
                  checked={termsAccepted}
                  onCheckedChange={(checked) =>
                    setTermsAccepted(checked as boolean)
                  }
                  className="mt-1"
                />
                <Label
                  htmlFor="terms"
                  className="text-sm font-normal text-muted-foreground leading-snug cursor-pointer"
                >
                  He leído y acepto la{" "}
                  <Link
                    to="/privacidad"
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    política de privacidad
                  </Link>
                  . Entiendo que mis datos se usarán para responder a mi
                  consulta.
                </Label>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Enviar Mensaje"
                )}
              </Button>
            </form>

            <div className="space-y-4 pt-8 border-t border-border">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Av. Juan Chabás, 5, 03700 Dénia</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+34647802493" className="hover:text-primary">
                  +34 647 80 24 93
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:gymdenia@gmail.com"
                  className="hover:text-primary"
                >
                  gymdenia@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
