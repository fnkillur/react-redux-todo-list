import React from 'react';
import Todo from "./Todo";
import './TodoList.scss';

const TodoList = ({todoList, onRemove, editTask, onChange, editing, onDoubleClick}) => {
  const showTodoList = todoList.map(todo => (
    <Todo
      key={todo.id}
      todo={todo}
      onRemove={onRemove}
      editTask={editTask}
      onChange={onChange}
      editing={todo.id === editing}
      onDoubleClick={onDoubleClick}
    />
  ));

  return (
    <ul className='todo-list'>
      {showTodoList}
    </ul>
  );
};

export default TodoList;