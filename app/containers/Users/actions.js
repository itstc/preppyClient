import { AUTH_USER, AUTH_SUCCESS, AUTH_ERROR, LOGOUT_USER, LOGOUT_SUCCESS, LOGOUT_ERROR } from "./constants";


export function logoutUser() {
  return {
    type: LOGOUT_USER,
  }
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  }
}


export function logoutError() {
  return {
    type: LOGOUT_ERROR,
  }
}


export function authUser() {
  return {
    type: AUTH_USER,
  }
}

export function authSuccess(data) {
  return {
    type: AUTH_SUCCESS,
    result: {id: data.id, name: data.name},
  }
}

export function authError(err) {
  return {
    type: AUTH_ERROR,
    result: err,
  }
}