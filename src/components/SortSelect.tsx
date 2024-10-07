"use client";

import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Select, SelectProps } from "./Select";
import { usePathname, useRouter } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";

interface Props extends SelectProps {
  defaultValue: string;
}
type useQueryParam = (
  name: string
) => [string, Dispatch<SetStateAction<string>>];

const useQueryParam: useQueryParam = (name) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const init = searchParams.get(name) || "";
  const [option, setOption] = useState<string>(init);
  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (!option) {
      current.delete(name);
    } else {
      current.set(name, option.toString());
    }
    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.replace(`${pathname}${query}`, { scroll: false });
  }, [option, router, pathname, searchParams]);
  return [option, setOption];
};

export const SortSelect: FC<Props> = ({ defaultValue = "", ...props }) => {
  const [option, setOption] = useQueryParam("sort");
  const onChange = (x: unknown) => {
    const option = x as { value: string };
    return setOption(option.value);
  };
  return (
    <Select
      value={(props.options as { value: string }[]).filter(
        (o) => o.value === option
      )}
      onChange={onChange}
      {...props}
    />
  );
};
