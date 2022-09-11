import { AuthActions } from "../../constants/store/actionTypes";

export const setAuth = (authData) => (dispatch) => {
  dispatch({
    type: AuthActions.SET_AUTH_DATA,
    payload: authData,
  });
};

export const resetAuth = () => (dispatch) => {
  dispatch({
    type: AuthActions.RESET,
  });
};
