import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, FileText, CreditCard, Users, Clock, Shield } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Car,
      title: "Licenciamento Digital (CRLV-e)",
      description: "Licenciamento anual do seu veículo de forma digital e prática"
    },
    {
      icon: CreditCard,
      title: "Pagamento de Débitos",
      description: "Quitação de IPVA, multas e taxas pendentes"
    },
    {
      icon: FileText,
      title: "Transferência de Proprietário",
      description: "Mudança de proprietário de veículos de forma ágil"
    },
    {
      icon: Shield,
      title: "ATPV Digital",
      description: "Autorização para Transferência de Propriedade de Veículo"
    },
    {
      icon: Users,
      title: "Emplacamento de 0km",
      description: "Primeira emplacação para veículos novos"
    },
    {
      icon: Clock,
      title: "2ª Via de Documentos",
      description: "Reemissão de documentos perdidos ou danificados"
    }
  ];

  return (
    <section id="servicos" className="py-section">
      <div className="container mx-auto px-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos serviços
          </h2>
          <h3 className="text-2xl md:text-3xl text-primary mb-6">
            Resolva todos os seus problemas num só lugar!
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              Todo proprietário sabe que, para estar em dia com seu veículo e poder circular tranquilamente pelas ruas, além de estar amparado em caso de acidentes, é necessária documentação do veículo.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              E a melhor forma de conseguir essa documentação sem dores de cabeça, e sem sair de casa, é buscando um despachante confiável.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="border-0 shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-muted/50 rounded-2xl p-8 text-center">
          <p className="text-lg font-medium text-foreground mb-2">
            No <strong>Despachante Mauro</strong>, você pode contar com todos os serviços de licenciamento digital, pagamento de débitos, transferência de proprietário, emplacamento e muito mais.
          </p>
          <p className="text-primary font-semibold text-xl mb-6">
            Tudo isso de forma rápida, online, sem burocracia e em até 18x.
          </p>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            CONHECER TODOS OS SERVIÇOS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;