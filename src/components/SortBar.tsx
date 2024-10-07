// "use client";
import React, { FC, useState } from "react";
import SortIcon from "../../public/sort-icon.svg";
import { RecipeSortSelect } from "./RecipeSortSelect";
import Filter from "../../public/filter-icon.svg";
import { ModalButton } from "./ModalButton";

export const SortBar: FC = () => {
  return (
    <div className="flex flex-row justify-between px-20 pt-28 pb-14 ">
      <div className="flex flex-row items-center grow">
        <span className="uppercase text-xl text-orange600 pr-4">Sort by</span>
        <RecipeSortSelect />
        <div className="p-4 ml-2 bg-cream400 rounded-[4px]">
          <SortIcon />
        </div>
      </div>
      <div>
        <ModalButton className="bg-cream400 p-4 rounded">
          <Filter />
        </ModalButton>
      </div>
    </div>
  );
};
