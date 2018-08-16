import reducer from '../reducer';
import * as types from '../../App/constants';

describe('home reducer', () => {
  // default handling
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([
      {
        recipes: [],
        plans: [],
      }
    ])
  })
​ 
  // handle when loading recipe successful
  it('should handle LOAD_RECIPE_SUCCESS', () => {
    expect(
      reducer([], {
        type: types.LOAD_RECIPES_SUCCESS,
        recipes:['a','b','c'],
      })
    ).toEqual([
      {
        recipes: ['a','b','c'],
        plans: [],
      }
    ])
  })
})