import {combineReducers} from 'redux';
import todos from './todos';
import task from './task';

const reducer = combineReducers({
  todos,
  task
});

export default reducer;