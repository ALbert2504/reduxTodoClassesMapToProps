export const types = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  DELETE_TODO: 'DELETE_TODO'
};

export function addTodo(value) {
  return {
    type: types.ADD_TODO,
    payload: value
  };
}

export function toggleTodo(id) {
  return {
    type: types.TOGGLE_TODO,
    payload: id
  }
}

export function deleteTodo(id) {
  return {
    type: types.DELETE_TODO,
    payload: id
  }
}