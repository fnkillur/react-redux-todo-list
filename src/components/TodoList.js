import React from 'react';
import Todo from "./Todo";

const TodoList = ({todoList}) => {
  const showTodoList = todoList.map(todo => (
    <Todo
      key={todo.id}
      todo={todo}
    />
  ));

  return (
    <ul>
      {showTodoList}
    </ul>
  );
};

export default TodoList;