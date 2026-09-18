import Image from "next/image";
import { Arrow, WingX } from "./brand";
import type { Project } from "@/data/site";

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
          <div><span className="flow-icon">↗</span>Inscrições<span className="flow-dot" /></div>
          <span className="flow-connector" />
          <div><span className="flow-icon">≋</span>Operação<span className="flow-dot" /></div>
          <span className="flow-connector" />
          <div><span className="flow-icon">✳</span>Avaliação<span className="flow-dot" /></div>
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
          <div><span className="flow-icon">✦</span>Escola<span className="flow-dot" /></div>
          <span className="flow-connector" />
          <div><span className="flow-icon">↗</span>Comunidade<span className="flow-dot" /></div>
          <span className="flow-connector" />
          <div><span className="flow-icon">✳</span>Palco<span className="flow-dot" /></div>
        </div>
        <span className="visual-caption">WEBSITE INSTITUCIONAL & EXPERIÊNCIA</span>
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

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`product-card ${project.id}`}>
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="product-image-link" aria-label={`Visitar ${project.name} (abre em nova aba)`}>
        <ProjectVisual project={project} />
        <span className="product-visit"><Arrow diagonal /></span>
      </a>
      <div className="product-meta">
        <span className="eyebrow">{project.index} / {project.category}</span>
        <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
      <h3>
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          {project.name}
          <span className="sr-only"> (abre em nova aba)</span>
          <Arrow diagonal />
        </a>
      </h3>
      <p className="product-headline">{project.headline}</p>
      <p className="product-description">{project.description}</p>
    </article>
  );
}

export const ProductCard = ({ product }: { product: Project }) => <ProjectCard project={product} />;
