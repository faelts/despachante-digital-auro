import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Shield, Truck, CreditCard, ArrowRight } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Contato Simples",
      description: "Entre em contato conosco via WhatsApp ou telefone. Nossa equipe especializada irá te orientar sobre toda a documentação necessária."
    },
    {
      icon: Shield,
      number: "02", 
      title: "Processo Seguro",
      description: "Cuidamos de todos os trâmites burocráticos com total segurança. Você não precisa sair de casa ou enfrentar filas."
    },
    {
      icon: CreditCard,
      number: "03",
      title: "Pagamento Flexível",
      description: "Parcelamos seus débitos em até 18x no cartão ou oferecemos desconto à vista. Facilitamos ao máximo para você."
    },
    {
      icon: Truck,
      number: "04",
      title: "Entrega Expressa",
      description: "Receba seus documentos em casa pelos Correios com frete grátis. Documentação digital liberada em até 24h."
    }
  ];

  return (
    <section id="como-funciona" className="section-padding bg-gradient-surface">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm mb-6">
            <Shield className="mr-2 h-4 w-4" />
            Processo Simplificado
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Como <span className="text-gradient">funciona</span> nosso atendimento
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Em apenas 4 passos simples, resolvemos toda sua documentação veicular de forma profissional e sem complicações
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative group">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-primary/30 z-10">
                    <ArrowRight className="absolute -right-2 -top-2 h-4 w-4 text-primary" />
                  </div>
                )}
                
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-primary/5">
                  <CardContent className="p-8 text-center relative">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-neutral-600 mb-6">
            Pronto para começar? Fale conosco agora mesmo!
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 transition-colors cursor-pointer shadow-lg hover:shadow-xl">
            <MessageSquare className="mr-2 h-5 w-5" />
            Iniciar Processo
            <ArrowRight className="ml-2 h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;