import { HeroSection } from "@/components/home/HeroSection";
import { NewsLetterSection } from "@/components/home/NewsLetterSection";
import { RecipeSection } from "@/components/home/recipes/RecipeSection";
import { SecondSection } from "@/components/home/SecondSection";
import { FC } from "react";

export interface PropsWithSearchParams {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const Home: FC<PropsWithSearchParams> = async ({ searchParams }) => {
  return (
    <div>
      <HeroSection />
      <SecondSection />
      <RecipeSection searchParams={searchParams} />

      <NewsLetterSection />
    </div>
  );
};
export default Home;
