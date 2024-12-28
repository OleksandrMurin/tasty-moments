import SSIcon1 from "../../../public/SSIcon1.svg";
import SSIcon2 from "../../../public/SSIcon2.svg";
import SSIcon3 from "../../../public/SSIcon3.svg";
import SSIcon4 from "../../../public/SSIcon4.svg";
import classNames from "classnames";
import { AddRecipeButton } from "../controls/buttons/AddRecipeButton";
import { prompt } from "@/fonts/PromptFont";
import { SecondSectionCard, SecondSectionCardType } from "./SecondSectionType";

export const SecondSection = () => {
  const cards: Array<SecondSectionCardType> = [
    {
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
    },
    {
      icon: <SSIcon2 className="absolute -top-10 left-1/2 -translate-x-1/2" />,
      description: (
        <>
          Fill in all necessary steps in adding recipe form. <button></button>
        </>
      ),
      color: "sage400",
    },
    {
      icon: <SSIcon3 className="absolute -top-10 left-1/2 -translate-x-1/2" />,
      description: (
        <>
          Add photos or videos to make your recipe more appealing.{" "}
          <button></button>
        </>
      ),
      color: "",
    },
    {
      icon: <SSIcon4 className="absolute -top-10 left-1/2 -translate-x-1/2" />,
      description: (
        <>
          Click «Publish» and your recipe will be available to all users{" "}
          <button></button>
        </>
      ),
      color: "sage400",
    },
  ];

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
        {cards.map((x, i) => {
          return (
            <SecondSectionCard
              key={i}
              card={x}
              className={classNames("flex-1", {
                "bg-sage400": x.color == "sage400",
              })}
            />
          );
        })}
      </div>
    </div>
  );
};
