import { lato } from "@/fonts/LatoFont";
import { prompt } from "@/fonts/PromptFont";
import classNames from "classnames";
import { FC } from "react";

// import { useTranslations } from "next-intl";
import { SignInForm } from "./SignInForm";
import { SignInWithGoogleButton } from "./SignInWithGoogleButton";

export const SignInPart: FC = () => {
  // const t = useTranslations("SignInPart");
  return (
    <div className="pl-40 pt-20 bg-cream400">
      {/* <ReturnToHomepageButton>{t("Return to homepage")}</ReturnToHomepageButton> */}
      <div className="w-96 h-[700px] bg-cream400 flex flex-col">
        <h1
          className={classNames(
            "font-bold text-4xl text-cold-grey600 pt-20",
            prompt.className
          )}
        >
          Sign In
        </h1>
        <h2
          className={classNames(
            "font-semibold text-3xl text-sage600 pt-3",
            lato.className
          )}
        >
          Welcome back!
        </h2>
        <SignInWithGoogleButton>Sign in with Google</SignInWithGoogleButton>
        <div className="py-3 flex items-center text-base text-warm-grey400 before:flex-1 before:border-t before:border-warm-grey400 before:me-6 after:flex-1 after:border-t after:border-warm-grey400 after:ms-6 ">
          or
        </div>
        <SignInForm />
      </div>
    </div>
  );
};
