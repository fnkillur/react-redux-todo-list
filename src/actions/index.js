import * as types from './actionTypes';

export const input = task => ({
  type: types.INPUT_TODO,
  task
});

export const add = task => ({
  type: types.ADD_TODO,
  task,
});