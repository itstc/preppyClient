import { fromJS } from "immutable";
import * as types from './constants';

const initialState = fromJS({
  recipe: {}
})

export default function recipeItemReducer(state = initialState, action) {
  switch(action.type) {
    case types.LOAD_RECIPE_SUCCESS:
      return state.set('recipe', action.recipe)
    case types.LOAD_RECIPE_ERROR:
      return state.set('error', action.err)
    case types.CLEAR_RECIPE:
      return initialState;
    default: return state;
  }
}