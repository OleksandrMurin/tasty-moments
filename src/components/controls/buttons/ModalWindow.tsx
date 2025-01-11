"use client";
import CloseIcon from "@public/close-icon.svg";
import classNames from "classnames";
import { FC, MouseEventHandler, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isActive: boolean;
  toggleCallback: MouseEventHandler;
  children: ReactNode;
  className?: string;
}

export const ModalWindow: FC<ModalProps> = ({
  isActive,
  toggleCallback,
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
            onClick={toggleCallback}
          ></div>
          <div
            className={classNames(
              "fixed max-h- left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[95vh] pl-10 pr-16 rounded-lg overflow-y-auto z-50",
              { hidden: !isActive },
              className
            )}
          >
            <div className="flex justify-end pb-8 pt-6">
              <CloseIcon onClick={toggleCallback} />
            </div>

            {children}
          </div>
        </div>,
        ref.current
      )
    : null;
};
