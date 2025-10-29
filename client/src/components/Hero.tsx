import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5 pt-20 pb-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="section-title">
                Transformando Ideias em Soluções Digitais de
                <span className="gradient-text"> Alto Impacto</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A Flypi é uma software house inovadora, especializada em desenvolver soluções tecnológicas personalizadas que impulsionam o crescimento do seu negócio.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('#servicos')}
                className="btn-primary flex items-center gap-2"
              >
                Conheça Nossos Serviços
                <ArrowRight size={20} />
              </Button>
              <Button
                onClick={() => scrollToSection('#contato')}
                className="btn-secondary"
              >
                Solicitar Orçamento
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-accent">100%</p>
                <p className="text-sm text-muted-foreground">Dedicação</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">Ágil</p>
                <p className="text-sm text-muted-foreground">Metodologia</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">24/7</p>
                <p className="text-sm text-muted-foreground">Suporte</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full h-250">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-blue-500 rounded-3xl opacity-20 blur-3xl"></div>
             <img src="/IPHONE.png" alt="Logo-Flypi" className="relative w-full h-full object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// relative w-full h-full object-contain drop-shadow-2xl

//<img
                //src="/IPHONE.png"
                //alt="Flypi"
               // className="relative w-full h-full object-contain drop-shadow-2xl"
             // />
              