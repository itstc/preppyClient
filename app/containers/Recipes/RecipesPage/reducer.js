import { fromJS } from 'immutable';

import { LOAD_RECIPES_SUCCESS, CLEAR_RECIPES } from '../../App/constants';
import { INCREMENT_PAGE } from './constants';

export const initialState = fromJS({
  recipes: [],
  page: 0,
});

function recipesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_RECIPES_SUCCESS: 
      return state.set('recipes', [...state.get('recipes') , ...action.recipes]);
    case CLEAR_RECIPES:
      return initialState;
    case INCREMENT_PAGE:
      return state.set('page', state.get('page') + action.amount);
    default: return state;
  }
}

export default recipesReducer;