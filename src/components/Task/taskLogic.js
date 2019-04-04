import React, { Component } from "react";

import getDeveloperNameQuery from "helpers/getDeveloperNameQuery";
import { post } from "services/fetch";
import getQueryToEdit from "./getQueryToEdit";

const TaskLogic = WrappedTaskComponent =>
  class WrappedTaskLogic extends Component {
    state = { checked: this.props.status, task: this.props.text };
    editTaskHandler = async () => {
      const {
        state: { checked, task },
        props: { id }
      } = this;
      const keys = ["text", "status"];

      const editTaskFormData = getQueryToEdit({
        keys,
        data: { text: task, status: Number(checked) }
      });

      // const { status: answerStatus } = await post(
      //   `/edit/${id}${getDeveloperNameQuery("Egor")}`,
      //   editTaskFormData
      // );
      // if (answerStatus === "ok") {
      //   console.log("Task edited");
      // }
    };
    checkTask = checked => {
      this.setState({ checked });
    };
    checkTaskHandler = () => {
      const { checked } = this.state;
      this.setState({ checked: !checked });
    };
    editTaskTextHandler = e => {
      this.setState({ task: e.target.value });
    };
    render() {
      const {
        state: { checked },
        checkTaskHandler,
        editTaskTextHandler,
        editTaskHandler,
        props
      } = this;
      return (
        <WrappedTaskComponent
          {...{
            ...props,
            checked,
            checkTaskHandler,
            editTaskTextHandler,
            editTaskHandler
          }}
        />
      );
    }
  };

export default TaskLogic;
