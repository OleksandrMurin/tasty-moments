"use client";

import { FC, useMemo } from "react";
import { Select, SelectProps } from "./Select";
import { useQueryParam } from "@/hooks/useQueryParam";

interface Props extends SelectProps {
  defaultValue: string;
}

export const SortSelect: FC<Props> = ({ defaultValue, ...props }) => {
  const acceptableValue = useMemo(
    () =>
      props.options?.map((x) => {
        const option = x as { value: string };
        return option.value;
      }),
    [props.options]
  );
  const [option, setOption] = useQueryParam(
    "sort",
    defaultValue,
    acceptableValue
  );
  const onChange = (x: unknown) => {
    const option = x as { value: string };
    return setOption(option.value);
  };
  const value = (props.options as { value: string }[]).find(
    (o) => o.value === option
  );
  return <Select value={value} onChange={onChange} {...props} />;
};
