import { user as dummy_user } from "../../utils/dummy_data";
import { LOGIN, LOGOUT } from "./auth.actions";

const initialState = {
  userToken: null,
  user: null,
};

export default authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, userToken: "faketoken", user: dummy_user };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
