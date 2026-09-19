import Image from "next/image";
import Link from "next/link";
import { Arrow, WingX } from "./brand";
import type { Project } from "@/data/site";

function FlowIcon({ name }: { name: "arrow-up-right" | "waves" | "asterisk" | "sparkle" | "menu" | "layers" | "bag" }) {
  switch (name) {
    case "arrow-up-right":
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" />
        </svg>
      );
    case "waves":
      return (
        <svg width="13" height="12" viewBox="0 0 14 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M1.5 4.5C2.8 3 4.2 3 5.5 4.5C6.8 6 8.2 6 9.5 4.5C10.8 3 12.2 3 13.5 4.5" />
          <path d="M1.5 8.5C2.8 7 4.2 7 5.5 8.5C6.8 10 8.2 10 9.5 8.5C10.8 7 12.2 7 13.5 8.5" />
        </svg>
      );
    case "asterisk":
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 1.5V10.5M1.5 6H10.5M2.8 2.8L9.2 9.2M9.2 2.8L2.8 9.2" />
        </svg>
      );
    case "sparkle":
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
          <path d="M6 0C6 3.3 3.3 6 0 6C3.3 6 6 8.7 6 12C6 8.7 8.7 6 12 6C8.7 6 6 3.3 6 0Z" />
        </svg>
      );
    case "layers":
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M1.5 4L6 1.8L10.5 4L6 6.2L1.5 4Z" />
          <path d="M1.5 6.8L6 9L10.5 6.8" />
          <path d="M1.5 9.2L6 11.4L10.5 9.2" />
        </svg>
      );
    case "menu":
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="2" y1="3" x2="10" y2="3" />
          <line x1="2" y1="6" x2="10" y2="6" />
          <line x1="2" y1="9" x2="10" y2="9" />
        </svg>
      );
    case "bag":
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2.5 4H9.5L8.5 10.5H3.5L2.5 4Z" />
          <path d="M4.5 4V2.5C4.5 1.7 5.2 1 6 1C6.8 1 7.5 1.7 7.5 2.5V4" />
        </svg>
      );
  }
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.id === "xtage") {
    return (
      <div className="product-visual xtage-visual" aria-hidden="true">
        <div className="visual-top">
          <div className="visual-logo-pill xtage-pill">
            <Image
              src={project.logo.src}
              alt={project.logo.alt}
              width={project.logo.width}
              height={project.logo.height}
              className="xtage-wordmark-img"
              priority
            />
          </div>
          <span>DO BASTIDOR AO PALCO</span>
        </div>
        <div className="stage-type">O próximo<br /><span>movimento.</span></div>
        {project.badge && (
          <div className="stage-badge-wrap">
            <Image
              src={project.badge.src}
              alt={project.badge.alt}
              width={project.badge.width}
              height={project.badge.height}
              className="xtage-badge-img"
              priority
            />
          </div>
        )}
        <div className="stage-flow">
          <div><span className="flow-icon"><FlowIcon name="arrow-up-right" /></span>Inscrições<span className="flow-dot" /></div>
          <span className="flow-connector" />
          <div><span className="flow-icon"><FlowIcon name="waves" /></span>Operação<span className="flow-dot" /></div>
          <span className="flow-connector" />
          <div><span className="flow-icon"><FlowIcon name="asterisk" /></span>Avaliação<span className="flow-dot" /></div>
        </div>
        <span className="visual-caption">UM ECOSSISTEMA PARA A DANÇA</span>
      </div>
    );
  }

  if (project.id === "xpace-company") {
    return (
      <div className="product-visual company-visual" aria-hidden="true">
        <div className="visual-top">
          <div className="visual-logo-wrap xpace-logo-wrap">
            <Image
              src={project.logo.src}
              alt={project.logo.alt}
              width={project.logo.width}
              height={project.logo.height}
              className="xpace-company-img"
              priority
            />
          </div>
          <span>JOINVILLE / SC</span>
        </div>
        <div className="company-type">
          A marca também<br />
          <span>dança no digital.</span>
          <WingX />
        </div>
        <div className="company-flow">
          <div><span className="flow-icon"><FlowIcon name="sparkle" /></span>Escola<span className="flow-dot" /></div>
          <span className="flow-connector" />
          <div><span className="flow-icon"><FlowIcon name="arrow-up-right" /></span>Comunidade<span className="flow-dot" /></div>
          <span className="flow-connector" />
          <div><span className="flow-icon"><FlowIcon name="asterisk" /></span>Palco<span className="flow-dot" /></div>
        </div>
        <span className="visual-caption">WEBSITE INSTITUCIONAL & EXPERIÊNCIA</span>
      </div>
    );
  }

  if (project.id === "smile-burger") {
    return (
      <div className="product-visual smile-visual" aria-hidden="true">
        <div className="visual-top">
          <div className="visual-logo-pill smile-pill">
            <Image
              src={project.logo.src}
              alt={project.logo.alt}
              width={project.logo.width}
              height={project.logo.height}
              className="smile-wordmark-img"
              priority
            />
          </div>
          <span>JOINVILLE / SC</span>
        </div>
        <div className="smile-type">
          Dá fome antes da<br />
          <span>primeira mordida.</span>
        </div>
        <div className="smile-hero-wrap">
          <Image
            src="/work/smile-burger/hero.webp"
            alt="Hambúrguer artesanal Smile Burger"
            width={240}
            height={200}
            className="smile-hero-img"
            priority
          />
        </div>
        <div className="smile-flow">
          <div><span className="flow-icon"><FlowIcon name="menu" /></span>Cardápio<span className="flow-dot" /></div>
          <span className="flow-connector" />
          <div><span className="flow-icon"><FlowIcon name="layers" /></span>9 Camadas<span className="flow-dot" /></div>
          <span className="flow-connector" />
          <div><span className="flow-icon"><FlowIcon name="bag" /></span>Delivery<span className="flow-dot" /></div>
        </div>
        <span className="visual-caption">WEBSITE & EXPERIÊNCIA INTERATIVA</span>
      </div>
    );
  }

  return (
    <div className="product-visual company-visual" aria-hidden="true">
      <div className="visual-top">
        {project.logo ? (
          <Image
            src={project.logo.src}
            alt={project.logo.alt}
            width={project.logo.width}
            height={project.logo.height}
            className="project-generic-logo"
          />
        ) : (
          <span>{project.name}</span>
        )}
        <span>{project.category}</span>
      </div>
      <div className="company-type">
        {project.headline}
        <WingX />
      </div>
      <span className="visual-caption">{project.category}</span>
    </div>
  );
}

export function ProjectCard({
  project,
  product,
}: {
  project?: Project;
  product?: Project;
}) {
  const item = (project ?? product)!;
  const isExternal = item.url.startsWith("http");

  return (
    <article className={`product-card ${item.id}`}>
      {isExternal ? (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="product-image-link"
          aria-label={`Visitar ${item.name} (abre em nova aba)`}
        >
          <ProjectVisual project={item} />
          <span className="product-visit"><Arrow diagonal /></span>
        </a>
      ) : (
        <Link
          href={item.url}
          className="product-image-link"
          aria-label={`Ver case ${item.name}`}
        >
          <ProjectVisual project={item} />
          <span className="product-visit"><Arrow diagonal /></span>
        </Link>
      )}
      <div className="product-meta">
        <span className="eyebrow">{item.index} / {item.category}</span>
        <div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
      <h3>
        {isExternal ? (
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.name}
            <span className="sr-only"> (abre em nova aba)</span>
            <Arrow diagonal />
          </a>
        ) : (
          <Link href={item.url}>
            {item.name}
            <Arrow diagonal />
          </Link>
        )}
      </h3>
      <p className="product-headline">{item.headline}</p>
      <p className="product-description">{item.description}</p>
    </article>
  );
}

export const ProductCard = ProjectCard;
