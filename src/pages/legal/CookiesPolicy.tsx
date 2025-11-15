import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />
      <main className="container mx-auto px-4 py-24 md:py-32 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-primary">
          Política de Cookies
        </h1>
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p>
            Este sitio web utiliza cookies técnicas esenciales para el
            funcionamiento del sitio.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6">
            ¿Qué son las cookies?
          </h3>
          <p>
            Son pequeños archivos de texto que se almacenan en tu navegador para
            facilitar la navegación.
          </p>
          <p>
            Al no utilizar cookies de rastreo publicitario invasivo, no es
            necesario un banner de bloqueo, pero te informamos de su uso técnico
            para tu tranquilidad.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiesPolicy;
