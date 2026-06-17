import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  { q: "O acesso é imediato?", a: "Sim. Assim que o pagamento é confirmado, você recebe o acesso ao aplicativo e a todos os cursos por e-mail em poucos minutos." },
  { q: "Preciso ter experiência?", a: "Não. As aulas são em vídeo, passo a passo, pensadas para quem está começando do absoluto zero." },
  { q: "Posso assistir pelo celular?", a: "Sim. O aplicativo funciona em qualquer celular, tablet ou computador, a qualquer hora." },
  { q: "Como funciona a Comunidade Premium?", a: "É um plano mensal de R$ 37,99 (você pode cancelar quando quiser) que libera todos os cursos atuais e futuros, comunidade exclusiva, desafios, sorteios e bônus contínuos." },
  { q: "É realmente possível ter uma renda extra?", a: "Sim. Centenas de mulheres já fazem produtos de limpeza, bolos e doces para vender em casa, com receitas simples e investimento baixo." },
  { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Se não amar, devolvemos 100% do seu dinheiro, sem perguntas." },
  { q: "Como funcionam os bilhetes da rifa?", a: "Cada bilhete participa de uma rifa beneficente cuja arrecadação é destinada às nossas escolinhas dominicais parceiras." },
];

export function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {FAQS.map((f, i) => (
        <AccordionItem
          key={i}
          value={"i" + i}
          className="mb-3 overflow-hidden rounded-2xl border border-border/70 bg-white px-5 shadow-soft"
        >
          <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-foreground/75">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
