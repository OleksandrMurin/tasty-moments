import React, {ComponentPropsWithoutRef, FC} from "react";
import {getLocale} from "next-intl/server";
import {useTranslations} from "next-intl";
import {Lora} from "next/font/google";
import Image from "next/image";
import logo from "../../public/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg";
import Like from "../../public/favorite-icon.svg";
import StarIcon from "../../public/star-icon-blank.svg";
import DifficultyIcon from "../../public/difficulty-level-icon.svg";
import TimeIcon from "../../public/time-icon.svg";
import classNames from "classnames";
import {Recipe} from "@/types/Recipe";
import dayjs from "dayjs";

interface RecipeCardProps extends ComponentPropsWithoutRef<"div"> {
    recipe: Recipe
}

const lora = Lora({
    subsets: ["latin", "cyrillic"],
    weight: ["400", "700"],
    style: ["normal", "italic"],
    display: "swap",
});

export const RecipeCard: FC<RecipeCardProps> = async ({recipe, className}) => {
    const t = useTranslations("DishCard");
    const locale = await getLocale();
    const {difficulty, avgCookingTime, rating, title, isLiked, image} = recipe;
    const dateTime = dayjs.duration(avgCookingTime).locale(locale).humanize();

    const getDifficulty = (difficulty: number) => {
        const difficulties = {
            1: t("Easy"),
            2: t("Medium"),
            3: t("Hard"),
        };
        if (difficulty <= 1) return difficulties[1];
        if (difficulty >= 3) return difficulties[3];
        return difficulties[2];
    };
    return (
        <div className={classNames(" bg-cream400 rounded shadow-lg", className)}>
            <Image
                src={logo}
                alt="Picture of the author"
                className="rounded-t-lg w-full h-auto"
            />
            <div className="m-5 flex justify-between">
                <span className="text-2xl text-black ">{title}</span>
                <div>
                    <Like/>
                </div>
            </div>
            <div className="flex flex-row gap-1 pl-5 pb-1 items-center">
                {Array(3)
                    .fill(true)
                    .map((_, index) =>
                        <DifficultyIcon
                            className={classNames({
                                "stroke-green": difficulty > index && difficulty === 1,
                                "stroke-orange200": difficulty > index && difficulty === 2,
                                "stroke-red": difficulty > index && difficulty >= 3,
                            })}
                            key={index}
                        />)}
                <span className="text-black pl-2">{getDifficulty(difficulty)}</span>
            </div>
            <div className={classNames("p-5 flex flex-row justify-between", lora.className)}>
                <div className="flex flex-row items-center gap-2">
                    <StarIcon/>
                    <span className="text-black">
            {rating.value} ({rating.count})
          </span>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <TimeIcon/>
                    <span className="text-black">{dateTime}</span>
                </div>
            </div>
        </div>
    );
};
