import {
  LOAD_RECIPES,
  LOAD_RECIPES_SUCCESS,
  LOAD_RECIPES_ERROR,
} from './constants';

export function loadRecipes() {
  return {
    type: LOAD_RECIPES,
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
