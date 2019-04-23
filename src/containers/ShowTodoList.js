import React from 'react';
import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import {remove} from '../actions';

const ShowTodoList = ({todoList, onRemove}) => {
  return (
    <TodoList
      todoList={todoList}
      onRemove={onRemove}
    />
  );
};

const mapStateToProps = state => ({
  todoList: state.todoList
});
const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(remove(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowTodoList);