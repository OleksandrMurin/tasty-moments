"use client";

import React, {ComponentProps, FC, useMemo} from "react";
import SelectComponent from "react-select";

type SelectProps = ComponentProps<typeof SelectComponent> & {
    aaa?: string;
};
export const Select: FC<SelectProps> = ({aaa, ...props}) => {
    const classNames = useMemo(() => ({
        control: () => "bg-cream200 border-none text-red rounded-md h-14 w-56",
        indicatorSeparator: () => "bg-orange400 w-[2px]",
        dropdownIndicator: () => "text-orange400",
        placeholder: () => "text-warm-grey600 text-xl",
    }), []);
    return <SelectComponent classNames={classNames} {...props}/>;
};
