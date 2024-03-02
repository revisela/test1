import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "900"],
  fallback: ["arial"],
  preload: true,
  variable: "--font-poppins",
  subsets: ["latin"],
});
