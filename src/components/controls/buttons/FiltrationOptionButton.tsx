"use client";

import classNames from "classnames";
import { lato } from "@/fonts/LatoFont";
import SelectedOptionIcon from "@public/selected-option-orange-icon.svg";
import React, {
  ComponentPropsWithoutRef,
  FC,
  ReactNode,
  useState,
} from "react";

interface FiltrationOptionProps extends ComponentPropsWithoutRef<"button"> {
  option: FiltrationOption;
}
export interface FiltrationOption {
  optionName: string;
  optionParams?: string;
}

export const FiltrationOptionButton: FC<FiltrationOptionProps> = ({
  option: { optionName, optionParams },
}) => {
  const [isActive, setIsActive] = useState(false);
  const onclick = () => {
    setIsActive(() => !isActive);
  };
  return (
    <button
      onClick={onclick}
      className={classNames(
        "px-8 h-12 py-3 bg-cream200 font-normal text-xl text-warm-grey600 rounded-lg border border-warm-grey200 flex gap-3 justify-center items-center",
        {
          "!text-orange400 !border-orange400 !font-semibold py-2 border-2":
            isActive,
        },
        lato.className
      )}
    >
      {isActive && <SelectedOptionIcon />}
      <p>{optionName}</p>
    </button>
  );
};
