const posts = [
  {
    title: "El agotamiento no es debilidad: cómo reconocer el burnout",
    excerpt: "Muchas profesionales de la salud normalizan el cansancio extremo. Aprendé a identificar las señales.",
    date: "Próximamente",
  },
  {
    title: "Emprender siendo mamá: mitos y verdades",
    excerpt: "Rompemos con las creencias que te frenan y construimos una mirada más compasiva del emprendimiento.",
    date: "Próximamente",
  },
  {
    title: "Estudiar y maternar: es posible",
    excerpt: "Historias reales y estrategias para quienes eligen seguir formándose sin abandonar su rol de madre.",
    date: "Próximamente",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Blog
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            Reflexiones y herramientas
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {posts.map((post, i) => (
            <article
              key={i}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors cursor-pointer"
            >
              <span className="text-xs font-medium tracking-wider uppercase text-primary">
                {post.date}
              </span>
              <h3 className="text-lg font-display font-semibold text-foreground mt-3 mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
