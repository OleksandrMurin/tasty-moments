import { Prompt } from "next/font/google";

export const prompt = Prompt({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
