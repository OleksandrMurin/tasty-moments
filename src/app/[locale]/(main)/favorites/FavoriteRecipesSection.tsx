import { SortBar } from "@/components/home/recipes/SortBar";
import { RecipesPagination } from "@/components/recipes/RecipesPagination";
import { OptionsType } from "@/types/OptionsType";
import { getTranslations } from "next-intl/server";
import { FC } from "react";
import { PropsWithSearchParams } from "../page";

export const FavoriteRecipesSection: FC<PropsWithSearchParams> = async ({
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
    <div>
      <SortBar options={options} defaultSort="date" />
      <RecipesPagination searchParams={searchParams} />
    </div>
  );
};
