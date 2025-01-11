import { lato } from "@/fonts/LatoFont";
import GoogleLogo from "@public/GoogleLogo.svg";
import classNames from "classnames";
import { ButtonHTMLAttributes, FC } from "react";

export const SignInWithGoogleButton: FC<
  ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children }) => {
  return (
    <button className="mt-10 p-2 rounded-md border border-warm-grey200 bg-cream200 flex justify-center items-center">
      <GoogleLogo />
      <p
        className={classNames(
          "font-bold text-xl text-warm-grey600",
          lato.className
        )}
      >
        {children}
      </p>
    </button>
  );
};
