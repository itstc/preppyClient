import { AUTH_USER, AUTH_SUCCESS, AUTH_ERROR } from "./constants";


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