import React from "react";
import { SecondSectionType, SecondSectionCardType } from "./SecondSectionType";
import SSIcon1 from "../../public/SSIcon1.svg";
import SSIcon2 from "../../public/SSIcon2.svg";
import SSIcon3 from "../../public/SSIcon3.svg";
import SSIcon4 from "../../public/SSIcon4.svg";
import classNames from "classnames";
import { AddRecipeButton } from "./AddRecipeButton";
import { prompt } from "@/fonts/PromptFont";

// TODO: convert to array
export const SecondSection = () => {
  const Card1: SecondSectionCardType = {
    icon: <SSIcon1 className="absolute -top-10 left-1/2 -translate-x-1/2" />,
    description: (
      <>
        Start adding recipe by clicking{" "}
        <AddRecipeButton size="md" variant="primary" className="py-4" />{" "}
        <br></br>
        button.
      </>
    ),
    color: "",
  };
  const Card2: SecondSectionCardType = {
    icon: <SSIcon2 className="absolute -top-10 left-1/2 -translate-x-1/2" />,
    description: (
      <>
        Fill in all necessary steps in adding recipe form. <button></button>
      </>
    ),
    color: "",
  };
  const Card3: SecondSectionCardType = {
    icon: <SSIcon3 className="absolute -top-10 left-1/2 -translate-x-1/2" />,
    description: (
      <>
        Add photos or videos to make your recipe more appealing.{" "}
        <button></button>
      </>
    ),
    color: "",
  };
  const Card4: SecondSectionCardType = {
    icon: <SSIcon4 className="absolute -top-10 left-1/2 -translate-x-1/2" />,
    description: (
      <>
        Click «Publish» and your recipe will be available to all users{" "}
        <button></button>
      </>
    ),
    color: "",
  };
  return (
    <div className="bg-cream400 second-section-divider relative pt-14 pb-[450px]">
      <h1
        className={classNames(
          "text-center font-semibold text-teal400 text-5xl",
          prompt.className
        )}
      >
        Share your own recipes
      </h1>
      <div className="flex px-20 pt-28  gap-6 justify-center ">
        <SecondSectionType card={Card1} className="flex-1" />
        <SecondSectionType className="bg-sage400 flex-1" card={Card2} />
        <SecondSectionType card={Card3} className="flex-1" />
        <SecondSectionType className="bg-sage400 flex-1" card={Card4} />
      </div>
    </div>
  );
};
