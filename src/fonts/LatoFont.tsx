import { Lato } from "next/font/google";

export const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"], // Добавь веса, которые тебе нужны
  style: ["normal", "italic"],
  display: "swap",
});
