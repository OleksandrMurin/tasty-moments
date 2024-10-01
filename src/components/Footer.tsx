import React, {FC} from "react";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/routing";
import Logo from "../../public/logo-black.svg";
import LoginIcon from "../../public/log-out-icon-black.svg";
import ArrowUp from "../../public/arrow-up.svg";
import {AddRecipeButton} from "./AddRecipeButton";

const Footer : FC = () => {
  const t = useTranslations("Header");
  return (
    <div className="h-64 bg-sage200">
      <div className="footer-container flex flex-col">
        <div className="mt-14 mb-8  flex items-center justify-between h-10 ">
          <Logo />
          <nav className="flex items-center justify-between gap-7 uppercase text-base">
            <AddRecipeButton size="sm" />
            <Link href="/recipes">{t("All recipes")}</Link>
            <Link href="/my_recipes">{t("My recipes")}</Link>
            <Link href="/favorites">{t("Favorites")}</Link>
            <Link href="/my_recipes">{t("Contact us")}</Link>
          </nav>
          <div className="flex items-center justify-between">
            <LoginIcon className="m-2" />
          </div>
        </div>
        <div className="h-[1px] px-20 bg-cold-grey200"></div>
      </div>

      <div className="m-6 flex flex-col items-center gap-2">
        <ArrowUp />
        <span className="uppercase text-base">{t("Go on top")}</span>
      </div>
    </div>
  );
};

export default Footer;
