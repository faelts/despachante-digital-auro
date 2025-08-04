import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Clock, Award } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { icon: Award, label: "50+ Anos", description: "de experiência" },
    { icon: Clock, label: "24h", description: "para aprovação" },
    { icon: Shield, label: "100%", description: "seguro e confiável" }
  ];

  return (
    <section id="home" className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10 container-custom">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-20">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-medium text-sm mb-6 animate-fade-in">
              <Shield className="mr-2 h-4 w-4" />
              Credenciado DETRAN-SC
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-scale">
              Sua documentação
              <span className="block text-gradient">completa em 24h</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
              Soluções profissionais para <strong className="text-white">IPVA, Licenciamento, CNH e Multas</strong> com parcelamento em até <strong className="text-accent">18x sem juros</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 h-auto text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <Phone className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                Falar com Especialista
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-neutral-900 font-semibold px-8 py-4 h-auto text-lg rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                Ver Serviços
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 animate-slide-up" style={{animationDelay: '0.6s'}}>
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.label}</div>
                    <div className="text-sm text-neutral-400">{stat.description}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex-1 lg:flex justify-center items-center animate-fade-in-scale" style={{animationDelay: '0.8s'}}>
            <div className="relative">
              {/* Main Card */}
              <div className="glass-effect rounded-3xl p-8 shadow-2xl max-w-md mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Documentação Garantida
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    Processo 100% digital e seguro
                  </p>
                  <div className="space-y-3">
                    {['IPVA 2024 Quitado', 'Licenciamento Digital', 'CNH Renovada'].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-accent/5 rounded-lg">
                        <span className="text-sm font-medium text-neutral-700">{item}</span>
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;