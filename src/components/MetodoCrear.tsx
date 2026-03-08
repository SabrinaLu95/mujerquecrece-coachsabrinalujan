import { Eye, Shield, Compass, Zap, Sparkles } from "lucide-react";

const steps = [
  {
    letter: "C",
    title: "Consciencia",
    description:
      "Identificamos creencias, emociones y patrones que están condicionando tu vida.",
    icon: Eye,
  },
  {
    letter: "R",
    title: "Responsabilidad",
    description:
      "Dejas de vivir desde la culpa o el victimismo y comienzas a recuperar tu poder personal.",
    icon: Shield,
  },
  {
    letter: "E",
    title: "Elección",
    description:
      "Aprendes a tomar decisiones más alineadas con quien realmente eres.",
    icon: Compass,
  },
  {
    letter: "A",
    title: "Acción",
    description:
      "Transformamos nuevas perspectivas en acciones concretas.",
    icon: Zap,
  },
  {
    letter: "R",
    title: "Realidad nueva",
    description:
      "Cuando cambian tus decisiones, cambia tu vida.",
    icon: Sparkles,
  },
];

const MetodoCrear = () => {
  return (
    <section id="metodo" className="py-24 md:py-32 bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Mi Método
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            Método <span className="text-primary">CREAR</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Un proceso de cinco pasos para transformar tu forma de interpretar la
            vida y comenzar a crear la realidad que deseas.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
            >
              {/* Step number */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                {i + 1}
              </div>

              {/* Letter */}
              <span className="text-5xl font-display font-bold text-primary/20 group-hover:text-primary/40 transition-colors leading-none">
                {step.letter}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center mx-auto mt-4 mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <step.icon className="w-6 h-6 text-sage-dark group-hover:text-primary-foreground transition-colors" />
              </div>

              <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                {step.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="italic text-muted-foreground max-w-xl mx-auto">
            "No estás aquí para sobrevivir, estás aquí para crear."
          </p>
        </div>
      </div>
    </section>
  );
};

export default MetodoCrear;
