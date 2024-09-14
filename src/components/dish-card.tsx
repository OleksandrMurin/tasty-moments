import React from "react";
import { Lora } from "next/font/google";
import Image from "next/image";
import logo from "../../public/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg";
import Like from "../../public/favorite-icon.svg";
import StarIcon from "../../public/star-icon.svg";
import DifficultyIcon from "../../public/difficulty-level-icon.svg";
import TimeIkon from "../../public/time-icon.svg";
import classNames from "classnames";
import { useTranslations } from "next-intl";
interface DishCardProps {
  dish: Dish;
}
const lora = Lora({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
export interface Dish {
  title: string;
  image: string;
  difficulty: number;
  rating: number;
  avgCookingTime: number;
  isLiked: boolean;
}

function DishCard({ dish }: DishCardProps) {
  const t = useTranslations("DishCard");
  const { difficulty, avgCookingTime, rating, title, isLiked, image } = dish;
  function getDifficulty(difficulty: number) {
    const difficulties = {
      1: t("Easy"),
      2: t("Medium"),
      3: t("Hard"),
    };
    if (difficulty <= 1) return difficulties[1];
    if (difficulty >= 3) return difficulties[3];
    return difficulties[2];
  }
  return (
    <div className={classNames("col-span-4 bg-cream400 rounded shadow-lg")}>
      <Image
        src={logo}
        alt="Picture of the author"
        className="rounded-t-lg w-full h-auto"
      />
      <div className="m-5 flex justify-between">
        <span className="text-2xl text-black ">{title}</span>
        <div>
          <Like />
        </div>
      </div>
      <div className="flex flex-row gap-1 pl-5 pb-1 items-center">
        {Array(3)
          .fill(true)
          .map((_, index) => {
            return (
              <DifficultyIcon
                className={classNames({
                  "stroke-green": difficulty > index && difficulty === 1,
                  "stroke-orange200": difficulty > index && difficulty === 2,
                  "stroke-red": difficulty > index && difficulty >= 3,
                })}
                key={index}
              />
            );
          })}
        <span className="text-black pl-2">{getDifficulty(difficulty)}</span>
      </div>
      <div
        className={classNames(
          "p-5 flex flex-row justify-between",
          lora.className
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <StarIcon />
          <span className="text-black">{rating}</span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <TimeIkon />
          <span className="text-black">{avgCookingTime}</span>
        </div>
      </div>
    </div>
  );
}

export default DishCard;
