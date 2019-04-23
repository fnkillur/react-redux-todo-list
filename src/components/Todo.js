import React from 'react';
import './Todo.scss';

const Todo = ({todo, onRemove, editTask, onChange, editing, onDoubleClick}) => {

  const handleDobuleClick = e => {
    onDoubleClick(todo.id);
    onChange(todo.task);
  };

  const handleClick = e => {
    onRemove(todo.id);
  };

  const handleChange = e => {
    onChange(e.target.value);
  };

  return (
    <li className={`todo ${editing && 'editing' || ''}`}>
      <section className='view' onDoubleClick={handleDobuleClick}>
        <label>{todo.task}</label>
        <button className='btn-remove' onClick={handleClick}>X</button>
      </section>
      <section className='edit'>
        <input
          type='text'
          name='editTask'
          className='edit-input'
          value={editTask}
          onChange={handleChange}
          // onKeyDown={handleKeyDown}
        />
      </section>
    </li>
  );
};

export default Todo;