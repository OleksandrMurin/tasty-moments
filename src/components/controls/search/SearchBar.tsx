"use client";
import React, { ChangeEventHandler } from "react";
import { SearchBarInput } from "./SearchBarInput";
import Divider from "../../../../public/devider.svg";
import SearchIcon from "../../../../public/search-icon.svg";
import { useQueryParam } from "@/hooks/useQueryParam";

export const SearchBar = () => {
  const [search, setSearch] = useQueryParam<string>("search", "");
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="!bg-cream200 !border-none !rounded-md h-14 w-2/3 flex items-center gap-4 px-4 ">
      <SearchBarInput onChange={onChange} />
      <Divider />
      <SearchIcon />
    </div>
  );
};
