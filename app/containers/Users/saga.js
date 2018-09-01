import { call, put, takeLatest, all } from 'redux-saga/effects';
import request from '../../utils/request';

import {SERVER_URL} from '../config';

import { AUTH_USER, LOGOUT_USER, LOGOUT_ERROR, LOGOUT_SUCCESS } from './constants';
import { LOGIN_USER } from './LoginPage/constants';

import {loginSuccess, loginError} from './LoginPage/actions';
import {authUser, authSuccess, authError, logoutSuccess, logoutError} from './actions';

// worker for authentication
function* getAuthData() {
  const requestURL = `${SERVER_URL}/api/users/auth`

  try {
    // send token to backend
    const result = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        'Authorization': `BEARER ${localStorage.getItem('authToken') || ''}`
      },
    })

    yield put(authSuccess(result))
  }catch(err) {
    yield put(authError(err));
  }
}

// worker to retrieve login results
function* getLoginResult(action) {
  try {
    // POST request to backend for login
    const result = yield call(request, `${SERVER_URL}/api/users/login`, {
      method: 'POST',
      body: JSON.stringify(action.data)
    });
    // everything went well, dispatch success action
    yield [put(loginSuccess(result)), put(authUser())]
  } catch (err) {
    // error occurred dispatch error action
    yield put(loginError(err.response))
  } 
}

function* getLogoutUser() {

  // request url
  const requestURL = `${SERVER_URL}/api/users/logout`

  try {
    // fetch logout request
    yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Authorization': `BEARER ${localStorage.getItem('authToken') || ''}`
      },
    });
    // successful logout
    yield put(logoutSuccess())
  }catch (err) {
    // unsuccessful logout
    yield put(logoutError())
  }
}

export default function* rootSaga() {
  yield [
    takeLatest(LOGIN_USER, getLoginResult),
    takeLatest(LOGOUT_USER, getLogoutUser),
    takeLatest(AUTH_USER, getAuthData),
  ];
}