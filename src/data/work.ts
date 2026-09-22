export type Work = {
  slug: string;
  index: string;
  name: string;
  year: string;
  category: string;
  tagline: string;
  description: string;
  industries: readonly string[];
  tags: readonly string[];
  image: string;
  externalUrl?: string;
  githubUrl?: string;
  caseUrl?: string;
  featured?: boolean;
  client?: string;
  location?: string;
  badge?: string;
};

export const works: readonly Work[] = [
  {
    slug: "smile-burger",
    index: "003",
    name: "SMILE BURGER",
    year: "2026",
    category: "Website / Food & Beverage",
    tagline: "Um site que dá fome antes do primeiro pedido.",
    description:
      "Transformamos a identidade marcante do Smile Burger em uma experiência digital pensada para descoberta, produto e conversão.",
    industries: ["Food & Beverage", "Gastronomia", "Delivery"],
    tags: ["Website", "Food & Beverage", "Interatividade", "2026"],
    image: "/work/smile-burger/hero.webp",
    externalUrl: "https://osmileburguer.vercel.app/",
    caseUrl: "/work/smile-burger",
    featured: true,
    client: "O Smile Burger",
    location: "Joinville, SC",
  },
  {
    slug: "xtage",
    index: "002",
    name: "XTAGE",
    year: "2025",
    category: "Digital Product / SaaS / Dance Industry",
    tagline: "O palco é só o começo.",
    description:
      "Plataforma para gestão de festivais de dança, conectando inscrições, bilheteria e avaliação.",
    industries: ["SaaS", "Cultura", "Dança"],
    tags: ["Digital Product", "SaaS", "Dance Industry"],
    image: "/brand/xtage-badge.png",
    externalUrl: "https://www.xtage.app/",
    featured: false,
    client: "XTAGE",
    location: "Brasil",
  },
  {
    slug: "xpace-company",
    index: "001",
    name: "XPACE COMPANY",
    year: "2025",
    category: "Website / Brand Experience",
    tagline: "A marca também dança no digital.",
    description:
      "Site institucional e experiência digital da XPACE, escola de dança de Joinville.",
    industries: ["Brand Experience", "Educação", "Dança"],
    tags: ["Website", "Brand Experience", "Institucional"],
    image: "/brand/xpace-company.png",
    externalUrl: "https://xpacecompany.com/",
    featured: false,
    client: "XPACE",
    location: "Joinville, SC",
  },
  {
    slug: "xpass",
    index: "000",
    name: "XPASS",
    year: "ARCHIVE",
    category: "Produto Digital / Web Development / Legacy Project",
    tagline: "Um projeto do início da nossa história digital.",
    description:
      "XPASS nasceu antes da ECAPX, como parte das primeiras experiências de criação de produtos digitais dentro do ecossistema XPACE. Anos depois, o projeto foi recuperado e disponibilizado novamente como parte do nosso arquivo — um registro da evolução que ajudou a construir o que hoje se tornou a ECAPX.",
    industries: ["Fitness & Wellness", "SaaS Multilateral", "Digital Product"],
    tags: ["Legacy Project", "SaaS Multilateral", "From the Archive", "Vercel"],
    image: "/work/xpass/hero.webp",
    externalUrl: "https://xpass-eta.vercel.app/",
    githubUrl: "https://github.com/jonathanfferreira/xpasse",
    caseUrl: "/work/xpass",
    featured: false,
    location: "Arquivo Digital",
    badge: "FROM THE ARCHIVE",
  },
];

export const featuredWork = works.find((w) => w.featured) ?? works[0];
