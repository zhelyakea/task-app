export default function(dispatch) {
  return function(type, tasks) {
    return dispatch({ type, payload: tasks });
  };
}
