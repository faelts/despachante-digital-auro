import { Button } from "@/components/ui/button";
import { Menu, Phone, MapPin, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappUrl = "https://wa.me/554733491616?text=Olá! Gostaria de regularizar minha documentação.";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full font-sans">
      <div className={`bg-[#E11D48] text-white py-1.5 transition-all ${isScrolled ? 'h-0 py-0 overflow-hidden opacity-0' : 'h-auto'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center text-[11px] font-bold uppercase tracking-wider">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2"><Phone className="h-3 w-3" /><span>(47) 3349-1616</span></div>
            <div className="flex items-center gap-2 border-l border-white/30 pl-6"><MapPin className="h-3 w-3" /><span>Itajaí e BC</span></div>
          </div>
        </div>
      </div>
      <header className={`transition-all ${isScrolled ? 'bg-[#0F172A]/95 py-2' : 'bg-[#0F172A] py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <img src="logotipo-edit-branca-comprimida-maur-despachante.png" alt="Logo" className="h-10 md:h-14 w-auto object-contain" />
          <nav className="hidden lg:flex items-center gap-10 text-[11px] font-black uppercase text-white">
            <a href="#home">Home</a><a href="#servicos">Serviços</a>
            <Button className="bg-[#E11D48] hover:bg-[#BE123C] rounded-none px-8" onClick={() => window.open(whatsappUrl, '_blank')}>Falar com Especialista</Button>
          </nav>
          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>
    </div>
  );
};
export default Header;