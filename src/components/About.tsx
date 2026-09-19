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

                alt="Sabrina Luján - Coach Ontológica"
                className="w-full h-full object-cover" src="/lovable-uploads/1575934d-ecbe-4603-98eb-3fd8108893bf.jpg" />
              
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sage-light rounded-full -z-10 opacity-60" />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="text-sm font-medium tracking-widest uppercase text-primary">
              Sobre Mí
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight">
              Mi camino: de víctima a creadora de mi historia.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{`Durante mucho tiempo creí que ser fuerte significaba poder soportarlo todo.

Aprendí a hacerme cargo demasiado pronto. Viví experiencias que me obligaron a crecer antes de tiempo, atravesé vínculos que me hicieron cuestionar mi propio valor y durante años sentí que las circunstancias, las personas y lo que me había tocado vivir tenían más poder sobre mi vida que yo misma.

Llegué a sentirme víctima de mi propia historia.

Y durante mucho tiempo no supe que existía otra manera de vivir.

Hasta que alguien me hizo una pregunta diferente.

A los 18 años apareció en mi vida una persona que no vino a rescatarme.

Me dio algo mucho más poderoso: herramientas para empezar a hacerme responsable de mi propia vida.

Por primera vez pude comprender que mi historia explicaba muchas de las cosas que me habían sucedido, pero no necesariamente tenía que determinar todo lo que vendría después.

Empecé a preguntarme:

¿Qué puedo hacer yo con esto?

Esa pregunta cambió mi vida.

Empecé a conocerme.

A cuestionar mis creencias.

A pedir ayuda.

A tomar decisiones.

A decir que no.

A poner límites.

A alejarme de aquello que me hacía daño.

A equivocarme y volver a intentarlo.

Y, sobre todo, empecé a descubrir algo que hoy considero fundamental:

no siempre podemos elegir lo que nos sucede, pero podemos aprender a recuperar nuestra capacidad de elegir qué hacemos con ello.

Mi propia transformación se convirtió en una búsqueda.

Quise entender más.

Estudié.

Me formé como enfermera y trabajé en cuidados críticos pediátricos, una experiencia que me enseñó profundamente sobre la vulnerabilidad humana, la escucha y la importancia de acompañar a las personas en momentos difíciles.

Después me formé como coach ontológica y coach de grupos.

También exploré herramientas de autoconocimiento y distintas miradas sobre el bienestar y la transformación personal.

Pero hubo algo que permaneció constante en todo ese camino:

mi fascinación por las personas.

Por sus historias.

Por aquello que no dicen.

Por las decisiones que postergan.

Por las posibilidades que todavía no pueden ver.

Por ese momento en el que alguien deja de preguntarse “¿por qué me pasa esto?” y empieza a preguntarse:

“¿Qué puedo hacer a partir de ahora?”

Y ahí entendí para qué quiero hacer coaching.

No quiero decirle a una mujer qué decisión tomar.

No quiero convertirme en otra persona que le diga cómo debería vivir.

Y mucho menos quiero que dependa de mí para sentirse capaz.

Quiero acompañarla a encontrarse con sus propias respuestas.

A través de la escucha, preguntas profundas y conversaciones que muchas veces pueden resultar incómodas, creo espacios donde pueda detenerse, mirar su vida desde otra perspectiva y reconocer posibilidades que quizás todavía no estaba pudiendo ver.

Porque para mí, empoderar no es decirle a alguien “vos podés” y dejarla sola.

Es acompañarla a descubrir por sí misma qué quiere, qué necesita, qué está dispuesta a cambiar y qué decisión quiere tomar.

Por eso nació esta propuesta.

Hoy acompaño a mujeres que sienten que hay algo en su vida que ya no pueden seguir ignorando.

Mujeres que necesitan claridad.

Que quieren recuperar su voz.

Que están aprendiendo a poner límites.

Que atraviesan cambios.

Que están cuestionando vínculos, decisiones o formas de vivir que ya no las representan.

Mujeres que, quizás, durante mucho tiempo estuvieron ocupándose de todos menos de ellas mismas.

No prometo tener todas las respuestas.

Te ofrezco algo diferente:

un espacio para que puedas encontrar las tuyas.

Porque yo también tuve que aprender que mi vida no era solamente aquello que me había sucedido.

Y hoy quiero acompañarte a descubrir qué puede ser la tuya cuando empezás a elegirla conscientemente.

De sobrevivir tu vida a elegirla.

Ese es el camino que me trajo hasta acá.`}</p>
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
    </section>);};export default About;