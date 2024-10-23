import React, { ButtonHTMLAttributes, FC } from "react";
import { prompt } from "@/fonts/PromptFont";
import classNames from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  textSize?: "B1" | "B2";
  colorIntensity?: "200" | "400" | "600";
}

export const Button: FC<Props> = ({
  variant = "primary",
  textSize = "B2",
  colorIntensity = "200",
  className,
  children,
  ...props
}) => (
  <button
    {...props}
    className={classNames(
      "py-[13px] px-[50px] ",
      prompt.className,
      {
        "text-base": textSize == "B1",
        "text-xl/9 font-medium": textSize == "B2",
        "bg-orange200 text-cream200":
          colorIntensity == "200" && variant == "primary",
        "bg-orange400 text-cream200":
          colorIntensity == "400" && variant == "primary",
        "bg-cream200 text-orange400":
          colorIntensity == "200" && variant == "secondary",
        "bg-cream400 text-orange400":
          colorIntensity == "400" && variant == "secondary",
      },
      className
    )}
  >
    {children}
  </button>
);
