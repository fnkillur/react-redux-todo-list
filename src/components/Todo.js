import React from 'react';
import './Todo.scss';

const Todo = ({todo, onRemove}) => {

  const handleClick = e => {
    onRemove(todo.id);
  };

  return (
    <li className='todo'>
      <section className='view'>
        <label>{todo.task}</label>
        <button className='btn-remove' onClick={handleClick}>X</button>
      </section>
      <section className='edit'>

      </section>
    </li>
  );
};

export default Todo;