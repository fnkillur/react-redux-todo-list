import * as types from '../actions/actionTypes';

const todoId = (state = 0, action) => {
  switch (action.type) {
    case types.INCREASE_ID:
      return state + 1;
    default:
      return state;
  }
};

export default todoId;