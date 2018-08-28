import * as types from './constants';

export function loadRecipeById(id) {
  return {
    type: types.LOAD_RECIPE_ID,
    id,
  }
}

export function recipeByIdLoaded(recipe) {
  return {
    type: types.LOAD_RECIPE_SUCCESS,
    recipe,
  }
}

export function recipeByIdError(err) {
  return {
    type: types.LOAD_RECIPE_ERROR,
    err,
  }
}

export function clearRecipe() {
  return {
    type: types.CLEAR_RECIPE,
    recipe: []
  }
}