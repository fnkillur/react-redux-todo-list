import React from 'react';
import Todo from "./Todo";
import './TodoList.scss';

const TodoList = ({todoList, removeTodo, editTask, changeEditTodo, editing, toggleEditing, modifyTodo}) => {
  const showTodoList = todoList.map(todo => (
    <Todo
      key={todo.id}
      todo={todo}
      removeTodo={removeTodo}
      editTask={editTask}
      changeEditTodo={changeEditTodo}
      editing={todo.id === editing}
      toggleEditing={toggleEditing}
      modifyTodo={modifyTodo}
    />
  ));

  return (
    <ul className='todo-list'>
      {showTodoList}
    </ul>
  );
};

export default TodoList;