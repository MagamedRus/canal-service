import { AuthActions } from "../../constants/store/actionTypes";
import { initialAuthState } from "../../constants/store/reducer";

export const authReducer = (
  state = initialAuthState,
  action
) => {
  switch (action.type) {
    case AuthActions.SET_AUTH_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
