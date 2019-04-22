import * as types from '../actions/actionTypes';

const todos = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [{
        id: '',
        text: action.text,
        complete: false,
      }, ...state];
    default:
      return state;
  }
};

export default todos;