import React, {ButtonHTMLAttributes, FC} from "react";
import {useTranslations} from "next-intl";
import {lato} from "@/fonts/LatoFont";
import classNames from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export const AddRecipeButton: FC<Props> = ({ variant = "secondary", size = "md" }) => {
  const t = useTranslations("Header");
  return (
    <button
      className={classNames(
        "py-2 px-4 bg-cream200 text-orange400 rounded uppercase",
        lato.className,
        {
          "text-base": size == "sm",
          "text-xl": size == "md",
          "text-2xl": size == "lg",
          "font-semibold": variant == "primary",
          "": variant == "secondary",
        }
      )}
    >
      {t("Add recipe")}
    </button>
  );
};
