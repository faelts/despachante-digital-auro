import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, FileText, CreditCard, Users, Clock, Shield, ArrowRight, CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const mainServices = [
    {
      icon: Car,
      title: "Licenciamento Digital",
      description: "CRLV-e liberado em 24h com validade nacional",
      features: ["Documento digital", "Frete grátis", "Parcelamento 18x"],
      highlight: true
    },
    {
      icon: CreditCard,
      title: "IPVA e Débitos",
      description: "Quitação completa de pendências veiculares",
      features: ["Consulta gratuita", "Desconto à vista", "Parcelamento"],
      highlight: false
    },
    {
      icon: FileText,
      title: "Transferência",
      description: "Mudança de proprietário rápida e segura",
      features: ["Processo completo", "Documentação", "Acompanhamento"],
      highlight: false
    }
  ];

  const additionalServices = [
    "2ª Via de Documentos",
    "Renovação de CNH", 
    "Consulta de Multas",
    "ATPV Digital",
    "Emplacamento 0km",
    "Placa Mercosul",
    "Vistoria Veicular",
    "Liberação de Apreensão"
  ];

  return (
    <section id="servicos" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-medium text-sm mb-6">
            <Shield className="mr-2 h-4 w-4" />
            Soluções Completas
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Oferecemos todas as soluções para manter sua documentação veicular em dia, com a experiência de 50+ anos no mercado
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  service.highlight 
                    ? 'bg-gradient-to-br from-primary to-primary-dark text-white' 
                    : 'bg-white hover:bg-gradient-to-br hover:from-white hover:to-accent/5'
                }`}
              >
                <CardContent className="p-8">
                  {service.highlight && (
                    <div className="absolute -top-3 left-6 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Mais Procurado
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    service.highlight 
                      ? 'bg-white/20' 
                      : 'bg-gradient-primary'
                  }`}>
                    <IconComponent className={`h-8 w-8 ${
                      service.highlight ? 'text-white' : 'text-white'
                    }`} />
                  </div>
                  
                  <h3 className={`text-2xl font-semibold mb-3 ${
                    service.highlight ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {service.title}
                  </h3>
                  
                  <p className={`mb-6 ${
                    service.highlight ? 'text-white/90' : 'text-neutral-600'
                  }`}>
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className={`h-4 w-4 mr-3 ${
                          service.highlight ? 'text-white' : 'text-accent'
                        }`} />
                        <span className={`text-sm ${
                          service.highlight ? 'text-white/90' : 'text-neutral-600'
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${
                      service.highlight 
                        ? 'bg-white text-primary hover:bg-white/90' 
                        : 'bg-accent hover:bg-accent/90 text-white'
                    } font-semibold rounded-xl`}
                  >
                    Solicitar Agora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-neutral-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-neutral-900 mb-4">
              Outros Serviços Disponíveis
            </h3>
            <p className="text-neutral-600">
              Soluções completas para todas suas necessidades documentais
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
              >
                <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-sm font-medium text-neutral-700">{service}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold text-2xl mb-4">
              Tudo em até 18x sem juros no cartão
            </div>
            <Button 
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-4 rounded-xl shadow-lg"
            >
              Ver Todos os Serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;