import classNames from "classnames";
import { FC } from "react";
import { SignInPart } from "./SignInPart";
import { SignUpPart } from "./SignUpPart";

export interface Props {
  params: Promise<{ action: string }>;
}
export const generateStaticParams = async () =>
  ["login", "register"].map((action) => ({ action }));

const Page: FC<Props> = async ({ params }) => {
  const { action } = await params;

  return (
    <div
      className={classNames("grid w-[200vw] h-auto grid-cols-4", {
        "transition-transform animate-slideLeft": action === "register",
        "transition-transform animate-slideRight": action === "login",
      })}
    >
      <SignInPart />
      <div className="bg-blue-400 col-span-2"></div>

      <SignUpPart />
    </div>
  );
};

export default Page;
