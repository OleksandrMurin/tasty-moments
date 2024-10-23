import classNames from "classnames";
import React, { ComponentPropsWithoutRef, FC } from "react";
import Star from "@public/star-icon.svg";
import { Swiper } from "@/components/controls/swiper/Swiper";
import { prompt } from "@/fonts/PromptFont";
import { RecipeCard } from "@/components/recipes/RecipeCard";
import { get } from "@/api";
import { PageModel } from "@/types/PageModel";
import { Recipe } from "@/types/Recipe";

type Props = ComponentPropsWithoutRef<"div">;

//TODO : Unhandled error
const PopularRecipes: FC<Props> = async (props) => {
  const fetch = async (): Promise<PageModel<Recipe> | null> => {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set("page", "0");
    urlSearchParams.set("size", "10");
    urlSearchParams.set("sort", "rating,desc");
    const paginated = await get("/recipe", urlSearchParams);
    if (!paginated.ok) {
      console.error("Failed to fetch popular recipes");
      return null;
    }
    return paginated.json();
  };
  const fetchedRecipes = await fetch();
  return (
    <div {...props}>
      <div className="flex flex-row gap-5 items-center pl-20 pb-12">
        <Star />
        <h1 className={classNames("text-5xl", prompt.className)}>
          Most popular recipes
        </h1>
      </div>
      {fetchedRecipes ? (
        <Swiper
          slides={fetchedRecipes.content.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe.id} />
          ))}
        />
      ) : (
        <div> "Error"</div>
      )}
    </div>
  );
};

export default PopularRecipes;