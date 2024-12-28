import classNames from "classnames";
import { ComponentPropsWithoutRef, FC } from "react";

type Props = ComponentPropsWithoutRef<"input">;

export const SearchBarInput: FC<Props> = (props) => (
  <input
    placeholder="Search"
    {...props}
    className={classNames(
      "bg-cream200 focus:outline-none text-xl w-11/12",
      props.className
    )}
  />
);
