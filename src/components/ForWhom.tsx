import { Stethoscope, Baby, BookOpen, CheckCircle2 } from "lucide-react";

const audiences = [
  {
    icon: Stethoscope,
    title: "Profesionales de la salud",
    description:
      "Que sienten agotamiento emocional, desmotivación o están atravesando una crisis vocacional y necesitan reconectar con el sentido de su profesión.",
    points: [
      "Sentís que das todo y no te queda nada",
      "Perdiste la pasión por tu trabajo",
      "Necesitás establecer límites saludables",
    ],
  },
  {
    icon: Baby,
    title: "Madres que desean emprender",
    description:
      "Que tienen ideas y sueños pero no saben por dónde empezar, y quieren construir algo propio sin culpa y respetando sus tiempos.",
    points: [
      "Tenés una idea pero no sabés cómo arrancar",
      "Sentís culpa por dedicarte tiempo a vos",
      "Querés generar ingresos desde tu propósito",
    ],
  },
  {
    icon: BookOpen,
    title: "Madres que quieren estudiar",
    description:
      "Que desean iniciar o retomar sus estudios universitarios y necesitan acompañamiento para conciliar la maternidad con su desarrollo personal.",
    points: [
      "Querés retomar o empezar una carrera",
      "Sentís que ya no es tu momento",
      "Necesitás organización y motivación",
    ],
  },
];

const ForWhom = () => {
  return (
    <section id="para-quien" className="py-24 md:py-32 bg-primary/5">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            ¿Es para vos?
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            ¿Para quién es mi coaching?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Mi acompañamiento está diseñado para mujeres que sienten que su vida
            puede ser diferente y están listas para dar el primer paso.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-sage-light flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <audience.icon className="w-7 h-7 text-sage-dark group-hover:text-primary-foreground transition-colors" />
              </div>

              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {audience.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {audience.description}
              </p>

              <ul className="space-y-3">
                {audience.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
