import { LOGIN_USER, LOGIN_SUCCESS, LOGIN_ERROR } from "./constants";


// send this to verify with backend that login is valid
export function loginUser(formData) {
  return {
    type: LOGIN_USER,
    data: formData,
  }
}

// login is valid (token is in result)
export function loginSuccess(result) {
  return {
    type: LOGIN_SUCCESS,
    result,
  }
}

// login is invalid (incorrect data from form)
export function loginError(result) {
  return {
    type: LOGIN_ERROR,
    result,
  }
}