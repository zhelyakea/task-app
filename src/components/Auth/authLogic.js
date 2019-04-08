import React, { useState, useCallback, useContext } from "react";
import history from "services/history";
import { saveState } from "services/localStorage";
import { AuthContext } from "model/auth";

const AuthLogic = WrappedComponent => () => {
  const { logIn } = useContext(AuthContext);
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
      logIn();
      saveState("isAdmin", true);
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
