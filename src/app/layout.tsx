import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";
import { chillax, poppins, ptMono } from "./fonts";

export const metadata: Metadata = {
  title: "ECAPX — Ideias em movimento. Produtos no mundo.",
  description: "Somos um Product Studio do ecossistema XPACE. Criamos produtos digitais, software, automações e soluções com IA a partir de problemas reais.",
  robots: { index: false, follow: false },
  openGraph: { title: "ECAPX — Product Studio", description: "Da complexidade ao movimento. Conheça os produtos e o studio ECAPX.", locale: "pt_BR", type: "website" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${chillax.variable} ${poppins.variable} ${ptMono.variable}`}><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header />{children}<Footer /></body></html>;
}
