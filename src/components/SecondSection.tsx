import React from "react";
import SSCard, { SSCardInterface } from "./SSCard";
import SSIcon1 from "../../public/SSIcon1.svg";
import SSIcon2 from "../../public/SSIcon2.svg";
import SSIcon3 from "../../public/SSIcon3.svg";
import SSIcon4 from "../../public/SSIcon4.svg";
import classNames from "classnames";
import AddRecipeBTN from "./AddRecipeBTN";
import { prompt } from "@/fonts/PromptFont";

const SecondSection = () => {
  const Card1: SSCardInterface = {
    icon: <SSIcon1 className="absolute -top-10 left-1/2 -translate-x-1/2" />,
    description: (
      <>
        Start adding recipe by clicking{" "}
        <AddRecipeBTN size="md" variant="primary" className="py-4" /> <br></br>
        button.
      </>
    ),
    color: "",
  };
  const Card2: SSCardInterface = {
    icon: <SSIcon2 className="absolute -top-10 left-1/2 -translate-x-1/2" />,
    description: (
      <>
        Fill in all necessary steps in adding recipe form. <button></button>
      </>
    ),
    color: "",
  };
  const Card3: SSCardInterface = {
    icon: <SSIcon3 className="absolute -top-10 left-1/2 -translate-x-1/2" />,
    description: (
      <>
        Add photos or videos to make your recipe more appealing.{" "}
        <button></button>
      </>
    ),
    color: "",
  };
  const Card4: SSCardInterface = {
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
    <div className="bg-cream400 second-section-divider relative pb-[450px]">
      <h1
        className={classNames(
          "text-center font-semibold text-teal400 text-5xl",
          prompt.className
        )}
      >
        Share your own recipes
      </h1>
      <div className="flex px-20 pt-28  gap-6 justify-center ">
        <SSCard card={Card1} className="flex-1" />
        <SSCard className="bg-sage400 flex-1" card={Card2} />
        <SSCard card={Card3} className="flex-1" />
        <SSCard className="bg-sage400 flex-1" card={Card4} />
      </div>
    </div>
  );
};

export default SecondSection;
