import { useState } from "react";
import { MessageCircle, Instagram, Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Hola Sabrina, soy ${form.name}. ${form.message}`;
    window.open(
      `https://wa.me/5493518139964?text=${encodeURIComponent(whatsappMsg)}`,
      "_blank"
    );
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-card">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Left */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
                Contacto
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight">
                Estoy acá para escucharte
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Si sentís que es tu momento de transformar algo en tu vida, escribime. La primera conversación
                es sin compromiso.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://wa.me/5493518139964?text=Hola%20Sabrina,%20quiero%20consultar%20por%20una%20sesión"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-sage-light flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-sage-dark" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">WhatsApp</p>
                  <p className="text-xs text-muted-foreground">Respondo en menos de 24hs</p>
                </div>
              </a>

              <a
                href="https://instagram.com/coach.sabrinalujan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-sage-light flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-sage-dark" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Instagram</p>
                  <p className="text-xs text-muted-foreground">Contenido diario y reflexiones</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Nombre
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Contame en qué puedo ayudarte..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
