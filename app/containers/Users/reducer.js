import {fromJS} from 'immutable';
import { LOGIN_SUCCESS, LOGIN_ERROR } from './LoginPage/constants';
import { AUTH_SUCCESS, AUTH_ERROR } from './constants';

export const initialState = fromJS({
  user: null,
  error: null,
});

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('authToken', action.result.token)
      return state
    case LOGIN_ERROR:
      return state.set('error', action.result)
    case AUTH_SUCCESS:
      return state.set('user', action.result)
    case AUTH_ERROR:
      return state.set('error', action.result)
    default:
      return initialState;
  }
}