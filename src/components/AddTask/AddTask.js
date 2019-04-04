import React from "react";
import PropTypes from "prop-types";

import { Form, Field } from "react-final-form";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import FormField from "components/FormField";

import styles from "./styles";

const AddTask = ({
  validate,
  addNameHandler,
  addEmailHandler,
  addTaskHandler,
  createTaskHandler
}) => {
  return (
    <div style={styles.paperWrapper}>
      <Paper>
        <div style={styles.titleWrapper}>
          <Typography>Create Task</Typography>
        </div>
        <Form
          onSubmit={createTaskHandler}
          validate={validate}
          render={({
            handleSubmit,
            reset,
            submitting,
            pristine,
            values,
            invalid
          }) => (
            <form onSubmit={handleSubmit}>
              <div style={styles.columnWrapper}>
                <Field
                  name="name"
                  render={props => {
                    const {
                      input: { onChange: formOnChange }
                    } = props;
                    const onChange = addNameHandler(formOnChange);
                    return (
                      <FormField
                        id="name"
                        label="Name"
                        placeholder="Enter name..."
                        onChange={onChange}
                      />
                    );
                  }}
                />
                <Field
                  name="email"
                  render={props => {
                    const {
                      input: { onChange: formOnChange }
                    } = props;
                    const onChange = addEmailHandler(formOnChange);
                    return (
                      <FormField
                        id="email"
                        label="Email"
                        placeholder="Enter email..."
                        onChange={onChange}
                      />
                    );
                  }}
                />
                <Field
                  name="task"
                  render={props => {
                    const {
                      input: { onChange: formOnChange }
                    } = props;
                    const onChange = addTaskHandler(formOnChange);
                    return (
                      <FormField
                        id="task"
                        label="Task"
                        placeholder="Enter task..."
                        onChange={onChange}
                      />
                    );
                  }}
                />
                <div style={styles.submitWrapper}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={false}
                  >
                    Add Task
                  </Button>
                </div>
              </div>
            </form>
          )}
        />
      </Paper>
    </div>
  );
};

AddTask.propTypes = {
  validate: PropTypes.func,
  addNameHandler: PropTypes.func,
  addEmailHandler: PropTypes.func,
  addTaskHandler: PropTypes.func,
  createTaskHandler: PropTypes.func
};

export default AddTask;
