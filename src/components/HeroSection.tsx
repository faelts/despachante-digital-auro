import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-hero text-white py-section relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-container relative z-10">
        <div className="max-w-4xl">
          <div className="text-sm uppercase tracking-wider mb-4 opacity-90">
            Rápido, online e sem burocracia.
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Toda a sua documentação em dia hoje mesmo em{" "}
            <span className="text-accent">até 18x</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl">
            Soluções completas para <strong>IPVA, Licenciamento, Assessoria Veicular, Multas e CNH.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 h-auto"
            >
              <Phone className="mr-2 h-5 w-5" />
              QUERO FALAR COM UM ATENDENTE!
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 h-auto"
            >
              Conhecer Serviços
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="w-full h-full bg-gradient-to-l from-white/20 to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;