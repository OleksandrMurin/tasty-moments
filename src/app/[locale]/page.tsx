import { FiltrationOption } from "@/components/controls/buttons/FiltrationOptionButton";
import FiltrationOptionsSection from "@/components/controls/buttons/FiltrationOptionsSection";
import { HeroSection } from "@/components/home/HeroSection";
import { NewsLetterSection } from "@/components/home/NewsLetterSection";
import { RecipeSection } from "@/components/home/recipes/RecipeSection";
import { SecondSection } from "@/components/home/SecondSection";
import { FC } from "react";

export interface PropsWithSearchParams {
  searchParams: { [key: string]: string | string[] | undefined };
}

const Home: FC<PropsWithSearchParams> = async ({ searchParams }) => {
  const optionsArray: FiltrationOption[] = [
    { optionName: "drinks" },
    { optionName: "salads" },
    { optionName: "poop" },
    { optionName: "poop" },
    { optionName: "poop" },
    { optionName: "poop" },
    { optionName: "poop" },
    { optionName: "poop" },
    { optionName: "poop" },
    { optionName: "poop" },
    { optionName: "poop" },
    { optionName: "poop" },
    { optionName: "poop" },
    { optionName: "poop" },
    { optionName: "salads" },
  ];
  return (
    <div>
      <HeroSection />
      <SecondSection />
      <RecipeSection searchParams={searchParams} />
      <div className="bg-cream600 flex justify-center p-4">
        <FiltrationOptionsSection
          sectionName="Types of dishes"
          options={optionsArray}
        />
      </div>

      <NewsLetterSection />
    </div>
  );
};
export default Home;
