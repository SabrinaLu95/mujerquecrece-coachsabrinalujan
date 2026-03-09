import { Instagram, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-lg font-semibold text-foreground">
              Sabrina Luján
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Coach Ontológica · Enfermera
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/coach.sabrinalujan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Hecho con <Heart className="w-3 h-3 text-primary" /> por Sabrina Luján © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
