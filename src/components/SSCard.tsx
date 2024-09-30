import classNames from "classnames";
import Image from "next/image";
import React, { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import { lora } from "@/fonts/LoraFont";

interface SSCardProps extends ComponentPropsWithoutRef<"div"> {
  card: SSCardInterface;
}

export interface SSCardInterface {
  description: ReactNode;
  color: string;
  icon: ReactNode;
}

const SSCard: FC<SSCardProps> = ({ card, className }) => {
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

export default SSCard;
