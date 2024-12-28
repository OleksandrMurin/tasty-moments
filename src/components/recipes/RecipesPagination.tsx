import { FC } from "react";
import { RecipeCard } from "./RecipeCard";

import { getRecipes } from "@/actions/fetchRecipes";
import { PropsWithSearchParams } from "@/app/[locale]/page";
import { PaginationBar } from "../controls/pagination/PaginationBar";
import { FailedToFetch } from "../layout/FailedToFetch";

export const RecipesPagination: FC<PropsWithSearchParams> = async ({
  searchParams,
}) => {
  const fetchedRecipes = await getRecipes(await searchParams);

  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-6 px-20">
        {fetchedRecipes ? (
          fetchedRecipes.content.map((i) => (
            <RecipeCard recipe={i} key={i.id} className="w-full" />
          ))
        ) : (
          <FailedToFetch />
        )}
      </div>
      <div className="flex justify-center py-5">
        <PaginationBar totalPages={10} />
      </div>
    </div>
  );
};
