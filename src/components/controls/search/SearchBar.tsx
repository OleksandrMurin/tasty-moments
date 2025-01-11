"use client";
import { useQueryParam } from "@/hooks/useQueryParam";
import Divider from "@public/devider.svg";
import SearchIcon from "@public/search-icon.svg";
import { ChangeEventHandler } from "react";
import { SearchBarInput } from "./SearchBarInput";

export const SearchBar = () => {
  const [search, setSearch] = useQueryParam<string>("search", "");
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="!bg-cream200 !border-none !rounded-md h-14 w-2/3 flex items-center gap-4 px-4 ">
      <SearchBarInput value={search} onChange={onChange} />
      <Divider />
      <SearchIcon />
    </div>
  );
};
