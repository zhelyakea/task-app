import React, { useCallback, useEffect, useReducer } from "react";
import { loadState, removeState } from "services/localStorage";
import dispatchResolver from "resolvers/dispatchResolver";

import { initialState, reducer, LOG_IN, LOG_OUT } from "model/auth";

const AppLogic = WrappedComponent => () => {
  useEffect(() => {
    if (loadState("isAdmin")) logIn();
  }, []);

  const [{ isAdmin }, dispatch] = useReducer(reducer, initialState);

  const dispatchCallback = dispatchResolver(dispatch);

  const logIn = useCallback(() => {
    dispatchCallback(LOG_IN);
  }, []);

  const logOut = useCallback(() => {
    dispatchCallback(LOG_OUT);
    removeState("isAdmin");
  }, []);

  return (
    <WrappedComponent
      {...{
        isAdmin,
        logIn,
        logOut
      }}
    />
  );
};

export default AppLogic;
