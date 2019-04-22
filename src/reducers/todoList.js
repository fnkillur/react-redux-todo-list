import * as types from '../actions/actionTypes';

const todoList = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [{
        id: 1,
        task: action.task,
        complete: false,
      }, ...state];
    default:
      return state;
  }
};

export default todoList;