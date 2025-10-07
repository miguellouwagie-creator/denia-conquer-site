import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/gym-denia-logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6">
            <img src={logo} alt="Gym Dénia" className="h-16 w-auto mx-auto" />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-border hover:border-primary flex items-center justify-center transition-all hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--spartan-lime)/0.5)]"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-foreground hover:text-primary" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-border hover:border-primary flex items-center justify-center transition-all hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--spartan-lime)/0.5)]"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-foreground hover:text-primary" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © 2025 Gym Dénia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
