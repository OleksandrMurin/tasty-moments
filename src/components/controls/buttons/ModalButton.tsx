"use client";
import classNames from "classnames";
import CloseIcon from "@public/close-icon.svg";
import { createPortal } from "react-dom";
import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

interface ButtonProps {
  className: string;
  children: ReactNode;
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}
interface ModalProps {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  className?: string;
}

export const ModalButton: FC<ButtonProps> = ({
  children,
  className,
  isActive,
  setIsActive,
}) => {
  return (
    <>
      <button
        className={className}
        onClick={() => setIsActive((prev: boolean) => !prev)}
      >
        {children}
      </button>
    </>
  );
};
export const ModalWindow: FC<ModalProps> = ({
  isActive,
  setIsActive,
  children,
  className,
}) => {
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    ref.current = document.getElementById("modal-portal");
  }, []);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isActive]);

  return ref.current
    ? createPortal(
        <div>
          <div
            className={classNames(
              "w-screen h-screen bg-black fixed left-0 top-0 opacity-80 ",
              { hidden: !isActive }
            )}
            onClick={() => setIsActive((prev) => !prev)}
          ></div>
          <div
            className={classNames(
              "fixed max-h- left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pl-10 pr-16 rounded-lg  z-50",
              { hidden: !isActive },
              className
            )}
          >
            <div className="flex justify-end pb-8 pt-6">
              <CloseIcon onClick={() => setIsActive((prev) => !prev)} />
            </div>

            {children}
          </div>
        </div>,
        ref.current
      )
    : null;
};
