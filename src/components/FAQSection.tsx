import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, CheckCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "O que é um Documento Digital?",
      answer: "Com os avanços da tecnologia, criamos o aplicativo \"Carteira Digital de Trânsito\" que substitui a CNH física, e o CRLV-e (documento digital de licenciamento). Após aprovação do pedido, você pode baixar imediatamente as versões digitais e utilizar seu veículo normalmente, sem aguardar a versão impressa."
    },
    {
      question: "Como fazer um documento online?",
      answer: "É muito simples! Através do nosso atendimento especializado, você informa qual documento ou serviço deseja. Nossa equipe cuidará de todo o processo, desde a análise inicial até a entrega final, mantendo você informado em cada etapa."
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Oferecemos máxima flexibilidade: transferência bancária, boleto à vista com desconto, ou parcelamento em até 18x no cartão de crédito sem juros. Você escolhe a forma que melhor se adapta ao seu orçamento."
    },
    {
      question: "Posso usar cartão de terceiros?",
      answer: "Sim! Você pode utilizar cartão de familiares ou amigos, desde que os dados do responsável pelo pagamento sejam os mesmos do titular do cartão. Isso oferece mais flexibilidade para nossa clientela."
    },
    {
      question: "Quais são os prazos de entrega?",
      answer: "Após aprovação, quitamos todas as taxas e débitos em até 24 horas, liberando imediatamente o uso do veículo e o CRLV Digital. O documento físico é entregue pelos Correios (frete grátis) em 3 a 5 dias úteis."
    },
    {
      question: "Tempo para aprovação do pedido?",
      answer: "Pedidos com pagamento no cartão são aprovados em até 48h úteis. Para boleto, o prazo é de até 72h para compensação. Após aprovação, a quitação dos débitos ocorre em até 24 horas."
    },
    {
      question: "Quanto tempo para baixa dos débitos?",
      answer: "Após aprovação do pedido, quitamos seus débitos em até 24 horas. A baixa nos órgãos governamentais é imediata, permitindo que você utilize seu veículo normalmente sem restrições."
    }
  ];

  const benefits = [
    "Aprovação em até 48h",
    "Documento digital imediato", 
    "Frete grátis via Correios",
    "Parcelamento em até 18x"
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm mb-6">
            <HelpCircle className="mr-2 h-4 w-4" />
            Dúvidas Frequentes
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre nossos serviços e processos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border border-neutral-200 rounded-xl px-6 py-2 bg-neutral-50 hover:bg-neutral-100 transition-colors"
                >
                  <AccordionTrigger className="text-left text-neutral-900 hover:text-primary font-semibold py-4 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-600 pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Benefits Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-primary rounded-3xl p-8 text-white sticky top-24">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                Nossos Diferenciais
              </h3>
              
              <p className="text-primary-light mb-6">
                Vantagens exclusivas que só o Mauro Despachante oferece
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                    <span className="text-white">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-white/10 rounded-xl p-4 mb-6">
                <div className="text-2xl font-bold text-white mb-1">50+</div>
                <div className="text-primary-light text-sm">Anos de experiência</div>
              </div>
              
              <button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;