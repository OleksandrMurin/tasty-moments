import { lato } from "@/fonts/LatoFont";
import { prompt } from "@/fonts/PromptFont";
import FishBones from "@public/fish-bone.svg";
import classNames from "classnames";
import { useTranslations } from "next-intl";

export const FetchError = () => {
  const t = useTranslations("FetchError");
  return (
    <div className="flex flex-col  items-center py-24">
      <FishBones />
      <h2
        className={classNames("text-5xl font-semibold pt-8", prompt.className)}
      >
        {t("ApologizeText")}
      </h2>
      <span className={classNames("text-4xl pt-5", lato.className)}>
        {t("Description")}
      </span>
    </div>
  );
};
