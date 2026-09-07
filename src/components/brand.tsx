import Image from "next/image";

export function Arrow({ diagonal = false, className = "" }: { diagonal?: boolean; className?: string }) {
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h16m-7-7 7 7-7 7"} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

/** Official PNG, framed around its transparent padding without changing the source. */
export function WingX({ className = "" }: { className?: string }) {
  return <span className={`wing-x ${className}`} aria-hidden="true"><Image src="/brand/wing-x.png" width={1254} height={1254} alt="" /></span>;
}

/** The supplied lettering is black. CSS presents its reversed variant on dark surfaces. */
export function Wordmark({ dark = false }: { dark?: boolean }) {
  return <span className={`wordmark ${dark ? "wordmark-dark" : "wordmark-reversed"}`} role="img" aria-label="ECAPX"><Image className="logo-base" src="/brand/ecapx.png" width={2172} height={724} alt="" preload /><Image className="logo-orange" src="/brand/ecapx.png" width={2172} height={724} alt="" /></span>;
}

export function MotionGraphic() {
  return <div className="motion-graphic" aria-hidden="true"><div className="graphic-grid" /><div className="cross-stack">{[0, 1, 2, 3, 4, 5].map((i) => <div key={i} className="wing-layer" style={{ transform: `translate(${i * -13}px, ${i * 19}px)`, opacity: i === 5 ? 1 : .1 + i * .035 }}><WingX /></div>)}</div><span className="graphic-coordinate coord-top">[ X : POSSIBILIDADES ]</span><span className="graphic-coordinate coord-bottom">TRANSFORMAR → MULTIPLICAR</span><span className="graphic-plus">+</span></div>;
}
