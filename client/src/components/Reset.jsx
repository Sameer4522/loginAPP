import React from "react";

import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";

import styles from "../styles/Username.module.css";

import { resetPasswordValidate } from "../helper/validate";

const Reset = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validate: resetPasswordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex justify-center items-center min-h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-[2.5rem] font-bold">Reset Password!</h4>
            <span className="px-4 py-2 text-base w-2/3 text-center text-gray-500">
              Enter a new password.
            </span>
          </div>

          <form className="pt-10" onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("password")}
                type="password"
                className={styles.textbox}
                placeholder="Password"
              />
              <input
                {...formik.getFieldProps("confirmPassword")}
                type="password"
                className={styles.textbox}
                placeholder="Confirm Password"
              />
              <button className={styles.btn} type="submit">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset;
