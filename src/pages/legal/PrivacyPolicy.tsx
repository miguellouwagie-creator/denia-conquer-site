import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />
      <main className="container mx-auto px-4 py-24 md:py-32 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-primary">
          Política de Privacidad
        </h1>
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              1. Responsable del Tratamiento
            </h2>
            <p>
              Los datos personales serán tratados por Jose Miguel (Gym Dénia)
              para gestionar las consultas realizadas a través de la web.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              2. Finalidad
            </h2>
            <p>Recogemos tu nombre, teléfono y email exclusivamente para:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Responder a solicitudes de información sobre el gimnasio.</li>
              <li>Gestionar la primera visita o reservas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              3. Legitimación y Destinatarios
            </h2>
            <p>
              La base legal es tu consentimiento al marcar la casilla en el
              formulario. No cedemos datos a terceros salvo obligación legal. Al
              contactar vía WhatsApp, aceptas las condiciones de privacidad de
              dicha plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              4. Derechos
            </h2>
            <p>
              Puedes ejercer tus derechos de acceso, rectificación y supresión
              escribiendo a: gymdenia@gmail.com
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
