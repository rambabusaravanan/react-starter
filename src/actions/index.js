import * as Actions from '../constants/actionTypes';

export function toggleHello(flag) {
  return { type: Actions.TOGGLE_HELLO, flag };
}
