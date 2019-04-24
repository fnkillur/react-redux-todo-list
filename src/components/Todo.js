import React, {useEffect} from 'react';
import './Todo.scss';

const Todo = ({todo, removeTodo, editTask, changeEditTodo, editing, toggleEditing, modifyTodo}) => {

  let editInput = React.createRef();

  const handleDobuleClick = () => {
    toggleEditing(todo.id);
    changeEditTodo(todo.task);
  };

  const handleClick = e => {
    removeTodo(todo.id);
  };

  const handleChange = e => {
    changeEditTodo(e.target.value);
  };

  const handleKeyDown = e => {

    if (e.keyCode === 13) {
      modifyTodo({
        id: todo.id,
        task: editTask,
        complete: todo.complete
      });

      toggleEditing(null);
    } else if (e.keyCode === 27) {
      changeEditTodo(todo.task);

      toggleEditing(null);
    }
  }

  useEffect(() => {
    editInput.current.focus();
  }, [editing]);

  return (
    <li className={`todo ${editing && 'editing' || ''}`}>
      <section className='view' onDoubleClick={handleDobuleClick}>
        <button className='btn btn-check'>O</button>
        <label><span>{todo.task}</span></label>
        <button className='btn btn-remove' onClick={handleClick}>X</button>
      </section>
      <section className='edit'>
        <input
          ref={editInput}
          type='text'
          name='editTask'
          className='edit-input'
          value={editTask}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </section>
    </li>
  );
};

export default Todo;