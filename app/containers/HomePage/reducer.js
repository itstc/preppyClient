/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';

import { LOAD_RECIPES_SUCCESS } from '../App/constants';

export const initialState = fromJS({
  recipes: [],
  plans: [],
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_RECIPES_SUCCESS:
      return state.set('recipes', action.recipes);
    default:
      return state;
  }
}

export default homeReducer;
