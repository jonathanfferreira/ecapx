export const navigation = [
  { label: "Produtos", href: "/#projetos" },
  { label: "Trabalhos", href: "/work" },
  { label: "O studio", href: "/#studio" },
  { label: "Como criamos", href: "/#processo" },
  { label: "Contato", href: "/#contato" },
] as const;

export type ProjectLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  id: string;
  name: string;
  index: string;
  category: string;
  headline: string;
  description: string;
  url: string;
  tags: readonly string[];
  logo: ProjectLogo;
  badge?: ProjectLogo;
};

export type Product = Project;

// Editorial data only. No adoption, revenue or performance claims.
export const projects: readonly Project[] = [
  {
    id: "xtage",
    name: "XTAGE",
    index: "01",
    category: "CULTURA EM MOVIMENTO",
    headline: "O palco é só o começo.",
    description: "Plataforma para gestão de festivais de dança, conectando inscrições, bilheteria e avaliação.",
    url: "https://www.xtage.app/",
    tags: ["Produto digital", "Festivais de dança"],
    logo: {
      src: "/brand/xtage-wordmark.png",
      alt: "Logo oficial XTAGE",
      width: 650,
      height: 138,
    },
    badge: {
      src: "/brand/xtage-badge.png",
      alt: "Badge oficial XTAGE",
      width: 540,
      height: 409,
    },
  },
  {
    id: "xpace-company",
    name: "XPACE Company",
    index: "02",
    category: "PRESENÇA DIGITAL",
    headline: "A marca também dança no digital.",
    description: "Site institucional da XPACE, escola de dança de Joinville, desenvolvido como projeto do portfólio da ECAPX.",
    url: "https://xpacecompany.com/",
    tags: ["Website", "Institucional", "Educação", "Dança"],
    logo: {
      src: "/brand/xpace-company.png",
      alt: "Logo oficial XPACE Company",
      width: 760,
      height: 120,
    },
  },
  {
    id: "smile-burger",
    name: "O Smile Burger",
    index: "03",
    category: "EXPERIÊNCIA DIGITAL",
    headline: "Dá fome antes da primeira mordida.",
    description: "Website e experiência interativa desenvolvidos pela ECAPX para o Smile Burger, conectando produto, cardápio e conversão.",
    url: "/work/smile-burger",
    tags: ["Case study", "Website", "Gastronomia", "Delivery"],
    logo: {
      src: "/work/smile-burger/logo.webp",
      alt: "Logo oficial Smile Burger",
      width: 440,
      height: 220,
    },
  },
];

export const products = projects;

export const process = [
  { title: "Encontrar o problema certo.", tag: "01 / IMERSÃO", text: "Antes da primeira tela, a pergunta certa. Mergulhamos no contexto, ouvimos quem vive o problema e identificamos onde a tecnologia pode fazer diferença." },
  { title: "Dar forma à possibilidade.", tag: "02 / DESIGN", text: "Transformamos aprendizados em fluxos e protótipos. Colocamos as ideias em contato com pessoas reais para construir uma experiência clara e útil." },
  { title: "Construir para o mundo real.", tag: "03 / ENGENHARIA", text: "Design e engenharia trabalham juntos. Desenvolvemos software, conectamos sistemas e aplicamos automação e IA onde elas resolvem o problema." },
  { title: "Lançar. Aprender. Evoluir.", tag: "04 / EVOLUÇÃO", text: "O lançamento abre uma nova etapa. Observamos o uso, aprendemos com o que acontece na prática e evoluímos o produto com intenção." },
] as const;

const WHATSAPP_DIGITS = "554789173116";
const WHATSAPP_MESSAGE = "Olá! Vim pelo site da ECAPX e gostaria de conversar sobre um projeto.";

export const institutional = {
  name: "ECAPX",
  tagline: "Product Studio",
  instagram: {
    handle: "@ecapxtech",
    url: "https://instagram.com/ecapxtech",
  },
  whatsapp: {
    display: "+55 47 8917-3116",
    digits: WHATSAPP_DIGITS,
    message: WHATSAPP_MESSAGE,
    url: `https://wa.me/${WHATSAPP_DIGITS}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  },
} as const;
