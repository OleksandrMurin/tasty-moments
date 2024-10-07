import { HeroSection } from "@/components/HeroSection";
import { NewsLetterSection } from "@/components/NewsLetterSection";
import { PopularRecipeSection } from "@/components/PopularRecipeSection";
import { SecondSection } from "@/components/SecondSection";
import { FC } from "react";

const Home: FC = async () => (
  <div>
    <HeroSection />
    <SecondSection />
    <PopularRecipeSection />
    <NewsLetterSection />
  </div>
);
export default Home;
