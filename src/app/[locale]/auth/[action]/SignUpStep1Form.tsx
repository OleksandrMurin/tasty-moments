import { Button } from "@/components/controls/buttons/Button";
import { lato } from "@/fonts/LatoFont";
import classNames from "classnames";
import { useFormik } from "formik";
import { Dispatch, FC, SetStateAction } from "react";
import * as Yup from "yup";
import { Stepper } from "./Stepper";

interface Props {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

export const SignUpStep1Form: FC<Props> = ({ currentStep, setCurrentStep }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      email: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className={classNames("flex flex-col gap-2", lato.className)}>
      {/* <--------------------------Email block------------------------------------> */}
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className={classNames(
          "order-2 peer text-xl border focus:outline-none focus:border-orange200  rounded-md bg-cream200 p-3",
          {
            "border-red": formik.touched.email && !!formik.errors.email,
            "border-warm-grey200": !formik.touched.email,
          }
        )}
      />
      <label
        htmlFor="email"
        className={classNames(
          "order-1 pl-2 text-xl peer-focus:text-orange400",
          {
            "text-red": !!formik.errors.email,
          }
        )}
      >
        Email
      </label>
      {formik.touched.email && formik.errors.email ? (
        <div className="order-3 text-red text-base pl-3">
          {formik.errors.email}
        </div>
      ) : null}
      {/* <--------------------------Username block------------------------------------> */}

      <input
        id="username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
        className={classNames(
          "order-5 peer text-xl border focus:outline-none focus:border-orange200  rounded-md bg-cream200 p-3",
          {
            "border-red": formik.touched.username && !!formik.errors.username,
            "border-warm-grey200": !formik.touched.username,
          }
        )}
      />
      {/* ERROR!!!!!!!!! "Peer" working wrong */}
      <label
        htmlFor="username"
        className={classNames(
          "order-4 pl-2 text-xl peer-focus:text-orange400",
          {
            "text-red": !!formik.errors.username,
          }
        )}
      >
        Username
      </label>
      {formik.touched.username && formik.errors.username ? (
        <div className="order-6 text-red text-base pl-3">
          {formik.errors.username}
        </div>
      ) : null}
      <Button
        type="submit"
        disabled={!formik.isValid}
        className="order-7 rounded-md mt-10"
        onClick={() => setCurrentStep((prev) => prev + 1)}
      >
        Continue to the next step
      </Button>
      <Stepper currentStep={currentStep} />
    </form>
  );
};
