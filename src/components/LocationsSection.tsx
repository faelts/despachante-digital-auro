import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const LocationsSection = () => {
  const locations = [
    {
      city: "Itajaí",
      title: "Unidade Matriz",
      address: "Av. Sete de Setembro, 538 - Centro",
      phone: "(47) 3349-1616",
      whatsapp: "(47) 99914-0056",
      description: "Nossa unidade principal com mais de 50 anos de tradição e experiência no mercado.",
      highlight: "Unidade Principal",
      mapUrl: "https://maps.google.com/?q=Av.+Sete+de+Setembro,+538+-+Centro,+Itajaí"
    },
    {
      city: "Balneário Camboriú",
      title: "Unidade Balneário",
      address: "Av. Alvin Bauer, 509 - Centro", 
      phone: "(47) 3065-0704",
      whatsapp: "(47) 99219-0907",
      description: "Nossa nova unidade estrategicamente localizada para melhor atender a região litorânea.",
      highlight: "Nova Unidade",
      mapUrl: "https://maps.google.com/?q=Av.+Alvin+Bauer,+509+-+Centro,+Balneário+Camboriú"
    }
  ];

  const operatingHours = [
    "Segunda à Sexta: 08h às 18h",
    "Sábado: 08h às 12h",
    "Atendimento online 24h"
  ];

  return (
    <section className="section-padding bg-gradient-surface">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-medium text-sm mb-6">
            <MapPin className="mr-2 h-4 w-4" />
            Nossas Unidades
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Estamos <span className="text-gradient">presentes</span> na região
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Duas unidades estrategicamente localizadas para oferecer o melhor atendimento e comodidade
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {locations.map((location, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden group"
            >
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-gradient-primary p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-accent text-white px-3 py-1 rounded-bl-xl text-xs font-semibold">
                    {location.highlight}
                  </div>
                  <div className="flex items-center mb-2">
                    <MapPin className="h-6 w-6 mr-3" />
                    <h3 className="text-2xl font-bold">{location.city}</h3>
                  </div>
                  <p className="text-primary-light">{location.title}</p>
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white/10 rounded-full"></div>
                  <div className="absolute -top-2 -left-2 w-12 h-12 bg-white/10 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-neutral-600 mb-6">{location.description}</p>
                  
                  {/* Contact Info */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span className="text-neutral-700">{location.address}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-neutral-700">{location.phone}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                      <span className="text-neutral-700 font-medium">{location.whatsapp}</span>
                      <span className="ml-2 bg-accent/10 text-accent px-2 py-1 rounded-full text-xs">WhatsApp</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                      className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-xl"
                      onClick={() => window.open(`https://wa.me/55${location.whatsapp.replace(/\D/g, '')}`, '_blank')}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      WhatsApp
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-xl"
                      onClick={() => window.open(location.mapUrl, '_blank')}
                    >
                      <Navigation className="mr-2 h-4 w-4" />
                      Localizar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Operating Hours */}
        <div className="bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
              Horários de Funcionamento
            </h3>
            <p className="text-neutral-600">
              Estamos aqui para te atender quando você precisar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {operatingHours.map((hour, index) => (
              <div key={index} className="text-center p-4 bg-neutral-50 rounded-xl">
                <div className="font-semibold text-neutral-900">{hour}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6 p-4 bg-accent/5 rounded-xl">
            <p className="text-accent font-semibold">
              💬 Atendimento via WhatsApp disponível 24 horas por dia!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;