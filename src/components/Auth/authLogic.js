import React, { useState, useCallback, useContext } from "react";
import history from "services/history";
import { AuthContext } from "components/App";

const AuthLogic = WrappedComponent => () => {
  const { setIsAdmin } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const toMainHandler = useCallback(() => {
    history.push({
      pathname: "/"
    });
  }, []);
  const enterNameHandler = useCallback(e => {
    setUsername(e.target.value);
  }, []);

  const enterPassHandler = useCallback(e => {
    setPassword(e.target.value);
  }, []);

  const authHandler = useCallback(() => {
    if (username === "admin" && password === "123") {
      setIsAdmin(true);
      history.push({
        pathname: "/"
      });
    }
  }, [username, password]);

  return (
    <WrappedComponent
      {...{
        username,
        password,
        toMainHandler,
        enterNameHandler,
        enterPassHandler,
        authHandler
      }}
    />
  );
};

export default AuthLogic;
