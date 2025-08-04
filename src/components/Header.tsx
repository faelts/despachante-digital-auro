import { Button } from "@/components/ui/button";
import { Menu, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-muted py-2">
        <div className="container mx-auto px-container flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>(47) 3349-1616</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Itajaí e Balneário Camboriú</span>
            </div>
          </div>
          <div className="text-xs">
            Rápido, online e sem burocracia
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background shadow-soft sticky top-0 z-50">
        <div className="container mx-auto px-container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-primary">
                MAURO
                <span className="block text-sm font-normal text-muted-foreground -mt-1">
                  DESPACHANTE
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#como-funciona" className="text-foreground hover:text-primary transition-colors">
                Como funciona?
              </a>
              <a href="#servicos" className="text-foreground hover:text-primary transition-colors">
                Serviços
              </a>
              <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
                Sobre nós
              </a>
              <a href="#contato" className="text-foreground hover:text-primary transition-colors">
                Contato
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button variant="default" className="bg-accent hover:bg-accent/90">
                Falar com Atendente
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t py-4">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-foreground hover:text-primary transition-colors">
                  Home
                </a>
                <a href="#como-funciona" className="text-foreground hover:text-primary transition-colors">
                  Como funciona?
                </a>
                <a href="#servicos" className="text-foreground hover:text-primary transition-colors">
                  Serviços
                </a>
                <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
                  Sobre nós
                </a>
                <a href="#contato" className="text-foreground hover:text-primary transition-colors">
                  Contato
                </a>
                <Button variant="default" className="bg-accent hover:bg-accent/90 w-full">
                  Falar com Atendente
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;