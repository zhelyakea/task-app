import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import { AuthContext } from "./";
import Auth from "components/Auth";
import MainPage from "components/MainPage";

import styles from "./styles";

const App = ({ isAdmin, logIn, logOut }) => {
  return (
    <div style={styles.mainWrapper}>
      <HashRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <AuthContext.Provider value={{ isAdmin, logOut }}>
                <MainPage {...props} />
              </AuthContext.Provider>
            )}
          />
          <Route
            path="/auth"
            render={props => (
              <AuthContext.Provider value={{ logIn }}>
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
