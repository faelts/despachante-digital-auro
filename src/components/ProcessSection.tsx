import { Card, CardContent } from "@/components/ui/card";
import { Shield, HeadphonesIcon, Truck, CreditCard } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: Shield,
      title: "Simples, rápido e confiável",
      description: "Resolvemos toda sua documentação online e sem burocracia, com toda a experiência e eficiência que só o despachante pode oferecer."
    },
    {
      icon: HeadphonesIcon,
      title: "Sem dores de cabeça",
      description: "Nossos consultores ficam responsáveis por todos os trâmites internos, você não precisa pegar filas e nem se preocupar."
    },
    {
      icon: Truck,
      title: "Entrega expressa",
      description: "Você recebe todos os seus documentos sem sair de casa, com a maior agilidade e segurança possível, tudo pelos correios com frete grátis."
    },
    {
      icon: CreditCard,
      title: "Pagamento facilitado",
      description: "Parcelamos todos os seus débitos e do seu veículo, com parcelas que cabem no seu bolso, em até 18x no cartão."
    }
  ];

  return (
    <section id="como-funciona" className="py-section bg-muted/30">
      <div className="container mx-auto px-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entenda como funciona:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="border-0 shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;