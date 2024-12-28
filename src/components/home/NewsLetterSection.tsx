import { lato } from "@/fonts/LatoFont";
import { lora } from "@/fonts/LoraFont";
import { prompt } from "@/fonts/PromptFont";
import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";
import { Button } from "../controls/buttons/OrangeButton";

export const NewsLetterSection: FC = () => (
  <div className="flex flex-row justify-between bg-cream400 relative fourth-section-divider">
    <div className="pt-80 pr-[133px] pl-20 flex-col">
      <h3
        className={classNames(
          "text-[40px] leading-10 font-bold text-sage600 pb-8",
          prompt.className
        )}
      >
        Stay Hungry for More!
      </h3>
      <h2
        className={classNames(
          "text-warm-grey600 text-3xl pb-4",
          lato.className
        )}
      >
        Subscribe to Our Newsletter
      </h2>
      <text
        className={classNames(
          "text-warm-grey400 text-xl text-left max-w-lg",
          lora.className
        )}
      >
        Get the latest and greatest recipes, cooking tips, and foodie
        inspiration delivered straight to your inbox.
      </text>
      <div className="pt-14 flex items-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="h-14 border outline-none rounded-l-md border-warm-grey200 text-xl w-2/3 text-left px-4 focus:border-orange200 focus:border-r-0"
        ></input>
        <Button className="rounded-r-md" colorIntensity="200">
          {" "}
          Join
        </Button>
      </div>
    </div>
    <Image
      src={"/NewsletterSection.png"}
      alt="NewsletterSectionIMG"
      width={708}
      height={712}
    />
  </div>
);
