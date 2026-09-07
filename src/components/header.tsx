"use client";

import { useRef } from "react";
import { navigation } from "@/data/site";
import Link from "next/link";
import { Arrow, Wordmark } from "./brand";

export function Header() {
  const menu = useRef<HTMLDetailsElement>(null);
  function closeMenu() { if (menu.current) menu.current.open = false; }
  return <header className="site-header"><div className="shell header-inner">
    <Link href="/#inicio" className="brand-link" aria-label="ECAPX — início" onClick={closeMenu}><Wordmark /></Link>
    <nav className="desktop-nav" aria-label="Navegação principal">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
    <Link className="header-cta" href="/#ecossistema">Conexões que criam <Arrow diagonal /></Link>
    <details ref={menu} className="mobile-menu" onKeyDown={(event) => { if (event.key === "Escape") { closeMenu(); menu.current?.querySelector("summary")?.focus(); } }}>
      <summary aria-label="Menu de navegação"><span className="menu-open">Menu <span>+</span></span><span className="menu-close">Fechar <span>−</span></span></summary>
      <nav aria-label="Navegação mobile">{navigation.map((item) => <Link key={item.href} href={item.href} onClick={closeMenu}>{item.label}<Arrow diagonal /></Link>)}<Link href="/#ecossistema" onClick={closeMenu}>Ecossistema<Arrow diagonal /></Link></nav>
    </details>
  </div></header>;
}
