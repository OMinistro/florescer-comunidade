import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles, Heart, ShoppingBag, Coffee, Cake, Users, Trophy, Gift,
  Check, Shield, Lock, Clock, Star, ArrowRight, Zap, Flower2, Sun,
  HandHeart, Ticket, MessageCircle, Crown, PlayCircle,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { Countdown } from "@/components/landing/Countdown";
import { Roulette } from "@/components/landing/Roulette";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";

import giftWoman from "@/assets/gift-woman.png";
import communityCakes from "@/assets/community-cakes.png";
import productsWoman from "@/assets/products-woman.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Comunidade Florescer — Aprenda, Economize e Conquiste Sua Renda" },
      { name: "description", content: "Uma comunidade feminina onde mulheres aprendem habilidades práticas, economizam dinheiro e criam sua própria renda em casa. Acesso imediato a partir de R$ 9,99." },
      { property: "og:title", content: "Comunidade Florescer — Feito para Você" },
      { property: "og:description", content: "Cursos práticos, comunidade acolhedora e oportunidade real de renda. Comece hoje por R$ 9,99." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

function Landing() {
  useReveal();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <PromoBar />
      <Hero />
      <ProblemSection />
      <StorySection />
      <CommunityIntro />
      <FutureVision />
      <Benefits />
      <HowItWorks />
      <WelcomeGift />
      <CharitySection />
      <PlansComparison />
      <TestimonialsSection />
      <WhatsIncluded />
      <EntryBenefits />
      <FaqSection />
      <FinalCta />
      <Footer />
      <StickyCta />
      <ProgressBar />
    </div>
  );
}

/* ------------------- Promo Bar ------------------- */
function PromoBar() {
  return (
    <div className="relative z-40 w-full bg-rose-gradient text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 px-4 py-2.5 text-center text-xs font-medium sm:flex-row sm:gap-4 sm:text-sm">
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5" />
          Oferta especial de boas-vindas termina em
        </span>
        <Countdown />
      </div>
    </div>
  );
}

/* ------------------- Hero ------------------- */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero">
      {/* Floating decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Flower2 className="absolute left-[6%] top-[18%] h-10 w-10 text-[color:var(--rose)] opacity-50 animate-float" />
        <Sun className="absolute right-[8%] top-[12%] h-12 w-12 text-[color:var(--gold)] opacity-50 animate-float" style={{ animationDelay: "1.2s" }} />
        <Heart className="absolute left-[14%] bottom-[10%] h-7 w-7 text-[color:var(--rose-deep)] opacity-40 animate-float" style={{ animationDelay: "2.4s" }} />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-14 sm:pt-20 lg:grid-cols-2 lg:gap-8 lg:pb-28">
        <div className="reveal text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--rose)]/40 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--rose-deep)] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            +12.000 mulheres já florescendo
          </span>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Um lugar feito <em className="font-medium italic text-[color:var(--rose-deep)]">para você</em> —
            onde mulheres aprendem, economizam e conquistam a sua própria renda.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-base text-foreground/70 sm:text-lg lg:mx-0">
            Cursos práticos, comunidade acolhedora e oportunidade real de ter mais dinheiro
            no fim do mês — sem depender de ninguém, sem complicação, no seu tempo.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
            <a href="#planos" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose-gradient px-7 py-4 text-sm font-semibold text-white shadow-rose transition hover:scale-[1.02] sm:w-auto">
              Quero entrar por R$ 9,99
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#como-funciona" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-white/70 px-7 py-4 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-white sm:w-auto">
              <PlayCircle className="h-4 w-4" /> Como funciona
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground lg:justify-start">
            <span className="inline-flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-[color:var(--sage)]" />Garantia de 7 dias</span>
            <span className="inline-flex items-center gap-1.5"><Lock className="h-3.5 w-3.5 text-[color:var(--sage)]" />Pagamento 100% seguro</span>
            <span className="inline-flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-[color:var(--gold)]" />Acesso imediato</span>
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[color:var(--rose)]/40 blur-3xl" />
          <div className="absolute -bottom-8 -right-6 h-40 w-40 rounded-full bg-[color:var(--gold)]/40 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border-8 border-white shadow-rose">
            <img src={giftWoman} alt="Mulher sorrindo segurando um presente e um certificado" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -left-6 bottom-6 flex max-w-[220px] items-center gap-3 rounded-2xl border border-border bg-white p-3 shadow-soft animate-float">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--sage)]/40">
              <HandHeart className="h-5 w-5 text-[color:var(--accent-foreground)]" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold">Acolhimento real</p>
              <p className="text-[11px] text-muted-foreground">mulheres por mulheres</p>
            </div>
          </div>
          <div className="absolute -right-4 top-10 flex items-center gap-2 rounded-2xl border border-border bg-white px-3 py-2 shadow-soft animate-float" style={{ animationDelay: "1.5s" }}>
            <Star className="h-4 w-4 fill-[color:var(--gold)] text-[color:var(--gold)]" />
            <span className="text-xs font-semibold">4.9 / 5 — 2.317 avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------- Problem ------------------- */
function ProblemSection() {
  const pains = [
    "O dinheiro nunca chega até o fim do mês",
    "Você sente que está sempre pedindo para o marido",
    "A ansiedade do dia a dia consome sua energia",
    "Você gostaria de ter uma renda só sua",
    "Falta um lugar onde se sentir entendida",
    "Você sabe que pode mais — mas não sabe por onde começar",
  ];
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--rose-deep)]">O dia a dia</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
            Se você está aqui, é porque algo dentro de você já cansou.
          </h2>
          <p className="mt-4 text-foreground/70">
            Não é frescura. É a vida de milhares de mulheres como você — e tem solução.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((p, i) => (
            <div key={i} className="reveal flex items-start gap-3 rounded-2xl border border-border/70 bg-white p-5 shadow-soft">
              <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[color:var(--rose)]/30">
                <Heart className="h-4 w-4 text-[color:var(--rose-deep)]" />
              </div>
              <p className="text-sm font-medium text-foreground/85">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------- Story ------------------- */
function StorySection() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--cream)] py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div className="reveal relative order-2 lg:order-1">
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[color:var(--sage)]/40 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border-8 border-white shadow-soft">
            <img src={productsWoman} alt="Mulher com produtos de limpeza caseiros que ela mesma produz" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="reveal order-1 lg:order-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--rose-deep)]">A nossa história</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
            Você não está sozinha. Nós já estivemos exatamente onde você está.
          </h2>
          <div className="mt-6 space-y-4 text-foreground/75">
            <p>
              A Comunidade Florescer nasceu da história de mulheres comuns —
              mães, esposas, filhas — que olhavam para a conta no fim do mês e sentiam aquele aperto no peito.
            </p>
            <p>
              Mulheres que descobriram que <strong className="font-semibold text-foreground">com pequenas habilidades,
              em casa, com o que já têm</strong>, podiam economizar centenas de reais e até começar a ganhar o próprio dinheiro.
            </p>
            <p>
              Hoje somos uma rede de mais de 12.000 mulheres se ajudando, aprendendo juntas e celebrando
              cada pequena vitória — desde o primeiro sabão líquido até o primeiro bolo vendido.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------- Community Intro ------------------- */
function CommunityIntro() {
  const pillars = [
    { icon: Sparkles, t: "Aprendizado", d: "Cursos práticos, passo a passo." },
    { icon: HandHeart, t: "Apoio", d: "Mulheres que torcem por você." },
    { icon: Trophy, t: "Crescimento", d: "Pequenas vitórias todos os dias." },
    { icon: Users, t: "Pertencimento", d: "Um lugar onde você é entendida." },
    { icon: ShoppingBag, t: "Renda", d: "Sua primeira venda mais perto." },
    { icon: Crown, t: "Confiança", d: "A mulher que você sabe que é." },
  ];
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--rose-deep)]">A Comunidade</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
            Mais do que cursos. Um lugar para florescer.
          </h2>
          <p className="mt-4 text-foreground/70">
            Aqui você não compra apenas conteúdo. Você ganha uma rede que caminha com você.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={i} className="reveal group rounded-3xl border border-border/70 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-rose">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--rose)]/25 transition group-hover:bg-[color:var(--rose)]/40">
                <p.icon className="h-6 w-6 text-[color:var(--rose-deep)]" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{p.t}</h3>
              <p className="mt-1 text-sm text-foreground/70">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------- Future Vision ------------------- */
function FutureVision() {
  const items = [
    "Você abrindo a geladeira e sabendo que esse mês sobrou dinheiro.",
    "Você fazendo o seu próprio amaciante e economizando R$ 120 por mês.",
    "Você recebendo o primeiro PIX da sua primeira venda — e chorando de orgulho.",
    "Você dormindo tranquila, sem aquele aperto no peito.",
    "Você dizendo 'eu consigo' — e acreditando de verdade.",
  ];
  return (
    <section className="relative overflow-hidden bg-[color:var(--sand)]/40 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--rose-deep)]">Imagine</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
            Feche os olhos. Veja a sua vida daqui a 3 meses.
          </h2>
        </div>
        <ul className="mt-12 space-y-4">
          {items.map((t, i) => (
            <li key={i} className="reveal flex items-start gap-4 rounded-3xl border border-border/60 bg-white p-5 shadow-soft">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold-gradient text-white">
                <Check className="h-5 w-5" />
              </div>
              <p className="text-base font-medium text-foreground/85 sm:text-lg">{t}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------- Benefits ------------------- */
function Benefits() {
  const items = [
    { icon: ShoppingBag, t: "Curso de Produtos de Limpeza Caseiros", d: "Sabão, amaciante, multiuso, desinfetante. Tudo testado, barato e que rende." },
    { icon: Coffee, t: "Curso de Chás e Receitas Naturais", d: "Receitas para ansiedade, sono, imunidade e disposição — feitas em casa." },
    { icon: Cake, t: "Curso de Confeitaria para Renda", d: "Bolos de pote, brigadeiros gourmet e doces que viram seu primeiro CNPJ." },
  ];
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--rose-deep)]">O que você aprende</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
            Três cursos. Resultado real. No seu tempo.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((c, i) => (
            <div key={i} className="reveal group relative overflow-hidden rounded-3xl border border-border/70 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-rose">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color:var(--rose)]/20 transition group-hover:scale-125" />
              <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-rose-gradient text-white shadow-rose">
                <c.icon className="h-7 w-7" />
              </div>
              <h3 className="relative mt-5 text-xl font-semibold">{c.t}</h3>
              <p className="relative mt-2 text-sm text-foreground/70">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------- How It Works ------------------- */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Escolha seu plano", d: "R$ 9,99 (acesso vitalício) ou Comunidade Premium." },
    { n: "02", t: "Receba o acesso imediato", d: "Aplicativo liberado em minutos no seu e-mail." },
    { n: "03", t: "Comece pequeno, cresça junto", d: "Aulas curtinhas, comunidade ao vivo, sem pressa." },
    { n: "04", t: "Veja o resultado em casa", d: "Economia no mês 1. Renda extra no mês 2." },
  ];
  return (
    <section id="como-funciona" className="bg-[color:var(--cream)] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--rose-deep)]">Como funciona</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">Simples, do jeito que tem que ser.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={i} className="reveal relative rounded-3xl border border-border/70 bg-white p-6 shadow-soft">
              <span className="font-display text-5xl font-semibold text-[color:var(--rose)]/60">{s.n}</span>
              <h3 className="mt-2 text-lg font-semibold">{s.t}</h3>
              <p className="mt-1 text-sm text-foreground/70">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------- Welcome Gift Roulette ------------------- */
function WelcomeGift() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[color:var(--rose)]/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-3xl px-4 text-center">
        <div className="reveal">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-gradient px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-gold">
            <Gift className="h-3.5 w-3.5" /> Presente de Boas-Vindas
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold sm:text-4xl">
            Gire a roleta e desbloqueie seu presente especial.
          </h2>
          <p className="mt-3 text-foreground/70">
            Toda nova mulher que chega na comunidade tem direito a um presente extra. Gire e descubra o seu.
          </p>
        </div>
        <div className="reveal mt-12">
          <Roulette />
        </div>
      </div>
    </section>
  );
}

/* ------------------- Charity / Escolinha ------------------- */
function CharitySection() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-28">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(180deg, oklch(0.985 0.018 75 / 0.92), oklch(0.97 0.03 60 / 0.96)), url(${communityCakes})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="mx-auto max-w-4xl px-4 text-center">
        <div className="reveal">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--sage)]/60 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--accent-foreground)] backdrop-blur">
            <HandHeart className="h-3.5 w-3.5" /> Causa que move a comunidade
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold sm:text-4xl">
            Cada mulher que entra, ajuda uma criança a sonhar.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/75">
            Parte da nossa receita é destinada às <strong>escolinhas dominicais</strong> parceiras,
            que cuidam de centenas de crianças com lanche, material e amor.
            E você participa diretamente disso através das nossas rifas beneficentes.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------- Plans Comparison ------------------- */
function PlansComparison() {
  return (
    <section id="planos" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--rose-deep)]">Escolha o seu plano</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
            Comece pequeno. Ou vá com tudo.
          </h2>
          <p className="mt-3 text-foreground/70">Você escolhe o ritmo. Os dois planos abrem portas reais.</p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
          {/* Initial */}
          <div className="reveal relative flex flex-col rounded-3xl border border-border/70 bg-white p-8 shadow-soft">
            <h3 className="text-xl font-semibold">Plano Inicial</h3>
            <p className="mt-1 text-sm text-muted-foreground">Pagamento único — acesso vitalício</p>
            <div className="mt-6 flex items-end gap-2">
              <span className="text-5xl font-semibold tracking-tight">R$ 9,99</span>
              <span className="mb-2 text-sm text-muted-foreground">à vista</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "3 cursos completos (limpeza, chás e confeitaria)",
                "Acesso imediato pelo aplicativo",
                "1 bilhete da rifa beneficente",
                "Comunidade de boas-vindas",
                "Garantia de 7 dias",
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent-foreground)]" />
                  <span className="text-foreground/80">{f}</span>
                </li>
              ))}
            </ul>
            <a href="#cta" className="mt-8 inline-flex items-center justify-center rounded-full border-2 border-[color:var(--rose-deep)] px-6 py-3.5 text-sm font-semibold text-[color:var(--rose-deep)] transition hover:bg-[color:var(--rose)]/20">
              Quero entrar por R$ 9,99
            </a>
          </div>

          {/* Premium */}
          <div className="reveal relative flex flex-col overflow-hidden rounded-3xl border-2 border-[color:var(--rose-deep)] bg-premium-gradient p-8 text-white shadow-rose">
            <div className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-gold-gradient px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-gold">
              <Crown className="h-3 w-3" /> Mais escolhido
            </div>
            <h3 className="text-xl font-semibold">Comunidade Premium</h3>
            <p className="mt-1 text-sm text-white/80">Plano mensal — cancele quando quiser</p>
            <div className="mt-6 flex items-end gap-2">
              <span className="text-5xl font-semibold tracking-tight">R$ 37,99</span>
              <span className="mb-2 text-sm text-white/80">/ mês</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Aplicativo com cursos diversificados",
                "Biblioteca completa disponível 24h",
                "Todos os futuros conteúdos inclusos",
                "Comunidade exclusiva e ativa",
                "Área de desafios e inspiração",
                "Sorteios especiais entre membros",
                "Bônus contínuos e atualizações",
                "5 bilhetes da rifa beneficente",
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
                  <span className="text-white/95">{f}</span>
                </li>
              ))}
            </ul>
            <a href="#cta" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[color:var(--rose-deep)] shadow-gold transition hover:scale-[1.02]">
              Quero fazer parte da Premium <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-3 text-center text-[11px] text-white/70">
              * R$ 37,99 cobrados mensalmente. Cancele a qualquer momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------- Testimonials ------------------- */
function TestimonialsSection() {
  return (
    <section className="bg-[color:var(--cream)] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--rose-deep)]">Histórias reais</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
            Mulheres comuns, vidas transformadas.
          </h2>
          <p className="mt-3 text-foreground/70">De Norte a Sul, elas são a prova de que dá certo.</p>
        </div>
      </div>
      <div className="reveal mt-12">
        <Testimonials />
      </div>
    </section>
  );
}

/* ------------------- What's Included ------------------- */
function WhatsIncluded() {
  const items = [
    { icon: PlayCircle, t: "Aulas em vídeo HD", d: "Curtas, diretas, sem enrolação." },
    { icon: ShoppingBag, t: "Aplicativo exclusivo", d: "Tudo na palma da sua mão." },
    { icon: MessageCircle, t: "Comunidade ativa", d: "Tira-dúvidas todos os dias." },
    { icon: Trophy, t: "Desafios mensais", d: "Para você não desistir no meio." },
    { icon: Gift, t: "Bônus surpresa", d: "Receitas e materiais extras." },
    { icon: Crown, t: "Sorteios especiais", d: "Só para membros Premium." },
  ];
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--rose-deep)]">O que está incluído</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">Tudo o que você precisa, em um só lugar.</h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div key={i} className="reveal flex items-start gap-4 rounded-3xl border border-border/70 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-rose">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[color:var(--sage)]/40">
                <it.icon className="h-5 w-5 text-[color:var(--accent-foreground)]" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold">{it.t}</h3>
                <p className="text-sm text-foreground/70">{it.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------- Entry Benefits / Rifa ------------------- */
function EntryBenefits() {
  return (
    <section className="bg-[color:var(--sand)]/40 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--rose-deep)]">Benefícios de entrada</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
            Você entra, ganha presentes — e ainda ajuda quem precisa.
          </h2>
          <p className="mt-3 text-foreground/70">
            Cada plano dá direito a bilhetinhos para a nossa rifa beneficente das escolinhas dominicais.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="reveal flex flex-col items-center rounded-3xl border border-border/70 bg-white p-7 text-center shadow-soft">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[color:var(--rose)]/30">
              <Ticket className="h-7 w-7 text-[color:var(--rose-deep)]" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Plano Inicial</h3>
            <p className="mt-1 text-sm text-muted-foreground">R$ 9,99</p>
            <p className="mt-4 text-3xl font-semibold text-[color:var(--rose-deep)]">1 bilhete</p>
            <p className="mt-1 text-sm text-foreground/70">para a rifa beneficente</p>
          </div>
          <div className="reveal flex flex-col items-center rounded-3xl border-2 border-[color:var(--gold)] bg-white p-7 text-center shadow-gold">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-gradient text-white">
              <Ticket className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Comunidade Premium</h3>
            <p className="mt-1 text-sm text-muted-foreground">R$ 37,99/mês</p>
            <p className="mt-4 text-3xl font-semibold text-[color:var(--rose-deep)]">5 bilhetes</p>
            <p className="mt-1 text-sm text-foreground/70">para a rifa beneficente</p>
          </div>
        </div>
        <p className="reveal mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
          Os bilhetes fazem parte das ações beneficentes da comunidade e revertem para as escolinhas dominicais parceiras.
        </p>
      </div>
    </section>
  );
}

/* ------------------- FAQ ------------------- */
function FaqSection() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--rose-deep)]">Perguntas frequentes</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">Tudo o que você quer saber.</h2>
        </div>
        <div className="reveal mt-10">
          <Faq />
        </div>
      </div>
    </section>
  );
}

/* ------------------- Final CTA ------------------- */
function FinalCta() {
  return (
    <section id="cta" className="relative overflow-hidden bg-rose-gradient py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <Flower2 className="absolute left-[10%] top-[20%] h-24 w-24 animate-float" />
        <Heart className="absolute right-[12%] top-[15%] h-16 w-16 animate-float" style={{ animationDelay: "1.5s" }} />
        <Sparkles className="absolute right-[20%] bottom-[20%] h-20 w-20 animate-float" style={{ animationDelay: "2.5s" }} />
      </div>
      <div className="mx-auto max-w-3xl px-4 text-center">
        <div className="reveal">
          <h2 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Hoje é o seu dia de florescer.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-balance text-white/90">
            Mais de 12.000 mulheres deram esse passo. Algumas economizaram, outras começaram a ganhar.
            Todas se sentiram acolhidas. Agora é a sua vez.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="#planos" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[color:var(--rose-deep)] shadow-gold transition hover:scale-[1.03] sm:w-auto">
              Entrar por R$ 9,99 <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#planos" className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/80 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto">
              Ver Comunidade Premium
            </a>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/80">
            <span className="inline-flex items-center gap-1.5"><Shield className="h-3.5 w-3.5" />Garantia de 7 dias</span>
            <span className="inline-flex items-center gap-1.5"><Lock className="h-3.5 w-3.5" />Pagamento seguro</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />Acesso imediato</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------- Footer ------------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-[color:var(--cream)] py-10 text-center text-xs text-muted-foreground">
      <div className="mx-auto max-w-4xl px-4">
        <p className="font-display text-base font-semibold text-[color:var(--rose-deep)]">Comunidade Florescer</p>
        <p className="mt-2">© {new Date().getFullYear()} Comunidade Florescer — Feito por mulheres, para mulheres.</p>
        <p className="mt-1">Este site não é afiliado ao Facebook ou Google. Resultados podem variar de pessoa para pessoa.</p>
      </div>
    </footer>
  );
}

/* ------------------- Sticky CTA Mobile ------------------- */
function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/95 p-3 shadow-rose backdrop-blur sm:hidden">
      <a href="#planos" className="flex w-full items-center justify-center gap-2 rounded-full bg-rose-gradient px-6 py-3.5 text-sm font-bold text-white">
        Quero entrar por R$ 9,99 <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

/* ------------------- Progress Bar ------------------- */
function ProgressBar() {
  return (
    <div className="pointer-events-none fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
      <div id="scroll-progress" className="h-full w-0 bg-rose-gradient transition-[width] duration-150" />
      <ProgressScript />
    </div>
  );
}

function ProgressScript() {
  if (typeof window !== "undefined") {
    requestAnimationFrame(() => {
      const el = document.getElementById("scroll-progress");
      if (!el || (el as HTMLElement & { _bound?: boolean })._bound) return;
      (el as HTMLElement & { _bound?: boolean })._bound = true;
      const onScroll = () => {
        const h = document.documentElement;
        const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100;
        el.style.width = pct + "%";
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    });
  }
  return null;
}
