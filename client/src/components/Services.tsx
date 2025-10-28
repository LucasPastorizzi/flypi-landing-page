import { Code2, Smartphone, Cloud, Zap } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Desenvolvimento Web',
    description: 'Criamos plataformas web robustas, escaláveis e modernas utilizando as tecnologias mais atuais. Desde landing pages até sistemas complexos, entregamos soluções que funcionam.',
  },
  {
    icon: Smartphone,
    title: 'Aplicativos Mobile',
    description: 'Desenvolvemos aplicativos nativos e híbridos para iOS e Android. Experiências fluidas e intuitivas que seus usuários vão adorar.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Infraestrutura escalável e automatizada em nuvem. Implementamos soluções AWS, Azure e Google Cloud com segurança e performance.',
  },
  {
    icon: Zap,
    title: 'Consultoria em Tecnologia',
    description: 'Orientação estratégica para transformação digital. Ajudamos a otimizar processos, escolher tecnologias e planejar o crescimento.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">Soluções tecnológicas sob medida para seu negócio</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border border-border hover:border-accent hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-accent/10 rounded-xl p-4 w-fit mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-accent/5 to-blue-500/5 rounded-2xl p-12 border border-border">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-accent mb-2">50+</p>
              <p className="text-foreground font-semibold">Projetos Entregues</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent mb-2">30+</p>
              <p className="text-foreground font-semibold">Clientes Satisfeitos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent mb-2">5+</p>
              <p className="text-foreground font-semibold">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
