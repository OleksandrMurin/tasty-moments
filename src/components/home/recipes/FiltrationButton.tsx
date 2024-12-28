"use client";
import {
  ModalButton,
  ModalWindow,
} from "@/components/controls/buttons/ModalButton";
import Filter from "@public/filter-icon.svg";
import { FC, useState } from "react";

import { FiltrationOption } from "@/components/controls/buttons/FiltrationOptionButton";
import { FiltrationOptionsSection } from "@/components/controls/buttons/FiltrationOptionsSection";
import { Button } from "@/components/controls/buttons/OrangeButton";

// interface Props {
//   isActive: boolean;
//   setIsActive: Dispatch<SetStateAction<boolean>>;
// }

export const FiltrationButton: FC = () => {
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
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <ModalButton
        className="bg-cream400 p-4 rounded"
        isActive={isActive}
        setIsActive={setIsActive}
      >
        <Filter />
      </ModalButton>
      <ModalWindow
        isActive={isActive}
        setIsActive={setIsActive}
        className="bg-cream400"
      >
        <div>
          <FiltrationOptionsSection
            sectionName="Types of dishes"
            options={optionsArray}
          />
          <FiltrationOptionsSection
            sectionName="Types of poop"
            options={optionsArray}
          />
          <FiltrationOptionsSection
            sectionName="Types of kakij"
            options={optionsArray}
          />
          <div className="flex justify-end pb-12 pt-2">
            <Button variant="secondary" colorIntensity="400">
              Reset
            </Button>
            <Button colorIntensity="400" className="rounded-lg">
              Selected X results
            </Button>
          </div>
        </div>
      </ModalWindow>
    </div>
  );
};
