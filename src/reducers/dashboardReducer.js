import * as Actions from '../constants/actionTypes';

const initialState = {
  users: [],
  flag: false
};

function dashboard(state = initialState, action) {
  switch (action.type) {
    case Actions.TOGGLE_HELLO:
      return Object.assign({}, state, { flag: action.flag });
    case Actions.API_GET_USERS:
      return Object.assign({}, state, { users: action.data });
    default:
      return state;
  }
}

export default dashboard;
