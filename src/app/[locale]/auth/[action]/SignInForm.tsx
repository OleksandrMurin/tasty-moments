"use client";
import { Button } from "@/components/controls/buttons/Button";
import { lato } from "@/fonts/LatoFont";
import classNames from "classnames";
import { useFormik } from "formik";
import Link from "next/link";
import { FC } from "react";
import * as Yup from "yup"; // Для схемы валидации

export const SignInForm: FC = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div
        className={classNames("flex flex-col-reverse gap-2", lato.className)}
      >
        {formik.touched.username && formik.errors.username ? (
          <div className="text-red text-base pl-3">
            {formik.errors.username}
          </div>
        ) : null}
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          className={classNames(
            "peer text-xl border focus:outline-none focus:border-orange200  rounded-md bg-cream200 p-3",
            {
              "border-red": formik.touched.username && !!formik.errors.username,
              "border-warm-grey200": !formik.touched.username,
            }
          )}
        />
        <label
          htmlFor="username"
          className={classNames("pl-2 text-xl peer-focus:text-orange400", {
            "text-red": !!formik.errors.username,
          })}
        >
          Username
        </label>
      </div>

      <div
        className={classNames("pt-4 grid grid-cols-2 gap-2", lato.className)}
      >
        <Link
          href={"/"}
          className="order-2 text-orange400 text-base justify-self-end self-center"
        >
          Forgot password?
        </Link>

        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className={classNames(
            "order-3 peer col-span-2 border text-xl focus:outline-none focus:border-orange200 border-warm-grey200 rounded-md bg-cream200 p-3",
            {
              "border-red":
                formik.touched.password && formik.errors.password == "",
            }
          )}
        />
        <label
          htmlFor="password"
          aria-placeholder="Placeholder"
          className={classNames("pl-2 text-xl peer-focus:text-orange400", {
            "text-red": !!formik.errors.password,
          })}
        >
          Password
        </label>
        {formik.touched.password && formik.errors.password ? (
          <div className="order-4 text-red text-base pl-3">
            {formik.errors.password}
          </div>
        ) : null}
      </div>

      {/* Кнопка отправки */}
      <Button
        type="submit"
        variant="gradient-orange"
        className="w-full mt-10 py-2 btn-text-2"
        disabled={!formik.isValid}
      >
        Sign In
      </Button>
      <p
        className={classNames(
          "pt-6 text-2 justify-self-center text-warm-grey400 custom-text-2"
        )}
      >
        {"No account? "}
        <button className="custom-text-2 text-orange400 underline">
          Sign In
        </button>
      </p>
    </form>
  );
};
