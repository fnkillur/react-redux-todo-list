import * as types from './actionTypes';

export const input = task => ({
  type: types.INPUT_TASK,
  task
});

export const add = todo => ({
  type: types.ADD_TODO,
  todo
});

export const remove = id => ({
  type: types.REMOVE_TODO,
  id
});

export const modify = todo => ({
  type: types.MODIFY_TODO,
  todo
});

export const increaseId = id => ({
  type: types.INCREASE_ID,
  id
});

export const edit = task => ({
  type: types.EDIT_TASK,
  task
});

export const toggleEditing = id => ({
  type: types.TOGGLE_EDITING,
  id
});