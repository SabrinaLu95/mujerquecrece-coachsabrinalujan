import { Heart, Rocket, MessageCircle } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Coaching 1:1 Un espacio para volver a escucharte",
    description:
      "Para cuando sentís que hay algo en tu vida que necesita cambiar, pero todavía no tenés claridad sobre qué hacer. En este proceso individual trabajamos juntas para que puedas mirar tu situación desde nuevas perspectivas, reconocer aquello que hoy te está limitando y conectar con tus propias respuestas.\u00a0\nPuede ser para vos si estás:\n\n\n",
    benefits: [
      "atravesando una decisión importante;",
      "cuestionando un vínculo o una etapa de tu vida;",
      "teniendo dificultades para poner o sostener límites;",
      "sintiéndote desconectada de vos misma;",
      "atravesando un cambio personal o profesional;",
      "necesitando recuperar confianza y claridad.\n\n",
    ],
    extraContent:
      "¿Qué podemos trabajar?\n\nAutoconocimiento · límites · autoestima · decisiones · poder personal · vínculos · cambios vitales\n\nNo voy a decirte qué hacer.\n\nVoy a acompañarte a encontrar la claridad necesaria para decidir por vos misma.\n\nProceso individual de 4 sesiones",
  },
  {
    icon: Rocket,
    title: "Espacios grupales: Transformarte también puede ser un proceso compartido.",
    description:
      "Los espacios grupales están pensados para mujeres que quieren crecer, cuestionarse y conocerse en compañía de otras personas que también están atravesando procesos de transformación.\n\nSon espacios de reflexión, aprendizaje y conversación donde vas a poder:",
    benefits: [
      "observar patrones; cuestionar creencias;",
      "compartir experiencias;",
      "aprender herramientas",
      "sentirte acompañada",
    ],
    extraContent:
      "¿Qué trabajamos en cada encuentro?\n\nReflexión · patrones · creencias · experiencias · herramientas · acompañamiento\n\nCada encuentro parte de una temática y busca llevarte de la reflexión a la acción.",
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

              <p className="text-muted-foreground leading-relaxed mb-6 whitespace-pre-line">
                {service.description}
              </p>

              <ul className="space-y-2 mb-8">
                {service.benefits.map((benefit, j) => (
                  <li key={j} className="flex items-start gap-2 text-muted-foreground leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>

              {service.extraContent && (
                <div className="mb-8 p-5 rounded-xl bg-sage-light/50 border border-primary/15">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {service.extraContent}
                  </p>
                </div>
              )}

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
