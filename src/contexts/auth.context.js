import React, { createContext, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
  isAuth: false,
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.login;
    case "LOGOUT":
      return action.logout;
    case "REGISTER":
      return action.register;
    default:
      return state;
  }
};

const AuthProvider = (props) => {
  const [auth, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
