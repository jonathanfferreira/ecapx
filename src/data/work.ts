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
  caseUrl?: string;
  featured?: boolean;
  client?: string;
  location?: string;
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
];

export const featuredWork = works.find((w) => w.featured) ?? works[0];
