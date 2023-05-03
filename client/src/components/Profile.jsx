import React, { useState } from "react";
import { Link } from "react-router-dom";

import avatar from "../assets/profile.png";

import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";

import styles from "../styles/Username.module.css";
import extend from "../styles/profile.module.css";

import { profileValidate } from "../helper/validate";
import { convertToBase64 } from "../helper/convert";

const Profile = () => {
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      fitstName: "",
      lastName: "",
      email: "",
      mobile: "",
      address: "",
    },
    validate: profileValidate,
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
          className={`${styles.glass} ${extend.glass}`}
          style={{ width: "35%", marginTop: "2rem", marginBottom: "2rem" }}
        >
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Profile</h4>
            <span className="p-4 text-base w-2/3 text-center text-gray-500">
              Update your details.
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center px-4 pt-2 pb-8">
              <label htmlFor="profile">
                <img
                  src={file || avatar}
                  alt="avatar"
                  className={`${styles.profile_img} ${extend.profile_img}`}
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
              <div className="name flex w-3/4 gap-5">
                <input
                  {...formik.getFieldProps("firstName")}
                  type="text"
                  className={`${styles.textbox} ${extend.textbox}`}
                  placeholder="First Name*"
                />

                <input
                  {...formik.getFieldProps("lastName")}
                  type="text"
                  className={`${styles.textbox} ${extend.textbox}`}
                  placeholder="Last Name*"
                />
              </div>

              <div className="name flex w-3/4 gap-5">
                <input
                  {...formik.getFieldProps("mobile")}
                  type="text"
                  className={`${styles.textbox} ${extend.textbox}`}
                  placeholder="Mobile Number*"
                />
                <input
                  {...formik.getFieldProps("email")}
                  type="text"
                  className={`${styles.textbox} ${extend.textbox}`}
                  placeholder="E-mail*"
                />
              </div>

              <input
                {...formik.getFieldProps("address")}
                type="text"
                className={`${styles.textbox} ${extend.textbox}`}
                placeholder="Address*"
              />
              <button className={styles.btn} type="submit">
                Sign In
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Come back later{" "}
                <Link className="text-red-500" to="/">
                  Logout
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
