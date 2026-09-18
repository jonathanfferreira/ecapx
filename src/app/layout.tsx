import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";
import { chillax, poppins, ptMono } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://ecapx.tech"),
  title: {
    default: "ECAPX — Ideias em movimento. Produtos no mundo.",
    template: "%s | ECAPX",
  },
  description: "Somos um Product Studio do ecossistema XPACE. Criamos produtos digitais, software, automações e soluções com IA a partir de problemas reais.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ECAPX — Product Studio",
    description: "Da complexidade ao movimento. Conheça os produtos e o studio ECAPX.",
    url: "https://ecapx.tech",
    siteName: "ECAPX",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ECAPX — Product Studio",
    description: "Da complexidade ao movimento. Conheça os produtos e o studio ECAPX.",
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${chillax.variable} ${poppins.variable} ${ptMono.variable}`}><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header />{children}<Footer /></body></html>;
}
