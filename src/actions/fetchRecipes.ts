

import { get } from "@/api";
import { PageModel } from "@/types/PageModel";
import { Recipe } from "@/types/Recipe";

export const getRecipes = async (searchParams: { [key: string]: string | string[] | undefined }): Promise<PageModel<Recipe> | null> => {
  if(searchParams["page"]){
    searchParams["page"] = (+searchParams["page"]-1).toString()
  }  
  const params = new URLSearchParams()
    Object.entries(searchParams).forEach(([name, value]) => {
      if(value === undefined) return;
      if(typeof(value) === "string") params.set(name, value);
      else if(Array.isArray(value)) {
        value.forEach(x => params.set(name, x))
      }
      
    })
    const paginated = await get("/recipe", params);
    if (!paginated.ok) {
      console.error("Failed to fetch all recipes");
      return null;
    }
    return paginated.json();
  };