import * as Actions from '../constants/actionTypes';

const initialState = {
  flag: false
};

function dashboard(state = initialState, action) {
  switch (action.type) {
    case Actions.TOGGLE_HELLO:
      return Object.assign({}, state, { flag: action.flag });
    default:
      return state;
  }
}

export default dashboard;
