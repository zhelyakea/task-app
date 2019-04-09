import { ADD_TASK, EDIT_TASK, SET_TASKS } from "./constants";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return [...state, action.payload];
    }
    case EDIT_TASK: {
      console.log(action);
      return [...state];
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
