import { call, put, takeLatest } from 'redux-saga/effects';
import request from '../../utils/request';

import { SERVER_URL } from '../config';

import { recipesLoaded, recipesLoadingError } from '../App/actions';
import { LOAD_RECIPES } from '../App/constants';

function* getRecipes(action) {
  const requestURL = `${SERVER_URL}/api/recipes?limit=${action.limit}&page=${action.page}`;

  // Call for recipes while catching for errors
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
