export const navigation = [
  { label: "Produtos", href: "/#produtos" },
  { label: "O studio", href: "/#studio" },
  { label: "Como criamos", href: "/#processo" },
] as const;

export type Product = {
  id: "xtage" | "xpacebox";
  name: string;
  index: string;
  category: string;
  headline: string;
  description: string;
  url: string;
  tags: readonly string[];
};

// Editorial data only. No adoption, revenue or performance claims.
export const products: readonly Product[] = [
  {
    id: "xtage", name: "XTAGE", index: "01", category: "CULTURA EM MOVIMENTO",
    headline: "O palco é só o começo.",
    description: "Inscrições, bilheteria e avaliação conectadas em uma plataforma para quem faz a dança acontecer.",
    url: "https://www.xtage.app/", tags: ["Produto digital", "Festivais de dança"],
  },
  {
    id: "xpacebox", name: "XPACEBox", index: "02", category: "ECOSSISTEMA XPACE",
    headline: "Mais uma ideia fora da caixa.",
    description: "Conheça a XPACEBox, um dos produtos que compõem nosso portfólio e o ecossistema XPACE.",
    url: "https://www.xpacebox.com.br/login", tags: ["Produto digital", "XPACE"],
  },
];

export const process = [
  { title: "Encontrar o problema certo.", tag: "01 / IMERSÃO", text: "Antes da primeira tela, a pergunta certa. Mergulhamos no contexto, ouvimos quem vive o problema e identificamos onde a tecnologia pode fazer diferença." },
  { title: "Dar forma à possibilidade.", tag: "02 / DESIGN", text: "Transformamos aprendizados em fluxos e protótipos. Colocamos as ideias em contato com pessoas reais para construir uma experiência clara e útil." },
  { title: "Construir para o mundo real.", tag: "03 / ENGENHARIA", text: "Design e engenharia trabalham juntos. Desenvolvemos software, conectamos sistemas e aplicamos automação e IA onde elas resolvem o problema." },
  { title: "Lançar. Aprender. Evoluir.", tag: "04 / EVOLUÇÃO", text: "O lançamento abre uma nova etapa. Observamos o uso, aprendemos com o que acontece na prática e evoluímos o produto com intenção." },
] as const;
