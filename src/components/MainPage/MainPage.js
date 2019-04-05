import React, { useContext } from "react";
import PropTypes from "prop-types";
import history from "services/history";

import { AuthContext } from "components/App";

import Button from "@material-ui/core/Button";

import AddTask from "components/AddTask";
import Tasks from "components/Tasks";

import styles from "./styles";

const MainPage = () => {
  const { logOut } = useContext(AuthContext);
  const logOutHandler = () => {
    logOut();
  };

  const toAuthHandler = () => {
    history.push({
      pathname: "/auth"
    });
  };

  const renderLoginButton = function() {
    const { isAdmin } = useContext(AuthContext);
    if (isAdmin) {
      return (
        <Button variant="contained" color="secondary" onClick={logOutHandler}>
          Log Out
        </Button>
      );
    }

    return (
      <Button variant="contained" color="primary" onClick={toAuthHandler}>
        To Auth
      </Button>
    );
  };
  return (
    <div style={styles.mainWrapper}>
      <div style={styles.logOutWrapper}>{renderLoginButton()}</div>
      <AddTask />
      <Tasks />
    </div>
  );
};

MainPage.contextType = {
  isAdmin: PropTypes.bool,
  logOut: PropTypes.func
};

export default MainPage;
