import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

// ---------------------------------------------------------------------------
// Validation schema
// ---------------------------------------------------------------------------
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres.")
    .max(60, "El nombre no puede superar 60 caracteres.")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "El nombre solo puede contener letras."),
  phone: z
    .string()
    .regex(/^[\d\s+\-().]{0,20}$/, "Formato de teléfono no válido.")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres.")
    .max(500, "El mensaje no puede superar 500 caracteres."),
});

type ContactFields = z.infer<typeof contactSchema>;
type FieldErrors = Partial<Record<keyof ContactFields, string>>;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFields>({
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Read number from env — falls back to empty string so the button is
  // disabled at runtime if the variable is missing, rather than crashing.
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!termsAccepted) {
      toast({
        title: "Atención",
        description: "Debes aceptar la política de privacidad para enviar el mensaje.",
        variant: "destructive",
      });
      return;
    }

    // Validate with zod
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFields;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    if (!whatsappNumber) {
      toast({
        title: "Error de configuración",
        description: "El número de contacto no está configurado. Por favor, llámanos directamente.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const { name, message, phone } = result.data;
    const encodedMessage = encodeURIComponent(
      `Hola, soy ${name}.\n\n${message}${phone ? `\n\nMi teléfono: ${phone}` : ""}`,
    );

    setTimeout(() => {
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
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
          {/* Mapa */}
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
              noValidate
            >
              {/* Nombre */}
              <div>
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  required
                  className={`mt-2 ${errors.name ? "border-destructive" : ""}`}
                  placeholder="Tu nombre"
                  maxLength={60}
                />
                {errors.name && (
                  <p className="text-destructive text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Teléfono */}
              <div>
                <Label htmlFor="phone">Teléfono (opcional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: undefined });
                  }}
                  className={`mt-2 ${errors.phone ? "border-destructive" : ""}`}
                  placeholder="+34 600 000 000"
                  maxLength={20}
                />
                {errors.phone && (
                  <p className="text-destructive text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Mensaje */}
              <div>
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  required
                  rows={4}
                  className={`mt-2 resize-none ${errors.message ? "border-destructive" : ""}`}
                  placeholder="Cuéntanos tus objetivos..."
                  maxLength={500}
                />
                <div className="flex justify-between items-center mt-1">
                  {errors.message ? (
                    <p className="text-destructive text-xs">{errors.message}</p>
                  ) : (
                    <span />
                  )}
                  <span className="text-xs text-muted-foreground">
                    {formData.message.length}/500
                  </span>
                </div>
              </div>

              {/* Checkbox legal */}
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
                disabled={isSubmitting || !whatsappNumber}
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
