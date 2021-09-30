import React, { useState } from "react";

const LoginContext = React.createContext({
  token: "",
  isLoggedIn: false,
  user: "",
  login: (token, user) => {},
  logout: () => {},
});

export const LoginContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const initialUser = localStorage.getItem("user");
  const [user, setUser] = useState(initialUser);

  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const loginHandler = (token, user) => {
    setToken(token);
    setUser(user);
    console.log(user);
    localStorage.setItem("token", token);
    localStorage.setItem("user", user);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    user: user,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
