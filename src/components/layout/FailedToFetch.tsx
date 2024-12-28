import { lato } from "@/fonts/LatoFont";
import { prompt } from "@/fonts/PromptFont";
import FishBones from "@public/fish-bone.svg";
import classNames from "classnames";

export const FailedToFetch = () => {
  return (
    <div className="flex flex-col  items-center py-24">
      <FishBones />
      <h2
        className={classNames("text-5xl font-semibold pt-8", prompt.className)}
      >
        Oops! There is something wrong
      </h2>
      <span className={classNames("text-4xl pt-5", lato.className)}>
        We cannot load recipes. Please reload the page or try again later
      </span>
    </div>
  );
};
