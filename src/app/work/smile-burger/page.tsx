import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Arrow } from "@/components/brand";
import { BurgerExploded } from "@/components/burger-exploded";
import { institutional } from "@/data/site";
import { works } from "@/data/work";

const smileWork = works.find((w) => w.slug === "smile-burger")!;

export const metadata: Metadata = {
  title: {
    absolute: "Smile Burger — Case 003 | ECAPX",
  },
  description:
    "Website e experiência digital desenvolvidos pela ECAPX para o Smile Burger, de Joinville.",
  alternates: {
    canonical: "/work/smile-burger/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Smile Burger — Case 003 | ECAPX",
    description:
      "Website e experiência digital desenvolvidos pela ECAPX para o Smile Burger, de Joinville.",
    url: "https://ecapx.tech/work/smile-burger/",
    siteName: "ECAPX",
    locale: "pt_BR",
    type: "article",
    images: [
      {
        url: "/work/smile-burger/og-smile.jpg",
        width: 1200,
        height: 630,
        alt: "Smile Burger — Case 003 | ECAPX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smile Burger — Case 003 | ECAPX",
    description:
      "Website e experiência digital desenvolvidos pela ECAPX para o Smile Burger, de Joinville.",
    images: ["/work/smile-burger/og-smile.jpg"],
  },
};

const burgersShowcase = [
  {
    name: "GARGALHADA",
    tag: "DOCE, SALGADO & UM SORRISO",
    tagline:
      "Pão brioche, hambúrguer artesanal de 130g, queijo cheddar, bacon, fina fatia de abacaxi tostado com mel e maionese de alho suave.",
    img: "/work/smile-burger/photos/gargalhada-466.webp",
  },
  {
    name: "SMILE SALAD",
    tag: "FRESQUINHO. CAPRICHADO. SMILE.",
    tagline:
      "Pão brioche, hambúrguer artesanal de 130g, queijo mussarela, alface americana, tomate, cebola, picles e maionese de alho suave.",
    img: "/work/smile-burger/photos/smile-salad-466.webp",
  },
  {
    name: "SMILE BACON",
    tag: "CROCÂNCIA QUE FAZ BARULHO",
    tagline:
      "Pão brioche, hambúrguer artesanal de 130g, queijo mussarela, bacon crocante e maionese de alho suave.",
    img: "/work/smile-burger/photos/smile-bacon-640.webp",
  },
];

export default function SmileBurgerCasePage() {
  return (
    <main id="conteudo" className="case-page-wrap">
      <div className="shell">
        {/* HERO DO CASE */}
        <section className="case-hero" aria-labelledby="case-hero-title">
          <div className="case-hero-meta">
            <span>ECAPX / CASE {smileWork.index}</span>
            <span className="case-tag-orange">{smileWork.name}</span>
            <span>WEBSITE DESIGN + DEVELOPMENT</span>
            <span>JOINVILLE, SC</span>
            <span>{smileWork.year}</span>
          </div>

          <div className="case-hero-grid">
            <div className="case-hero-copy">
              <h1 id="case-hero-title">
                UM SITE QUE<br />
                DÁ FOME ANTES<br />
                <span style={{ color: "var(--orange)" }}>DO PRIMEIRO PEDIDO.</span>
              </h1>
              <p>{smileWork.description}</p>

              <div className="case-hero-ctas">
                {smileWork.externalUrl && (
                  <a
                    href={smileWork.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-orange"
                    data-track="case-smile-live"
                    aria-label="Visitar site oficial do Smile Burger (abre em nova aba)"
                  >
                    <span>VISITAR SITE</span>
                    <Arrow diagonal />
                  </a>
                )}
                <a
                  href={institutional.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-outline"
                  data-track="case-smile-contact"
                  aria-label="Iniciar um projeto similar no WhatsApp comercial da ECAPX (abre em nova aba)"
                >
                  <span>INICIAR UM PROJETO</span>
                  <Arrow diagonal />
                </a>
              </div>
            </div>

            <div className="case-hero-visual">
              <div className="case-brand-stamp">
                <Image
                  src="/work/smile-burger/logo.webp"
                  alt="Logo oficial Smile Burger"
                  width={160}
                  height={160}
                  priority
                />
              </div>
              <Image
                src="/work/smile-burger/hero.webp"
                alt="Burger Gargalhada artesanal recortado em alta resolução"
                width={560}
                height={560}
                priority
              />
            </div>
          </div>
        </section>

        {/* SEÇÃO 01 — O DESAFIO */}
        <section className="case-section" aria-labelledby="desafio-title">
          <div className="section-kicker eyebrow">
            <span className="case-section-num">01 / O DESAFIO</span>
            <span>CONTEXTO & POSICIONAMENTO</span>
          </div>

          <div className="case-two-col">
            <div className="case-col-lead">
              <h2 id="desafio-title">
                UMA MARCA COM<br />
                PERSONALIDADE.
              </h2>
              <p className="case-lead-sub">
                Merecia uma presença digital à altura.
              </p>
            </div>
            <div className="case-col-text">
              <p>
                O Smile Burger já tinha uma linguagem própria e consolidada nas ruas de Joinville:
                divertida, intensa e impossível de confundir. Com referências retrô vibrantes,
                cores quentes e nomes irreverentes de produtos, a hamburgueria já conquistava
                clientes pelo paladar e pela atitude.
              </p>
              <p>
                O desafio da ECAPX foi transportar essa personalidade autêntica para a experiência
                digital sem transformar o site em apenas mais um cardápio online genérico.
                Era essencial que o visitante sentisse a energia da casa logo no primeiro segundo.
              </p>
            </div>
          </div>
        </section>

        {/* SEÇÃO 02 — A IDEIA */}
        <section className="case-section" aria-labelledby="ideia-title">
          <div className="section-kicker eyebrow" style={{ borderColor: "#ffffff1c" }}>
            <span className="case-section-num" style={{ color: "var(--orange)" }}>02 / A IDEIA</span>
            <span style={{ color: "#888880" }}>DIREÇÃO CRIATIVA & CONCEITO</span>
          </div>

          <div className="case-two-col">
            <div className="case-col-lead">
              <h2 id="ideia-title">
                NÃO É SÓ CARDÁPIO.<br />
                <span style={{ color: "var(--orange)" }}>É EXPERIÊNCIA.</span>
              </h2>
            </div>
            <div className="case-col-text">
              <p>
                Copy autêntico, direção visual inspirada nos anos 70, movimento fluido e
                navegação intuitiva foram orquestrados para fazer o ambiente digital parecer tão
                marcante quanto morder o próprio lanche.
              </p>
              <p>
                A arquitetura priorizou apetite visual, tipografia expressiva e interatividade
                tátil imediata, guiando o olhar do cliente desde o topo com o burger hero até a
                escolha fácil de combos e sobremesas.
              </p>
            </div>
          </div>

          <div className="case-composition-grid">
            <div className="case-comp-item">
              <Image
                src="/work/smile-burger/hero-banner.webp"
                alt="Banner principal do site Smile Burger com tipografia retrô"
                width={800}
                height={480}
              />
              <span className="case-comp-caption">HERO IMPACTANTE / APRESENTAÇÃO</span>
            </div>
            <div className="case-comp-item">
              <Image
                src="/work/smile-burger/favorites-real.webp"
                alt="Seção de lanches favoritos e posters editoriais do Smile Burger"
                width={800}
                height={480}
              />
              <span className="case-comp-caption">FAVORITOS DA CASA / DESIGN EDITORIAL</span>
            </div>
          </div>
        </section>

        {/* SEÇÃO 03 — INTERAÇÃO (EXPLODED BURGER) */}
        <section className="case-section" aria-labelledby="interacao-title">
          <div className="section-kicker eyebrow" style={{ borderColor: "#ffffff1c" }}>
            <span className="case-section-num" style={{ color: "var(--orange)" }}>03 / INTERAÇÃO</span>
            <span style={{ color: "#888880" }}>ARRASTE • DESCUBRA • SORRIA • 9 CAMADAS</span>
          </div>

          <div className="case-two-col">
            <div className="case-col-lead">
              <h2 id="interacao-title">
                UM SORRISO<br />
                EM CADA<br />
                <span style={{ color: "var(--orange)" }}>CAMADA.</span>
              </h2>
            </div>
            <div className="case-col-text">
              <p>
                Criamos uma experiência interativa proprietária que permite explorar as camadas do
                burger individualmente, transformando a apresentação minuciosa dos ingredientes em
                pura descoberta sensorial.
              </p>
              <p>
                Cada elemento da receita — do pão brioche selado à geleia de pimenta artesanal —
                possui profundidade espacial calculada, garantindo sensação tátil real no celular
                e no desktop.
              </p>
            </div>
          </div>

          {/* Componente Interativo com as 9 Camadas Oficiais */}
          <BurgerExploded />
        </section>

        {/* SEÇÃO 04 — PRODUTO */}
        <section className="case-section" aria-labelledby="produto-title">
          <div className="section-kicker eyebrow">
            <span className="case-section-num">04 / CARDÁPIO</span>
            <span>VALORIZAÇÃO INDIVIDUAL</span>
          </div>

          <div className="case-two-col">
            <div className="case-col-lead">
              <h2 id="produto-title">
                OS FAVORITOS<br />
                GANHARAM PALCO.
              </h2>
            </div>
            <div className="case-col-text">
              <p>
                Mais pedidos, favoritos e cards de produto organizam a navegação enquanto
                valorizam cada receita individualmente. Em vez de listas monótonas de ingredientes,
                cada lanche possui fotografia de alta definição, selo de destaque e chamada direta
                ao paladar.
              </p>
            </div>
          </div>

          <div className="menu-showcase-grid">
            {burgersShowcase.map((burger) => (
              <div key={burger.name} className="menu-card-sample">
                <div className="menu-sample-thumb">
                  <Image
                    src={burger.img}
                    alt={burger.name}
                    width={466}
                    height={466}
                  />
                </div>
                <span className="menu-card-tag">{burger.tag}</span>
                <h4>{burger.name}</h4>
                <p>{burger.tagline}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SEÇÃO 05 — CONVERSÃO */}
        <section className="case-section" aria-labelledby="conversao-title">
          <div className="section-kicker eyebrow" style={{ borderColor: "#ffffff1c" }}>
            <span className="case-section-num" style={{ color: "var(--orange)" }}>05 / CONVERSÃO</span>
            <span style={{ color: "#888880" }}>INTEGRAÇÃO COM OPERAÇÃO EXISTENTE</span>
          </div>

          <div className="case-two-col">
            <div className="case-col-lead">
              <h2 id="conversao-title">
                DO CLIQUE<br />
                <span style={{ color: "var(--orange)" }}>AO PEDIDO.</span>
              </h2>
            </div>
            <div className="case-col-text">
              <p>
                CTAs claros conectam a fase de descoberta ao pedido sem reinventar uma operação que
                o restaurante já domina. Em vez de adicionar complexidade de checkout próprio e
                retrabalho na cozinha, a experiência digital encaminha o cliente de forma fluida
                para o cardápio oficial Goomer já adotado pelo estabelecimento.
              </p>
            </div>
          </div>

          <div className="conversion-flow-wrap" aria-label="Fluxo de conversão em 4 etapas">
            <div className="flow-step-card">
              <span className="flow-step-num">01 / ESCOLHE</span>
              <h3>DESCOBERTA</h3>
              <p>Navegação visual pelos favoritos, combos e ingredientes detalhados.</p>
              <div className="flow-connector-arrow" aria-hidden="true">→</div>
            </div>

            <div className="flow-step-card">
              <span className="flow-step-num">02 / PEDE</span>
              <h3>DIRECIONAMENTO</h3>
              <p>Um toque leva o item escolhido direto para o sistema de atendimento da casa.</p>
              <div className="flow-connector-arrow" aria-hidden="true">→</div>
            </div>

            <div className="flow-step-card">
              <span className="flow-step-num">03 / CHEGOU</span>
              <h3>PRODUÇÃO</h3>
              <p>A cozinha recebe o pedido padronizado sem atrito operacional.</p>
              <div className="flow-connector-arrow" aria-hidden="true">→</div>
            </div>

            <div className="flow-step-card">
              <span className="flow-step-num">04 / SORRI</span>
              <h3>FIDELIZAÇÃO</h3>
              <p>O cliente recebe o burger quentinho e associa a marca a uma experiência impecável.</p>
            </div>
          </div>
        </section>

        {/* SEÇÃO 06 — MOBILE FIRST */}
        <section className="case-section" aria-labelledby="mobile-title">
          <div className="section-kicker eyebrow">
            <span className="case-section-num">06 / MOBILE FIRST</span>
            <span>DESCOBERTA ONDE O CLIENTE ESTÁ</span>
          </div>

          <div className="case-two-col">
            <div className="case-col-lead">
              <h2 id="mobile-title">
                FEITO PRA ROLAR.<br />
                FEITO PRA PEDIR.
              </h2>
            </div>
            <div className="case-col-text">
              <p>
                Mais de 85% dos acessos a delivery e gastronomia acontecem em smartphones.
                Por isso, a experiência digital do Smile Burger foi desenhada priorizando telas
                de 375px a 430px: carregamento quase instantâneo, botões de toque generosos
                (mínimo de 44px) e layout sem nenhum transbordamento horizontal.
              </p>
            </div>
          </div>

          <div className="mobile-mockups-row">
            <div className="mobile-phone-frame">
              <div className="mobile-phone-screen">
                <Image
                  src="/work/smile-burger/mobile-hero-clean.webp"
                  alt="Tela inicial mobile do Smile Burger com hero e identidade retrô"
                  width={390}
                  height={800}
                />
              </div>
            </div>

            <div className="mobile-phone-frame">
              <div className="mobile-phone-screen">
                <Image
                  src="/work/smile-burger/mobile-favorites-clean.webp"
                  alt="Tela mobile da seção de favoritos e posters dos lanches"
                  width={390}
                  height={800}
                />
              </div>
            </div>

            <div className="mobile-phone-frame">
              <div className="mobile-phone-screen">
                <Image
                  src="/work/smile-burger/mobile-combos-clean.webp"
                  alt="Tela mobile da seção de combos e pedidos da casa"
                  width={390}
                  height={800}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO TÉCNICA (BUILT WITH) */}
        <section className="case-section" aria-labelledby="tech-title">
          <div className="section-kicker eyebrow" style={{ borderColor: "#ffffff1c" }}>
            <span className="case-section-num" style={{ color: "var(--orange)" }}>TECNOLOGIA</span>
            <span id="tech-title" style={{ color: "#888880" }}>BUILT WITH / STACK CONFIRMADO</span>
          </div>

          <div className="tech-editorial-grid">
            <div className="tech-box">
              <strong>HTML5 SEMÂNTICO</strong>
              <span>Estrutura limpa, tags nativas e conformidade rigorosa com acessibilidade WCAG.</span>
            </div>
            <div className="tech-box">
              <strong>CSS3 & DESIGN SYSTEM</strong>
              <span>Paleta retrô dos anos 70, tipografia fluida e responsividade sem frameworks pesados.</span>
            </div>
            <div className="tech-box">
              <strong>VANILLA JAVASCRIPT</strong>
              <span>Módulo ES puro, requestAnimationFrame para física spring e pointer events em tempo real.</span>
            </div>
            <div className="tech-box">
              <strong>PIPELINE WEBP</strong>
              <span>Redução comprovada de 91,5% de peso de imagem sem perda de fidelidade visual.</span>
            </div>
          </div>
        </section>

        {/* RESULTADO / ENTREGA */}
        <section className="case-section" aria-labelledby="resultado-title">
          <div className="section-kicker eyebrow">
            <span className="case-section-num">ENTREGA</span>
            <span>VALOR GERADO</span>
          </div>

          <div className="case-two-col">
            <div className="case-col-lead">
              <h2 id="resultado-title">
                UMA MARCA FORTE<br />
                TAMBÉM NO DIGITAL.
              </h2>
            </div>
            <div className="case-col-text">
              <p>
                O resultado é um website proprietário, com identidade marcante e experiência
                interativa que se destaca em um setor dominado por templates padronizados.
              </p>
              <p>
                A hamburgueria agora conta com um canal digital oficial que fortalece sua marca,
                encanta clientes antes mesmo da primeira mordida e direciona o apetite do público
                diretamente para os canais de pedido.
              </p>
            </div>
          </div>
        </section>

        {/* CTA FINAL DO CASE */}
        <section className="case-final-cta-section" aria-labelledby="case-final-title">
          <div className="case-final-cta-inner">
            <span className="eyebrow" style={{ color: "var(--orange)" }}>NEXT PROJECT?</span>
            <h2 id="case-final-title">
              SUA MARCA MERECE MAIS<br />
              <span style={{ color: "var(--orange)" }}>QUE UM LINK NA BIO.</span>
            </h2>
            <p>
              Se você tem uma marca, operação ou ideia que merece uma experiência digital melhor,
              a ECAPX pode construir com você.
            </p>

            <div className="case-final-buttons">
              <a
                href={institutional.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-orange"
                data-track="case-smile-contact-final"
                aria-label="Conversar com a ECAPX no WhatsApp sobre um novo projeto (abre em nova aba)"
              >
                <span>CHAMA A ECAPX</span>
                <Arrow diagonal />
              </a>

              <Link
                href="/work"
                className="button button-outline"
                data-track="case-smile-back-to-work"
              >
                <span>← TODOS OS TRABALHOS</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
