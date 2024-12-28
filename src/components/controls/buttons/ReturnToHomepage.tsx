import { lato } from "@/fonts/LatoFont";
import { Link } from "@/i18n/routing";
import OrangeArrow from "@public/arrow-left-small-orange.svg";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import { ComponentPropsWithoutRef, FC } from "react";

interface Props extends ComponentPropsWithoutRef<"a"> {
  //TODO Unneeded props should be removed
  height?: string;
  weight?: string;
}

export const ReturnToHomepage: FC<Props> = ({
  className,
  height = 24,
  weight = 24,
}) => {
  const t = useTranslations("NotFound");
  return (
    <Link
      href="/"
      className={classNames(
        "text-orange400 text-2xl flex gap-2 items-end",
        lato.className
      )}
    >
      <OrangeArrow className={classNames(`w-[${weight}] h-[${height}]`)} />
      <span className={classNames("-mb-[1px]", className)}>
        {t("link to home")}
      </span>
    </Link>
  );
};
