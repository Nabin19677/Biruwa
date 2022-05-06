export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

//actions
export const login = () => {
  return {
    type: LOGIN,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
