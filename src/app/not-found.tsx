import Link from "next/link";
import { Arrow } from "@/components/brand";
export default function NotFound() { return <main id="conteudo" className="not-found shell"><p className="eyebrow">404 / NOVA DIREÇÃO</p><h1>Esse caminho<br />ainda não existe.</h1><p>Mas temos algumas boas ideias para você explorar.</p><Link href="/" className="button button-orange">Voltar para a Home <Arrow /></Link></main>; }
