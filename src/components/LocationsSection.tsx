import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";

const LocationsSection = () => {
  const locations = [
    {
      city: "Itajaí",
      address: "Av. Sete de Setembro, 538 - Centro",
      phone: "(47) 3349-1616",
      whatsapp: "(47) 99914-0056",
      description: "Nossa unidade matriz com mais de 50 anos de tradição"
    },
    {
      city: "Balneário Camboriú",
      address: "Av. Alvin Bauer, 509 - Centro", 
      phone: "(47) 3065-0704",
      whatsapp: "(47) 99219-0907",
      description: "Nova unidade para melhor atender a região"
    }
  ];

  return (
    <section className="py-section">
      <div className="container mx-auto px-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Estamos presentes em
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Duas unidades estrategicamente localizadas para oferecer o melhor atendimento
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-brand transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {location.city}
                  </h3>
                  <p className="text-muted-foreground">
                    {location.description}
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{location.address}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{location.phone}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{location.whatsapp}</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  size="lg"
                >
                  {index === 0 ? 'ATENDIMENTO ITAJAÍ' : 'ATENDIMENTO BALNEÁRIO'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;