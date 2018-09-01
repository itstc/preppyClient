import {fromJS} from 'immutable';
import { LOGIN_SUCCESS, LOGIN_ERROR } from './LoginPage/constants';
import { AUTH_SUCCESS, AUTH_ERROR, LOGOUT_USER, LOGOUT_SUCCESS, LOGOUT_ERROR } from './constants';

export const initialState = fromJS({
  user: null,
  error: null,
  auth: false,
});

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('authToken', action.result.token)
      return state
    case LOGIN_ERROR:
      return state.set('error', action.result)
    case AUTH_SUCCESS:
      return state.set('user', action.result).set('auth', true)
    case AUTH_ERROR:
      return state.set('error', action.result)
    case LOGOUT_USER:
      return state
    case LOGOUT_SUCCESS:
    case LOGOUT_ERROR:
      localStorage.setItem('authToken', '')
      return initialState

    default:
      return state;
  }
}