import React, {
  useState,
  useContext,
  useCallback,
  useEffect,
  useReducer
} from "react";

import Amplify, { API, graphqlOperation } from "aws-amplify";

import address from "constants/address";
import GET_TASKS from "./GET_TASKS";

import dispatchResolver from "resolvers/dispatchResolver";
import { AuthContext } from "model/auth";

import { initialState, reducer, ADD_TASK, SET_TASKS } from "model/tasks";
import Loading from "components/Loading";

Amplify.configure({
  API: {
    graphql_endpoint: address
  }
});

const TasksLogic = WrappedComponent => () => {
  const { isAdmin } = useContext(AuthContext);

  const [status, setStatus] = useState("acs");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalTasksCount, setTotalTasksCount] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [tasks, dispatch] = useReducer(reducer, initialState);
  const dispatchCallback = dispatchResolver(dispatch);
  const setTasks = newTasks => {
    dispatchCallback(SET_TASKS, newTasks);
  };
  useEffect(() => {
    loadTaskList();
  }, []);

  const changePageHandler = useCallback(async (e, page) => {
    const { totalTasksCount } = this.state;

    if (page >= 0 && page <= totalTasksCount) {
      this.setState({ currentPage: page });
      await this.loadTaskList(page);
    }
  });
  async function loadTaskList() {
    try {
      const {
        data: { tasks }
      } = await API.graphql(graphqlOperation(GET_TASKS));

      setTasks(tasks);
      setLoaded(true);
    } catch (error) {
      console.log(error);
    }
  }
  // async function loadTaskList(page, query = "") {
  //   try {
  //     const {
  //       tasksList: {
  //         status,
  //         message: { tasks, total_task_count }
  //       }
  //     } = await get(`/tasks`);

  //     if (status === "ok") {
  //       setTasks(tasks);
  //       setLoaded(true);
  //       setTotalTasksCount(total_task_count);
  //     }
  //   } catch (error) {
  //     console.log("load failed", error);
  //   }
  // }
  function sortTasks({ currentPage, value, name }) {
    const direction = value === "asc" ? "desc" : "asc";
    // this.setState({ [name]: direction });
    loadTaskList(
      currentPage,
      `&sort_field=${name}&sort_direction=${direction}`
    );
  }

  const sortByStatus = useCallback(() => {
    sortTasks({
      currentPage,
      value: status,
      name: "status"
    });
  }, [currentPage, status, sortTasks]);

  const sortByName = useCallback(() => {
    sortTasks({
      currentPage,
      value: name,
      name: "name"
    });
  }, [currentPage, name, sortTasks]);
  const sortByEmail = useCallback(() => {
    sortTasks({
      currentPage,
      value: email,
      name: "email"
    });
  }, [currentPage, email, sortTasks]);
  if (!loaded) {
    return <Loading />;
  }
  return (
    <WrappedComponent
      {...{
        isAdmin,
        tasks,
        changePageHandler,
        sortByStatus,
        sortByName,
        sortByEmail,
        statusDirection: status,
        nameDirection: name,
        emailDirection: email,
        rowsPerPage,
        currentPage,
        totalTasksCount,
        loaded
      }}
    />
  );
};

export default TasksLogic;
