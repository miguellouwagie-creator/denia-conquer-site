import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL as string | undefined;

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />
      <main className="container mx-auto px-4 py-24 md:py-32 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2 text-primary">
          Pol\u00edtica de Privacidad
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          \u00daltima actualizaci\u00f3n: marzo de 2026
        </p>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              1. Responsable del Tratamiento
            </h2>
            <ul className="list-none pl-0 space-y-1">
              <li><strong>Titular:</strong> Jose Miguel (Gym D\u00e9nia)</li>
              <li><strong>Domicilio:</strong> Av. Juan Chab\u00e1s, 5, 03700 D\u00e9nia, Alicante</li>
              <li><strong>Email:</strong>{" "}
                {contactEmail ? (
                  <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">
                    {contactEmail}
                  </a>
                ) : "gymdenia@gmail.com"}
              </li>
            </ul>
            <p className="mt-3 text-sm">
              Este sitio no est\u00e1 obligado a designar Delegado de Protecci\u00f3n de Datos
              (DPO) al no realizar tratamientos a gran escala ni datos sensibles
              (art. 37 RGPD).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              2. Datos Recogidos y Finalidad
            </h2>
            <p>
              A trav\u00e9s del formulario de contacto recogemos: <strong>nombre</strong>,{" "}
              <strong>tel\u00e9fono (opcional)</strong> y <strong>mensaje</strong>. Estos datos
              se utilizan exclusivamente para:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Responder a solicitudes de informaci\u00f3n sobre el gimnasio.</li>
              <li>Gestionar la primera visita o reservas de pr\u00f3balo gratis.</li>
            </ul>
            <p className="mt-2">
              No recogemos datos de navegaci\u00f3n propios ni utilizamos cookies de
              seguimiento propias. Para m\u00e1s informaci\u00f3n sobre cookies de terceros,
              consulta nuestra{" "}
              <a href="/cookies" className="text-primary hover:underline">Pol\u00edtica de Cookies</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              3. Base Legal
            </h2>
            <p>
              El tratamiento se basa en el <strong>consentimiento expl\u00edcito</strong> del
              usuario al marcar la casilla de aceptaci\u00f3n antes de enviar el formulario
              (art. 6.1.a RGPD).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              4. Plazo de Conservaci\u00f3n
            </h2>
            <p>
              Los datos se conservan durante el tiempo necesario para gestionar la
              consulta y, como m\u00e1ximo, durante <strong>12 meses</strong> desde el
              \u00faltimo contacto. Transcurrido ese plazo, ser\u00e1n eliminados o anonimizados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              5. Destinatarios
            </h2>
            <p>
              No cedemos datos a terceros, salvo obligaci\u00f3n legal. Al contactar
              mediante el formulario, el mensaje se redirige a{" "}
              <strong>WhatsApp (Meta Platforms Ireland Ltd.)</strong>, plataforma
              sujeta a sus propias condiciones de privacidad. Te recomendamos
              revisarlas en{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                whatsapp.com/legal/privacy-policy
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              6. Tus Derechos (RGPD)
            </h2>
            <p>Puedes ejercer en cualquier momento los siguientes derechos:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Acceso:</strong> conocer qu\u00e9 datos tenemos sobre ti.</li>
              <li><strong>Rectificaci\u00f3n:</strong> corregir datos inexactos.</li>
              <li><strong>Supresi\u00f3n (derecho al olvido):</strong> eliminar tus datos.</li>
              <li><strong>Limitaci\u00f3n:</strong> restringir su tratamiento.</li>
              <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado.</li>
              <li><strong>Oposici\u00f3n:</strong> oponerte al tratamiento.</li>
              <li><strong>Retirada del consentimiento</strong> en cualquier momento, sin
                que ello afecte a la licitud del tratamiento previo.
              </li>
            </ul>
            <p className="mt-3">
              Env\u00eda tu solicitud a:{" "}
              {contactEmail ? (
                <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">
                  {contactEmail}
                </a>
              ) : "gymdenia@gmail.com"}
              . Responderemos en un plazo m\u00e1ximo de <strong>30 d\u00edas</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              7. Reclamaci\u00f3n ante la AEPD
            </h2>
            <p>
              Si consideras que el tratamiento de tus datos no es conforme al RGPD,
              tienes derecho a presentar una reclamaci\u00f3n ante la{" "}
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Agencia Espa\u00f1ola de Protecci\u00f3n de Datos (AEPD)
              </a>.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
