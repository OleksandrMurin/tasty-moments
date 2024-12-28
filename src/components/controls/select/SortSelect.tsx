"use client";

import { useQueryParam } from "@/hooks/useQueryParam";
import dynamic from "next/dynamic";
import { FC, useMemo } from "react";
import { SelectProps } from "./Select";

interface Props extends SelectProps {
  defaultValue: string;
}
const NoSSR = dynamic(async () => (await import("./Select")).Select, {
  ssr: false,
});
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
  const value = useMemo(
    () =>
      (props.options as { value: string }[]).find((o) => o.value === option),
    [props.options]
  );
  return <NoSSR value={value} onChange={onChange} {...props} />;
};
