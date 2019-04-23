import * as types from './actionTypes';

export const input = task => ({
  type: types.INPUT_TODO,
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

export const increaseId = id => ({
  type: types.INCREASE_ID,
  id
});