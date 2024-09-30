import { FC } from "react";
import { Select } from "./Select";
import { useTranslations } from "next-intl";
import { OptionsType } from "@/types/OptionsType";
import { StylesConfig } from "react-select";

export const RecipeSortSelect: FC = () => {
  const t = useTranslations("Recipe");

  const options: OptionsType = {
    difficulty: t("Difficulty"),
    title: t("Title"),
    rating: t("Rating"),
    date: t("Date"),
    id: "Id",
  };
  const customStyles: StylesConfig = {
    control: (provided, state) => ({
      ...provided,
      height: "100px",
    }),
  };
  return (
    <Select
      options={Object.keys(options).map((value) => ({
        value,
        label: options[value],
      }))}
    />
  );
};
