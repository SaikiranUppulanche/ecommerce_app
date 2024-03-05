import { useState } from "react";
import { userAuthContext } from "./userAuthContext";

const emailChanger = (str) => {
  let updatedStr = "";
  for (let s of str) {
    if (s === "@" || s === ".") continue;
    updatedStr += s;
  }
  return updatedStr;
};

const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialEmail = localStorage.getItem("email");
  const [authToken, setAuthToken] = useState(initialToken);
  const [email, setEmail] = useState(initialEmail);

  const userIsLoggedIn = !!authToken;

  const handleAddToken = (token, email) => {
    const updatedEmail = emailChanger(email);
    setAuthToken(token);
    setEmail(updatedEmail);

    localStorage.setItem("token", token);
    localStorage.setItem("email", updatedEmail);
  };

  const handleDeleteToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setAuthToken(null);
    setEmail(null);
  };

  return (
    <userAuthContext.Provider
      value={{
        authToken,
        email,
        isLoggedIn: userIsLoggedIn,
        login: handleAddToken,
        logout: handleDeleteToken,
      }}
    >
      {props.children}
    </userAuthContext.Provider>
  );
};

export default AuthContextProvider;
