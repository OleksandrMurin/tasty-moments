import { Dispatch, FC, SetStateAction } from "react";

import { SignInWithGoogleButton } from "./SignInWithGoogleButton";
import { SignUpStep1Form } from "./SignUpStep1Form";

interface Props {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

export const SignUpStep1: FC<Props> = ({ currentStep, setCurrentStep }) => {
  return (
    <div className="w-96  bg-cream400 flex flex-col">
      <SignInWithGoogleButton>Sign up with Google</SignInWithGoogleButton>
      <div className="py-3 flex items-center text-base text-warm-grey400 before:flex-1 before:border-t before:border-warm-grey400 before:me-6 after:flex-1 after:border-t after:border-warm-grey400 after:ms-6 ">
        or
      </div>
      <SignUpStep1Form
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <p className="custom-text-2 self-center pt-6">
        Have an account?
        <button className="order-2 custom-text-2 text-orange400 text-base self-center underline">
          Sign In
        </button>
      </p>
    </div>
  );
};
