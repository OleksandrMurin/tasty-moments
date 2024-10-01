import React, {FC} from "react";
import {Swiper} from "./swiper/Swiper";
import {RecipeCard} from "./RecipeCard";
import Star from "../../public/star-icon.svg";
import {prompt} from "@/fonts/PromptFont";
import classNames from "classnames";
import {Recipe} from "@/types/Recipe";
import {PageModel} from "@/types/PageModel";
import {SortBar} from "./SortBar";
import {connectionString} from "@/constants/api";

export const PopularRecipeSection : FC = async () => {
    const fetchPopRecipes = async (): Promise<PageModel<Recipe>> => {
        const res = await fetch(
            `${connectionString}/recipe?page=0&diff.min=0&diff.max=4&size=20&sort=difficulty`,
            {
                cache: "no-store",
            }
        );
        if (!res.ok) console.error("Failed to fetch");
        return res.json();
    };
    const {content, page} = await fetchPopRecipes();

    return (
        <div className=" bg-orange100 third-section-divider relative ">
            <div className="flex flex-row gap-5 items-center pl-20 pb-12">
                <Star/>
                <h1 className={classNames("text-5xl", prompt.className)}>
                    Most popular recipes
                </h1>
            </div>
            <Swiper slides={content.map((recipe) => <RecipeCard recipe={recipe} key={recipe.id}/>)}/>
            <SortBar/>
        </div>
    );
};
