import React, {
  Component,
  useState,
  useContext,
  useCallback,
  useEffect,
  useReducer
} from "react";
import { API, graphqlOperation } from "configs/graphQl";
import ADD_TASK_QUERY from "graphql-querys/ADD_TASK";
// import { initialState, reducer, ADD_TASK } from "model/tasks";

// const AddTaskLogic = WrappedComponent => () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useEmail("");
//   const [task, setTask] = useState("");
// };
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

    createTaskHandler = async ({ name, email: inputedEmail, task }) => {
      try {
        const answer = await API.graphql(
          graphqlOperation(ADD_TASK_QUERY, {
            username: name,
            email: inputedEmail,
            text: task,
            status: 0
          })
        );
        const {
          data: {
            addTask: { id, username, email, test, status }
          }
        } = answer;
        console.log("Task added!", id, username, email, test, status);
        this.props.addTasks({ id, username, email, test, status });
        this.setState({});
      } catch (error) {
        throw new Error(error);
      }
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
