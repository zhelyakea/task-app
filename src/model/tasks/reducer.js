import { ADD_TASK, SET_TASKS } from "./constants";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return [...state, action.payload];
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
