import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "O que é um Documento Digital?",
      answer: "Com os avanços da tecnologia, é cada vez mais comum carregarmos nossas informações e documentos em nossos smartphones, e pensando nisso foram criados o aplicativo \"Carteira Digital de Trânsito\" que substitui a CNH de papel, e o CRLV-e que nada mais é do que a versão digital do documento verdinho de licenciamento anual de porte obrigatório. Assim, logo após aprovado o seu pedido, você já pode baixar as versões digitais e utilizar o seu veículo normalmente, dispensando assim a espera da versão em papel."
    },
    {
      question: "Como fazer um documento online?",
      answer: "É muito simples, através do nosso formulário você consegue informar seu documento ou veículo que tem interesse em ser atendido, e após preencher e enviar esses dados, um de nossos consultores entrará em contato para lhe auxiliar com o restante do processo, até você concluir o seu pedido e receber seu documento em casa."
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Todos os pagamentos podem ser efetuados por transferência bancária, boleto à vista ou em até 12x no cartão de crédito, como você preferir."
    },
    {
      question: "Posso utilizar um cartão que não está em meu nome?",
      answer: "Sim, você pode realizar o pedido com um cartão de um parente ou amigo se precisar, basta que os dados do responsável pelo pagamento sejam os mesmos do titular do cartão."
    },
    {
      question: "Quais são os prazos para entrega dos meus documentos?",
      answer: "Após a aprovação de seu pedido, nós efetuamos os pagamentos de todas as taxas e débitos em até 24 horas, e você já consegue utilizar o seu veículo normalmente. Além disso, seu CRLV Digital já estará disponível para download. Seu documento físico será entregue pelos correios no endereço que você escolher de 3 a 5 dias úteis, após a quitação pela nossa equipe."
    },
    {
      question: "Quanto tempo um pedido leva para ser aprovado?",
      answer: "Os pedidos têm prazo de 48h úteis para serem aprovados para pagamentos no cartão de crédito, e de até 72h para compensação de pagamentos no boleto. Após aprovado, os pagamentos de seus débitos são feitos em até 24 horas."
    },
    {
      question: "Quanto tempo para conseguir baixa em meus débitos?",
      answer: "Após a aprovação do seu pedido, seus débitos são quitados em até 24 horas pela nossa equipe, e logo em seguida seus débitos já constarão quitados nos órgãos governamentais."
    }
  ];

  return (
    <section className="py-section bg-muted/30">
      <div className="container mx-auto px-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Esclarecemos as principais dúvidas sobre nossos serviços
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;