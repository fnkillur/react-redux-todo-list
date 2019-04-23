import React from 'react';
import Todo from "./Todo";
import './TodoList.scss';

const TodoList = ({todoList, onRemove}) => {
  const showTodoList = todoList.map(todo => (
    <Todo
      key={todo.id}
      todo={todo}
      onRemove={onRemove}
    />
  ));

  return (
    <ul className='todo-list'>
      {showTodoList}
    </ul>
  );
};

export default TodoList;