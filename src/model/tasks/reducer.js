import { ADD_TASK, EDIT_TASK, SET_TASKS } from "./constants";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return [...state, action.payload];
    }
    case EDIT_TASK: {
      const {
        payload: { id, status, text }
      } = action;
      const newTasks = state.map(({ id: editedId, ...other }) => {
        if (id === editedId) {
          return { ...other, id, status, text };
        }
        return { id: editedId, ...other };
      });
      return newTasks;
    }
    case SET_TASKS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
