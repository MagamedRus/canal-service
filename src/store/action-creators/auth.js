import { AuthActions } from "../../constants/store/actionTypes";

export const setAuth = (authData) => (dispatch) => {
  dispatch({
    type: AuthActions.SET_AUTH_DATA,
    payload: authData,
  });
};
