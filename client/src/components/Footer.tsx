import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <img src="/Logoatt.png" alt="Flypi" className="h-10 w-auto mb-4" />
            <p className="text-muted-foreground mb-4">
              Transformando ideias em soluções digitais de alto impacto.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-muted-foreground hover:text-accent transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-accent transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-muted-foreground hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-accent transition-colors">
                  Desenvolvimento Web
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-accent transition-colors">
                  Aplicativos Mobile
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-accent transition-colors">
                  Cloud & DevOps
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-accent transition-colors">
                  Consultoria
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex gap-2 text-muted-foreground hover:text-accent transition-colors">
                <Mail size={18} className="flex-shrink-0 mt-0.5" />
                <a href="mailto:contato@flypi.com.br">contato@flypi.com.br</a>
              </li>
              <li className="flex gap-2 text-muted-foreground hover:text-accent transition-colors">
                <Phone size={18} className="flex-shrink-0 mt-0.5" />
                <a href="tel:+5511999999999">(11) 9 9999-9999</a>
              </li>
              <li className="flex gap-2 text-muted-foreground">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {currentYear} Flypi. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
