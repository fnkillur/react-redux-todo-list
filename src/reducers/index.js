import {combineReducers} from 'redux';
import todoList from './todoList';
import task from './task';
import todoId from './todoId';

const reducer = combineReducers({
  todoList,
  task,
  todoId
});

export default reducer;