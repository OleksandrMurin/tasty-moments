"use client";
import classNames from "classnames";
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
}
interface ModalProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  className: string;
}

export const ModalButton: FC<ButtonProps> = ({ children, className }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <button className={className} onClick={() => setActive((prev) => !prev)}>
        {children}
      </button>

      <ModalWindow active={active} setActive={setActive} className="z-50">
        <h1>Татусю я напукала</h1>
      </ModalWindow>
    </>
  );
};
export const ModalWindow: FC<ModalProps> = ({
  active,
  setActive,
  children,
  className,
}) => {
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    ref.current = document.getElementById("modal-portal");
  }, []);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return ref.current
    ? createPortal(
        <div
          className={classNames(
            "w-screen h-screen bg-black fixed left-0 top-0 opacity-20 ",
            { hidden: !active },
            className
          )}
          onClick={() => setActive((prev) => !prev)}
        >
          {children}
        </div>,
        ref.current
      )
    : null;
};
