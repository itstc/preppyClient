import { call, put, takeLatest } from 'redux-saga/effects';
import request from '../../../utils/request';

import {loginSuccess, loginError} from './actions';

import { SERVER_URL } from '../../config';
import { LOGIN_USER } from './constants';
import { authUser } from '../actions';

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

// watcher function to watch submit action
export default function* checkSubmit() {
  yield takeLatest(LOGIN_USER, getLoginResult)
} 