export const loadState = name => {
  const serializedState = localStorage.getItem(name);

  if (serializedState === null) {
    return null;
  }

  return JSON.parse(serializedState);
};

export const saveState = (name, state) => {
  const serializedState = JSON.stringify(state);

  localStorage.setItem(name, serializedState);
};

export const removeState = name => {
  localStorage.removeItem(name);
};
