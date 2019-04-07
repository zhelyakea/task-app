import { LOG_IN, LOG_OUT } from "./constants";

const reducer = (state, action) => {
  switch (action.type) {
    case LOG_IN: {
      return { isAdmin: true };
    }
    case LOG_OUT: {
      return { isAdmin: false };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
