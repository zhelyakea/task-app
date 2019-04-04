import React, { Component, createContext } from "react";
import { get } from "services/fetch";
import getDeveloperNameQuery from "helpers/getDeveloperNameQuery";
import pageResolver from "helpers/pageResolver";
import Loading from "components/Loading";
import tasksList from "./tasksList";
export const TasksContext = createContext();

const AppLogic = WrappedComponent =>
  class WrappedAppLogic extends Component {
    state = {
      tasks: [],
      status: "acs",
      name: "asc",
      email: "asc",
      rowsPerPage: 3,
      currentPage: 0,
      totalTasksCount: null,
      loaded: false
    };
    componentDidMount() {
      // console.log(this.props.isAdmin);
      this.loadTaskList();
    }
    loadTaskList = async (page, query = "") => {
      // const {
      //   props: {
      //     actions: { loadTasks }
      //   }
      // } = this;
      try {
        // const {
        //   status,
        //   message: { tasks, total_task_count }
        // } = await get(
        //   `${getDeveloperNameQuery("Egor")}${pageResolver(page)}${query}`
        // );
        const {
          status,
          message: { tasks, total_task_count }
        } = tasksList;
        // const status = "ok";
        // const tasks = [];
        // const total_task_count = 0;

        if (status === "ok") {
          this.setState({
            tasks,
            loaded: true,
            totalTasksCount: total_task_count
          });
          // loadTasks(tasks);
          // this.setState({ tasks });
        }
      } catch (error) {
        console.log("load failed", error);
      }
    };
    changePageHandler = async (e, page) => {
      const { totalTasksCount } = this.state;

      if (page >= 0 && page <= totalTasksCount) {
        this.setState({ currentPage: page });
        await this.loadTaskList(page);
      }
    };
    sortTasks = ({ currentPage, value, name }) => {
      const direction = value === "asc" ? "desc" : "asc";
      this.setState({ [name]: direction });
      this.loadTaskList(
        currentPage,
        `&sort_field=${name}&sort_direction=${direction}`
      );
    };

    sortByStatus = () => {
      const {
        state: { currentPage, status },
        sortTasks
      } = this;

      sortTasks({
        currentPage,
        value: status,
        name: "status"
      });
    };

    sortByName = () => {
      const {
        state: { currentPage, name },
        sortTasks
      } = this;

      sortTasks({
        currentPage,
        value: name,
        name: "name"
      });
    };
    sortByEmail = () => {
      const {
        state: { currentPage, email },
        sortTasks
      } = this;

      sortTasks({
        currentPage,
        value: email,
        name: "email"
      });
    };

    render() {
      const {
        changePageHandler,
        sortByStatus,
        sortByName,
        sortByEmail,
        state: {
          status: statusDirection,
          name: nameDirection,
          email: emailDirection,
          rowsPerPage,
          currentPage,
          totalTasksCount,
          loaded,
          tasks
        },
        props: { isAdmin }
      } = this;

      if (loaded) {
        return (
          <TasksContext.Provider value={{ tasks }}>
            <WrappedComponent
              {...{
                // tasks,
                isAdmin,
                rowsPerPage,
                currentPage,
                statusDirection,
                nameDirection,
                emailDirection,
                totalTasksCount,
                changePageHandler,
                sortByStatus,
                sortByName,
                sortByEmail
              }}
            />
          </TasksContext.Provider>
        );
      }

      return <Loading />;
    }
  };

export default AppLogic;
