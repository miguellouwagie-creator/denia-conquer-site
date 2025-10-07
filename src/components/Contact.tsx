import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  // Función para sanitizar input
  const sanitizeInput = (input: string): string => {
    return input
      .replace(/[<>]/g, "") // Eliminar < y >
      .replace(/javascript:/gi, "") // Eliminar javascript:
      .replace(/on\w+=/gi, "") // Eliminar event handlers
      .trim()
      .slice(0, 500); // Limitar longitud
  };

  // Validar teléfono
  const validatePhone = (phone: string): boolean => {
    if (!phone) return true; // Opcional
    const phoneRegex = /^[\d\s\+\-\(\)]{6,20}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Sanitizar todos los inputs
    const sanitizedName = sanitizeInput(formData.name);
    const sanitizedPhone = sanitizeInput(formData.phone);
    const sanitizedMessage = sanitizeInput(formData.message);

    // Validar teléfono
    if (formData.phone && !validatePhone(sanitizedPhone)) {
      alert("Por favor, introduce un número de teléfono válido");
      return;
    }

    // Validar longitud mínima
    if (sanitizedName.length < 2) {
      alert("El nombre debe tener al menos 2 caracteres");
      return;
    }

    if (sanitizedMessage.length < 10) {
      alert("El mensaje debe tener al menos 10 caracteres");
      return;
    }

    // Crear mensaje de WhatsApp con datos sanitizados
    const whatsappMessage = `Hola, me llamo ${encodeURIComponent(sanitizedName)}.%0A%0A${encodeURIComponent(sanitizedMessage)}${sanitizedPhone ? `%0A%0AMi teléfono: ${encodeURIComponent(sanitizedPhone)}` : ""}`;

    const whatsappNumber = "34647802493";

    // Abrir WhatsApp con seguridad
    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank",
      "noopener,noreferrer",
    );

    // Limpiar formulario
    setFormData({ name: "", phone: "", message: "" });
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
          <div className="relative h-[400px] md:h-auto rounded-lg overflow-hidden border-2 border-primary/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.1892764392!2d0.10183897659914373!3d38.83984795359814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5fbdd8f8d8b8d1%3A0x8d8b8d8b8d8b8d8b!2sAv.%20Juan%20Chab%C3%A1s%2C%205%2C%2003700%20D%C3%A9nia%2C%20Alicante!5e0!3m2!1ses!2ses!4v1696684800000!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Gym Dénia"
            />
          </div>

          <div>
            <div className="mb-6 text-center p-3 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-sm text-muted-foreground">
                📱{" "}
                <span className="text-primary font-semibold">
                  Atención personalizada
                </span>{" "}
                · Contáctanos para coordinar tu primera visita
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 mb-8">
              <div>
                <Label htmlFor="name" className="text-foreground">
                  Nombre
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  maxLength={100}
                  minLength={2}
                  className="mt-2 bg-background border-border focus:border-primary"
                  placeholder="Tu nombre"
                  autoComplete="name"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-foreground">
                  Teléfono (opcional)
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  maxLength={20}
                  className="mt-2 bg-background border-border focus:border-primary"
                  placeholder="+34 600 000 000"
                  autoComplete="tel"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground">
                  Mensaje
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  maxLength={500}
                  minLength={10}
                  className="mt-2 bg-background border-border focus:border-primary resize-none"
                  placeholder="Cuéntanos qué te interesa..."
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Enviar por WhatsApp
              </Button>
            </form>

            <div className="space-y-4 pt-8 border-t border-border">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-display text-primary">Dirección</p>
                  <p className="text-muted-foreground">Av. Juan Chabás, 5</p>
                  <p className="text-muted-foreground">03700 Dénia, Alicante</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-display text-primary">
                    Teléfono / WhatsApp
                  </p>
                  <a
                    href="https://wa.me/34647802493"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +34 647 80 24 93
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-display text-primary">Email</p>
                  <a
                    href="mailto:gymdenia@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    gymdenia@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
