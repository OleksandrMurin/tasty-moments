import { ReturnToHomepageButton } from "@/components/controls/buttons/ReturnToHomepage";
import { useTranslations } from "next-intl";

const page = async () => {
  const t = useTranslations("FavoritesPage");
  return (
    <div className="h-full p-44 bg-orange100">
      <ReturnToHomepageButton>{t("Return to homepage")}</ReturnToHomepageButton>
      {/* <FavoriteRecipesSection  /> */}
    </div>
  );
};

export default page;
