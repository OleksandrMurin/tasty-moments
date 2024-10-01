import {FC} from "react";
import {Select} from "./Select";
import {useTranslations} from "next-intl";
import {OptionsType} from "@/types/OptionsType";

export const RecipeSortSelect: FC = () => {
    const t = useTranslations("Recipe");

    const options: OptionsType = {
        difficulty: t("Difficulty"),
        title: t("Title"),
        rating: t("Rating"),
        date: t("Date"),
        id: "Id",
    };
    return <Select options={Object.keys(options).map((value) => ({value, label: options[value]}))}/>;
};
