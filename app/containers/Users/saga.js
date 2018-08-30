import { call, put, takeLatest, all } from 'redux-saga/effects';
import request from '../../utils/request';

import {SERVER_URL} from '../config';

import { AUTH_USER } from './constants';
import { LOGIN_USER } from './LoginPage/constants';

import {loginSuccess, loginError} from './LoginPage/actions';
import {authUser, authSuccess, authError} from './actions';

// worker for authentication
function* getAuthData() {
  const requestURL = `${SERVER_URL}/api/users/auth`

  try {
    // send token to backend
    const result = yield call(request, requestURL, {
      Method: 'GET',
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

export default function* rootSaga() {
  yield [
    takeLatest(LOGIN_USER, getLoginResult),
    takeLatest(AUTH_USER, getAuthData),
  ];
}