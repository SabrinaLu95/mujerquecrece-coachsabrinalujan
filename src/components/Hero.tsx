import { MessageCircle, CalendarDays } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Coaching ontológico - espacio de calma y transformación"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container relative z-10 pt-20">
        <div className="max-w-2xl space-y-8 animate-fade-in-up">
          <p className="text-sm md:text-base font-medium tracking-widest uppercase text-primary">
            Coach Ontológica · Enfermera
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight text-foreground">
            No tienes que abandonarte para sostener a otros.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            Acompaño a profesionales de la salud y madres en procesos de transformación personal y profesional.
            Un espacio de escucha, claridad y acción.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://wa.me/5491100000000?text=Hola%20Sabrina,%20quiero%20consultar%20por%20una%20sesión"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-5 h-5" />
              Escribime por WhatsApp
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <CalendarDays className="w-5 h-5" />
              Reservar turno
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
