"use client";
import { ReturnToHomepageButton } from "@/components/controls/buttons/ReturnToHomepage";
import { lato } from "@/fonts/LatoFont";
import { prompt } from "@/fonts/PromptFont";
import classNames from "classnames";
import { FC } from "react";
import { SignUpStep1 } from "./SignUpStep1";

export const SignUpPart: FC = () => {
  const stepsArray = [
    <SignUpStep1 currentStep={currentStep} setCurrentStep={setCurrentStep} />,
    // <SignUpStep2/>,
    // <SignUpStep3/>,
  ];
  return (
    <div className="flex pl-40 pt-20 bg-cream400 flex-col">
      <div className="flex flex-col w-96 items-center">
        <h1
          className={classNames(
            "font-bold text-[40px] leading-[31px] tracking-[3%] text-cold-grey600 pt-20 ",
            prompt.className
          )}
        >
          Create an account
        </h1>
        {currentStep == 0 && (
          <h2
            className={classNames(
              "flex w-96 font-semibold text-3xl text-sage600 pt-3  justify-end ",
              lato.className
            )}
          >
            Hello!
          </h2>
        )}
        {currentStep > 0 && (
          <ReturnToHomepageButton>sdfsdfsdf</ReturnToHomepageButton>
        )}
      </div>

      {stepsArray[currentStep]}
    </div>
  );
};
