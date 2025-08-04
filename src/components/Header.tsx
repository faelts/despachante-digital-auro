import { Button } from "@/components/ui/button";
import { Menu, Phone, MapPin, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-neutral-900 text-white py-2">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>(47) 3349-1616</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Itajaí e Balneário Camboriú</span>
              </div>
            </div>
            <div className="text-accent font-medium">
              Rápido, online e sem burocracia
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-md border-b border-neutral-200' 
          : 'bg-white shadow-sm'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold tracking-tight">
                <span className="text-primary">MAURO</span>
                <span className="block text-sm font-medium text-neutral-600 -mt-1 tracking-normal">
                  DESPACHANTE
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {['Home', 'Como funciona?', 'Serviços', 'Sobre nós', 'Contato'].map((item, index) => (
                <a 
                  key={index}
                  href={`#${item.toLowerCase().replace(/[^\w]/g, '-')}`} 
                  className="text-neutral-700 hover:text-primary transition-colors duration-200 font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Phone className="mr-2 h-4 w-4" />
                Falar Agora
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-neutral-700" />
              ) : (
                <Menu className="h-6 w-6 text-neutral-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-neutral-200 py-4">
              <nav className="flex flex-col space-y-4">
                {['Home', 'Como funciona?', 'Serviços', 'Sobre nós', 'Contato'].map((item, index) => (
                  <a 
                    key={index}
                    href={`#${item.toLowerCase().replace(/[^\w]/g, '-')}`} 
                    className="text-neutral-700 hover:text-primary transition-colors font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <Button 
                  className="bg-accent hover:bg-accent/90 text-white font-semibold mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Falar Agora
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