import React, { FC } from "react";
import {
  FiltrationOption,
  FiltrationOptionButton,
} from "./FiltrationOptionButton";
import Divider from "@public/filtration-section-divider.svg";
import classNames from "classnames";
import { lato } from "@/fonts/LatoFont";

interface Props {
  sectionName: string;
  sectionParams?: string;
  options: FiltrationOption[];
}

const FiltrationOptionsSection: FC<Props> = ({
  sectionName,
  sectionParams,
  options,
}) => {
  return (
    <div>
      <span
        className={classNames(
          "text-3xl font-semibold text-black",
          lato.className
        )}
      >
        {sectionName}
      </span>
      <div className="pt-3 pb-6">
        <Divider />
      </div>

      <div className="flex  flex-wrap gap-3 items-center pb-14">
        {options.map((x, index) => (
          <FiltrationOptionButton key={index} option={x} />
        ))}
      </div>
    </div>
  );
};

export default FiltrationOptionsSection;
