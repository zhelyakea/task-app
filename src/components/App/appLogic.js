import React, { useCallback, useReducer } from "react";

import reducer from "./model/reducer";
import { LOG_IN, LOG_OUT } from "./model/constants";
import initialState from "./model/initialState";

const AppLogic = WrappedComponent => () => {
  const [{ isAdmin }, dispatch] = useReducer(reducer, initialState);

  const logIn = useCallback(e => {
    dispatch(LOG_IN);
  }, []);

  const logOut = useCallback(e => {
    dispatch(LOG_OUT);
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
