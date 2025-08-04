import { MapPin, Phone, Mail, Clock, Shield, Award } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Licenciamento Digital (CRLV-e)",
    "Pagamento de IPVA",
    "Transferência de Veículo", 
    "Renovação de CNH",
    "2ª Via de Documentos",
    "Consulta de Multas"
  ];

  const legalInfo = [
    "Política de Privacidade",
    "Termos de Uso",
    "Certificações",
    "Credenciamentos"
  ];

  return (
    <footer id="contato" className="bg-neutral-900 text-white">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="text-3xl font-bold tracking-tight mb-4">
                <span className="text-primary">MAURO</span>
                <span className="block text-lg font-medium text-neutral-400 -mt-1">
                  DESPACHANTE
                </span>
              </div>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                50+ anos de tradição em serviços de despachante. Credenciado ao DETRAN-SC 
                e Conselho Regional dos Despachantes.
              </p>
              
              {/* Certifications */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center text-sm text-accent">
                  <Shield className="h-4 w-4 mr-2" />
                  DETRAN-SC
                </div>
                <div className="flex items-center text-sm text-accent">
                  <Award className="h-4 w-4 mr-2" />
                  Certificado
                </div>
              </div>
              
              <p className="text-xs text-neutral-500">
                CNPJ: 82.716.077/0001-27
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Nossos Serviços</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#servicos" 
                      className="text-neutral-300 hover:text-accent transition-colors text-sm"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Itajaí Unit */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Unidade Itajaí</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                  <div>
                    <div className="text-sm text-white font-medium">Matriz</div>
                    <div className="text-sm text-neutral-300">
                      Av. Sete de Setembro, 538<br />Centro, Itajaí-SC
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                  <div className="text-sm text-neutral-300">(47) 3349-1616</div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                  <div className="text-sm text-neutral-300">(47) 99914-0056</div>
                </div>
              </div>
            </div>

            {/* Balneário Unit */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Balneário Camboriú</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                  <div>
                    <div className="text-sm text-white font-medium">Filial</div>
                    <div className="text-sm text-neutral-300">
                      Av. Alvin Bauer, 509<br />Centro, Balneário Camboriú-SC
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                  <div className="text-sm text-neutral-300">(47) 3065-0704</div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                  <div className="text-sm text-neutral-300">(47) 99219-0907</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="border-t border-neutral-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <Clock className="h-5 w-5 text-accent" />
              <div className="text-sm text-neutral-300">
                <span className="font-medium text-white">Horário:</span> Seg-Sex 8h-18h • Sáb 8h-12h • 
                <span className="text-accent ml-1">WhatsApp 24h</span>
              </div>
            </div>
            <div className="text-sm text-accent font-medium">
              🚀 Rápido, online e sem burocracia
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-neutral-400 text-sm mb-4 md:mb-0">
              © {currentYear} Despachante Mauro. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-6 text-sm">
              {legalInfo.map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-neutral-400 hover:text-accent transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;