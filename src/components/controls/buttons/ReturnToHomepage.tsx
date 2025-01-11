import { lato } from "@/fonts/LatoFont";
import { Link } from "@/i18n/routing";
import OrangeArrow from "@public/arrow-left-small-orange.svg";
import classNames from "classnames";
import { ComponentPropsWithoutRef, FC } from "react";

interface Props extends ComponentPropsWithoutRef<"a"> {
  arrowClassName?: string;
  textClassName?: string;
}

export const ReturnToHomepageButton: FC<Props> = ({
  textClassName = "w-[24px] h-[24px]",
  arrowClassName = "w-[24px] h-[24px]",
  children,
  ...rest
}) => (
  <Link
    href="/"
    {...rest}
    className={classNames(
      "text-orange400 text-2xl flex gap-2 items-end",
      lato.className
    )}
  >
    <OrangeArrow className={arrowClassName} />
    <span className={classNames("-mb-[1px]", textClassName)}>{children}</span>
  </Link>
);
