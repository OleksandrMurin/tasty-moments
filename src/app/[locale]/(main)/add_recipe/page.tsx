import { ReturnToHomepageButton } from "@/components/controls/buttons/ReturnToHomepage";
import classNames from "classnames";
import { useTranslations } from "next-intl";

const AddRecipe = () => {
  const t = useTranslations("AddRecipe");
  return (
    <div className={classNames("p-96")}>
      <ReturnToHomepageButton
        arrowClassName="w-[50px] h-[50px]"
        textClassName={classNames("text-cold-grey600 text-4xl")}
      >
        {t("Return to homepage")}
      </ReturnToHomepageButton>
    </div>
  );
};

export default AddRecipe;
