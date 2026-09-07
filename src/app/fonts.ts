import localFont from "next/font/local";

export const chillax = localFont({
  src: "../../public/fonts/Chillax-Variable.ttf",
  variable: "--font-chillax",
  weight: "200 700",
  display: "swap",
});
export const poppins = localFont({
  src: [
    { path: "../../public/fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});
export const ptMono = localFont({
  src: "../../public/fonts/pt-mono-bold.ttf",
  variable: "--font-pt-mono",
  weight: "700",
  display: "swap",
});
