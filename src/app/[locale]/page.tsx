import {HeroSection} from "@/components/HeroSection";
import {PopularRecipeSection} from "@/components/PopularRecipeSection";
import {SecondSection} from "@/components/SecondSection";
import {FC} from "react";

const Home: FC = async () =>
    <div>
        <HeroSection/>
        <SecondSection/>
        <PopularRecipeSection/>
    </div>;
export default Home;
