import { Star } from "lucide-react";

type T = { name: string; city: string; text: string; photo: string };

const TESTIMONIALS: T[] = [
  { name: "Juliana M.", city: "Belo Horizonte, MG", text: "Comecei fazendo sabão líquido em casa e em 2 meses parei de comprar produto de limpeza no mercado. Economizei mais de R$ 180.", photo: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Cláudia R.", city: "Curitiba, PR", text: "Eu vivia ansiosa. Os chás e a comunidade me deram uma rotina mais leve. Hoje durmo melhor e até meu marido percebeu.", photo: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Patrícia S.", city: "Recife, PE", text: "Vendi meu primeiro bolo de pote por R$ 12. Hoje faço 40 por semana e já tenho minha renda própria. Sou outra mulher.", photo: "https://randomuser.me/api/portraits/women/79.jpg" },
  { name: "Marina F.", city: "Porto Alegre, RS", text: "Achei que era só mais um grupo. Mas as meninas me acolheram como família. Aqui ninguém julga, todo mundo torce.", photo: "https://randomuser.me/api/portraits/women/12.jpg" },
  { name: "Renata L.", city: "Salvador, BA", text: "Em 3 semanas paguei o curso fazendo amaciante caseiro para vizinhas. R$ 9,99 mudou meu mês inteiro.", photo: "https://randomuser.me/api/portraits/women/90.jpg" },
  { name: "Adriana T.", city: "São Paulo, SP", text: "Eu não sabia confeitar nada. Hoje atendo encomendas de aniversário e tenho lista de espera. Coisa que eu jamais sonhei.", photo: "https://randomuser.me/api/portraits/women/55.jpg" },
  { name: "Vanessa P.", city: "Fortaleza, CE", text: "Cansei de depender do salário do meu marido para comprar minhas coisas. Agora tenho meu dinheirinho e isso não tem preço.", photo: "https://randomuser.me/api/portraits/women/32.jpg" },
  { name: "Luciana B.", city: "Goiânia, GO", text: "A comunidade vale cada centavo. Os sorteios, os desafios, as meninas se ajudando… eu nunca mais saio daqui.", photo: "https://randomuser.me/api/portraits/women/21.jpg" },
];

function Card({ t }: { t: T }) {
  return (
    <div className="mx-3 flex w-[320px] shrink-0 flex-col gap-3 rounded-3xl border border-border/60 bg-white p-6 shadow-soft sm:w-[360px]">
      <div className="flex items-center gap-3">
        <img
          src={t.photo}
          alt={t.name}
          loading="lazy"
          className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-[color:var(--rose)]/40"
        />
        <div className="min-w-0">
          <p className="truncate font-semibold text-foreground">{t.name}</p>
          <p className="truncate text-xs text-muted-foreground">{t.city}</p>
        </div>
        <div className="ml-auto flex shrink-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-[color:var(--gold)] text-[color:var(--gold)]" />
          ))}
        </div>
      </div>
      <p className="text-sm leading-relaxed text-foreground/80">"{t.text}"</p>
    </div>
  );
}

export function Testimonials() {
  const row1 = TESTIMONIALS.slice(0, 4);
  const row2 = TESTIMONIALS.slice(4, 8);
  return (
    <div className="space-y-6 overflow-hidden">
      <div className="group relative">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {[...row1, ...row1].map((t, i) => <Card key={"a" + i} t={t} />)}
        </div>
      </div>
      <div className="group relative">
        <div className="flex w-max animate-marquee-rev group-hover:[animation-play-state:paused]">
          {[...row2, ...row2].map((t, i) => <Card key={"b" + i} t={t} />)}
        </div>
      </div>
    </div>
  );
}
