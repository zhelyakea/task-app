import React from "react";
import PropTypes from "prop-types";

import history from "services/history";

import Button from "@material-ui/core/Button";

import AddTask from "components/AddTask";
import Tasks from "components/Tasks";

import styles from "./styles";

const MainPage = ({ isAdmin, setIsAdmin }) => {
  const logOutHandler = () => {
    setIsAdmin(false);
  };
  const toAuthHandler = () => {
    history.push({
      pathname: "/auth"
    });
  };

  const renderLoginButton = function() {
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

MainPage.propTypes = {
  isAdmin: PropTypes.bool,
  setIsAdmin: PropTypes.func
};

export default MainPage;
