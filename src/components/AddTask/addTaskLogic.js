import React, { Component } from "react";
import getDeveloperNameQuery from "helpers/getDeveloperNameQuery";
import formDataFields from "helpers/formDataFields";

import { post } from "services/fetch";

const AddTaskLogic = WrappedComponent =>
  class WrappedAddTaskLogic extends Component {
    state = {
      name: "",
      email: "",
      task: ""
    };

    validate = props => {
      const { name, email, task } = props;

      const errors = {};

      if (!name) {
        errors.name = "Name is required";
      }

      if (!email) {
        errors.email = "Email is equired";
      }

      if (!task) {
        errors.task = "Task text is equired";
      }

      return errors;
    };

    addNameHandler = formHandler => e => {
      formHandler(e);
      this.setState({ name: e.target.value });
    };

    addEmailHandler = formHandler => e => {
      formHandler(e);
      this.setState({ email: e.target.value });
    };

    addTaskHandler = formHandler => e => {
      formHandler(e);
      this.setState({ task: e.target.value });
    };

    createTaskHandler = ({ name, email, task }) => {
      const addTaskFormData = formDataFields({
        data: { username: name, email, text: task },
        keys: ["username", "email", "text"]
      });

      post(`/create${getDeveloperNameQuery("Egor")}`, addTaskFormData)
        .then(() => {
          console.log("Task added!");
          this.setState({});
        })
        .catch(error => console.log(error));
    };

    render() {
      const {
        validate,
        addNameHandler,
        addEmailHandler,
        addTaskHandler,
        createTaskHandler
      } = this;

      return (
        <WrappedComponent
          {...{
            validate,
            addNameHandler,
            addEmailHandler,
            addTaskHandler,
            createTaskHandler
          }}
        />
      );
    }
  };

export default AddTaskLogic;
