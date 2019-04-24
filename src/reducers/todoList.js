import * as types from '../actions/actionTypes';

const todoList = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, action.todo];
    case types.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case types.MODIFY_TODO:
      return state.map(todo => (todo.id === action.todo.id && action.todo) || todo);
    default:
      return state;
  }
};

export default todoList;