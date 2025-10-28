import { Target, Eye } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Quem Somos</h2>
          <p className="section-subtitle">Conhecendo a Flypi</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Target className="text-accent" size={28} />
                Nossa Missão
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ser o parceiro estratégico em tecnologia, desenvolvendo soluções personalizadas que impulsionam o crescimento e a eficiência dos nossos clientes. Acreditamos que a tecnologia deve ser acessível, intuitiva e capaz de transformar negócios.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Eye className="text-accent" size={28} />
                Nossa Visão
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ser reconhecida como uma das principais Software Houses do Brasil, sinônimo de excelência, inovação e compromisso com resultados. Queremos criar um legado de sucesso junto aos nossos clientes.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="bg-background rounded-2xl p-8 border border-border hover:border-accent transition-colors">
              <h4 className="text-xl font-bold text-foreground mb-3">Valores Fundamentais</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span><strong>Excelência:</strong> Qualidade em tudo que fazemos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span><strong>Inovação:</strong> Sempre buscando novas soluções</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span><strong>Transparência:</strong> Comunicação clara e honesta</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span><strong>Compromisso:</strong> Dedicados aos seus resultados</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-accent/10 to-blue-500/10 rounded-2xl p-8 border border-accent/20">
              <p className="text-foreground font-semibold">
                "Transformamos desafios em oportunidades através de tecnologia inteligente e parcerias duradouras."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
