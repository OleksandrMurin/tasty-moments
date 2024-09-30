"use client";
import classNames from "classnames";
import React, { ComponentProps, FC } from "react";
import SelectComponent from "react-select";

type SelectProps = ComponentProps<typeof SelectComponent> & {
  aaa?: string;
};
export const Select: FC<SelectProps> = ({ aaa, ...props }) => {
  return (
    <div className="">
      <SelectComponent
        classNames={{
          control: (state) =>
            classNames(
              "bg-cream200 border-none text-red rounded-md h-14 w-56 "
            ),
          indicatorSeparator: () => classNames("bg-orange400 w-[2px]"),
          dropdownIndicator: () => classNames("text-orange400 "),
          placeholder: () => classNames("text-warm-grey600 text-xl"),
        }}
        {...props}
      />
    </div>
  );
};
