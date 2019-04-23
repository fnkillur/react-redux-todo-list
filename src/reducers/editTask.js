import * as types from '../actions/actionTypes';

const editTask = (state = '', action) => {
  switch (action.type) {
    case types.EDIT_TASK:
      return action.task;
    default:
      return state;
  }
};

export default editTask;