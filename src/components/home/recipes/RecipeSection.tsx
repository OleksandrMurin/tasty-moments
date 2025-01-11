import { FC } from "react";

import { AllRecipes } from "./AllRecipes";

import { PropsWithSearchParams } from "@/types/PropsWithSearchParams";
import { PopularRecipes } from "./PopularRecipes";

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
