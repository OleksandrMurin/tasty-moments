import DishCard, { Recipe } from "@/components/DishCard";
import HeroSection from "@/components/HeroSection";
import PopularRecipeSection from "@/components/PopularRecipeSection";
import SecondSection from "@/components/SecondSection";
import { Link } from "@/i18n/routing";

export default async function Home() {
  const dish: Recipe = {
    id: "1",
    title: "Praesentium dolorem porro dolorem porro",
    image: "",
    difficulty: 1,
    rating: 4.7,
    avgCookingTime: 30,
    isLiked: false,
  };

  return (
    <div>
      <HeroSection />
      <SecondSection />
      <PopularRecipeSection />
    </div>
  );
}
