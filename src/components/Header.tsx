"use client";
import React from "react";
import Image from "next/image";

import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Logo from "../../public/logo.svg";
import LoginIcon from "../../public/login-icon.svg";
import Like from "../../public/like.svg";

const Header = ({ params }: any) => {
  const t = useTranslations("Header");

  return (
    <header className="bg-black text-cream400 opacity-60 fixed w-full top-0 left-0 right-0 z-50">
      <div className="container flex items-center justify-between h-[72px]">
        <Logo />
        <nav className="flex items-center justify-between gap-7 uppercase text-xl">
          <Link
            href={`/`}
            className="py-2 px-4 bg-cream200 text-orange400 rounded"
          >
            {t("Add recipe")}
          </Link>
          <Link href={`/`} className="custom-border">
            {t("Home")}
          </Link>
          <Link href="/recipes">{t("All recipes")}</Link>
          <Link href="/my_recipes">{t("My recipes")}</Link>
        </nav>
        <div className="flex items-center justify-between">
          <Like className="m-2" />
          <LoginIcon className="m-2" />
          <Link href={`/`} className="uppercase text-xl">
            {t("Sign in")}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
