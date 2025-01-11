import { FC } from "react";
import { SortBar } from "./SortBar";

import { RecipesPagination } from "../../recipes/RecipesPagination";

import { PropsWithSearchParams } from "@/app/[locale]/(main)/page";
import { OptionsType } from "@/types/OptionsType";
import { getTranslations } from "next-intl/server";

export const AllRecipes: FC<PropsWithSearchParams> = async ({
  searchParams,
}) => {
  const t = await getTranslations("Recipe");

  const options: OptionsType = {
    difficulty: t("Difficulty"),
    title: t("Title"),
    rating: t("Rating"),
    date: t("Date"),
  };
  return (
    <div className=" bg-orange100 ">
      <SortBar options={options} defaultSort="date" />
      <RecipesPagination searchParams={searchParams} />
    </div>
  );
};
