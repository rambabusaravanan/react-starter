import * as Actions from '../constants/actionTypes';

const initialState = {};

function general(state = initialState, action) {
  switch (action.type) {
    case Actions.API_LOADING:
      // handle common state like show loading
      return state;

    case Actions.API_SUCCESS:
      // handle common state like stop loading.
      // but this in general will be handled by appropriate action like API_GET_USERS
      return state;

    case Actions.API_FAILURE:
      // handle common state like show alert / toast / error
      return state;

    default:
      return state;
  }
}

export default general;
