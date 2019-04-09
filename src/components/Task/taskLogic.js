import React, { Component } from "react";

const TaskLogic = WrappedTaskComponent =>
  class WrappedTaskLogic extends Component {
    state = { checked: this.props.status, text: this.props.text };
    editTaskHandler = async () => {
      const {
        state: { checked, text },
        props: { id, editTasks }
      } = this;
      console.log("edit task", id, checked, text);
      // editTasks( {id, checked, text});
    };
    checkTask = checked => {
      this.setState({ checked });
    };
    checkTaskHandler = () => {
      const { checked } = this.state;
      this.setState({ checked: !checked });
    };
    editTaskTextHandler = e => {
      this.setState({ text: e.target.value });
    };
    render() {
      const {
        state: { checked, text },
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
