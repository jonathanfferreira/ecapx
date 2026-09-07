import { Arrow, WingX } from "./brand";
import type { Product } from "@/data/site";

function ProductVisual({ id }: { id: Product["id"] }) {
  if (id === "xtage") return <div className="product-visual xtage-visual" aria-hidden="true"><div className="visual-top"><span>XTAGE<span className="tiny-plus">✳</span></span><span>DO BASTIDOR AO PALCO</span></div><div className="stage-type">O próximo<br /><span>movimento.</span></div><div className="stage-flow"><div><span className="flow-icon">↗</span>Inscrições<span className="flow-dot" /></div><span className="flow-connector" /><div><span className="flow-icon">≋</span>Operação<span className="flow-dot" /></div><span className="flow-connector" /><div><span className="flow-icon">✳</span>Avaliação<span className="flow-dot" /></div></div><span className="visual-caption">UM ECOSSISTEMA PARA A DANÇA</span></div>;
  return <div className="product-visual box-visual" aria-hidden="true"><div className="visual-top"><span>XPACE<span className="box-word">Box</span></span><span>EXPANDA O POSSÍVEL</span></div><div className="box-type">Think<br />outside.<WingX /></div><span className="visual-caption">UMA NOVA EXPRESSÃO DO ECOSSISTEMA XPACE</span></div>;
}

export function ProductCard({ product }: { product: Product }) {
  return <article className={`product-card ${product.id}`}><a href={product.url} target="_blank" rel="noopener noreferrer" className="product-image-link" aria-label={`Visitar ${product.name} (abre em nova aba)`}><ProductVisual id={product.id} /><span className="product-visit"><Arrow diagonal /></span></a><div className="product-meta"><span className="eyebrow">{product.index} / {product.category}</span><div className="tags">{product.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><h3><a href={product.url} target="_blank" rel="noopener noreferrer">{product.name}<span className="sr-only"> (abre em nova aba)</span><Arrow diagonal /></a></h3><p className="product-headline">{product.headline}</p><p className="product-description">{product.description}</p></article>;
}
