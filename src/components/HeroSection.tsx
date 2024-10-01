import React, {FC} from "react";
import {lora} from "@/fonts/LoraFont";
import {prompt} from "@/fonts/PromptFont";
import classNames from "classnames";

export const HeroSection : FC = () => (
    <div className="w-full h-screen bg-hero-img bg-no-repeat bg-cover bg-center">
      <div className="flex flex-col items-center h-screen">
        <h1
            className={classNames(
                "bg-gradient-4 text-center bg-clip-text text-transparent font-semibold text-6xl pt-36 min-w-[932px]",
                prompt.className
            )}
        >
          From Others Kitchen to Yours
        </h1>
        <p
            className={classNames(
                "px-80 pb-16 pt-6 text-center text-cream200 leading-[39px] text-[28px]",
                lora.className
            )}
        >
          Whether you&#39;re a seasoned chef or just starting your kitchen
          adventures, we have something delicious for everyone.
        </p>
        <button
            className={classNames(
                "bg-gradient-1 text-cream200 text-2xl py-3 px-10 rounded-lg",
                prompt.className
            )}
        >
          Explore All Recipes
        </button>
      </div>
    </div>
);
