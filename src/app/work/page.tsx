import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Arrow } from "@/components/brand";
import { institutional } from "@/data/site";
import { works } from "@/data/work";

export const metadata: Metadata = {
  title: {
    absolute: "Trabalhos — ECAPX",
  },
  description:
    "Produtos próprios, experiências digitais e projetos construídos pela ECAPX para marcas reais.",
  alternates: {
    canonical: "/work/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Trabalhos — ECAPX",
    description:
      "Produtos próprios, experiências digitais e projetos construídos pela ECAPX para marcas reais.",
    url: "https://ecapx.tech/work/",
    siteName: "ECAPX",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trabalhos — ECAPX",
    description:
      "Produtos próprios, experiências digitais e projetos construídos pela ECAPX para marcas reais.",
  },
};

export default function WorkPage() {
  return (
    <main id="conteudo" className="work-page-wrap">
      <div className="shell">
        {/* Header da Página de Portfólio */}
        <section className="work-hero" aria-labelledby="work-hero-title">
          <div className="work-hero-kicker eyebrow">
            <span>SELECTED WORK / PORTFÓLIO</span>
            <span>04 PROJETOS NO ACERVO</span>
          </div>
          <div className="work-hero-content">
            <h1 id="work-hero-title">
              IDEIAS QUE<br />
              <span style={{ color: "var(--orange)" }}>SAÍRAM DA TELA.</span>
            </h1>
            <p>
              Produtos próprios, experiências digitais e projetos construídos para marcas reais.
              Da concepção e direção de design à engenharia de software no mundo real.
            </p>
          </div>
        </section>

        {/* Grid Editorial de Cases */}
        <section className="work-grid" aria-label="Lista de trabalhos selecionados">
          {works.map((work) => (
            <article
              key={work.slug}
              className="work-editorial-card"
              aria-labelledby={`card-title-${work.slug}`}
            >
              <div className="work-media-col">
                <Image
                  src={work.image}
                  alt={`Mockup e identidade visual do projeto ${work.name}`}
                  width={640}
                  height={400}
                  style={{
                    objectFit: work.slug === "smile-burger" || work.slug === "xpass" ? "cover" : "contain",
                    padding: work.slug === "smile-burger" || work.slug === "xpass" ? 0 : "36px",
                  }}
                  priority={work.featured}
                />
              </div>

              <div className="work-info-col">
                <div className="work-card-kicker">
                  <span className="work-card-num">CASE {work.index}</span>
                  <span className="work-card-year">{work.year}</span>
                  {work.badge ? <span className="xpass-archive-tag">{work.badge}</span> : null}
                </div>

                <h2 id={`card-title-${work.slug}`}>{work.name}</h2>
                <span className="work-card-category">{work.category}</span>
                <p className="work-card-desc">{work.description}</p>

                <div className="work-card-actions">
                  {work.caseUrl ? (
                    <Link
                      href={work.caseUrl}
                      className="button button-orange"
                      data-track={`work-view-${work.slug}`}
                    >
                      <span>VER CASE COMPLETO</span>
                      <Arrow />
                    </Link>
                  ) : null}

                  {work.externalUrl ? (
                    <a
                      href={work.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button-outline"
                      data-track={`work-live-${work.slug}`}
                      aria-label={`Visitar site externo ${work.name} (abre em nova aba)`}
                    >
                      <span>VISITAR SITE</span>
                      <Arrow diagonal />
                    </a>
                  ) : null}

                  {work.githubUrl ? (
                    <a
                      href={work.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button-outline"
                      data-track={`work-github-${work.slug}`}
                      aria-label={`Ver repositório no GitHub do projeto ${work.name} (abre em nova aba)`}
                    >
                      <span>GITHUB</span>
                      <Arrow diagonal />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Bloco de Contato Final */}
        <section className="case-final-cta-section" style={{ marginTop: "80px", borderRadius: "4px" }}>
          <div className="case-final-cta-inner">
            <span className="eyebrow" style={{ color: "var(--orange)" }}>NOVO PROJETO?</span>
            <h2>
              VAMOS TIRAR SUA IDEIA<br />
              <span>DA GAVETA.</span>
            </h2>
            <p>
              Quer construir uma presença marcante, um produto digital ou evoluir a operação
              da sua marca? Converse diretamente com a equipe do studio.
            </p>
            <div className="case-final-buttons">
              <a
                href={institutional.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-orange"
                data-track="work-contact-whatsapp"
                aria-label="Conversar no WhatsApp com a ECAPX (abre em nova aba)"
              >
                <span>CHAMA A ECAPX NO WHATSAPP</span>
                <Arrow diagonal />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
