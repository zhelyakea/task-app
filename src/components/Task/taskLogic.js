import React, { Component } from "react";

import { API, graphqlOperation } from "configs/graphQl";
import EDIT_TASK from "graphql-querys/EDIT_TASK";

const TaskLogic = WrappedTaskComponent =>
  class WrappedTaskLogic extends Component {
    state = { status: this.props.status, text: this.props.text };
    editTaskHandler = async () => {
      const {
        state: { status, text },
        props: { id: idFromProps, editTask }
      } = this;
      const {
        data: {
          editTask: { id }
        }
      } = await API.graphql(
        graphqlOperation(EDIT_TASK, {
          id: Number(idFromProps),
          status,
          text
        })
      );
      editTask({ id, status, text });
    };
    checkTask = status => {
      this.setState({ status });
    };
    checkTaskHandler = () => {
      const { status } = this.state;
      this.setState({ status: !status });
    };
    editTaskTextHandler = e => {
      this.setState({ text: e.target.value });
    };
    render() {
      const {
        state: { status, text },
        checkTaskHandler,
        editTaskTextHandler,
        editTaskHandler,
        props
      } = this;
      return (
        <WrappedTaskComponent
          {...{
            ...props,
            status,
            text,
            checkTaskHandler,
            editTaskTextHandler,
            editTaskHandler
          }}
        />
      );
    }
  };

export default TaskLogic;
