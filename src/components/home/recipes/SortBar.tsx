import React, { FC } from "react";
import SortIcon from "@public/sort-icon.svg";
import { SearchBar } from "@components/controls/search/SearchBar";
import { useTranslations } from "next-intl";
import { OptionsType } from "@/types/OptionsType";
import { SortSelect } from "@components/controls/select/SortSelect";
import { FiltrationButton } from "./FiltrationButton";

interface Props {
  options: OptionsType;
  defaultSort: string;
}

export const SortBar: FC<Props> = ({ options, defaultSort }) => {
  const t = useTranslations("SortBar");
  const optionsMapped = Object.keys(options).map((value) => ({
    value,
    label: options[value],
  }));
  return (
    <div className="flex flex-row justify-between px-20 pt-28 pb-14 ">
      <div className="flex flex-row items-center grow">
        <span className="uppercase text-xl text-orange600 pr-4">
          {t("Sort by")}
        </span>
        <SortSelect
          isSearchable={false}
          defaultValue={defaultSort}
          options={optionsMapped}
        />
        <div className="p-4 ml-2 bg-cream400 rounded-[4px]">
          <SortIcon />
        </div>
      </div>
      <div className="flex gap-4 w-3/5 items-center justify-end">
        <SearchBar />
        <FiltrationButton />
      </div>
    </div>
  );
};
