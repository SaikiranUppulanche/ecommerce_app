import React from "react";

export const userAuthContext = React.createContext({
  authToken: "",
  email: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});
