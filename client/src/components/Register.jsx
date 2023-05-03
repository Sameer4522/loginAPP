import React, { useState } from "react";
import { Link } from "react-router-dom";

import avatar from "../assets/profile.png";

import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";

import styles from "../styles/Username.module.css";

import { registerValidate } from "../helper/validate";
import { convertToBase64 } from "../helper/convert";

const Register = () => {
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validate: registerValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
      values = Object.assign(values, { profile: file || "" });
    },
  });

  // formik does'nt support input file type so weend to create the handler

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex justify-center items-center min-h-screen">
        <div
          className={styles.glass}
          style={{ width: "35%", marginTop: "2rem", marginBottom: "2rem" }}
        >
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Register</h4>
            <span className="p-4 text-base w-2/3 text-center text-gray-500">
              Happy to join you.
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center px-4 pt-2 pb-8">
              <label htmlFor="profile">
                <img
                  src={file || avatar}
                  alt="avatar"
                  className={styles.profile_img}
                />
              </label>
              <input
                onChange={onUpload}
                type="file"
                id="profile"
                name="profile"
              />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("username")}
                type="text"
                className={styles.textbox}
                placeholder="Username*"
              />
              <input
                {...formik.getFieldProps("email")}
                type="text"
                className={styles.textbox}
                placeholder="E-mail*"
              />
              <input
                {...formik.getFieldProps("password")}
                type="password"
                className={styles.textbox}
                placeholder="Password*"
              />
              <button className={styles.btn} type="submit">
                Sign In
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Already Registerd?{" "}
                <Link className="text-red-500" to="/">
                  Login Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
