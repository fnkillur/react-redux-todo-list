import React from 'react';
import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import {remove, edit, toggleEditing, modify} from '../actions';

const ShowTodoList = ({todoList, removeTodo, editTask, changeEditTodo, editing, toggleEditing, modifyTodo}) => {

  return (
    <TodoList
      todoList={todoList}
      removeTodo={removeTodo}
      editTask={editTask}
      changeEditTodo={changeEditTodo}
      editing={editing}
      toggleEditing={toggleEditing}
      modifyTodo={modifyTodo}
    />
  );
};

const mapStateToProps = state => ({
  todoList: state.todoList,
  editTask: state.editTask,
  editing: state.editing
});

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(remove(id)),
  changeEditTodo: task => dispatch(edit(task)),
  toggleEditing: id => dispatch(toggleEditing(id)),
  modifyTodo: todo => dispatch(modify(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowTodoList);