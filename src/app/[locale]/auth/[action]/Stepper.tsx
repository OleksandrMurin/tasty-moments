import classNames from "classnames";
import { FC } from "react";

interface Props {
  currentStep: number;
}

export const Stepper: FC<Props> = ({ currentStep }) => {
  return (
    <div className="flex ">
      <div className="flex flex-col items-center w-[400px] h-10">
        <div className="relative flex items-center">
          <div
            className={classNames("relative w-4 h-4 rounded-full", {
              "border-teal400 border-2": currentStep == 0,
              "border-warm-grey400 border-2": currentStep != 0,
              "bg-teal400": currentStep > 1,
            })}
          >
            <div className="absolute top-1/2 left-4 w-[60px] h-[2px] border-t-2 border-dashed border-gray-400" />
          </div>
        </div>
        <p className="custom-text-4">Shag 1</p>
      </div>
      <div className="flex flex-col items-center w-[400px] h-10">
        <div className="relative flex items-center">
          <div
            className={classNames("relative w-4 h-4 rounded-full", {
              "border-teal400 border-2": currentStep == 1,
              "border-warm-grey400 border-2": currentStep != 1,
              "bg-teal400": currentStep > 2,
            })}
          >
            <div className="absolute top-1/2 left-4 w-[60px] h-[2px] border-t-2 border-dashed border-gray-400" />
            <div className="absolute top-1/2 right-4 w-[46px] h-[2px] border-t-2 border-dashed border-gray-400" />
          </div>
        </div>
        <p className="custom-text-4">Shag 2</p>
      </div>
      <div className="flex flex-col items-center w-[400px] h-10">
        <div className="relative flex items-center">
          <div
            className={classNames("relative w-4 h-4 rounded-full", {
              "border-teal400 border-2": currentStep == 2,
              "border-warm-grey400 border-2": currentStep != 2,
            })}
          >
            <div className="absolute top-1/2 right-4 w-[46px] h-[2px] border-t-2 border-dashed border-gray-400 " />
          </div>
        </div>
        <p className="custom-text-4">Shag 3</p>
      </div>
    </div>
  );
};
