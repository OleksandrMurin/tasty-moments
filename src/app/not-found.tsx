import { ReturnToHomepage } from "@/components/controls/buttons/ReturnToHomepage";
import { lato } from "@/fonts/LatoFont";
import { prompt } from "@/fonts/PromptFont";

import ErrorIcon from "@public/404.svg";

import classNames from "classnames";
import { useTranslations } from "next-intl";

const NotFound = () => {
  const t = useTranslations("NotFound");
  return (
    <div className="text-center bg-cream400 flex flex-col justify-center items-center py-36 gap-5">
      <ErrorIcon />
      <h2
        className={classNames("text-5xl font-semibold pt-5", prompt.className)}
      >
        {t("heading")}
      </h2>
      <span className={classNames("text-4xl", lato.className)}>
        {t("text")}
      </span>
      <ReturnToHomepage className="pt-9" />
    </div>
  );
};

export default NotFound;
