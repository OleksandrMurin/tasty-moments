import React, { FC, useEffect, useState } from "react";
import { RecipeCard, RecipeCardProps } from "./RecipeCard";
import { PageModel } from "@/types/PageModel";
import { Recipe } from "@/types/Recipe";

import DoubleArrow from "../../public/button-double-arrow-left.svg";
import { PaginationButton } from "../controls/pagination/PaginationButton";
import { PaginationBar } from "../controls/pagination/PaginationBar";
import { getRecipes } from "@/actions/fetchRecipes";
import { useSearchParams } from "next/navigation";
import { PropsWithSearchParams } from "@/app/[locale]/page";

export const RecipesPagination: FC<PropsWithSearchParams> = async ({
  searchParams,
}) => {
  const fetchedRecipes = await getRecipes(searchParams);

  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-6 px-20">
        {fetchedRecipes ? (
          fetchedRecipes.content.map((i) => (
            <RecipeCard recipe={i} key={i.id} className="w-full" />
          ))
        ) : (
          <div>Error in RecipesPagination</div>
        )}
      </div>
      <div className="flex justify-center py-5">
        <PaginationBar totalPages={5} />
      </div>
    </div>
  );
};
