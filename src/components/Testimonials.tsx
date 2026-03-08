import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María L.",
    role: "Médica pediatra",
    text: "Llegué agotada, sin ganas de seguir ejerciendo. Sabrina me ayudó a reencontrar el sentido de mi profesión y a poner límites que cambiaron mi día a día. Hoy disfruto de mi trabajo otra vez.",
    rating: 5,
  },
  {
    name: "Carolina S.",
    role: "Mamá emprendedora",
    text: "Tenía mil ideas pero no arrancaba nunca. Con el proceso de coaching pude ordenar mi mente, soltar la culpa y hoy tengo mi propio emprendimiento funcionando. Estoy orgullosa de mí.",
    rating: 5,
  },
  {
    name: "Luciana M.",
    role: "Mamá y estudiante universitaria",
    text: "Pensaba que ya no era mi momento de estudiar. Sabrina me acompañó a organizar mis tiempos y a creer que podía. Este año rindo mis últimas materias.",
    rating: 5,
  },
  {
    name: "Valentina R.",
    role: "Enfermera",
    text: "El coaching con Sabrina fue un antes y un después. Aprendí a escucharme, a decir que no y a priorizar mi bienestar sin culpa. Lo recomiendo de corazón.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-24 md:py-32 bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Testimonios
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            Lo que dicen quienes ya vivieron el proceso
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Historias reales de mujeres que decidieron transformar su vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              <div>
                <p className="font-display font-semibold text-foreground">
                  {t.name}
                </p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
