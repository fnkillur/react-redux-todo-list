import {combineReducers} from 'redux';
import todoList from './todoList';
import task from './task';

const reducer = combineReducers({
  todoList,
  task
});

export default reducer;