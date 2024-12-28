import { FC } from "react";

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
