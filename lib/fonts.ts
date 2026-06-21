import { Montserrat, Roboto } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "700"],
  display: "swap",
  preload: false, // ✅ prevents timeout during build
});

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  display: "swap",
  preload: false, // ✅ prevents timeout during build
});
