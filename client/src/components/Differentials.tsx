import { Zap, Users, Award, TrendingUp } from 'lucide-react';

const differentials = [
  {
    icon: Zap,
    title: 'Agilidade e Transparência',
    description: 'Utilizamos metodologias ágeis para entregas rápidas e comunicação clara. Você acompanha cada etapa do projeto em tempo real.',
  },
  {
    icon: Users,
    title: 'Foco no Cliente',
    description: 'Suas necessidades são nossas prioridades. Desenvolvemos soluções personalizadas que resolvem problemas reais e geram valor tangível.',
  },
  {
    icon: Award,
    title: 'Expertise Técnica',
    description: 'Equipe especializada nas tecnologias mais atuais. React, Node.js, Python, Cloud, DevOps e muito mais. Sempre inovando.',
  },
  {
    icon: TrendingUp,
    title: 'Suporte Contínuo',
    description: 'Não abandonamos o projeto após a entrega. Oferecemos suporte, manutenção e evolução contínua das suas soluções.',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Por Que Escolher a Flypi?</h2>
          <p className="section-subtitle">Nossos diferenciais competitivos</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {differentials.map((differential, index) => {
            const Icon = differential.icon;
            return (
              <div
                key={index}
                className="flex gap-6 p-8 bg-background rounded-2xl border border-border hover:border-accent transition-all duration-300 group"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Icon className="text-accent" size={28} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">{differential.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{differential.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-accent to-blue-500 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Pronto para Transformar Seu Negócio?</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre como a Flypi pode ajudar você a alcançar seus objetivos através da tecnologia.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contato');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-white text-accent px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block"
          >
            Solicitar Consulta Gratuita
          </button>
        </div>
      </div>
    </section>
  );
}
