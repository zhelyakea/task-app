import React, { useCallback, useEffect, useReducer } from "react";
import { loadState, removeState } from "services/localStorage";

import { initialState, reducer, LOG_IN, LOG_OUT } from "model/Auth";

const AppLogic = WrappedComponent => () => {
  useEffect(() => {
    if (loadState("isAdmin")) logIn();
  }, []);

  const [{ isAdmin }, dispatch] = useReducer(reducer, initialState);

  const logIn = useCallback(e => {
    dispatch({ type: LOG_IN });
  }, []);

  const logOut = useCallback(e => {
    dispatch({ type: LOG_OUT });
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
