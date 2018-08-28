import {INCREMENT_PAGE} from './constants';

export function incrementPage(amount = 1) {
  return {
    type: INCREMENT_PAGE,
    amount,
  }
}