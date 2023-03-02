import { createContext, useMemo, useEffect, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const [loginInfo, setLoginInfo] = useState({
    name: "",
    password: "",
    birthday: "",
    birthmonth: "",
    birthyear: "",
    remember: false,
    hasloggedin: false,
  });

  // Get the locally saved login info and store it
  useMemo(() => {
    if (localStorage.getItem("login")) {
      setLoginInfo(JSON.parse(localStorage.getItem("login")));
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("login")) {
      localStorage.setItem("login", JSON.stringify(loginInfo));
      if (loginInfo.remember && loginInfo.hasloggedin) {
        setLoggedIn(true);
      }
    }
  }, [loginInfo]);

  return (
    <LoginContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        loginInfo,
        setLoginInfo,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
