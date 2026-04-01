import { Download, BookOpen } from "lucide-react";

const resources = [
  {
    title: "Guía: Primeros pasos para emprender siendo mamá",
    description: "Un ebook gratuito con herramientas prácticas para dar el primer paso hacia tu emprendimiento.",
    type: "PDF Gratuito",
    downloadUrl: "",
  },
  {
    title: "Cuaderno de reflexión: ¿Qué quiero para mi vida?",
    description: "Preguntas poderosas para reconectar con tus deseos y diseñar tu próximo capítulo.",
    type: "PDF Gratuito",
    downloadUrl: "/downloads/cuaderno-reflexion.pdf",
  },
  {
    title: "Mini guía de autocuidado para profesionales de la salud",
    description: "Estrategias simples y efectivas para cuidarte mientras cuidás a otros.",
    type: "PDF Gratuito",
    downloadUrl: "/downloads/mini-guia-autocuidado.pdf",
  },
];

const Resources = () => {
  return (
    <section id="recursos" className="py-24 md:py-32 bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Recursos
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            Materiales gratuitos para tu transformación
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {resources.map((resource, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-background border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center mb-5">
                <BookOpen className="w-6 h-6 text-sage-dark" />
              </div>

              <span className="text-xs font-medium tracking-wider uppercase text-primary">
                {resource.type}
              </span>

              <h3 className="text-lg font-display font-semibold text-foreground mt-2 mb-3">
                {resource.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {resource.description}
              </p>

              {resource.downloadUrl ? (
                <a
                  href={resource.downloadUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-sage-dark transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Descargar gratis
                </a>
              ) : (
                <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-sage-dark transition-colors">
                  <Download className="w-4 h-4" />
                  Descargar gratis
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
