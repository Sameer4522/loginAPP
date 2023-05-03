import React from "react";

import { Toaster } from "react-hot-toast";

import styles from "../styles/Username.module.css";

const Recovery = () => {
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex justify-center items-center min-h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Recovery!</h4>
            <span className="p-4 text-base w-2/3 text-center text-gray-500">
              Enter OTP to recover the password.
            </span>
          </div>

          <form className="py-1 mt-10">
            <div className="textbox flex flex-col items-center gap-6">
              <span className="text-sm text-left text-gray-500 w-[70%]">
                Enter 6 digit OTP sent in your registered e-mail address
              </span>
              <input
                type="password"
                className={styles.textbox}
                placeholder="Enter OTP"
              />
              <button className={styles.btn} type="submit">
                Sign In
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Didn't recive the OTP?{" "}
                <button className="text-red-500">Resend</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
