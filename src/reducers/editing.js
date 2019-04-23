import * as types from '../actions/actionTypes';

const editing = (state = null, action) => {
  switch (action.type) {
    case types.TOGGLE_EDITING:
      return action.id;
    default:
      return state;
  }
};

export default editing;