import { Lora } from "next/font/google";

export const lora = Lora({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
