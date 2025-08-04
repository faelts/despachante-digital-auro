import { Card, CardContent } from "@/components/ui/card";
import { Award, MapPin, Clock, Users, Shield, Star } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: Clock,
      number: "50+",
      label: "Anos de Experiência",
      description: "Tradição familiar no mercado"
    },
    {
      icon: Award,
      number: "100%",
      label: "Credenciado",
      description: "DETRAN-SC e Conselho Regional"
    },
    {
      icon: Users,
      number: "10k+",
      label: "Clientes Atendidos",
      description: "Satisfação garantida"
    },
    {
      icon: MapPin,
      number: "2",
      label: "Unidades",
      description: "Itajaí e Balneário Camboriú"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Confiabilidade",
      description: "Processos seguros e transparentes com total respaldo legal"
    },
    {
      icon: Clock,
      title: "Agilidade",
      description: "Prazos otimizados para liberar sua documentação rapidamente"
    },
    {
      icon: Star,
      title: "Excelência",
      description: "Atendimento personalizado com foco na satisfação do cliente"
    }
  ];

  return (
    <section id="sobre-nos" className="section-padding bg-gradient-to-br from-neutral-50 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm mb-6">
              <Award className="mr-2 h-4 w-4" />
              Tradição e Confiança
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Sobre o <span className="text-gradient">Mauro Despachante</span>
            </h2>
            
            <div className="space-y-6 text-lg text-neutral-600 mb-8">
              <p>
                O <strong className="text-neutral-900">Mauro Despachante</strong> é uma empresa familiar com mais de 
                <strong className="text-primary"> 50 anos de tradição</strong> no mercado, devidamente credenciada 
                ao DETRAN-SC e ao Conselho Regional dos Despachantes.
              </p>
              <p>
                Nossa estrutura exclusiva permite atendimento personalizado por e-mail, telefone ou presencialmente, 
                sempre focando em <strong className="text-neutral-900">minimizar prazos e garantir eficiência</strong> em 
                todos os processos.
              </p>
              <p>
                Mantemos nosso sucesso e credibilidade através de 
                <strong className="text-accent"> agilidade, confiabilidade, comodidade e qualidade</strong>, 
                atendendo clientes particulares, seguradoras, frotistas, bancos e concessionárias.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">{value.title}</h4>
                    <p className="text-sm text-neutral-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Achievements Cards */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card 
                  key={index} 
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {achievement.number}
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      {achievement.label}
                    </h4>
                    <p className="text-sm text-neutral-600">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              Nossos Diferenciais
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Segurança Total</h4>
                <p className="text-neutral-600 text-sm">Processos 100% seguros e em conformidade legal</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Rapidez Garantida</h4>
                <p className="text-neutral-600 text-sm">Documentação liberada em até 24 horas</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Atendimento Exclusivo</h4>
                <p className="text-neutral-600 text-sm">Consultores especializados para cada caso</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;