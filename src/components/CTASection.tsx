import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle, Star } from "lucide-react";

const CTASection = () => {
  const urgencyPoints = [
    "Atendimento imediato via WhatsApp",
    "Aprovação em até 48 horas",
    "Documentação liberada em 24h",
    "Parcelamento sem juros em 18x"
  ];

  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative z-10 container-custom">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-accent/20 border border-accent/30 rounded-full text-accent font-semibold mb-8">
            <Star className="mr-2 h-5 w-5" />
            50+ Anos de Confiança • DETRAN Credenciado
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Não perca mais tempo com 
            <span className="block text-gradient mt-2">burocracia desnecessária</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-3xl mx-auto">
            Resolva toda sua documentação <strong className="text-white">hoje mesmo</strong> com quem tem 
            50+ anos de experiência e mais de 10.000 clientes satisfeitos
          </p>

          {/* Urgency Points */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
            {urgencyPoints.map((point, index) => (
              <div key={index} className="flex items-center text-left">
                <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-white font-medium text-sm">{point}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-6 h-auto text-xl rounded-2xl shadow-2xl hover:shadow-accent/25 transition-all duration-300 group transform hover:scale-105"
            >
              <Phone className="mr-3 h-6 w-6 group-hover:animate-pulse" />
              FALAR AGORA MESMO
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white/40 text-white hover:bg-white hover:text-neutral-900 font-semibold px-8 py-6 h-auto text-xl rounded-2xl backdrop-blur-sm transition-all duration-300"
            >
              Ver Todos os Serviços
            </Button>
          </div>

          {/* Social Proof */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10k+</div>
                <div className="text-neutral-300 text-sm">Clientes Atendidos</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">4.9★</div>
                <div className="text-neutral-300 text-sm">Avaliação Média</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24h</div>
                <div className="text-neutral-300 text-sm">Tempo de Aprovação</div>
              </div>
            </div>
          </div>
          
          {/* Guarantee */}
          <p className="text-neutral-400 text-sm mt-6">
            💯 <strong className="text-white">Garantia total</strong> ou seu dinheiro de volta • 
            🔒 <strong className="text-white">Processo 100% seguro</strong> e legal
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;