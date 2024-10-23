"use client";
import cn from "classnames";
import React, { ComponentProps, FC, useMemo } from "react";
import SelectComponent, { ClassNamesConfig } from "react-select";

export type SelectProps = ComponentProps<typeof SelectComponent> & {
  aaa?: string;
};
const classNames: ClassNamesConfig = {
  control: () => "!bg-cream200 !border-none !text-red !rounded-md h-14 w-56",
  indicatorSeparator: () => "!bg-orange400 !w-[2px]",
  dropdownIndicator: () => "!text-orange400",
  placeholder: () => "!text-warm-grey600 !text-xl",
  option: ({ isSelected }) =>
    cn("!bg-cream200 !text-warm-grey600", { "!font-bold": isSelected }),
};

export const Select: FC<SelectProps> = ({ aaa, ...props }) => {
  return <SelectComponent classNames={classNames} {...props} />;
};
