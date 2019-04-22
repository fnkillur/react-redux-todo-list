import * as types from '../actions/actionTypes';

const task = (state = '', action) => {
  switch (action.type) {
    case types.INPUT_TODO:
      return action.task;
    default:
      return state;
  }
};

export default task;