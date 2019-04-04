import React, { useState, createContext } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Auth from "components/Auth";
import MainPage from "components/MainPage";
import styles from "./styles";

const isAdminInitialState = true;

export const AuthContext = createContext({
  isAdmin: false,
  setIsAdmin: () => {}
});

const App = () => {
  const [isAdmin, setIsAdmin] = useState(isAdminInitialState);
  return (
    <div style={styles.mainWrapper}>
      <HashRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <AuthContext.Provider value={{ isAdmin, setIsAdmin }}>
                <MainPage {...props} />
              </AuthContext.Provider>
            )}
          />
          <Route
            path="/auth"
            render={props => (
              <AuthContext.Provider value={{ setIsAdmin }}>
                <Auth {...props} />
              </AuthContext.Provider>
            )}
          />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
