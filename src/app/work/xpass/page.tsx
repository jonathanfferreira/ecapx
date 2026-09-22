import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Arrow } from "@/components/brand";
import { institutional } from "@/data/site";
import { works } from "@/data/work";

const xpassWork = works.find((w) => w.slug === "xpass")!;

export const metadata: Metadata = {
  title: {
    absolute: "XPASS — Case 000 | From the Archive • ECAPX",
  },
  description:
    "XPASS nasceu antes da ECAPX como parte das primeiras experiências de produtos digitais no ecossistema XPACE. Recuperado e republicado como registro da nossa história.",
  alternates: {
    canonical: "/work/xpass/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "XPASS — Case 000 | From the Archive • ECAPX",
    description:
      "XPASS nasceu antes da ECAPX como parte das primeiras experiências de criação de produtos digitais no ecossistema XPACE. Recuperado e republicado como parte do nosso arquivo.",
    url: "https://ecapx.tech/work/xpass/",
    siteName: "ECAPX",
    locale: "pt_BR",
    type: "article",
    images: [
      {
        url: "/work/xpass/og-xpass.png",
        width: 1200,
        height: 630,
        alt: "XPASS — Case 000 | From the Archive • ECAPX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "XPASS — Case 000 | From the Archive • ECAPX",
    description:
      "XPASS nasceu antes da ECAPX como parte das primeiras experiências de criação de produtos digitais no ecossistema XPACE.",
    images: ["/work/xpass/og-xpass.png"],
  },
};

export default function XPassCasePage() {
  return (
    <main id="conteudo" className="case-page-wrap">
      <div className="shell">
        {/* HERO DO CASE */}
        <section className="case-hero" aria-labelledby="case-hero-title">
          <div className="case-hero-meta">
            <span>ECAPX / CASE {xpassWork.index}</span>
            <span className="case-tag-orange">FROM THE ARCHIVE</span>
            <span>PRODUTO DIGITAL • SAAS</span>
            <span>ECOSSISTEMA XPACE</span>
            <span>REPUBLICADO 2026</span>
          </div>

          <div className="case-hero-grid">
            <div className="case-hero-copy">
              <h1 id="case-hero-title">
                UM PROJETO DO<br />
                INÍCIO DA NOSSA<br />
                <span style={{ color: "var(--orange)" }}>HISTÓRIA DIGITAL.</span>
              </h1>
              <p>{xpassWork.description}</p>

              <div className="case-hero-ctas">
                {xpassWork.externalUrl && (
                  <a
                    href={xpassWork.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-orange"
                    data-track="case-xpass-live"
                    aria-label="Ver projeto online XPASS na Vercel (abre em nova aba)"
                  >
                    <span>VER PROJETO ONLINE</span>
                    <Arrow diagonal />
                  </a>
                )}

                {xpassWork.githubUrl && (
                  <a
                    href={xpassWork.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-outline"
                    data-track="case-xpass-github"
                    aria-label="Ver código-fonte do XPASS no GitHub (abre em nova aba)"
                  >
                    <span>REPOSITÓRIO NO GITHUB</span>
                    <Arrow diagonal />
                  </a>
                )}

                <a
                  href={institutional.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-outline"
                  data-track="case-xpass-contact"
                  aria-label="Conversar com a ECAPX no WhatsApp sobre um novo produto digital (abre em nova aba)"
                >
                  <span>CONVERSAR COM A ECAPX</span>
                  <Arrow diagonal />
                </a>
              </div>
            </div>

            <div className="case-hero-visual">
              <div className="case-brand-stamp" style={{ width: "200px" }}>
                <Image
                  src="/work/xpass/logo.png"
                  alt="Logo oficial XPASS"
                  width={200}
                  height={48}
                  priority
                />
              </div>
              <Image
                src="/work/xpass/portal.webp"
                alt="Hub central do XPASS OS exibindo as interfaces de Aluno, Parceiro e Administrador"
                width={800}
                height={500}
                priority
              />
            </div>
          </div>
        </section>

        {/* SEÇÃO 01 — A ORIGEM DO PROJETO */}
        <section className="case-section" aria-labelledby="origem-title">
          <div className="section-kicker eyebrow">
            <span className="case-section-num">01 / A ORIGEM</span>
            <span>CONTEXTO & FUNDAÇÃO</span>
          </div>

          <div className="case-two-col">
            <div className="case-col-lead">
              <h2 id="origem-title">
                ANTES DA ECAPX,<br />
                O IMPULSO DE<br />
                <span style={{ color: "var(--orange)" }}>CONSTRUIR.</span>
              </h2>
              <p className="case-lead-sub">
                A vontade de tirar produtos próprios do papel já pulsava no ecossistema XPACE.
              </p>
            </div>
            <div className="case-col-text">
              <p>
                Antes da formação da ECAPX como product studio independente, o ecossistema XPACE
                já experimentava frentes digitais para resolver problemas operacionais e de experiência
                em atividades com fluxo contínuo de pessoas, reservas e comunidade.
              </p>
              <p>
                O XPASS foi concebido com uma ambição clara: criar uma plataforma multilateral inteligente
                para o segmento fitness e wellness, conectando alunos em busca de flexibilidade a estúdios
                independentes e academias parceiras, tudo sustentado por um motor de créditos dinâmicos e
                validação instantânea de acesso.
              </p>
            </div>
          </div>
        </section>

        {/* SEÇÃO 02 — DO ARQUIVO À VERCEL */}
        <section className="case-section" aria-labelledby="arquivo-title">
          <div className="section-kicker eyebrow" style={{ borderColor: "#ffffff1c" }}>
            <span className="case-section-num" style={{ color: "var(--orange)" }}>02 / O RESGATE</span>
            <span style={{ color: "#888880" }}>FROM THE ARCHIVE • EVOLUÇÃO TÉCNICA</span>
          </div>

          <div className="case-two-col">
            <div className="case-col-lead">
              <h2 id="arquivo-title">
                PROJETOS QUE<br />
                CONSTRUÍRAM<br />
                <span style={{ color: "var(--orange)" }}>O CAMINHO ATÉ AQUI.</span>
              </h2>
            </div>
            <div className="case-col-text">
              <p>
                Após ter ficado arquivado durante a estruturação de novas iniciativas, o código do XPASS
                foi recentemente resgatado do repositório, reorganizado e publicado novamente na Vercel.
                Em vez de apagar experiências anteriores ou fingir que tudo começou do zero em 2026,
                escolhemos documentar esse percurso com transparência.
              </p>
              <p>
                Esse resgate não é uma promessa comercial, mas uma demonstração tangível de evolução:
                a capacidade de conceber soluções complexas, lidar com fluxos multilaterais e materializar
                ideias em software funcional desde os primeiros passos.
              </p>
            </div>
          </div>

          <div className="case-composition-grid">
            <div className="case-comp-item">
              <Image
                src="/work/xpass/student.webp"
                alt="Interface do aluno com créditos Energy Core, reservas e busca de estúdios"
                width={800}
                height={480}
              />
              <span className="case-comp-caption">APP DO ALUNO / PASSE DIGITAL & CRÉDITOS DINÂMICOS</span>
            </div>
            <div className="case-comp-item">
              <Image
                src="/work/xpass/partner.webp"
                alt="Terminal da recepção para parceiros validarem check-ins via QR Code em menos de 120ms"
                width={800}
                height={480}
              />
              <span className="case-comp-caption">TERMINAL DO PARCEIRO / VALIDAÇÃO INSTANTÂNEA & RECEITA</span>
            </div>
          </div>
        </section>

        {/* SEÇÃO 03 — A ARQUITETURA MULTILATERAL */}
        <section className="case-section" aria-labelledby="arquitetura-title">
          <div className="section-kicker eyebrow" style={{ borderColor: "#ffffff1c" }}>
            <span className="case-section-num" style={{ color: "var(--orange)" }}>03 / SISTEMA</span>
            <span style={{ color: "#888880" }}>3 PONTAS CONECTADAS EM UMA ÚNICA PLATAFORMA</span>
          </div>

          <div className="case-two-col">
            <div className="case-col-lead">
              <h2 id="arquitetura-title">
                TRÊS INTERFACES.<br />
                UMA OPERAÇÃO<br />
                <span style={{ color: "var(--orange)" }}>INTEGRADA.</span>
              </h2>
            </div>
            <div className="case-col-text">
              <p>
                SaaS multilaterais são desafiadores porque cada perfil de usuário exige uma proposta
                de valor e uma ergonomia visual completamente diferentes. O XPASS abordou esse desafio
                dividindo o sistema em três consoles dedicados:
              </p>
            </div>
          </div>

          <div className="conversion-flow-wrap" aria-label="As três pontas da plataforma XPASS">
            <div className="flow-step-card">
              <span className="flow-step-num">01 / ALUNO</span>
              <h3>STUDENT APP</h3>
              <p>
                Carteira holográfica com Energy Core, saldo de créditos, mapa de estúdios,
                passe digital QR Code e assistente de treino (AI Coach).
              </p>
              <div className="flow-connector-arrow" aria-hidden="true">→</div>
            </div>

            <div className="flow-step-card">
              <span className="flow-step-num">02 / PARCEIRO</span>
              <h3>STUDIO TERMINAL</h3>
              <p>
                Terminal de balcão otimizado para tablets e webcams, validando entradas em menos
                de 120ms, com alternância entre Modo Staff e Modo Dono.
              </p>
              <div className="flow-connector-arrow" aria-hidden="true">→</div>
            </div>

            <div className="flow-step-card">
              <span className="flow-step-num">03 / GOVERNANÇA</span>
              <h3>ADMIN CONSOLE</h3>
              <p>
                Painel central para monitoramento de volume transacionado (GMV), auditoria
                de estornos, controle de repasses e Command Palette (Ctrl+K).
              </p>
            </div>
          </div>
        </section>

        {/* SEÇÃO 04 — EXPERIMENTAÇÃO DE PRODUTO */}
        <section className="case-section" aria-labelledby="experimentacao-title">
          <div className="section-kicker eyebrow">
            <span className="case-section-num">04 / EXPERIMENTAÇÃO</span>
            <span>MECÂNICAS & REGRAS DE NEGÓCIO</span>
          </div>

          <div className="case-two-col">
            <div className="case-col-lead">
              <h2 id="experimentacao-title">
                LÓGICA COMPLEXA<br />
                TRADUZIDA EM<br />
                <span style={{ color: "var(--orange)" }}>USO SIMPLES.</span>
              </h2>
            </div>
            <div className="case-col-text">
              <p>
                O projeto serviu como laboratório prático para testar mecânicas de produto que vão
                muito além de telas estáticas:
              </p>
              <p>
                <strong>Yield Management:</strong> precificação inteligente que reduz o custo em créditos
                para horários de menor movimento em academias (off-peak), aumentando a ocupação das salas.
              </p>
              <p>
                <strong>Rollover de Créditos:</strong> modelo transacional que permite acumular créditos não
                utilizados no ciclo, gerando previsibilidade e diminuindo cancelamentos.
              </p>
              <p>
                <strong>AI Coach com Gemini:</strong> experimentação pioneira integrando inteligência
                artificial para sugerir modalidades e frequências com base na rotina do praticante.
              </p>
            </div>
          </div>

          <div className="case-composition-grid">
            <div className="case-comp-item">
              <Image
                src="/work/xpass/admin.webp"
                alt="Painel de controle do Admin com gráficos de volume e status de infraestrutura"
                width={800}
                height={480}
              />
              <span className="case-comp-caption">PAINEL ADMINISTRATIVO / GOVERNANÇA & COMMAND PALETTE</span>
            </div>
            <div className="case-comp-item">
              <Image
                src="/work/xpass/hero.webp"
                alt="Visão geral do ecossistema e seleção de interfaces"
                width={800}
                height={480}
              />
              <span className="case-comp-caption">SELEÇÃO DE PERFIL / HUB MULTIDISPOSITIVO</span>
            </div>
          </div>
        </section>

        {/* SEÇÃO 05 — TECNOLOGIA & ENGENHARIA */}
        <section className="case-section" aria-labelledby="tech-title">
          <div className="section-kicker eyebrow" style={{ borderColor: "#ffffff1c" }}>
            <span className="case-section-num" style={{ color: "var(--orange)" }}>TECNOLOGIA</span>
            <span id="tech-title" style={{ color: "#888880" }}>BUILT WITH / STACK CONFIRMADO</span>
          </div>

          <div className="tech-editorial-grid">
            <div className="tech-box">
              <strong>REACT 19 & VITE</strong>
              <span>Arquitetura de Single Page Application ultrarrápida, modular e com carregamento quase instantâneo.</span>
            </div>
            <div className="tech-box">
              <strong>TAILWIND CSS & DARK UI</strong>
              <span>Interface de alto contraste (fundo carbon, toques neon #FF5200 e roxo) desenhada para ambientes de estúdio.</span>
            </div>
            <div className="tech-box">
              <strong>VERCEL SERVERLESS DEPLOY</strong>
              <span>Infraestrutura moderna e resiliente, com entrega global em Edge Network e integração contínua.</span>
            </div>
            <div className="tech-box">
              <strong>MODELAGEM TRANSACIONAL</strong>
              <span>Regras de validação em tempo real para reservas, expiração de passes e segurança de ponta a ponta.</span>
            </div>
          </div>
        </section>

        {/* SEÇÃO 06 — O VALOR DO HISTÓRICO */}
        <section className="case-section" aria-labelledby="legado-title">
          <div className="section-kicker eyebrow">
            <span className="case-section-num">06 / O ACERVO</span>
            <span>O QUE FICOU DISSO TUDO</span>
          </div>

          <div className="case-two-col">
            <div className="case-col-lead">
              <h2 id="legado-title">
                A BASE QUE<br />
                FUNDAMENTOU<br />
                <span style={{ color: "var(--orange)" }}>A ECAPX.</span>
              </h2>
            </div>
            <div className="case-col-text">
              <p>
                A maturidade de um product studio não nasce de discursos, mas das cicatrizes e aprendizados
                de produtos colocados no mundo. O XPASS é parte viva desse arquivo: representou o momento
                em que a vontade de resolver problemas reais virou código, fluxo e aplicação.
              </p>
              <p>
                Hoje, quando a ECAPX cria produtos como o XTAGE, experiências como o Smile Burger ou plataformas
                institucionais como a XPACE Company, carrega a bagagem de quem já construiu, testou, errou,
                ajustou e aprendeu a tirar ideias do papel com padrão de engenharia impecável.
              </p>
            </div>
          </div>
        </section>

        {/* CTA FINAL DO CASE */}
        <section className="case-final-cta-section" aria-labelledby="case-final-title">
          <div className="case-final-cta-inner">
            <span className="eyebrow" style={{ color: "var(--orange)" }}>DO ARQUIVO AO MUNDO REAL</span>
            <h2 id="case-final-title">
              TEM UMA IDEIA DE PRODUTO?<br />
              <span style={{ color: "var(--orange)" }}>VAMOS CONSTRUIR JUNTOS.</span>
            </h2>
            <p>
              Da arquitetura de regras de negócio à entrega de interfaces marcantes e de alta performance:
              a ECAPX une visão de produto e engenharia para fazer acontecer.
            </p>

            <div className="case-final-buttons">
              {xpassWork.externalUrl && (
                <a
                  href={xpassWork.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-orange"
                  data-track="case-xpass-visit-bottom"
                  aria-label="Acessar projeto XPASS online na Vercel (abre em nova aba)"
                >
                  <span>ACESSAR XPASS ONLINE</span>
                  <Arrow diagonal />
                </a>
              )}

              {xpassWork.githubUrl && (
                <a
                  href={xpassWork.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-outline"
                  data-track="case-xpass-github-bottom"
                  aria-label="Acessar código-fonte no GitHub (abre em nova aba)"
                >
                  <span>VER NO GITHUB</span>
                  <Arrow diagonal />
                </a>
              )}

              <Link
                href="/work"
                className="button button-outline"
                data-track="case-xpass-back-to-work"
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
