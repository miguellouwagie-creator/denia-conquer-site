import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />
      <main className="container mx-auto px-4 py-24 md:py-32 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-primary">Aviso Legal</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              1. Datos Identificativos
            </h2>
            <p>
              En cumplimiento de la Ley 34/2002 (LSSI), se facilitan los
              siguientes datos del titular de este sitio web:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Titular:</strong> Jose Miguel (Gym Dénia / Denia
                Conquer)
              </li>
              <li>
                <strong>Domicilio:</strong> Av. Juan Chabás, 5, 03700 Dénia,
                Alicante
              </li>
              <li>
                <strong>Email:</strong> gymdenia@gmail.com
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              2. Propiedad Intelectual
            </h2>
            <p>
              Todos los contenidos de este sitio web (imágenes, textos, diseño)
              son propiedad de Gym Dénia o de sus licenciantes y están
              protegidos por las leyes de propiedad intelectual.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalNotice;
