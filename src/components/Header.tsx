import { Button } from "@/components/ui/button";
import { Menu, Phone, MapPin, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const whatsappUrl = "https://wa.me/554733491616?text=Olá! Mauro Despachante? Gostaria de regularizar minha documentação.";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full font-sans">
      {/* Barra de Topo - Vermelho Mauro */}
      <div className={`bg-[#E11D48] text-white py-1.5 transition-all duration-300 ${isScrolled ? 'h-0 py-0 overflow-hidden opacity-0' : 'h-auto'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em]">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3" />
              <span>(47) 3349-1616</span>
            </div>
            <div className="flex items-center gap-2 border-l border-white/30 pl-6">
              <MapPin className="h-3 w-3" />
              <span>Itajaí e BC</span>
            </div>
          </div>
          <div className="hidden lg:block text-white/90">
            Rápido, online e sem burocracia
          </div>
        </div>
      </div>

      {/* Header Principal - Azul Marinho Profundo */}
      <header className={`transition-all duration-300 ${
        isScrolled ? 'bg-[#0F172A]/95 backdrop-blur-md shadow-2xl py-2' : 'bg-[#0F172A] py-6'
      }`}>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo - Caminho da pasta PUBLIC */}
          <div className="flex items-center h-10 md:h-14">
            <img 
              src="logotipo-edit-branca-comprimida-maur-despachante.png" 
              alt="Mauro Despachante" 
              className="h-full w-auto object-contain transition-transform hover:scale-105"
            />
          </div>

          {/* Navegação High-Ticket */}
          <nav className="hidden lg:flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.15em] text-white">
            <a href="#home" className="hover:text-[#E11D48] transition-colors">Home</a>
            <a href="#servicos" className="hover:text-[#E11D48] transition-colors">Serviços</a>
            <a href="#sobre-nos" className="hover:text-[#E11D48] transition-colors">Sobre nós</a>
            
            <Button 
              className="bg-[#E11D48] hover:bg-[#BE123C] text-white font-black px-8 py-6 rounded-none uppercase tracking-tighter shadow-xl whitespace-nowrap transition-all hover:translate-y-[-2px]"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              Falar com Especialista
            </Button>
          </nav>

          {/* Mobile Button */}
          <button className="lg:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#0F172A] border-t border-white/10 p-8 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top duration-300">
            <a href="#home" className="text-sm font-black uppercase text-white tracking-widest" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#servicos" className="text-sm font-black uppercase text-white tracking-widest" onClick={() => setIsMenuOpen(false)}>Serviços</a>
            <Button className="w-full bg-[#E11D48] text-white font-black py-7 rounded-none text-base shadow-lg" onClick={() => window.open(whatsappUrl, '_blank')}>
              WHATSAPP AGORA
            </Button>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;