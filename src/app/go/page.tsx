import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Arrow, WingX, Wordmark } from "@/components/brand";
import { institutional } from "@/data/site";
import { works, featuredWork } from "@/data/work";

export const metadata: Metadata = {
  title: {
    absolute: "ECAPX — Links, trabalhos e contato",
  },
  description:
    "Hub oficial da ECAPX. Conheça nossos trabalhos selecionados, cases de produto digital e canais de contato direto.",
  alternates: {
    canonical: "/go/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "ECAPX — Links, trabalhos e contato",
    description:
      "Sites, sistemas e experiências digitais para marcas e negócios reais.",
    url: "https://ecapx.tech/go/",
    siteName: "ECAPX",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ECAPX — Links, trabalhos e contato",
    description: "Sites, sistemas e experiências digitais para marcas e negócios reais.",
  },
};

const services = [
  "WEBSITES",
  "LANDING PAGES",
  "SISTEMAS",
  "PRODUTOS DIGITAIS",
  "AUTOMAÇÕES",
  "IA APLICADA",
] as const;

export default function GoPage() {
  return (
    <div className="go-page-wrap">
      <main id="conteudo" className="go-container">
        {/* Topo */}
        <header className="go-top-bar">
          <Link href="/" aria-label="ECAPX — início" className="brand-link">
            <Wordmark />
          </Link>
          <span className="go-top-label">[ ECAPX / DIGITAL PRODUCT STUDIO ]</span>
        </header>

        {/* Hero */}
        <section className="go-hero" aria-labelledby="go-hero-title">
          <div className="go-hero-wing" aria-hidden="true">
            <WingX />
          </div>
          <h1 id="go-hero-title">
            IDEIAS QUE<br />
            CONSTROEM<br />
            <span style={{ color: "var(--orange)" }}>O AMANHÃ.</span>
          </h1>
          <p>
            Sites, sistemas e experiências digitais para marcas e negócios reais.
          </p>
          <a
            className="button button-orange go-main-cta"
            href={institutional.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            data-track="go-contact"
            aria-label="Iniciar um projeto pelo WhatsApp comercial da ECAPX (abre em nova aba)"
          >
            <span>INICIAR UM PROJETO</span>
            <Arrow diagonal />
          </a>
        </section>

        {/* Bloco de Destaque — Case 003 */}
        <section aria-labelledby="highlight-case-title">
          <div className="go-section-title">
            <span>NEW / CASE {featuredWork.index}</span>
            <span>DESTAQUE</span>
          </div>

          <article className="go-highlight-card">
            <div className="go-highlight-header">
              <span className="go-highlight-badge">CASE RECENTE</span>
              <span className="eyebrow" style={{ color: "#777773" }}>{featuredWork.year}</span>
            </div>

            <div className="go-highlight-thumb">
              <Image
                src={featuredWork.image}
                alt={`Apresentação do case ${featuredWork.name}`}
                width={540}
                height={280}
                priority
              />
            </div>

            <h3 id="highlight-case-title">{featuredWork.name}</h3>
            <span className="go-highlight-category">{featuredWork.category}</span>
            <p className="go-highlight-desc">{featuredWork.description}</p>

            <div className="go-highlight-actions">
              {featuredWork.caseUrl && (
                <Link
                  href={featuredWork.caseUrl}
                  className="button button-orange"
                  data-track="go-smile-case"
                >
                  <span>VER CASE</span>
                  <Arrow />
                </Link>
              )}
              {featuredWork.externalUrl && (
                <a
                  href={featuredWork.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-outline"
                  data-track="go-smile-external"
                  aria-label={`Visitar site oficial ${featuredWork.name} (abre em nova aba)`}
                >
                  <span>VISITAR SITE</span>
                  <Arrow diagonal />
                </a>
              )}
            </div>
          </article>
        </section>

        {/* Trabalhos Selecionados */}
        <section aria-labelledby="selected-work-title">
          <div className="go-section-title">
            <span id="selected-work-title">TRABALHOS SELECIONADOS.</span>
            <span>03 PROJETOS</span>
          </div>

          <div className="go-works-list">
            {works.map((work) => {
              const targetUrl = work.caseUrl || work.externalUrl || "#";
              const isExternal = !work.caseUrl;

              return (
                <Link
                  key={work.slug}
                  href={targetUrl}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="go-work-row"
                  data-track={`go-work-${work.slug}`}
                  aria-label={`${work.name} — ${work.category}${isExternal ? " (abre em nova aba)" : ""}`}
                >
                  <div className="go-work-row-meta">
                    <span className="go-work-row-num">{work.index}</span>
                    <div className="go-work-row-title">
                      <h4>{work.name}</h4>
                      <span>{work.category}</span>
                    </div>
                  </div>
                  <span className="go-work-row-icon">
                    <Arrow diagonal={isExternal} />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* O que Construímos */}
        <section aria-labelledby="services-title">
          <div className="go-section-title">
            <span id="services-title">WHAT WE BUILD</span>
            <span>CAPACIDADES</span>
          </div>

          <div className="go-services-grid" aria-label="Lista de serviços da ECAPX">
            {services.map((service) => (
              <div key={service} className="go-service-item">
                <span>{service}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="go-final-block" aria-labelledby="go-final-title">
          <h2 id="go-final-title">
            TEM UMA IDEIA?<br />
            COLOCA ELA<br />
            <span style={{ color: "var(--orange)" }}>EM MOVIMENTO.</span>
          </h2>
          <a
            className="button button-orange go-final-cta"
            href={institutional.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            data-track="go-contact-bottom"
            aria-label="Falar com a ECAPX no WhatsApp (abre em nova aba)"
          >
            <span>FALAR COM A ECAPX</span>
            <Arrow diagonal />
          </a>

          <div className="go-links-row">
            <Link href="/">ecapx.tech</Link>
            <a
              href={institutional.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da ECAPX @ecapxtech (abre em nova aba)"
            >
              {institutional.instagram.handle}
            </a>
          </div>
        </section>

        {/* Rodapé Simplificado */}
        <footer className="go-footer">
          <span className="go-footer-wordmark">ECAPX</span>
          <span className="go-footer-pace">MULTIPLY THE PACE</span>
          <span style={{ fontSize: "0.6875rem", color: "#666660", marginTop: "4px" }}>
            © {new Date().getFullYear()} ECAPX Digital Product Studio. Todos os direitos reservados.
          </span>
        </footer>
      </main>
    </div>
  );
}
