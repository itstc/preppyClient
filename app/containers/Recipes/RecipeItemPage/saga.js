import { call, put, takeEvery } from 'redux-saga/effects';
import request from '../../../utils/request';
import { LOAD_RECIPE_ID } from './constants';

import {SERVER_URL} from '../../config';

import {recipeByIdLoaded, recipeByIdError} from './actions';

function* getRecipeById(action) {
  const requestURL = `${SERVER_URL}/api/recipes/${action.id}`

  try {
    const recipe = yield call(request, requestURL)
    yield put(recipeByIdLoaded(recipe))

  }catch(err) {
    yield put(recipeByIdError(err));
  }
}

export default function* recipeById() {
  yield takeEvery(LOAD_RECIPE_ID, getRecipeById)
}