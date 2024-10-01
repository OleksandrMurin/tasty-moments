import {RecipeRating} from "./RecipeRating";

export interface Recipe {
    id: string;
    title: string;
    image: string;
    difficulty: number;
    rating: RecipeRating;
    avgCookingTime: string;
    isLiked: boolean;
  }