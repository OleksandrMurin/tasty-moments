import React, { ButtonHTMLAttributes, FC } from "react";
import { useTranslations } from "next-intl";
import { lato } from "@/fonts/LatoFont";
import classNames from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "contained" | "blanc";
  size?: "sm" | "md" | "lg";
}

export const OrangeButton: FC<Props> = ({
  variant = "secondary",
  size = "md",
  className = "",
}) => {
  const t = useTranslations("Header");
  return (
    <button
      className={classNames(
        "py-[13px] px-[50px] bg-orange200 text-white",
        lato.className,
        {
          "text-base": size == "sm",
          "text-xl": size == "md",
          "text-2xl": size == "lg",
          "font-semibold": variant == "primary",
          "font-medium h-14": variant == "secondary",
        },
        className
      )}
    >
      Join
    </button>
  );
};
