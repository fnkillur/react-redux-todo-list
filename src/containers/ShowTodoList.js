import React from 'react';
import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import {remove, edit, toggleEditing} from '../actions';

const ShowTodoList = ({todoList, onRemove, editTask, onChange, editing, onDoubleClick}) => {
  return (
    <TodoList
      todoList={todoList}
      onRemove={onRemove}
      editTask={editTask}
      onChange={onChange}
      editing={editing}
      onDoubleClick={onDoubleClick}
    />
  );
};

const mapStateToProps = state => ({
  todoList: state.todoList,
  editTask: state.editTask,
  editing: state.editing
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(remove(id)),
  onChange: task => dispatch(edit(task)),
  onDoubleClick: id => dispatch(toggleEditing(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowTodoList);