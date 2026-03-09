import { Clock, Users, Video, MapPin, MessageCircle } from "lucide-react";

const CoachingSessions = () => {
  return (
    <section id="sesiones" className="py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Sesiones
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            ¿Cómo son las sesiones de coaching?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Un espacio seguro, confidencial y transformador donde trabajamos
            juntas en lo que realmente importa para vos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Description */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Cada sesión es un encuentro de aproximadamente{" "}
              <span className="font-semibold text-primary">60 minutos</span>{" "}
              donde exploramos tus desafíos, creencias y emociones desde una
              mirada ontológica. No te doy respuestas: te ayudo a encontrar las
              tuyas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Trabajamos con preguntas poderosas, distinciones del coaching
              ontológico y herramientas prácticas que te permiten ampliar tu
              mirada y tomar acción desde un lugar más consciente y alineado.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              El proceso suele durar entre 8 y 12 sesiones, aunque cada camino
              es único. Lo importante es tu compromiso con el cambio.
            </p>

            <a
              href="https://wa.me/5493518139964?text=Hola%20Sabrina,%20quiero%20consultar%20por%20una%20sesión"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-5 h-5" />
              Reservar mi sesión
            </a>
          </div>

          {/* Right: Details cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: Clock,
                title: "Duración",
                detail: "60 minutos por sesión",
              },
              {
                icon: Users,
                title: "Modalidad",
                detail: "Individual y personalizada",
              },
              {
                icon: Video,
                title: "Online",
                detail: "Por videollamada desde cualquier lugar",
              },
              {
                icon: MapPin,
                title: "Presencial",
                detail: "Disponible en consultorio (consultar)",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 space-y-3"
              >
                <div className="w-11 h-11 rounded-xl bg-sage-light flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-sage-dark" />
                </div>
                <h4 className="font-display font-semibold text-foreground">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingSessions;
