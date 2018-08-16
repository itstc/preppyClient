import {
  LOAD_RECIPES,
  LOAD_RECIPES_SUCCESS,
  LOAD_RECIPES_ERROR,
  CLEAR_RECIPES,
} from './constants';

export function loadRecipes(limit = 20, page = 0) {
  return {
    type: LOAD_RECIPES,
    limit,
    page,
  };
}

export function recipesLoaded(recipes) {
  return {
    type: LOAD_RECIPES_SUCCESS,
    recipes,
  };
}

export function recipesLoadingError(error) {
  return {
    type: LOAD_RECIPES_ERROR,
    error,
  };
}

export function clearRecipes() {
  return {
    type: CLEAR_RECIPES,
    recipes: [],
  }
}
