import { FC } from "react";
import { useTranslations } from "next-intl";
import { OptionsType } from "@/types/OptionsType";
import { SortSelect } from "../controls/select/SortSelect";

export const RecipeSortSelect: FC = () => {
  const t = useTranslations("Recipe");

  const options: OptionsType = {
    difficulty: t("Difficulty"),
    title: t("Title"),
    rating: t("Rating"),
    date: t("Date"),
  };
  return (
    <SortSelect
      isSearchable={false}
      defaultValue={"date"}
      options={Object.keys(options).map((value) => ({
        value,
        label: options[value],
      }))}
    />
  );
};
