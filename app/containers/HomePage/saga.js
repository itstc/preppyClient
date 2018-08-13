import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from '../../utils/request';

import { SERVER_URL } from '../config';
import { LOAD_RECIPES } from '../App/constants';

import { recipesLoaded, recipesLoadingError } from '../App/actions';

function* getRecipes() {
  const requestURL = `${SERVER_URL}/api/recipes`;

  try {
    const recipes = yield call(request, requestURL);
    yield put(recipesLoaded(recipes));
  } catch (err) {
    yield put(recipesLoadingError(err));
  }
}

export default function* recipes() {
  yield takeLatest(LOAD_RECIPES, getRecipes);
}
