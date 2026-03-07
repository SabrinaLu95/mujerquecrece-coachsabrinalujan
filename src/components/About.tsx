import portrait from "@/assets/sabrina-portrait.jpg";

const About = () => {
  return (
    <section id="sobre-mi" className="py-24 md:py-32 bg-card">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={portrait}
                alt="Sabrina Luján - Coach Ontológica"
                className="w-full h-full object-cover" />
              
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sage-light rounded-full -z-10 opacity-60" />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="text-sm font-medium tracking-widest uppercase text-primary">
              Sobre Mí
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight">
              Mi camino: de cuidar a otros a cuidarme a mí misma
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Desde que era niña supe que quería dedicar mi vida a ayudar a otros. Mis padres cuentan que cuando vi a mi abuela internada por primera vez dije que quería ser médica. Con los años rendí varios ingresos universitarios: medicina, bioimágenes y enfermería. Finalmente elegí enfermería, convencida de que quería estar cerca de las personas en los momentos más vulnerables de sus vidas.
              </p>
              <p>
                Durante años ejercí la profesión con entrega y compromiso. Sin embargo, con el tiempo empecé a sentir un profundo agotamiento. Ese cansancio me llevó a hacerme una pregunta profunda: <em>¿Esta es realmente la única forma de ayudar a las personas?</em>
              </p>
              <p>
                En ese proceso descubrí el coaching ontológico. Dejé de sentirme víctima de las circunstancias y empecé a comprender algo fundamental: <strong>nuestra realidad cambia cuando cambia nuestra forma de interpretarla.</strong>
              </p>
              <p>
                En 2022 tomé una decisión que transformó mi vida: dejé temporalmente mi trabajo como enfermera y me mudé a Brasil. Allí profundicé en terapias alternativas y en mi propio proceso personal. Ese viaje me permitió comprender que somos energía en constante transformación.
              </p>
              <p>
                Volví con una mirada completamente distinta. Regresé a la enfermería con herramientas nuevas, más conciencia y una certeza: <strong>la forma más profunda de ayudar a alguien no es hacer las cosas por esa persona, sino ayudarla a descubrir su propio poder.</strong>
              </p>
              <p>
                La maternidad fue un punto de inflexión. Me enfrenté a la necesidad de reinventarme, de
                encontrar un propósito que integrara todo lo que soy: profesional, madre, mujer.
              </p>
              <p>
                Hoy acompaño a otras mujeres en ese mismo camino de transformación. A través del coaching
                ontológico, te ayudo a reconectar con tu esencia, tomar decisiones desde la claridad y
                construir la vida que realmente deseás.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="font-display font-semibold text-foreground mb-3">Formación</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Enfermera profesional
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Coach ontológica certificada
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Formación continua en desarrollo personal y liderazgo femenino
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default About;