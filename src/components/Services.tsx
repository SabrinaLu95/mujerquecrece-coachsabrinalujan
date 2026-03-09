import { Heart, Rocket, GraduationCap, MessageCircle } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Coaching para profesionales de la salud",
    description:
      "¿Sentís agotamiento emocional, desmotivación o crisis vocacional? Este espacio es para vos. Trabajamos juntas para reencontrar el sentido de tu profesión, establecer límites saludables y reconectar con tu bienestar.",
    benefits: [
      "Gestión del estrés y agotamiento emocional",
      "Reconexión con tu vocación",
      "Herramientas para el autocuidado profesional",
      "Claridad para tomar nuevas decisiones",
    ],
  },
  {
    icon: Rocket,
    title: "Coaching para madres que desean emprender",
    description:
      "Tenés ideas, ganas y sueños, pero no sabés por dónde empezar. Te acompaño a diseñar un camino hacia tu emprendimiento desde la claridad, sin culpa y respetando tus tiempos.",
    benefits: [
      "Claridad sobre tu propósito y propuesta de valor",
      "Organización del tiempo sin descuidar la maternidad",
      "Superación de miedos y creencias limitantes",
      "Plan de acción personalizado",
    ],
  },
  {
    icon: GraduationCap,
    title: "Coaching para madres que quieren estudiar",
    description:
      "Querés iniciar o retomar tus estudios universitarios sin abandonar tu maternidad. Trabajamos tu organización, motivación y las emociones que surgen en este camino.",
    benefits: [
      "Estrategias para conciliar estudio y maternidad",
      "Motivación y constancia en el proceso",
      "Manejo de la culpa y las expectativas",
      "Acompañamiento emocional durante la carrera",
    ],
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Servicios
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            ¿Cómo puedo acompañarte?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-sage-light flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="w-7 h-7 text-sage-dark group-hover:text-primary-foreground transition-colors" />
              </div>

              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 mb-8">
                {service.benefits.map((benefit, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5493518139964?text=Hola%20Sabrina,%20quiero%20consultar%20por%20una%20sesión"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-sage-dark transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Agendar sesión
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
