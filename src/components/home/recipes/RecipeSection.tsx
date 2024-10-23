import React, { FC } from "react";
import { Swiper } from "@/components/controls/swiper/Swiper";
import { RecipeCard } from "@/components/recipes/RecipeCard";
import Star from "@public/star-icon.svg";
import { prompt } from "@/fonts/PromptFont";
import classNames from "classnames";
import { Recipe } from "@/types/Recipe";
import { PageModel } from "@/types/PageModel";
import { SortBar } from "./SortBar";
import { baseUrl } from "@/api";

import { RecipesPagination } from "../../recipes/RecipesPagination";
import { useTranslations } from "next-intl";
import { OptionsType } from "@/types/OptionsType";
import { getTranslations } from "next-intl/server";
import PopularRecipes from "./PopularRecipes";
import { AllRecipes } from "./AllRecipes";
import { PropsWithSearchParams } from "@/app/[locale]/page";

export const RecipeSection: FC<PropsWithSearchParams> = async ({
  searchParams,
}) => {
  return (
    <div className=" bg-orange100 third-section-divider relative ">
      <PopularRecipes />
      <AllRecipes searchParams={searchParams} />
      {/* <SortBar options={options} defaultSort="date" /> */}
      {/* <RecipesPagination cards={paginated} /> */}
    </div>
  );
};
