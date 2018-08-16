import * as types from '../constants';
import * as actions from '../actions';

describe('actions', () => {

    // request recipes with limit
    it('should request recipes to be loaded with limit', () => {
      expect(actions.loadRecipes(1)).toEqual({
        type: types.LOAD_RECIPES,
        limit: 1,
      })
    })

    // request recipes without limit (default 20)
    it('should request recipes to be loaded w/o limit', () => {
      expect(actions.loadRecipes()).toEqual({
        type: types.LOAD_RECIPES,
        limit: 20,
      })
    })

  // load recipes successful
  it('should create action to load recipes', () => {
    const recipes = ['a', 'b', 'c']
    expect(actions.recipesLoaded(recipes)).toEqual({
      type: types.LOAD_RECIPES_SUCCESS,
      recipes,
    })
  })

  // load recipes but failed
  it('should return error', () => {
    const error = new Error('testing error!')
    expect(actions.recipesLoadingError(error)).toEqual({
      type: types.LOAD_RECIPES_ERROR,
      error,
      })
  })

  // clear recipes
  it('should return empty array of recipes', () => {
    expect(actions.clearRecipes()).toEqual({
      type: types.CLEAR_RECIPES,
      recipes: [],
      })
  })

});