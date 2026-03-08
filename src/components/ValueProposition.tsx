const ValueProposition = () => {
  return (
    <section className="py-20 md:py-28 bg-primary/5">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-sm font-medium tracking-widest uppercase text-primary">
            Propuesta de Valor
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground leading-tight">
            Te ayudo a reconectar con tu poder interior para que dejes de sobrevivir y empieces a{" "}
            <span className="text-primary">crear la vida que deseás</span>.
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A través del coaching ontológico, te acompaño a transformar tus creencias limitantes en decisiones conscientes, para que recuperes claridad, confianza y dirección.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 pt-8">
            <div className="space-y-2">
              <p className="text-3xl font-display font-bold text-primary">+100</p>
              <p className="text-sm text-muted-foreground">Mujeres acompañadas</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-display font-bold text-primary">5</p>
              <p className="text-sm text-muted-foreground">Años de experiencia</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-display font-bold text-primary">98%</p>
              <p className="text-sm text-muted-foreground">Clientas satisfechas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
