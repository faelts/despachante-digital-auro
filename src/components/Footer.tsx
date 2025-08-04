import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-foreground text-background">
      <div className="container mx-auto px-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              MAURO
              <span className="block text-sm font-normal opacity-70 -mt-1">
                DESPACHANTE
              </span>
            </div>
            <p className="text-background/70 mb-4">
              50+ anos de tradição em serviços de despachante. Credenciado ao DETRAN-SC e Conselho Regional dos Despachantes.
            </p>
            <p className="text-sm text-background/60">
              CNPJ: 82.716.077/0001-27
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Serviços</h3>
            <ul className="space-y-2 text-background/70">
              <li>Licenciamento Digital</li>
              <li>Pagamento de IPVA</li>
              <li>Transferência de Veículo</li>
              <li>2ª Via de Documentos</li>
              <li>Renovação de CNH</li>
              <li>Multas de Trânsito</li>
            </ul>
          </div>

          {/* Itajaí Unit */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Itajaí</h3>
            <div className="space-y-3 text-background/70">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Av. Sete de Setembro, 538 - Centro</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">(47) 3349-1616</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">(47) 99914-0056</span>
              </div>
            </div>
          </div>

          {/* Balneário Unit */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Balneário Camboriú</h3>
            <div className="space-y-3 text-background/70">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Av. Alvin Bauer, 509 - Centro</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">(47) 3065-0704</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">(47) 99219-0907</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/60 text-sm mb-4 md:mb-0">
              © 2024 Despachante Mauro. Todos os direitos reservados.
            </div>
            <div className="text-background/60 text-sm">
              Rápido, online e sem burocracia.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;