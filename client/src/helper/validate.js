import toast from "react-hot-toast";

// validate username

export async function usernameValidate(values) {
  const errors = usernameVerify({}, values);

  return errors;
}

// validate password
export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);

  return errors;
}

// validate register form
export function registerValidation(values) {
  const errors = usernameVerify({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);

  return errors;
}

// ////////////////////////////////////////////////////////////////////////////////////////////
// validate email
const emailVerify = (error = {}, values) => {
  if (!values.email) {
    error.email = toast.error("email required");
  } else if (values.email.includes(" ")) {
    error.email = toast.error("wrong email");
  } else if (
    /^[a-zA-Z0-9._%+-]+[a-zA-Z0-9.-]+\[a-zA-Z]{2,}$/.test(values.email)
  ) {
    error.email = toast.error("Invalid email address...!");
  }

  return error;
};

// Validate Username
const usernameVerify = (error = {}, values) => {
  if (!values.username) {
    error.username = toast.error("username Required...!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username...!");
  }

  return error;
};

// validate password
const passwordVerify = (error = {}, values) => {
  const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  if (!values.password) {
    error.password = toast.error("Password required...!");
  } else if (values.password.includes(" ")) {
    error.password = toast.error("Invalid Password...!");
  } else if (values.password.length < 4) {
    error.password = toast.error("password must be more the 4 charater long");
  } else if (!specialCharacters) {
    error.password = toast.error("Password must contain special character");
  }

  return error;
};
