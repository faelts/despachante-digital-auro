import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-section bg-gradient-hero text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto px-container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="text-sm uppercase tracking-wider mb-4 opacity-90">
            Rápido, online e sem burocracia.
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Toda a sua documentação em dia hoje mesmo em até 18x.
          </h2>
          
          <p className="text-xl mb-8 opacity-90">
            Não perca mais tempo com burocracia! Fale com um de nossos especialistas agora mesmo.
          </p>
          
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 h-auto"
          >
            <Phone className="mr-2 h-5 w-5" />
            FALAR COM UM ATENDENTE
          </Button>
        </div>
      </div>
      
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 right-1/6 w-16 h-16 border-2 border-white rounded-full"></div>
      </div>
    </section>
  );
};

export default CTASection;