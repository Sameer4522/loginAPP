import toast from "react-hot-toast";

// validate login page username

export const usernameValidate = async (values) => {
  const errors = usernameVerify({}, values);

  return errors;
};

// validate password

export const passwordValidate = async (values) => {
  const errors = passwordVerify({}, values);

  return errors;
};

// validate reset password

export const resetPasswordValidate = async (values) => {
  const errors = passwordVerify({}, values);

  if (values.password !== values.confirmPassword) {
    errors.exist = toast.error("Password not match");
  }

  return errors;
};

// validate register form

export const registerValidate = async (values) => {
  const errors = usernameVerify({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);

  return errors;
};

// validate profile page

export const profileValidate = async (values) => {
  const error = emailVerify({}, values);

  return error;
};

// *************************************************** //

// verify username
const usernameVerify = (error = {}, values) => {
  if (!values.username) {
    error.username = toast.error("Username Required...!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username...!");
  }

  return error;
};

// verify Password

const passwordVerify = (error = {}, values) => {
  const specialChars = /[!@#$%^&*_|.?]/;

  if (!values.password) {
    error.password = toast.error("Password Required...!");
  } else if (values.password.includes(" ")) {
    error.password = toast.error("Wrong Password...!");
  } else if (values.password.length < 8) {
    error.username = toast.error(
      "Password must be more than 8 characters long...!"
    );
  } else if (!specialChars.test(values.password)) {
    error.username = toast.error(
      "Password must have atleast one special characters example(#, @)"
    );
  }

  return error;
};

// verify email

const emailVerify = (error = {}, values) => {
  if (!values.email) {
    error.email = toast.error("Email Required");
  } else if (values.email.includes(" ")) {
    error.email = toast.error("Invalid E-mail address...!");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = toast.error("Invalid E-mail address...!");
  }
  return error;
};
