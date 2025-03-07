import classNames from "classnames";
import { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import { lora } from "@/fonts/LoraFont";

interface Props extends ComponentPropsWithoutRef<"div"> {
  card: SecondSectionCardType;
}

export interface SecondSectionCardType {
  description: ReactNode;
  color: string;
  icon: ReactNode;
}

export const SecondSectionCard: FC<Props> = ({ card, className }) => {
  return (
    <div
      className={classNames(
        "col-span-3 rounded shadow-lg bg-sage200 relative",
        lora.className,
        className
      )}
    >
      {card.icon}
      <p
        className={classNames(
          "mx-6 pt-20 pb-14 text-warm-grey600 text-center text-[28px] leading-10",
          lora.className
        )}
      >
        {card.description}
      </p>
    </div>
  );
};
