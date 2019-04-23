import {combineReducers} from 'redux';
import todoList from './todoList';
import task from './task';
import todoId from './todoId';
import editTask from './editTask';
import editing from './editing';

const reducer = combineReducers({
  todoList,
  task,
  todoId,
  editTask,
  editing
});

export default reducer;