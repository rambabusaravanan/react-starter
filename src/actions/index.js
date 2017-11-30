import * as Actions from '../constants/actionTypes';
import * as Api from '../helper/api';

export function toggleHello(flag) {
  return { type: Actions.TOGGLE_HELLO, flag };
}

/** API GENERAL STATUS **/
export function apiLoading() {
  return { type: Actions.API_LOADING };
}

export function apiSuccess(data) {
  return { type: Actions.API_SUCCESS, data };
}

export function apiFailure(error) {
  return { type: Actions.API_FAILURE, error };
}

/** API ACTIONS **/
export const apiGetUsers = () => dispatch => {
  dispatch(apiLoading());
  return Api.getUsers()
    .then(response =>
      dispatch({ type: Actions.API_GET_USERS, data: response.data })
    )
    .catch(error => dispatch(apiFailure(error)));
};
