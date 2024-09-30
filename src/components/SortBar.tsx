import React from "react";
import SortIcon from "../../public/sort-icon.svg";
import { Select } from "./Select";
import { RecipeSortSelect } from "./RecipeSortSelect";
const SortBar = () => {
  return (
    <div className="flex flex-row justify-between ">
      <div className="flex flex-row items-center grow">
        <span className="uppercase text-xl text-orange600 pr-4">Sort by</span>
        <RecipeSortSelect />
        <div className="p-4 ml-2 bg-cream400 rounded-[4px]">
          <SortIcon />
        </div>
      </div>
      <div>Rfrf</div>
    </div>
  );
};

export default SortBar;
