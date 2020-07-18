import React, { createContext, useState, useEffect } from "react";
import { auth } from "../utils/Firebase";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => setUser(authUser));
  }, []);

  return (
    <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
