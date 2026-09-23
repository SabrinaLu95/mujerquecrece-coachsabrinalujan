import { CheckCircle2, MessageCircle } from "lucide-react";

const cards = [
  {
    number: "01",
    title: "Cambio",
    description:
      "Cuando una etapa ya no encaja con quien estás siendo. Una relación, un trabajo, una etapa o una situación que antes tenía sentido puede dejar de hacerlo. Te acompaño a mirar lo que está pasando desde nuevas perspectivas y encontrar tu próximo paso.",
  },
  {
    number: "02",
    title: "Límites",
    description:
      "Cuando necesitás aprender a decir \u201cno\u201d sin abandonarte. Si decís que sí cuando querés decir que no, sentís culpa al priorizarte o terminás cediendo para evitar conflictos, podemos trabajar en reconocer qué necesitás, expresarlo con claridad y sostener tus límites.",
  },
  {
    number: "03",
    title: "Autoconocimiento",
    description:
      "Cuando querés volver a escucharte y entender qué querés. Quizás pasaste mucho tiempo cumpliendo expectativas, cuidando a otros o intentando ser quien necesitaban que fueras. Este espacio puede ayudarte a reconectar con tus necesidades, deseos y valores.",
  },
  {
    number: "04",
    title: "Decisiones",
    description:
      "Cuando sabés que algo tiene que cambiar, pero todavía no sabés cómo. No necesitás llegar con una respuesta. Podés llegar con una duda, una contradicción, una decisión que venís postergando o simplemente con un \u201csé que no quiero seguir así\u201d. No voy a decirte qué hacer. Voy a ayudarte a mirar, preguntar y escucharte para que puedas encontrar tus propias respuestas.",
  },
];

const maybeForYou = [
  "Querés recuperar claridad.",
  "Necesitás tomar una decisión importante.",
  "Querés aprender a poner límites.",
  "Sentís que estás viviendo más desde las expectativas que desde tus propios deseos.",
  "Querés confiar más en vos misma.",
  "Estás atravesando una transición y necesitás ordenar lo que sentís y pensás.",
  "Sentís que llegó el momento de volver a elegirte.",
];

const ForWhom = () => {
  return (
    <section id="para-quien" className="py-24 md:py-32 bg-primary/5">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4 text-center">
            ¿Es para vos?
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground text-center mb-8">
            ¿Para quién es este espacio?
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>
              Para vos, si sentís que hay una parte de tu vida que ya no querés
              seguir viviendo de la misma manera.
            </p>
            <p>
              Quizás por fuera todo parece estar bien, pero por dentro sentís
              que algo cambió.
            </p>
            <p>
              Te cuesta escucharte entre tantas expectativas, responsabilidades y
              opiniones. Sabés que necesitás hacer algo diferente, pero no
              siempre tenés claro qué, cómo o por dónde empezar.
            </p>
            <p>
              Este espacio es para mujeres que quieren volver a encontrarse
              consigo mismas, recuperar claridad y tomar decisiones desde un
              lugar más consciente y propio.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-baseline gap-4 mb-5">
                <span className="text-4xl md:text-5xl font-display font-semibold text-primary/30 leading-none">
                  {card.number}
                </span>
                <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground uppercase tracking-wide">
                  {card.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Maybe for you */}
        <div className="max-w-2xl mx-auto mb-12">
          <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground text-center mb-8">
            Tal vez este espacio sea para vos si...
          </h3>
          <ul className="space-y-4">
            {maybeForYou.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-foreground leading-relaxed"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Closing */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-lg md:text-xl font-display text-foreground leading-relaxed">
            No necesitás tener todo resuelto para empezar.
          </p>
          <p className="text-lg md:text-xl font-display text-foreground leading-relaxed">
            Solo necesitás reconocer que ya no querés seguir igual.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/5493518139964?text=Hola%20Sabrina,%20quiero%20comenzar%20mi%20proceso"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Quiero comenzar mi proceso
          </a>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
