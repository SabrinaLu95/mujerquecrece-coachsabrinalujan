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
                className="w-full h-full object-cover"
              />
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
                Desde que era niña supe que quería dedicar mi vida a ayudar a otros.
              </p>
              <p>
                Mis padres cuentan que cuando vi a mi abuela internada por primera vez dije que quería ser médica. Con los años rendí varios ingresos universitarios: medicina, bioimágenes y enfermería. Finalmente elegí enfermería, convencida de que quería estar cerca de las personas en los momentos más vulnerables de sus vidas.
              </p>
              <p>
                Durante años ejercí la profesión con entrega y compromiso. Sin embargo, con el tiempo empecé a sentir un profundo agotamiento. El sistema de salud muchas veces se vuelve ingrato: largas jornadas, desgaste físico y emocional, y una sensación constante de que el esfuerzo nunca es suficiente.
              </p>
              <p>
                Ese cansancio me llevó a hacerme una pregunta profunda: <br />
                ¿Esta es realmente la única forma de ayudar a las personas?
              </p>
              <p>
                En ese proceso descubrí el coaching ontológico. Mientras cursaba la formación comencé a experimentar una transformación personal muy fuerte. Dejé de sentirme víctima de las circunstancias y empecé a comprender algo fundamental:
              </p>
              <p className="italic font-semibold text-foreground">
                Nuestra realidad cambia cuando cambia nuestra forma de interpretarla.
              </p>
              <p>
                En 2022 sentí la necesidad de volver a mi centro. Tomé una decisión que transformó mi vida: dejé temporalmente mi trabajo como enfermera y me mudé a Brasil. Allí trabajé en distintos espacios mientras profundizaba en terapias alternativas y en mi propio proceso personal.
              </p>
              <p>
                Ese viaje me permitió comprender algo que hoy es parte central de mi mirada: somos energía en constante transformación, y cada persona que aparece en nuestra vida refleja algo que también está en nosotros.
              </p>
              <p>
                Volví con una mirada completamente distinta. Regresé a la enfermería, pero ahora con herramientas nuevas, con más conciencia y con una forma diferente de relacionarme con mi trabajo y con las personas. Sin embargo, dentro mío ya sabía algo: <br />
                <strong>La forma más profunda de ayudar a alguien no es hacer las cosas por esa persona, sino ayudarla a descubrir su propio poder.</strong>
              </p>
              <p>
                Hoy acompaño especialmente a mujeres que sienten que algo dentro suyo quiere cambiar, pero todavía no se animan a dar el paso.
              </p>
              <p>
                Mujeres con ideas, sueños o proyectos que parecen imposibles. Mujeres que sienten miedo, confusión o incertidumbre. Mujeres que han olvidado que tienen el poder de crear su propia realidad.
              </p>
              <p>
                Mi trabajo como coach ontológica es acompañarte a ordenar tu mundo interno, cuestionar las creencias que te limitan y recuperar la confianza en vos misma para tomar decisiones conscientes.
              </p>
              <p>
                Las mujeres que llegan a mis sesiones suelen sentirse desbordadas, con muchas ideas y poca claridad. Después del proceso se van con algo muy distinto: <strong>claridad, decisiones tomadas y la certeza de que su vida no depende de otros.</strong>
              </p>
              <p>
                Hoy, además, la maternidad me llevó a replantearme profundamente cómo quiero vivir mi tiempo y mi vocación. Quiero acompañar a otras mujeres sin renunciar a ver crecer a mi hijo, construyendo una vida coherente con mis valores.
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
    </section>
  );
};

export default About;