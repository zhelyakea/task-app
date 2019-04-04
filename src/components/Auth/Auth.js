import React from "react";
import PropTypes from "prop-types";

import { Form, Field } from "react-final-form";

import FormField from "components/FormField";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import styles from "./styles";

const validate = () => {};

const Auth = ({
  setIsAdmin,
  username,
  password,
  toMainHandler,
  enterNameHandler,
  enterPassHandler,
  authHandler
}) => {
  return (
    <div style={styles.mainWrapper}>
      <div style={styles.logOutWrapper}>
        <Button variant="contained" color="secondary" onClick={toMainHandler}>
          To Main
        </Button>
      </div>
      <div style={styles.paperWrapper}>
        <Paper>
          <div style={styles.titleWrapper}>
            <Typography>Auth</Typography>
          </div>
          <Form
            onSubmit={authHandler}
            validate={validate}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div style={styles.formWrapper}>
                  <Field
                    name="name"
                    render={props => (
                      <FormField
                        id="name"
                        label="Name"
                        placeholder="Enter name..."
                        onChange={enterNameHandler}
                      />
                    )}
                  />
                  <Field
                    name="email"
                    render={props => (
                      <FormField
                        id="password"
                        label="Password"
                        placeholder="Enter Password..."
                        onChange={enterPassHandler}
                      />
                    )}
                  />
                  <div style={styles.authButtonWrapper}>
                    <Button variant="contained" color="primary" type="submit">
                      Log In
                    </Button>
                  </div>
                </div>
              </form>
            )}
          />
        </Paper>
      </div>
    </div>
  );
};

Auth.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  authHandler: PropTypes.func,
  toMainHandler: PropTypes.func,
  enterNameHandler: PropTypes.func,
  enterPassHandler: PropTypes.func
};

export default Auth;
