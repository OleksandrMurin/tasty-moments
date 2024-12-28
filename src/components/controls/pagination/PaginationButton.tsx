import { ComponentPropsWithoutRef, FC, ReactNode } from "react";

import classNames from "classnames";

interface Props extends ComponentPropsWithoutRef<"button"> {
  direction?: "right" | "left";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const PaginationButton: FC<Props> = ({
  direction = "left",
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(
        { "transform rotate-180": direction == "right" },
        "border-cream400 border-2 rounded-lg py-4 px-3 w-16 h-16 items-center flex justify-center text-2xl ",
        className
      )}
    >
      {children}
    </button>
  );
};
