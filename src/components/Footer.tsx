import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 relative">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-6">
            {/* Si no carga la imagen, muestra texto como fallback */}
            <img
              src="/gym-denia-logo.png"
              alt="Gym Dénia"
              className="h-16 w-auto mx-auto"
            />
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.instagram.com/gym_denia/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-border hover:border-primary flex items-center justify-center transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-foreground hover:text-primary" />
            </a>
          </div>

          <p className="text-muted-foreground text-sm mb-4">
            © 2025 Gym Dénia. Todos los derechos reservados.
          </p>

          {/* Enlaces Legales */}
          <div className="flex justify-center gap-4 text-xs text-muted-foreground mb-8">
            <Link
              to="/aviso-legal"
              className="hover:text-primary transition-colors"
            >
              Aviso Legal
            </Link>
            <span className="text-border">|</span>
            <Link
              to="/privacidad"
              className="hover:text-primary transition-colors"
            >
              Privacidad
            </Link>
            <span className="text-border">|</span>
            <Link
              to="/cookies"
              className="hover:text-primary transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>

        <div className="absolute bottom-4 right-4">
          <a
            href="https://studiopixelens.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Diseñado por Studio Pixelens
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
