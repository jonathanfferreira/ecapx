"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Arrow, Wordmark } from "./brand";
import { navigation, institutional } from "@/data/site";

export function Footer() {
  const pathname = usePathname();
  if (pathname === "/go" || pathname === "/go/") return null;
  return <footer className="site-footer"><div className="shell"><div className="footer-top"><Link href="/#inicio" aria-label="ECAPX — voltar ao início"><Wordmark /></Link><p>Ideias ganham forma.<br />Produtos ganham o mundo.</p><div className="footer-contacts" aria-label="Contatos institucionais"><a href={institutional.whatsapp.url} target="_blank" rel="noopener noreferrer" className="footer-contact-link" aria-label={`WhatsApp: ${institutional.whatsapp.display} (abre em nova aba)`}><span className="footer-contact-label">WhatsApp</span><span className="footer-contact-val">{institutional.whatsapp.display}</span><Arrow diagonal /></a><a href={institutional.instagram.url} target="_blank" rel="noopener noreferrer" className="footer-contact-link" aria-label={`Instagram: ${institutional.instagram.handle} (abre em nova aba)`}><span className="footer-contact-label">Instagram</span><span className="footer-contact-val">{institutional.instagram.handle}</span><Arrow diagonal /></a></div><Link href="/#inicio" className="back-top">Voltar ao topo <Arrow className="rotate-[-90deg]" /></Link></div><div className="footer-bottom"><span>© {new Date().getFullYear()} ECAPX</span><nav aria-label="Navegação do rodapé">{navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav><span>Parte do ecossistema <strong>XPACE</strong></span></div></div></footer>;
}
