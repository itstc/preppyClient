/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';

import { LOAD_RECIPES_SUCCESS, CLEAR_RECIPES } from '../App/constants';

export const initialState = fromJS({
  recipes: [],
  plans: [],
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_RECIPES_SUCCESS:
      return state.set('recipes', [...state.get('recipes'), ...action.recipes]);
    case CLEAR_RECIPES:
      return initialState;
    default:
      return state;
  }
}

export default homeReducer;
