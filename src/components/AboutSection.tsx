import { Card, CardContent } from "@/components/ui/card";
import { Award, MapPin, Clock, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Clock,
      title: "50+ Anos",
      description: "de tradição no mercado"
    },
    {
      icon: Award,
      title: "Credenciado",
      description: "DETRAN-SC e Conselho Regional"
    },
    {
      icon: Users,
      title: "Empresa Familiar",
      description: "Atendimento personalizado"
    },
    {
      icon: MapPin,
      title: "2 Unidades",
      description: "Itajaí e Balneário Camboriú"
    }
  ];

  return (
    <section id="sobre" className="py-section bg-muted/30">
      <div className="container mx-auto px-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sobre nós
            </h2>
            <h3 className="text-2xl text-primary font-semibold mb-6">
              Mauro Despachante
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                O <strong className="text-foreground">Mauro Despachante</strong> é uma empresa familiar de tradição há mais de 50 anos no mercado, e devidamente credenciada ao DETRAN-SC e ao Conselho Regional dos Despachantes.
              </p>
              <p>
                Oferecemos uma estrutura exclusiva para atender-lhe por e-mail, telefone ou presencialmente, sempre trabalhando na forma de minimizarmos prazos e garantindo a eficiência em todos os processos executados.
              </p>
              <p>
                <strong className="text-foreground">Agilidade, confiabilidade, comodidade e qualidade</strong>, são dessa forma que mantemos o sucesso e credibilidade de nossa empresa junto a clientes particulares, companhias de seguros, frotistas, bancos, instituições financeiras, revendedores, leilões e concessionárias.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-soft">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;