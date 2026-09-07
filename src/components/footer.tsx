import Link from "next/link";
import { Arrow, Wordmark } from "./brand";
import { navigation } from "@/data/site";

export function Footer() {
  return <footer className="site-footer"><div className="shell"><div className="footer-top"><Link href="/#inicio" aria-label="ECAPX — voltar ao início"><Wordmark /></Link><p>Ideias ganham forma.<br />Produtos ganham o mundo.</p><Link href="/#inicio" className="back-top">Voltar ao topo <Arrow className="rotate-[-90deg]" /></Link></div><div className="footer-bottom"><span>© {new Date().getFullYear()} ECAPX</span><nav aria-label="Navegação do rodapé">{navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav><span>Parte do ecossistema <strong>XPACE</strong></span></div></div></footer>;
}
